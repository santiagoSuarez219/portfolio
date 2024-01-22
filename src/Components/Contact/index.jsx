const Contact = ({ title, value, icon: Icon, link }) => {
  return (
    <article className="w-max grid justify-items-center">
      <div className="icon-container cursor-pointer">
        <a href={link} target="blanck">
          <Icon className="icons" />
        </a>
      </div>
      <h3 className="text-2xl mt-4 mb-2">{title}</h3>
      <p className="font-light">{value}</p>
    </article>
  );
};
export default Contact;
