const CardSkill = ({ text, value, icon: Icon }) => {
  return (
    <div className="md:opacity-80 transition hover:opacity-100 bg-card-color rounded-full flex flex-col items-center justify-center text-green-color aspect-square">
      <figure className="hidden md:block w-3/5 h-3/5">
        <Icon className="w-full h-full object-cover" />
      </figure>
      <p className="text-xs lg:text-xl font-semibold">{text}</p>
      <p className="text-xs lg:text-xl font-semibold text-gray-color">
        {value}
      </p>
    </div>
  );
};
export default CardSkill;
