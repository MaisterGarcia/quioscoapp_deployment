import useQuiosco from "../hooks/useQuiosco";
import Image from "next/image";

const Categoria = ({ categoria }) => {
  const { categoriaActual, handleCategoriaClick } = useQuiosco();
  const { icono, id, nombre } = categoria;
  return (
    <div
      className={`${
        categoriaActual?.id === id ? "bg-amber-400" : ""
      } flex items-center gap-4 w-full border p-5 hover:bg-amber-400`}
    >
      <Image
        width={70}
        height={70}
        src={`/assets/img/icono_${icono}.svg`}
        alt={`Imagen Icono ${nombre}`}
      />
      <button
        type="button"
        className="text-2xl font-bold hover:cursor-pointer"
        onClick={() => handleCategoriaClick(id)}
      >
        {nombre}
      </button>
    </div>
  );
};

export default Categoria;
