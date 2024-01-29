import CoverPage from "../../img/13.jpg";
import { BiLogoReact } from "react-icons/bi";
import { BiLogoTailwindCss } from "react-icons/bi";
import ItemListProject from "../../Components/ItemListProject";
import ToolProjectCard from "../../Components/ToolProjectCard";

const Project = () => {
  return (
    <aside className="w-full h-screen grid grid-cols-2 py-6 text-gray-color items-center text-xl">
      <article className="w-full pr-6 flex flex-col gap-6">
        <h1 className="w-full text-5xl text-white">App Ecommerce </h1>
        <p>
          Esta app fue creada con el fin de practicar lo aprendido en los cursos
          de React. Esta aplicacion es una tienda en linea adaptable a cualquier
          dispositivo y tiene las siguientes funcionalidades
        </p>
        <ul className="w-full">
          <ItemListProject text="Visualizar de productos" />
          <ItemListProject text="Agregar y eliminar productos de un carrito de compras" />
          <ItemListProject text="Ver ordenes o compras anteriores" />
          <ItemListProject text="Ver el total de la compra" />
          <ItemListProject text="Filtrar productos por el nombre y/o categoria" />
        </ul>
        <div className="w-full">
          <h2 className="mb-2 text-white text-lg">Tecnologias utilizadas</h2>
          <ul className="flex gap-4">
            <ToolProjectCard text={"React"} icon={BiLogoReact} />
            <ToolProjectCard text={"Tailwind"} icon={BiLogoTailwindCss} />
          </ul>
        </div>
        <input
          type="submit"
          value="Ir al proyecto"
          className="w-full bg-green-color/85 text-white p-2 rounded-lg cursor-pointer text-lg hover:bg-green-color transition-all"
        />
      </article>
      <figure className="w-full bg-card-color p-2 rounded-lg hover:scale-105 transitio">
        <img src={CoverPage} alt="" className="object-contain" />
      </figure>
    </aside>
  );
};
export default Project;
