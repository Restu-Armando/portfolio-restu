// Enter Key Submition
$("textarea").keypress(function (e) {
  if (e.which === 13 && !e.shiftKey) {
    e.preventDefault();

    $(this).closest("form").submit();
  }
});

// Alert Confirmation
// function confirmSubmit() {
//   var agree = confirm("Are you sure you wish to continue?");
//   if (agree) return true;
//   else return false;
// }

function submitForm() {
  return confirm('Do you really want to send this form?');
}