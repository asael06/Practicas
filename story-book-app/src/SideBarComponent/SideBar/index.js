import { useEffect, useRef } from "react";
import { Container } from "./styles";

export const SideBar = ({ showSidebar, setShowSidebar }) => {
  const sidebar = useRef(null);

  const closeSidebar = (e) => {
    if (!e.target.closest("#side-bar") && showSidebar) {
      console.log("closing");
      document.removeEventListener("click", closeSidebar, false);
      sidebar.current.classList.remove("active");

      setTimeout(() => {
        setShowSidebar(false);
      }, 500);
    }
  };

  useEffect(() => {
    if (showSidebar) {
      document.addEventListener("click", closeSidebar, false);
      sidebar.current.classList.add("active");
    }
  }, [showSidebar]);

  return <Container id="side-bar" ref={sidebar}></Container>;
};
