import Renderer from "./renderer";
import './style.scss';

function component() {
  const element = document.createElement('div');

  // Lodash, currently included via a script, is required for this line to work
  element.innerHTML = "<div class='container'><canvas id='canvas' width='640' height='480' /> </div>";

  return element;
}

function main() {
  const canvas = document.querySelector("#canvas");
  let renderer = new Renderer(canvas);
  renderer.render({});
}

document.body.appendChild(component());

window.onload = main;

