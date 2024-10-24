import { useParams } from "react-router-dom";

function Ruber() {
  const params = useParams();
  console.log(params);
  return <div>Ruber</div>;
}

export default Ruber;
