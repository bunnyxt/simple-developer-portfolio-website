import ContainerBlock from "../components/ContainerBlock";
import FavoriteProjects from "../components/FavoriteProjects";
import Hero from "../components/Hero";
import BriefAboutMe from "@components/BriefAboutMe";

export default function Home() {
  return (
    <ContainerBlock
      title="Jinyuan Liu a.k.a. bunnyxt - Frontend and Full Stack Engineer"
      description="Jinyuan Liu's portfolio"
    >
      <Hero />
      <BriefAboutMe />
      <FavoriteProjects />
    </ContainerBlock>
  );
}
