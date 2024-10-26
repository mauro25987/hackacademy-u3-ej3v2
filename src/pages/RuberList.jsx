import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
import Modal from "../components/Modal";

function RuberList() {
  const [showModal, setShowModal] = useState(false);
  const rubers = useSelector((state) => state.rubers);

  useEffect(() => {
    document.title = "HackList";
  }, []);

  return (
    <>
      {rubers.length > 0 &&
        rubers.map((ruber) => (
          <Link to={`rubro/${ruber.id}`} key={ruber.id}>
            <div className="flex items-center justify-between">
              <div className="mr-8 text-lg text-white">{ruber.name}</div>
              <div className="flex items-center">
                <div className="text-sm font-semibold italic text-slate-300">
                  ({ruber.complet}/{ruber.total})
                </div>
              </div>
              <div className="text-sm italic text-white">{ruber.description}</div>
            </div>
            <div className="text-xs italic text-white">{ruber.date}</div>
          </Link>
        ))}
      <div>
        <button
          className="mt-2 rounded-lg border-2 border-white bg-blue-800 px-4 py-1 font-semibold text-white hover:bg-blue-400"
          onClick={() => setShowModal(true)}
        >
          Agregar
        </button>
      </div>

      {showModal && <Modal setShowModal={setShowModal} />}
    </>
  );
}

export default RuberList;
