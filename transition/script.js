const showSidebarbtn = document.getElementById("sidebar-btn");

const closeSidebar = (e) => {
  if (!e.target.closest("#side-bar")) {
    document.removeEventListener("click", closeSidebar);
  }
};

showSidebarbtn?.addEventListener("click", () => {
  const sideBar = document.getElementById("side-bar");
  
  if (sideBar.classList.contains("active")) {
    sideBar.classList.remove("active");
  } else {
    sideBar.classList.add("active");
  }
});
