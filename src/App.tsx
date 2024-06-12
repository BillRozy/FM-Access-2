import { useState } from "react";
import "./App.css";
import headerImg from "./assets/images/icon-star.svg";
import Accordeon from "./Accordeon";
function App() {
  const [spoilers, setSpoilers] = useState([
    {
      topic: "What is Frontend Mentor, and how will it help me?",
      content:
        "Frontend Mentor offers realistic coding challenges to help developers improve their frontend coding skills with projects in HTML, CSS, and JavaScript. It’s suitable for all levels and ideal for portfolio building.",
      open: true,
    },
    {
      topic: "Is Frontend Mentor free?",
      content:
        "Yes, Frontend Mentor offers both free and premium coding challenges, with the free option providing access to a range of projects suitable for all skill levels.",
      open: false,
    },
    {
      topic: "Can I use Frontend Mentor projects in my portfolio?",
      content:
        "Yes, you can use projects completed on Frontend Mentor in your portfolio. It's an excellent way to showcase your skills to potential employers!",
      open: false,
    },
    {
      topic: "How can I get help if I'm stuck on a challenge?",
      content:
        "The best place to get help is inside Frontend Mentor's Discord community. There's a help channel where you can ask questions and seek support from other community members.",
      open: false,
    },
  ]);
  const handleSpoilerStateChange = (index: number, state: boolean) => {
    const newSpoilers = [...spoilers]
    newSpoilers[index].open = state
    setSpoilers(newSpoilers)
  }
  return (
    <>
      <header className="flex flex-row gap-6 items-center">
        <img className="size-6 desktop:size-10" src={headerImg} alt="" />
        <h1 className="font-bold text-[2rem] leading-[38px] desktop:text-[3.5rem] desktop:leading-[65.7px] text-purple-dark">
          FAQs
        </h1>
      </header>
      <main className="mt-6 desktop:mt-8">
        <ul>
          {spoilers.map((item, index) => (
            <li key={index} className="py-[20px] desktop:py-[24px] first:pt-0 last:pb-0 border-b-[1px] border-pink-light last:border-none">
              <Accordeon {...item} onOpenChange={opened => handleSpoilerStateChange(index, opened)}></Accordeon>
            </li>
          ))}
        </ul>
      </main>
    </>
  );
}

export default App;
