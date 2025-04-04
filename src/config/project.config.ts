import memoryGame from "../../public/images/memory-game.png";
import portfolio from "../../public/images/portfolio.png";
import { Project } from "@/types";

export const PROJECTS: Project[] = [
  {
    title: "Memory Game",
    description:
      "Implemented the game logic using pure JavaScript, showcasing proficiency in fundamental programming constructs",
    image: memoryGame,
    tags: ["JavaSript", "CSS", "HTML"],
    github: "https://github.com/Trilokharmukh/memory-game ",
    live: "https://memory-game-mauve-psi.vercel.app/",
  },
  {
    title: "Portfolio",
    description:
      "Implemented the game logic using pure JavaScript, showcasing proficiency in fundamental programming constructs",
    image: portfolio,
    tags: ["Next.js", "React", "Tailwind CSS"],
    github: "https://github.com/Trilokharmukh/portfolio ",
    live: "https://trilokharmukh.vercel.app/",
  },
];
