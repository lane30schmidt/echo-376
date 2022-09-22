$(document).ready(function () {

  $("#btnLength").click(function () {
    $("#coolNameFactsOutput").html();

    let userName = $("#userName").val();

    $("#coolNameFactsOutput").html(nameLength(userName));
  });

  $("#btnReverse").click(function () {
    $("#coolReverse").html();

    let userName = $("#userName").val();

    $("#coolReverse").html(reverse(userName));
  });

  $("#btnAnimal").click(function () {
    $("#coolAnimal").html();

    let userName = $("#userName").val();

    $("#coolAnimal").html(getSpiritAnimal(userName));
  });

  $("#btnFirst").click(function () {
    $("#coolFirst").html();

    let userName = $("#userName").val();

    $("#coolFirst").html(nameStart(userName));
  });

  $("#btnLast").click(function () {
    $("#coolLast").html();

    let userName = $("#userName").val();

    $("#coolLast").html(nameEnd(userName));
  });

  $("#btnUpper").click(function () {
    $("#coolUpper").html();

    let userName = $("#userName").val();

    $("#coolUpper").html(upper(userName));
  });
});



function nameLength(name) {
  return "Your name is " + name.length + " letters long!";
}

function reverse(x) {
    return "Reversed: "+ x.split("").reverse().join("");
}

function getSpiritAnimal(x) {
  //flow control: case switch, loop, if/then

  if (x.length <= 3) {
    //execute some code
    return "Your spirit animal is a slug!";
  } else if (x.length <= 6) {
    return "Your spirit animal is a worm!";
  } else {
    return "Your spirit animal is a snake!";
  }
}

function nameStart(name) {
  return "The first letter of your name is: " + name[0];
}

function nameEnd(name) {
  let lastIndex = name.length - 1;

  return "The last letter of your name is: " + name[lastIndex];
}

function upper(x){
  return "Your name in all caps is: " + x.toUpperCase();
}