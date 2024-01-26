const CardSkill = ({ text, value, icon: Icon }) => {
  return (
    <div className="w-full opacity-80 transition hover:opacity-100 h-full p-6 bg-card-color rounded-lg flex flex-col items-center justify-center text-green-color">
      <figure className="w-3/5 h-3/5">
        <Icon className="w-full h-full object-cover" />
      </figure>
      <p className="text-xl lg:text-2xl font-semibold">{text}</p>
      <p className="text-base lg:text-xl font-semibold text-gray-color">
        {value}
      </p>
    </div>
  );
};
export default CardSkill;
