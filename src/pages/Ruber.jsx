import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, useNavigate, useParams } from "react-router-dom";
import { delRuber, addProduct, delProduct } from "../reducer/rubersSlice";
import { FaCirclePlus, FaTrash } from "react-icons/fa6";
import { nanoid } from "@reduxjs/toolkit";

function Ruber() {
  const params = useParams();
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const ruber = useSelector((state) =>
    state.rubers.find((ruber) => ruber.id === params.id),
  );
  const [product, setProduct] = useState("");

  useEffect(() => {
    document.title = "Rubro";
  }, []);

  return (
    <div className="flex flex-col">
      <h2 className="text-lg">Lista de compras</h2>
      <div className="flex items-center justify-between">
        <h1 className="text-2xl">{ruber.name}</h1>
        <FaTrash
          className="ms-auto"
          onClick={() => {
            dispatch(delRuber({ id: params.id }));
            navigate("/");
          }}
        />
      </div>
      <h3 className="text-xs italic">{ruber.description}</h3>
      <div>
        <form>
          <div>
            <label htmlFor="product">Agregar Producto</label>
            <div className="relative">
              <FaCirclePlus
                className="absolute right-2 top-1/2 -translate-y-1/2 transform"
                onClick={() =>
                  dispatch(
                    addProduct({ idRuber: params.id, id: nanoid(), product }),
                  )
                }
              />
              <input
                className="w-full rounded border border-gray-300 py-2 pl-2"
                id="product"
                name="product"
                value={product}
                type="text"
                placeholder="Agregar nuevo item"
                onChange={(e) => setProduct(e.target.value)}
              />
            </div>
          </div>
        </form>
        <div>
          <ul>
            {ruber.products.length > 0 ? (
              ruber.products.map((product) => (
                <div
                  key={product.id}
                  className="flex items-center justify-between"
                >
                  <li>{product.name}</li>
                  <FaTrash
                    onClick={() =>
                      dispatch(
                        delProduct({
                          idRuber: params.id,
                          id: product.id,
                        }),
                      )
                    }
                  />
                </div>
              ))
            ) : (
              <li>No hay productos</li>
            )}
          </ul>
        </div>
        <div>
          <Link to="/">Volver</Link>
        </div>
      </div>
    </div>
  );
}

export default Ruber;

// {
// id: "1",
// name: "Macro",
// description: "Super Mayorista",
// date: "2024-09-20",
// products: [{ id: "0", name: "Tomate", check: "false" ,
// }
