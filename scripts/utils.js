
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
