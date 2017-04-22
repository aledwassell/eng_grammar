$(document).ready(function(){
  let relationshipType = $('#selectRel').val();
  let input = $('#input');

  $('#selectRel').on('change', function() {
    relationshipType = $('#selectRel').val();
    $('#input').attr('placeholder', relationshipType + 's...');
    $('#input').val('');
    $('.target').empty();
  });


  let urlPartOne = 'http://api.wordnik.com:80/v4/word.json/';
  let urlPartTwo = '/relatedWords?useCanonical=true&relationshipTypes=';
  let key = '&limitPerRelationshipType=10&api_key=a2a73e7b926c924fad7001ca3111acd55af2ffabf50eb4ae5';

  $('input').on('change', function() {
      input = $('#input').val();
      let url = urlPartOne + input + urlPartTwo + relationshipType + key;
      $.ajax({
        dataType: "json",
        url: url,
        timeout: 6000
      })
      .success (function(data, status) {
        getDefinitions(data);
      })
      .error(function(status) {
        console.log("getSynonyms: url == " + url + ", error == " + JSON.stringify (status, undefined, 4));
      })
    });

  function getDefinitions(data) {
    data[0].words.map((word, index) => {
      let url = urlPartOne + word + '/definitions?limit=1&includeRelated=true&useCanonical=true&includeTags=false&api_key=a2a73e7b926c924fad7001ca3111acd55af2ffabf50eb4ae5';
      $.ajax({
        dataType: 'json',
        url: url,
        timeout: 6000,
        success: function(definition, status) {
          $('.target').append('<div data-role="collapsible" id="set1" data-collapsed="true"><h3>' + definition[0].word + '</h3><p>' + definition[0].text + '</p></div>')
          .trigger('create');
          $('#input').val('');
          // console.log(definition[0].word);
          // console.log(definition[0].text);
        },
        error: function(status) {
          console.log("getSynonyms: url == " + url + ", error == " + JSON.stringify (status, undefined, 4));
        }
      })
    })
    $('.target').empty();
  }
  $('.target').empty();


})
