import Finds from "../components/Finds/Finds";
import Footer from "../components/footer/footer";
import Header from "../components/header/header";
import Hero from "../components/Hero/Hero";
import JustArrived from "../components/JustArrived/JustArrived";
import MostSearched from "../components/MostSearched/MostSearched";
import SearchField from "../components/SearchField/SearchField";
import Section from "../components/Section/Section";
import Story from "../components/Story/Story";

export default function Home() {
  return (
    <div className="flex flex-col">
      <Hero />
      <Section />
      <JustArrived />
      <Finds />
      <MostSearched />
      <Story />
      <SearchField />
      <Footer />
    </div>
  );
}
