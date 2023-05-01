function scrollToSection(id) {
    var element = document.getElementById(id);
    element.scrollIntoView({ behavior: 'smooth' });
  }
  
  const nameInput = document.getElementById('name');
  const emailInput = document.getElementById('email');
  const phoneInput = document.getElementById('phone');
  const form = document.querySelector('form');
  form.addEventListener('submit', function(event) {
    // Prevent form submission
    event.preventDefault();

    // Check if all fields are valid
    if (nameInput.checkValidity() && emailInput.checkValidity() && phoneInput.checkValidity()) {
      // If all fields are valid, submit the form
      console.log("form is submitted");
      window.alert("form is submitted successfully");
      form.submit();
      
    } else {
      // If any field is invalid, show error messages
      nameInput.reportValidity();
      emailInput.reportValidity();
      phoneInput.reportValidity();
    }
  });

const successMessage = document.querySelector('#success-message');

form.addEventListener('submit', (event) => {
  event.preventDefault(); // prevent the default form submission

  // clear the form fields
  form.reset();
});

window.addEventListener('scroll', function() {
    const section1 = document.querySelector('#section-1');
    const section2 = document.querySelector('#section-2');
    const section3 = document.querySelector('#section-3');
  
    const scrollPosition = window.pageYOffset;
  
    section1.style.backgroundPositionY = scrollPosition * 0.5 + 'px';
    section2.style.backgroundPositionY = scrollPosition * 0.8 + 'px';
    section3.style.backgroundPositionY = scrollPosition * 0.5 + 'px';
  });
  
  var video = document.getElementById("myVideo");

  // Get the button
  var btn = document.getElementById("myBtn");
  
  // Pause and play the video, and change the button text
  function myFunction() {
    if (video.paused) {
      video.play();
      btn.innerHTML = "Pause";
    } else {
      video.pause();
      btn.innerHTML = "Play";
    }
  }