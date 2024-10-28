import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, useNavigate, useParams } from "react-router-dom";
import { delRuber, addProduct, delProduct, checkProduct } from "../reducer/rubersSlice";
import { FaCirclePlus, FaTrash } from "react-icons/fa6";
import { nanoid } from "@reduxjs/toolkit";

function Ruber() {
  const params = useParams();
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const ruber = useSelector((state) => state.rubers.find((ruber) => ruber.id === params.id));
  const [product, setProduct] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(
      addProduct({
        idRuber: params.id,
        id: nanoid(),
        product,
      }),
    );
    setProduct("");
  };

  useEffect(() => {
    document.title = "Rubro";
  }, []);

  return (
    <>
      <h2 className="mb-8 text-center text-xl font-semibold text-gray-900">Lista de compras</h2>
      <div className="flex items-center justify-between">
        <h1 className="text-lg font-semibold text-gray-800">{ruber.name}</h1>
        <FaTrash
          className="text-red-800 hover:text-red-400"
          onClick={() => {
            dispatch(delRuber({ id: params.id }));
            navigate("/");
          }}
        />
      </div>
      <h3 className="mb-2 text-right text-xs italic">{ruber.description}</h3>

      <form onSubmit={handleSubmit} className="mb-4">
        <div className="relative">
          <button>
            <FaCirclePlus className="absolute right-2 top-1/2 -translate-y-1/2 transform text-blue-800 hover:text-blue-400" />
          </button>
          <input
            className="w-full rounded-lg border-2 border-gray-300 px-4 py-2 duration-200 placeholder:text-center placeholder:text-sm placeholder:italic focus:border-indigo-500 focus:outline-none"
            id="product"
            name="product"
            value={product}
            type="text"
            placeholder="Agregar nuevo producto"
            required
            onChange={(e) => setProduct(e.target.value)}
          />
        </div>
      </form>

      <ul className="space-y-2">
        {ruber.products.length > 0 ? (
          ruber.products.map((product) => (
            <li key={product.id} className="rounded-lg bg-gray-100 p-4">
              <div className="flex items-center justify-between">
                <div className="flex items-center">
                  <input
                    className="mr-2 h-3 w-3 rounded-full bg-gray-200"
                    type="checkbox"
                    checked={product.check}
                    onChange={(e) => {
                      dispatch(
                        checkProduct({
                          idRuber: params.id,
                          id: product.id,
                          check: e.target.checked,
                        }),
                      );
                    }}
                  />
                  <span
                    className={`text-md ${product.check ? "text-gray-500 line-through" : "text-black no-underline"} `}
                  >
                    {product.name}
                  </span>
                </div>
                <FaTrash
                  className="text-red-800 hover:text-red-400"
                  onClick={() => {
                    dispatch(
                      delProduct({
                        idRuber: params.id,
                        id: product.id,
                        check: product.check,
                      }),
                    );
                  }}
                />
              </div>
            </li>
          ))
        ) : (
          <li className="rounded-lg bg-gray-100 p-4">
            <div className="text-center text-sm font-semibold text-gray-500">No hay productos</div>
          </li>
        )}
      </ul>

      <button
        className="mt-4 rounded-lg border-2 border-white bg-red-800 px-4 py-1 font-semibold text-white hover:bg-red-400"
        onClick={() => setShowModal(true)}
      >
        <Link to="/">Volver</Link>
      </button>
    </>
  );
}

export default Ruber;
