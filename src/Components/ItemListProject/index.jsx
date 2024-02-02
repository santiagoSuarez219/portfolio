const ItemListProject = (props) => {
  return (
    <li className="flex gap-2 items-center">
      <div>
        <span className="text-green-color font-semibold">
          {props.index + 1}.
        </span>{" "}
        {props.text}
      </div>
    </li>
  );
};
export default ItemListProject;
