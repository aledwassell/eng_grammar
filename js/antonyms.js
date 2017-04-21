var type = 'antonym';
var url = 'http://api.wordnik.com:80/v4/word.json/';
var url2 = '/relatedWords?useCanonical=false&relationshipTypes=';
var url3 = '&limitPerRelationshipType=10&api_key=a2a73e7b926c924fad7001ca3111acd55af2ffabf50eb4ae5';

var button;
var input;
var output;
var target = document.getElementById('sketch-holder');

button.onClick(setup());

function setup() {
  input = createInput('');
  button = createButton('Submit');
  input.parent(target);
  button.parent(target);
  input.changed(askWordnik);
  button.mousePressed(askWordnik);
  input.size(200);
}

function askWordnik(){
  console.log(loadJSON(url + input.value() + url2 + type + url3, gotData));
}

function gotData(data){
  output = createP(data.words);
}
