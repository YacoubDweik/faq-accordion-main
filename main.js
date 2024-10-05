lis = document.querySelectorAll("li");
ps = document.querySelectorAll("p");
icons = document.querySelectorAll("li img");

lis.forEach((li) =>
  li.addEventListener("click", handleClick)
);

function handleClick(e) {
  ps.forEach((p) => p.classList.remove("active"));
  icons.forEach((icon) => icon.classList.remove("active"));
  e.currentTarget.children[1].classList.add("active");
  e.currentTarget.children[2].classList.add("active");
}
