import { useEffect } from "react";
import { Link } from "react-router-dom";

function Error() {
  useEffect(() => {
    document.title = "Error";
  }, []);

  return (
    <>
      <div className="flex flex-col items-center">
        <div className="mb-5 text-center text-2xl font-bold text-gray-900">Error 404</div>
        <div>
          <button
            className="mt-4 rounded-lg border-2 border-white bg-red-800 px-4 py-1 font-semibold text-white hover:bg-red-400"
            onClick={() => setShowModal(true)}
          >
            <Link to="/">Volver</Link>
          </button>
        </div>
      </div>
    </>
  );
}

export default Error;
