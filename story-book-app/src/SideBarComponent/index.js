import { Container } from "./styles";
import { SideBar } from "./SideBar";
import { useState } from "react";

export const FullContainer = () => {
  const [showSidebar, setShowSidebar] = useState(false);

  return (
    <Container>
      <button
        onClick={() => {
          setShowSidebar(true);
        }}
      >
        show sidebar
      </button>
      {showSidebar && (
        <SideBar showSidebar={showSidebar} setShowSidebar={setShowSidebar} />
      )}
    </Container>
  );
};
