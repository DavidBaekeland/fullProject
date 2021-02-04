let debarcode = document.forms["form"]["debarcode"];

let debarcode_error = document.getElementById("debarcode_error");

debarcode.addEventListener("textInput", debarcode_Verify);

function validated() {
  if (debarcode.value.length < 12) {
    debarcode.style.border = "1px solid red";
    debarcode_error.style.display = "block";
    debarcode.focus();
    return false;
  }
}

function debarcode_Verify() {
  if (debarcode.value.length >= 11) {
    debarcode.style.border = "1px solid silver";
    debarcode_error.style.display = "none";
    return true;
  }
}
