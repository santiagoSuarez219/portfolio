const ToolProjectCard = ({ text, icon: Icon }) => {
  return (
    <li className="flex flex-col items-center opacity-80 hover:opacity-100 text-green-color">
      <Icon className="text-4xl" />
      <span className="text-sm">{text}</span>
    </li>
  );
};
export default ToolProjectCard;
