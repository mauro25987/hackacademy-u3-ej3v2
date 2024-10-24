import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { nanoid } from "@reduxjs/toolkit";
import { useDispatch, useSelector } from "react-redux";
import { addRuber } from "../reducer/rubersSlice";

function RuberList() {
  const [ruber, setRuber] = useState({ name: "", description: "" });
  const rubers = useSelector((state) => state.rubers);

  const dispatch = useDispatch();

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(ruber);
    dispatch(
      addRuber({
        id: nanoid(),
        name: ruber.name,
        description: ruber.description,
        date: "2024-11-11",
      }),
    );
    setRuber({ name: "", description: "" });
  };

  useEffect(() => {
    document.title = "HackList";
  }, []);

  if (rubers.length === 0) {
    return <div>No hay productos</div>;
  }

  return (
    <>
      {rubers.map((ruber) => (
        <Link to={`rubro/${ruber.id}`} key={ruber.id}>
          <div className="flex items-center justify-between">
            <div className="mr-8 flex items-center">
              <div className="mr-1 text-lg text-white">{ruber.name}</div>
              <div className="text-sm font-semibold italic text-slate-300">
                ({ruber.products.length}/{ruber.products.length})
              </div>
            </div>
            <div className="text-sm italic text-white">{ruber.description}</div>
          </div>
        </Link>
      ))}

      <div className="mx-auto mb-4 max-w-md rounded bg-white px-8 pb-8 pt-6 shadow-md">
        <form onSubmit={handleSubmit}>
          <h2 className="mb-6 text-center text-2xl font-bold">
            Formulario de Rubro
          </h2>
          <div className="mb-4">
            <label
              className="mb-2 block text-sm font-bold text-gray-700"
              htmlFor="name"
            >
              Nombre
            </label>
            <input
              className="focus:shadow-outline w-full appearance-none rounded border px-3 py-2 leading-tight text-gray-700 shadow focus:outline-none"
              id="name"
              name="name"
              value={ruber.name}
              type="text"
              placeholder="Nombre de Rubro"
              required
              onChange={(e) =>
                setRuber({ ...ruber, [e.target.name]: e.target.value })
              }
            />
          </div>
          <div className="mb-4">
            <label
              className="mb-2 block text-sm font-bold text-gray-700"
              htmlFor="description"
            >
              Descripcion
            </label>
            <input
              className="focus:shadow-outline w-full appearance-none rounded border px-3 py-2 leading-tight text-gray-700 shadow focus:outline-none"
              id="description"
              name="description"
              value={ruber.description}
              type="text"
              placeholder="Descripcion de Rubro"
              onChange={(e) =>
                setRuber({ ...ruber, [e.target.name]: e.target.value })
              }
            />
          </div>
          <div className="flex items-center justify-between">
            <button
              className="focus:shadow-outline rounded bg-blue-500 px-4 py-2 font-bold text-white hover:bg-blue-700 focus:outline-none"
              type="submit"
            >
              Registrarse
            </button>
          </div>
        </form>
      </div>
    </>
  );
}

export default RuberList;
