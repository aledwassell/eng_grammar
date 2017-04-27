var input;
var button;
var output;

button.onClick(setup());

function setup() {
  input = $('#input').val();
  button = createButton('pluralize me');
  input.parent(target);
  button.parent(target);
  input.changed(processRita);
  button.mousePressed(processRita);
  input.size(200);
}

function processRita() {
  var s = input.value();
  var rs = new RiString(s);
  var p = RiTa.pluralize(s);
  output = createP(p);
  output.parent(target);
  console.log(RiTa.pluralize(s));
}
