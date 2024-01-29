import { HiCheck } from "react-icons/hi2";
const ItemListProject = (props) => {
  return (
    <li className="flex gap-2 items-center ">
      <HiCheck className=" text-green-color" />
      {props.text}
    </li>
  );
};
export default ItemListProject;
