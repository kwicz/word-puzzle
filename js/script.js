$(document).ready(function() {
  
  $("#blanks").submit(function() {
    event.preventDefault();
    var sentence = $("#sentence").val();
    var parsedSentence = sentence.split("");
    for (i = 0 ; i < parsedSentence.length ; i++) {
      if (["a", "e", "i", "o", "u", "A", "E", "I", "O", "U"].includes(parsedSentence[i])) {
        parsedSentence[i] = "-";
      }
    }
    var result = parsedSentence.join("");
    $(".sentence").text(result);
  });

  $(".sentence#result").show();
});