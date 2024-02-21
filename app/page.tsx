import Image from "next/image";
import TopPageComponent from "./components/TopPageComponent/TopPageComponent";
import Card from "./components/Cards/Card";
import { mainPageCardsData } from "./data/data";
import { CardsT } from "./data/data.d";
import ProcessSection from "./components/PagesSections/ProcessSection";
import Team from "./components/PagesSections/Team";
import Specialized from "./components/PagesSections/Specialized";
import Contact from "./components/Contact/Contact";

export default function Home() {
  const renderCards = mainPageCardsData.map((card: CardsT) => {
    return <Card key={card.id} type="row" data={card} />;
  });
  return (
    <main>
      <TopPageComponent
        title="Building dev team, Quickly and Affordably"
        content="We specialize in helping you build a team of expert developers, testers, and leaders. We are setup to deliver long term solutions, or scale to different needs quickly."
      />

      <section className="pagesPadding flex justify-center items-center flex-wrap gap-4 lg:h-[400px] md:h-auto sm:h-auto mb-5">
        {renderCards}
      </section>

      <ProcessSection />

      <Team />

      <Specialized/>

      <Contact/>
    </main>
  );
}
