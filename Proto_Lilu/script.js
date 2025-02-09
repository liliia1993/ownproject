// menu script start

let menu = document.querySelector("#menu-bar");
let navbar = document.querySelector(".navbar");

menu.onclick = () => {
  menu.classList.toggle("fa-times");
  navbar.classList.toggle("active");
};

// light gallery script start

lightGallery(document.querySelector(".gallery"));

// light gallery script end

// menu script end

// loader script start

function loader() {
  document.querySelector(".loader-container").classList.add("active");
}

function fadeOut() {
  setTimeout(loader, 1500);
}

fadeOut();

// loader script end
