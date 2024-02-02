const SkillCard = ({ title, level, icon: Icon }) => {
  return (
    <article className="w-full flex flex-col gap-2 justify-center items-center">
      <Icon className="w-2/5 h-2/5 text-green-color" />
      <h3 className=" text-2xl">{title}</h3>
      <p className="text-5xl font-bold">{level}</p>
    </article>
  );
};
export default SkillCard;
