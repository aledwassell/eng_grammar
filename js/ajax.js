$(document).ready(function() {
  $("#pluralizer").click(function() {
      $("#canvas").load("plurals.html");
  });

  $("#antonyms").click(function() {
      $("#canvas").load("antonyms.html");
  });
});
