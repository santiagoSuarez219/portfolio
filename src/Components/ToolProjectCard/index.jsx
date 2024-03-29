const ToolProjectCard = ({ text, icon: Icon }) => {
  return (
    <li className="flex flex-col items-center opacity-80 hover:opacity-100 text-green-color">
      <Icon className="text-3xl lg:text-5xl" />
      <span className="text-sm lg:text-base">{text}</span>
    </li>
  );
};
export default ToolProjectCard;
