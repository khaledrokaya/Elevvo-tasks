// Wait for the page to load completely
document.addEventListener('DOMContentLoaded', function () {

  // Get the form element
  const form = document.getElementById('contactForm');

  // Add an event listener to handle form submission
  form.addEventListener('submit', function (event) {

    // Check if form is valid using browser's built-in validation
    if (form.checkValidity()) {
      // Form is valid - let it submit normally to the API
      console.log('Form is valid, submitting to API...');
      return true;
    } else {
      // Form is invalid - prevent submission and show validation messages
      event.preventDefault();
      form.reportValidity();
      return false;
    }
  });

});