import ResumeBtn from "./ResumeBtn";

const Skills = () => {
  return (
    <div className="skillsContainer">
      <h2>skills</h2>
      <div className="skillsFlex">
        <button>HTML</button>
        <button>CSS</button>
        <button>Typescript</button>
        <button>React</button>
        <button>SASS</button>
        <button>Tailwind CSS</button>
        <button>Git</button>
        <button>UX/UI</button>
      </div>
      <ResumeBtn />
    </div>
  );
};

export default Skills;
