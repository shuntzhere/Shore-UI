const sidebar = document.querySelector(".docs-sidebar");
const hamburger = document.querySelector(".hamburger");

hamburger.addEventListener("click", () => {
  if (sidebar.style.display === "block") {
    sidebar.style.display = "none";
  } else {
    sidebar.style.display = "block";
  }
});
