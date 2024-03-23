let hd_utils = {};

hd_utils.addStyleElement = function (src) {
  const styleElement = document.createElement("link");
  styleElement.rel = "stylesheet";
  styleElement.type = "text/css";
  styleElement.href = src;
  document.head.appendChild(styleElement);
};

hd_utils.readJson = function (src, callback) {
  const xmlhttp = new XMLHttpRequest();

  xmlhttp.onreadystatechange = function () {
    if (this.readyState == 4) {
      if (this.status == 200) {
        const jsonObject = JSON.parse(this.responseText);
        callback(jsonObject);
      } else {
        console.log(`Couldn't read JSON from ${src}. Try refreshing.`);
      }
    }
  };

  xmlhttp.open("GET", src, true);
  xmlhttp.send();
};

hd_utils.dragElement = function (elmnt, dragEl) {
  var pos1 = 0, pos2 = 0, pos3 = 0, pos4 = 0;
  dragEl.onmousedown = dragMouseDown;

  function dragMouseDown(e) {
    e = e || window.event;
    e.preventDefault();
    // get the mouse cursor position at startup:
    pos3 = e.clientX;
    pos4 = e.clientY;
    document.onmouseup = closeDragElement;
    // call a function whenever the cursor moves:
    document.onmousemove = elementDrag;
  }

  function elementDrag(e) {
    e = e || window.event;
    e.preventDefault();

    // calculate the new cursor position:
    pos1 = pos3 - e.clientX;
    pos2 = pos4 - e.clientY;
    pos3 = e.clientX;
    pos4 = e.clientY;

    // set the element's new position:
    elmnt.style.top = (elmnt.offsetTop - pos2) + "px";
    elmnt.style.left = (elmnt.offsetLeft - pos1) + "px";
  }

  function closeDragElement() {
    // stop moving when mouse button is released:
    document.onmouseup = null;
    document.onmousemove = null;
  }
}