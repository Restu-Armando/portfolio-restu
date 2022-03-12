$(document).ready(function () {
  $("#email").hide();
  $("#email1").hide();
  $("#name").change(function () {
    //  alert("Textbox value is changed");
    //  $('#email').hide();
    if ($(this).val() != null) {
      $("#email").show();
      $("#email1").show();
    } else {
      $("#email").hide();
      $("#email1").hide();
    }
  });
});

// $(document).ready(function () {
//   $("#textarea").hide();
//   $("#textarea1").hide();
//   $("#email").change(function () {
//     //  alert("Textbox value is changed");
//     //  $('#email').hide();
//     if ($(this).val() != null) {
//       $("#textarea").show();
//       $("#textarea1").show();
//     } else {
//       $("#textarea").hide();
//       $("#textarea1").hide();
//     }
//   });
// });
