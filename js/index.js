let butt = document.getElementById("butt");
let calcres = document.getElementById("calcres");
let pargh = document.getElementById("pargh");

butt.addEventListener("click", () => {
  let hegthnum = +(document.getElementById("hegthnum").value / 100);
  let weghtnum = +document.getElementById("weghtnum").value;
  let res = weghtnum / (hegthnum * hegthnum);
  calcres.innerHTML = res;
  if (res <= 18.4) {
    pargh.innerHTML = "under weight";
  } else if (res <= 24.9) {
    pargh.innerHTML = "normal weigtht";
  } else if (res <= 29.9) {
    pargh.innerHTML = "over weight";
  } else {
    pargh.innerHTML = "obacity";
  }
});
