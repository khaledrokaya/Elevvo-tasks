document.addEventListener('DOMContentLoaded', function () {
  const form = document.getElementById('contactForm');

  //* Error message elements for each field
  const errorMessages = {
    0: document.getElementById('fullnameError'),
    1: document.getElementById('emailError'),
    2: document.getElementById('subjectError'),
    3: document.getElementById('messageError')
  };

  //^ To track if the user has attempted to submit the form
  let flag = false;

  //* Real-time validation as the user types
  form.addEventListener('input', function (event) {
    if (flag) {
      const checkvalidity = checkValidity(form);
      if (checkvalidity) {
        Object.values(errorMessages).forEach((element, index) => {
          if (checkvalidity[index].msg)
            element.innerHTML = `<i class="bi bi-exclamation-circle"></i> ${checkvalidity[index].msg}`;
          else
            element.innerHTML = '';
        });
      } else {
        Object.values(errorMessages).forEach(element => element.innerHTML = '');
      }
    }
  });

  //* Form submission handling
  form.addEventListener('submit', function (event) {
    //^ Set the flag to true when the user attempts to submit the form
    flag = true;

    const checkvalidity = checkValidity(event.target);
    if (!checkvalidity) {
      alert('Message sent successfully!');
    } else {
      event.preventDefault();
      Object.values(errorMessages).map((element, index) => {
        if (checkvalidity[index].msg)
          element.innerHTML = `<i class="bi bi-exclamation-circle"></i> ${checkvalidity[index].msg}`;
      });
    }
  });
});

/**
 * Check the validity of the form fields.
 * @param {HTMLFormElement} form - The form element to validate. 
 * @returns {Array|boolean} - An array of error messages or false if the form is valid.
 */
function checkValidity(form) {
  let msgs = [{ id: 0, msg: "" }, { id: 1, msg: "" }, { id: 2, msg: "" }, { id: 3, msg: "" }];
  if (!/^[a-zA-Z\s]+$/.test(form.children[0].children[1].children[0].value)) msgs[0].msg = "Name must contain only letters and spaces";
  if (form.children[0].children[1].children[0].value.length < 2) msgs[0].msg = "Name must be at least 2 characters long";
  if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.children[1].children[1].children[0].value)) msgs[1].msg = "Email must be a valid email address";
  if (!/^[a-zA-Z\s]+$/.test(form.children[2].children[1].children[0].value)) msgs[2].msg = "Subject must contain only letters and spaces";
  if (form.children[2].children[1].children[0].value.length < 2) msgs[2].msg = "Subject must be at least 2 characters long";
  if (form.children[3].children[1].children[0].value.length < 10) msgs[3].msg = "Message must be at least 10 characters long";
  if (form.children[0].children[1].children[0].value === '') msgs[0].msg = "Name is Required";
  if (form.children[1].children[1].children[0].value === '') msgs[1].msg = "Email is Required";
  if (form.children[2].children[1].children[0].value === '') msgs[2].msg = "Subject is Required";
  if (form.children[3].children[1].children[0].value === '') msgs[3].msg = "Message is Required";
  return msgs.find(msg => msg.msg) ? msgs : false;
}