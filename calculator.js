let input = document.getElementById("inputBox");
let buttons = document.getElementsByTagName("button");

let string = "";
let arr = Array.from(buttons);
arr.forEach(function (button) {
  button.addEventListener("click", function (e) {
    if (e.target.innerHTML == `=`) {
      if (string.trim() !== "") {
        string = eval(string);
        input.value = string;
      }
    } else if (e.target.innerHTML == `Ac`) {
      string = "";
      input.value = string;
    } else if (e.target.innerHTML == "Del") {
      string = string.substring(0, string.length - 1);
      input.value = string;
    } else {
      string += e.target.innerHTML;
      input.value = string;
    }
  });
});

// ********************************************************************
//                              Code With Jquery
// ********************************************************************

// $(document).ready(function() {
//   let input = $("#inputBox");
//   let buttons = $("button");

//   let string = "";

//   buttons.each(function() {
//     $(this).click(function(e) {
//       let buttonText = $(this).text();

//       if (buttonText === "=") {
//         if (string.trim() !== "") {
//           string = eval(string);
//           input.val(string);
//         }
//       } else if (buttonText === "Ac") {
//         string = "";
//         input.val(string);
//       } else if (buttonText === "Del") {
//         string = string.substring(0, string.length - 1);
//         input.val(string);
//       } else {
//         string += buttonText;
//         input.val(string);
//       }
//     });
//   });
// });
