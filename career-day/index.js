var current_index = 0;
var input_ids = ["img-1", "img-2", "img-3", "img-4", "img-5"];
var container = document.getElementById("container");
function nav_click(event) {
  if (event.clientX < container.clientWidth / 2) {
    if (current_index <= 0) return;
    current_index -= 1;
  } else {
    if (current_index >= input_ids.length) return;
    current_index += 1;
  }
  img_input = document.getElementById(input_ids[current_index]);
  img_input.checked = true;
}
container.onclick = nav_click;
