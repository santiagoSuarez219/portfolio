import { HiCheck } from "react-icons/hi2";
const ItemListProject = (props) => {
  return (
    <li className="flex gap-2 items-center">
      <figure>
        <HiCheck className=" text-green-color w-4 h-4" />
      </figure>
      <div>{props.text}</div>
    </li>
  );
};
export default ItemListProject;
