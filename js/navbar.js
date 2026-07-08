function selectedMenuItem() {
  const active = "active";
  var currentItem = window.location.pathname;

  var url = currentItem.split("/").pop();

  if (url === "index.html") {
    document.getElementById("home").classList.add(active);
  } else if (url === "categories.html") {
    document.getElementById("categories").classList.add(active);
  } else if (url === "questions.html") {
    document.getElementById("questions").classList.add(active);
  } else if (url === "popular.html") {
    document.getElementById("popular").classList.add(active);
  } else if (url === "signIn.html") {
    document.getElementById("signIn").classList.add(active);
  }

}

selectedMenuItem();

function whenScrolling() {
  window.addEventListener("scroll", function() {
    if (window.scrollY > 50) {
      document.getElementById("navbar").classList.add("scrolled");
    } else {
      document.getElementById("navbar").classList.remove("scrolled");
    }
  });
}

whenScrolling();

var menuOpened = false;

function closeMenu() {
  if (!menuOpened) return;

  var menu = document.getElementById("menuList");
  menu.classList.remove("opened");
  menu.classList.add("closed");
  menu.classList.add("d-none");
  document.getElementById("openMenu").classList.remove("d-none");
  document.getElementById("closeMenu").classList.add("d-none");
  document.getElementById("menuButtonId").classList.remove("onTop");
  document.body.classList.remove("notScrollable");
  menuOpened = false;
}

function toggleMenu() {
  var menu = document.getElementById("menuList");
  if (menuOpened) {
    closeMenu();
  } else {
    menu.classList.remove("closed");
    menu.classList.remove("d-none");
    menu.classList.add("opened");
    document.getElementById("openMenu").classList.add("d-none");
    document.getElementById("closeMenu").classList.remove("d-none");
    document.getElementById("menuButtonId").classList.add("onTop");
    document.body.classList.add("notScrollable");
    menuOpened = true;
  }
}

document.querySelectorAll("#menuList a").forEach(function(link) {
  link.addEventListener("click", function() {
    closeMenu();
  });
});
