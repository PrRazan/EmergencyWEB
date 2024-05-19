'use strict';


function showMessage(card) {
    const message = card.querySelector('.message');
    message.style.transform = 'translateY(0)';
  }
  
  function hideMessage(card) {
    const message = card.querySelector('.message');
    message.style.transform = 'translateY(-100%)';
  }

  function toggleMessage(button) {
    const cardContent = button.closest('.project-card'); 
    const message = cardContent.querySelector('.project-message');
    message.style.display = (message.style.display === 'block') ? 'none' : 'block';
}



function isValidEmail(email) {
  if (/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(email)) {
      console.log("Valid email address");
  } else {
      console.log("Invalid email address");
  }
}


