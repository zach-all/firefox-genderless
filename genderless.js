function docReady(fn) {
  if (
    document.readyState === "complete" ||
    document.readyState === "interactive"
  ) {
    setTimeout(fn, 10);
  } else {
    document.addEventListener("DOMContentLoaded", fn);
  }
}

function changeDom() {
  console.log("Removing gender..");
  let replaced = document.body.innerHTML;
  replaced = replaced.replaceAll(/[*:]innen/g, "");
  document.body.innerHTML = replaced;
}

changeDom();
docReady(function () {
  changeDom();
});
