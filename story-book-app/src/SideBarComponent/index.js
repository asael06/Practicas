import { Container } from "./styles";
import { SideBar } from "./SideBar";
import { useEffect, useState } from "react";

export const FullContainer = () => {
  const [showSidebar, setShowSidebar] = useState(false);
  const [sideBar, setSideBar] = useState(null);

  const closeSidebar = (e) => {
    if (!e.target.closest("#side-bar") && showSidebar) {
      document.removeEventListener("click", closeSidebar, false);
      sideBar.classList.remove("active");
      setTimeout(() => {
        setShowSidebar(false);
      }, 500);
    }
  };

  useEffect(() => {
    setSideBar(document.getElementById("side-bar"));
  }, [showSidebar]);

  useEffect(() => {
    if (showSidebar) {
      document.addEventListener("click", closeSidebar, false);
      setTimeout(() => {
        sideBar?.classList.add("active");
      }, 500);
    }
  }, [sideBar]);

  return (
    <Container>
      <button
        onClick={() => {
          if (sideBar) {
            sideBar?.classList.remove("active");
            setTimeout(() => {
              setShowSidebar(false);
            }, 500);
          } else {
            setShowSidebar(true);
          }
        }}
      >
        show sidebar
      </button>
      {showSidebar && <SideBar />}
    </Container>
  );
};
