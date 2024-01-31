import CardSkill from "./CardSkill";

const LayaoutSkills = (props) => {
  const stylesSubtitles =
    "place-self-center text-gray-color text-2xl lg:text-4xl opacity-80 transition hover:opacity-100 mb-6 text-left";
  return (
    <div className="w-full grid grid-cols-2 grid-rows-2 md:gap-6 gap-4">
      <CardSkill
        text={props.texts[0]}
        value={props.value[0]}
        icon={props.icons[0]}
      />
      <CardSkill
        text={props.texts[1]}
        value={props.value[1]}
        icon={props.icons[1]}
      />
      <CardSkill
        text={props.texts[2]}
        value={props.value[2]}
        icon={props.icons[2]}
      />
      <h3 className={stylesSubtitles}>{props.title}</h3>
    </div>
  );
};
export default LayaoutSkills;
