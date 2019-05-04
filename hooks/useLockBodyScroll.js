import { useEffect } from "react";

export default toggle => {
  useEffect(() => {
    window.document.body.style.overflow = toggle ? "hidden" : "visible";
    return () => {
      window.document.body.style.overflow = "visible";
    };
  }, [toggle]);
};
