import { useEffect } from "react";

function Error() {
  useEffect(() => {
    document.title = "Error";
  }, []);

  return <div>Error</div>;
}

export default Error;
