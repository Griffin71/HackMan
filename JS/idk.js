var main = document.querySelector(".main");
//main.insertAdjacentHTML( 'beforeend', 'content' );

var lineCount = 40;
var minCharCount = 20;
var maxCharCount = 40;
var topPos = (maxCharCount - 1) / 2 * 10;
var mainWidth = main.offsetWidth;
var mainHeight = main.offsetHeight;

function random(min, max) {
  return Math.floor(Math.random() * (max - min) + min);
}

function getLineChar(length) {
  var result = "";
  var characters = "01";
  var charactersLength = characters.length;
  for (var i = 0; i < length; i++) {
    result += characters.charAt(Math.floor(Math.random() * charactersLength));
  }
  return result;
}

function animate(index, charCount, opacity, potition, tick) {
  var elem = document.querySelector("#line" + index);
  var pos = -mainHeight;
  var id = setInterval(frame, random(1, 10));
  var lineChar = getLineChar(charCount);
  var id2 = setInterval(function() {
    var lineChar2 = getLineChar(charCount);
    var textWidth = getTextWidth(lineChar2, "bold 16px Consolas");
    elem.querySelector("span").innerHTML = lineChar2;
    elem.querySelector("div").style.width = textWidth + "px";
  }, tick);
  function frame() {
    var textWidth = getTextWidth(lineChar, "bold 16px Consolas");
    if (pos == mainHeight + topPos) {
      clearInterval(id);
      clearInterval(id2);
      elem.style.top = -mainHeight + "px";
      animate(index, charCount, opacity, potition, tick);
    } else {
      pos++;
      elem.style.top = pos + "px";
    }
  }
}

function generateLine(index, charCount, opacity, potition, tick) {
  var html = "";
  html += `<div class="lines" `;
  html += `style="opacity:0.${opacity}; `;
  html += `left:${position}px; `;
  html += `top:-${topPos}px;" `;
  html += `id="line${index}">`;
  html += `<div>⠀</div>`;
  html += `<span>${getLineChar(charCount)}<span>`;
  html += `</div>`;
  setTimeout(function() {
    main.insertAdjacentHTML("beforeend", html);
    animate(index, charCount, opacity, potition, tick);
  }, tick + index * 100);
}

for (i = 0; i < lineCount; i++) {
  var index = i;
  var charCount = random(minCharCount, maxCharCount);
  var opacity = random(6, 9);
  var position = random(0, mainWidth);
  var tick = random(300, 500);

  generateLine(index, charCount, opacity, position, tick);
}

function getTextWidth(text, font) {
  // re-use canvas object for better performance
  var canvas =
    getTextWidth.canvas ||
    (getTextWidth.canvas = document.createElement("canvas"));
  var context = canvas.getContext("2d");
  context.font = font;
  var metrics = context.measureText(text);
  return metrics.width;
}

console.log(getTextWidth("hello there!", "bold 12px arial"));
