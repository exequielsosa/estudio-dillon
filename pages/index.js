import SeoHome from "@/components/seo/seoHome";
import FAQSchema from "@/components/seo/FAQSchema";
import HeroHome from "@/components/home/HeroHome";
import PerfilesHome from "@/components/home/PerfilesHome";
import { QuienesSomos, SeccionesHome } from "@/components/home/SeccionesHome";
import PorQueElegirnos from "@/components/home/PorQueElegirnos";
import PreguntasHome from "@/components/home/PreguntasHome";

const Home = () => {
  return (
    <>
      <SeoHome />
      <FAQSchema />
      <main>
        <HeroHome />
        <QuienesSomos />
        <PerfilesHome />
        <SeccionesHome />
        <PorQueElegirnos />
        <PreguntasHome />
      </main>
    </>
  );
};

export default Home;
