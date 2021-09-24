function docReady(fn) {
  // see if DOM is already available
  if (
    document.readyState === "complete" ||
    document.readyState === "interactive"
  ) {
    // call on next available tick
    setTimeout(fn, 10);
  } else {
    document.addEventListener("DOMContentLoaded", fn);
  }
}

function changeDom() {
  console.log("Change DOM");
  let replaced = document.body.innerHTML;
  replaced = replaced.replaceAll(/[*:]innen/g, "");
  document.body.innerHTML = replaced;
}

changeDom();
docReady(function () {
  changeDom();
});
