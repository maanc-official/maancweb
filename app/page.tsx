

import Faq from "./Component/HomeComp/Faq";
import HeroSec from "./Component/HomeComp/HeroSec";
import HowMaancWorks from "./Component/HomeComp/HowMaancWorks";
import InfoCards from "./Component/HomeComp/InfoCard";
import ServiceSec from "./Component/HomeComp/ServiceSec";




export default function Home() {
  return (
    <>
      <HeroSec/>
      <InfoCards/>
      <ServiceSec/>
      <HowMaancWorks/>
      <Faq/>
      
      
    
     
    </>
  );
}
export const metadata = {
  title: 'Maanc Technology',
};