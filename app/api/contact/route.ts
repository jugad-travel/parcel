import { Resend } from 'resend';
import { NextRequest, NextResponse } from 'next/server';

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    const { name, email, company, message, phoneCallback } = body;

    // Validation des champs requis
    if (!name || !email || !message) {
      return NextResponse.json(
        { error: 'Les champs nom, email et message sont obligatoires' },
        { status: 400 }
      );
    }

    // Envoi de l'email
    const { data, error } = await resend.emails.send({
      from: 'Contact Parcel <onboarding@resend.dev>', // Vous devrez configurer votre domaine dans Resend
      to: ['mayaudvianney@gmail.com'],
      subject: `Nouveau message de contact - ${name}`,
      html: `
        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
          <h2 style="color: #001a58;">Nouveau message de contact</h2>
          <div style="background-color: #f5f5f5; padding: 20px; border-radius: 8px; margin: 20px 0;">
            <p><strong>Nom:</strong> ${name}</p>
            <p><strong>Email:</strong> ${email}</p>
            ${company ? `<p><strong>Entreprise:</strong> ${company}</p>` : ''}
            <p><strong>Souhaite être rappelé(e):</strong> ${phoneCallback ? 'Oui' : 'Non'}</p>
          </div>
          <div style="background-color: #ffffff; padding: 20px; border-radius: 8px; border-left: 4px solid #001a58;">
            <h3 style="color: #001a58; margin-top: 0;">Message:</h3>
            <p style="white-space: pre-wrap;">${message}</p>
          </div>
          <div style="margin-top: 20px; padding-top: 20px; border-top: 1px solid #ddd; color: #666; font-size: 12px;">
            <p>Ce message a été envoyé depuis le formulaire de contact du site Parcel.</p>
          </div>
        </div>
      `,
      replyTo: email,
    });

    if (error) {
      console.error('Erreur Resend:', error);
      return NextResponse.json(
        { error: 'Erreur lors de l\'envoi de l\'email' },
        { status: 500 }
      );
    }

    return NextResponse.json(
      { message: 'Email envoyé avec succès', id: data?.id },
      { status: 200 }
    );
  } catch (error) {
    console.error('Erreur serveur:', error);
    return NextResponse.json(
      { error: 'Erreur serveur lors du traitement de la requête' },
      { status: 500 }
    );
  }
}

