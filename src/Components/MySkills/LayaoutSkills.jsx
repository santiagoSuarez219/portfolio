import CardSkill from "./CardSkill";

const LayaoutSkills = (props) => {
  return (
    <div className="w-full md:w-1/2 grid grid-cols-[repeat(2,48%)] grid-rows-2 gap-4 ">
      <div className="row-span-full">
        <CardSkill text={props.texts[0]} value={"70%"} icon={props.icons[0]} />
      </div>
      <CardSkill text={props.texts[1]} value={"50%"} icon={props.icons[1]} />
      <CardSkill text={props.texts[2]} value={"70%"} icon={props.icons[2]} />
    </div>
  );
};
export default LayaoutSkills;
