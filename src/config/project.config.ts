import memoryGame from "../../public/images/memory-game.png";
import portfolio from "../../public/images/portfolio.png";
import pokemonExplorer from "../../public/images/pokemon-explorer.png";
import { Project } from "@/types";

export const PROJECTS: Project[] = [
  {
    title: "Memory Game",
    description:
      "Implemented the game logic using pure JavaScript, showcasing proficiency in fundamental programming constructs",
    image: memoryGame,
    tags: ["Vanilla JavaScript", "CSS", "HTML"],
    github: "https://github.com/Trilokharmukh/memory-game",
    live: "https://memory-game-mauve-psi.vercel.app/",
  },
  {
    title: "Pokemon Explorer",
    description:
      "A Pokémon Explorer web app built with Next.js App Router, leveraging both SSR and SSG for fast, dynamic browsing of Pokémon data with a seamless user experience.",
    image: pokemonExplorer,
    tags: ["Next.js", "React", "Tailwind CSS"],
    github: "https://github.com/Trilokharmukh/pokemon-explorer",
    live: "https://pokemon-explorer-ochre.vercel.app/",
  },
  {
    title: "Portfolio",
    description:
      "A personal portfolio project showcasing my skills, designed and built to highlight my work, experience, and technical abilities through a modern and responsive UI",
    image: portfolio,
    tags: ["Next.js", "React", "Tailwind CSS"],
    github: "https://github.com/Trilokharmukh/portfolio",
    live: "https://trilokharmukh.vercel.app/",
  },
];
