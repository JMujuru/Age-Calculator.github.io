// Variables for inputs
const day = document.querySelector("#dd");
const month = document.querySelector("#mm");
const year = document.querySelector("#yyyy");
const btn = document.querySelector("#btn");
const cal = document.querySelectorAll(".cal");

// Variables for required text
const required = document.querySelectorAll(".required");

// Variables for the box changing
const inputBox = document.querySelectorAll(".input");

//variables for results
const days = document.querySelector("#days");
const monthss = document.querySelector("#months");
const years = document.querySelector("#years");

//variables for errors
emptyField = "This field is required";
validDate = "Must be a valid day";
validMonth = "Must be a valid month";
validYear = "Must be in the past";
error = "hsl(0, 100%, 67%)";
let isValid = false;

btn.addEventListener("click", () => {
  validator();
  if (isValid === true) {
    age();
  }
});

btn.addEventListener("dblclick", () => {
  resetFields();
});

//resets the input fields by changing them back to default
function resetFields() {
  day.value = "";
  month.value = "";
  year.value = "";
  days.innerHTML = "--";
  monthss.innerHTML = "--";
  years.innerHTML = "--";

  required.forEach((element) => {
    element.innerHTML = "";
  });

  cal.forEach((element) => {
    element.style.color = "";
  });

  inputBox.forEach((element) => {
    element.style.borderColor = "";
  });
}

function age() {
  const d1 = parseInt(day.value);
  const m1 = parseInt(month.value);
  const y1 = parseInt(year.value);

  const date = new Date(); // collects time from device

  let d2 = date.getDate();
  let m2 = 1 + date.getMonth();
  let y2 = date.getFullYear();

  const months = [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];

  if (d1 > d2) {
    d2 = d2 + months[m2 - 1];
    m2 = m2 - 1;
  }
  if (m1 > m2) {
    m2 = m2 + 12;
    y2 = y2 - 1;
  }
  const d = d2 - d1;
  const m = m2 - m1;
  const y = y2 - y1;

  days.innerHTML = d;
  monthss.innerHTML = m;
  years.innerHTML = y;
}

// styles the input boxes and error mesages
function style() {
  required[0].innerHTML = validDate;
  cal[0].style.color = error;
  inputBox[0].style.borderColor = error;
  cal[1].style.color = error;
  inputBox[1].style.borderColor = error;
  cal[2].style.color = error;
  inputBox[2].style.borderColor = error;
}

// validates teh form inputs
function validator() {
  let dayValue = day.value;
  let monthValue = month.value;
  let yearValue = year.value;
  const currentYear = new Date().getFullYear();

  if (monthValue == "") {
    required[1].innerHTML = emptyField;
    cal[1].style.color = error;
    inputBox[1].style.borderColor = error;
    isValid = false;
  } else if (monthValue < 1 || monthValue > 12) {
    required[1].innerHTML = validMonth;
    isValid = false;
  } else {
    required[1].innerHTML = "";
    cal[1].style.color = "";
    inputBox[1].style.borderColor = "";
    isValid = true;
  }

  if (yearValue === "") {
    required[2].innerHTML = emptyField;
    cal[2].style.color = error;
    inputBox[2].style.borderColor = error;
    isValid = false;
  } else if (yearValue > currentYear) {
    required[2].innerHTML = validYear;
    isValid = false;
  } else if (yearValue < 1) {
    required[2].innerHTML = "Must be AD";
    cal[2].style.color = error;
    inputBox[2].style.borderColor = error;
    isValid = false;
  } else {
    required[2].innerHTML = "";
    cal[2].style.color = "";
    inputBox[2].style.borderColor = "";
    isValid = true;
  }

  if (dayValue == "") {
    required[0].innerHTML = emptyField;
    cal[0].style.color = error;
    inputBox[0].style.borderColor = error;
    isValid = false;
  } else if (dayValue < 1 || dayValue > 31) {
    style();
    isValid = false;
  } else {
    required[0].innerHTML = "";
    cal[0].style.color = "";
    inputBox[0].style.borderColor = "";
    cal[1].style.color = "";
    inputBox[1].style.borderColor = "";
    isValid = true;
  }
  if (
    isValid &&
    (monthValue == 4 ||
      monthValue == 6 ||
      monthValue == 9 ||
      monthValue == 11) &&
    dayValue > 30
  ) {
    style();
    isValid = false;
  } else if (isValid && monthValue == 2 && dayValue > 28) {
    style();
    isValid = false;
  }
}
