import { useDispatch } from "react-redux";
import { useState } from "react";
import { nanoid } from "@reduxjs/toolkit";
import { addRuber } from "../reducer/rubersSlice";

function Modal({ setShowModal }) {
  const [ruber, setRuber] = useState({ name: "", description: "" });
  const dispatch = useDispatch();

  const setDateTime = () => {
    const date = new Date();
    const [year, month, day] = [date.getFullYear(), date.getMonth() + 1, date.getDate()];
    return `${year}-${month}-${day}`;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(
      addRuber({
        id: nanoid(),
        name: ruber.name,
        description: ruber.description,
        date: setDateTime(),
        total: 0,
        complet: 0,
      }),
    );
    setRuber({ name: "", description: "" });
    setShowModal(false);
  };

  return (
    <div className="mx-auto mb-4 max-w-md rounded bg-white px-8 pb-8 pt-6 shadow-md">
      <form onSubmit={handleSubmit}>
        <h2 className="mb-6 text-center text-2xl font-bold">Formulario de Rubro</h2>
        <div className="mb-4">
          <label className="mb-2 block text-sm font-bold text-gray-700" htmlFor="name">
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
            onChange={(e) => setRuber({ ...ruber, [e.target.name]: e.target.value })}
          />
        </div>
        <div className="mb-4">
          <label className="mb-2 block text-sm font-bold text-gray-700" htmlFor="description">
            Descripcion
          </label>
          <input
            className="focus:shadow-outline w-full appearance-none rounded border px-3 py-2 leading-tight text-gray-700 shadow focus:outline-none"
            id="description"
            name="description"
            value={ruber.description}
            type="text"
            placeholder="Descripcion de Rubro"
            onChange={(e) => setRuber({ ...ruber, [e.target.name]: e.target.value })}
          />
        </div>
        <div className="flex items-center justify-between">
          <button
            className="focus:shadow-outline rounded bg-blue-500 px-4 py-2 font-bold text-white hover:bg-blue-700 focus:outline-none"
            type="submit"
          >
            Agregar Lista
          </button>
          <button
            className="focus:shadow-outline rounded bg-red-500 px-4 py-2 font-bold text-white hover:bg-red-700 focus:outline-none"
            onClick={() => setShowModal(false)}
          >
            Cancelar
          </button>
        </div>
      </form>
    </div>
  );
}

export default Modal;
