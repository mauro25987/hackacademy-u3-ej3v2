import { useEffect } from "react";
import { useParams } from "react-router-dom";

function Ruber() {
  const params = useParams();
  console.log(params);

  useEffect(() => {
    document.title = "Rubro";
  }, []);

  return <div>Ruber</div>;
}

export default Ruber;
