import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import AgentHero from '@/components/agent-ia-outdoor/AgentHero';
import AgentProbleme from '@/components/agent-ia-outdoor/AgentProbleme';
import AgentSolution from '@/components/agent-ia-outdoor/AgentSolution';
import AgentPourQui from '@/components/agent-ia-outdoor/AgentPourQui';
import AgentCommentCaMarche from '@/components/agent-ia-outdoor/AgentCommentCaMarche';
import AgentTechnologie from '@/components/agent-ia-outdoor/AgentTechnologie';
import AgentBenefices from '@/components/agent-ia-outdoor/AgentBenefices';
import AgentBusinessModel from '@/components/agent-ia-outdoor/AgentBusinessModel';
import AgentPourquoiMaintenant from '@/components/agent-ia-outdoor/AgentPourquoiMaintenant';
import AgentCTAFinal from '@/components/agent-ia-outdoor/AgentCTAFinal';
import AgentVideoDemo from '@/components/agent-ia-outdoor/AgentVideoDemo';
import Contact from '@/components/Contact';

export default function AgentIAPage() {
  return (
    <main className="min-h-screen relative z-[100]">
      <Navbar />
      <AgentHero />
      <AgentProbleme />
      <AgentSolution />
      <AgentVideoDemo />
      <AgentPourQui />
      <AgentCommentCaMarche />
      <AgentTechnologie />
      <AgentBenefices />
      <AgentBusinessModel />
      <AgentPourquoiMaintenant />
      <AgentCTAFinal />
      <Contact />
      <Footer />
    </main>
  );
}

