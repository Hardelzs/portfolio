// eslint-disable-next-line no-unused-vars
import React from "react";
import WorkItem from "./WorkItem";

const data = [
  {
    year: 2023,
    title: "Calculator ",
    details:
      "This is my first javascript project. It comprises of Addition, Subtraction, Multiplication, ",
  },
  {
    year: 2023,
    title: "Nation Solver",
    details:
      "Built this project 2023 actually that when i started html and css, this project is all about what nations lack, solving problems that are locally and nationally and giving the people another chance to leave and to be able to correct what is coming their way ",
  },
  {
    year: 2023,
    title: "Harvic Stack",
    details:
      "A Great website to browse around",
  },
  {
    year: 2023,
    title: "content Creator",
    details:
      "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Obcaecati quidem maxime quae fuga ea labore corrupti iusto at! Voluptatem, deserunt sit commodi ullam reprehenderit ipsa libero fugiat distinctio. Nesciunt, animi.",
  },
  {
    year: 2023,
    title: "content Creator",
    details:
      "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Obcaecati quidem maxime quae fuga ea labore corrupti iusto at! Voluptatem, deserunt sit commodi ullam reprehenderit ipsa libero fugiat distinctio. Nesciunt, animi.",
  },
  {
    year: 2023,
    title: "content Creator",
    details:
      "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Obcaecati quidem maxime quae fuga ea labore corrupti iusto at! Voluptatem, deserunt sit commodi ullam reprehenderit ipsa libero fugiat distinctio. Nesciunt, animi.",
  },
];
const Work = () => {
  return (
    <div id="work" className="max-w-[1040px] m-auto md:pl-20 p-4 py-16">
      <h1 className="text-4xl font-bold text-center text-[#001b5e]">Work</h1>
      {data.map((item, idx) => (
        <WorkItem
          key={idx}
          year={item.year}
          title={item.title}
          duration={item.duration}
          details={item.details}
        />
      ))}
    </div>
  );
};

export default Work;
