let loader = document.querySelectorAll(".content");
for (let i = 0; i < loader.length; i++) {
  if (i % 2 !== 0) {
    loader[i].style.backgroundColor = "#222b32";
  } else {
    loader[i].style.backgroundColor = "#263038";
  }
}
