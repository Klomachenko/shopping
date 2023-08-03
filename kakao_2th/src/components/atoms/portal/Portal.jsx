import { createPortal } from "react-dom";

function Portal({ children }) {
  const el = document.getElementById("portal");
  return createPortal(children, el);
}

export default Portal;
