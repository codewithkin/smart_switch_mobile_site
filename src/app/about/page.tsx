import CTA from "@/components/about/CTA";
import DevicesAvailable from "@/components/about/DevicesAvailable";
import MeetTheTeam from "@/components/about/MeetTheTeam";
import OurVision from "@/components/about/OurVision";
import WhatIsSmartSwitchMobile from "@/components/about/WhatIsSmartSwitchMobile";

function AboutPage() {
  return (
    <div className="container mx-auto space-y-12">
      <WhatIsSmartSwitchMobile />
      <OurVision />
      <MeetTheTeam />
      <DevicesAvailable />
      <CTA />
    </div>
  );
}

export default AboutPage;
