

emailjs.init("GysBJMRMNkVc-8UF6");
const btn = document.getElementById('email-btn');

document.getElementById('contactForm').addEventListener('submit',function(event) {
    event.preventDefault(); 

    btn.value = 'Sending...';

    const serviceID = 'Gadekar@9066';
    const templateID = 'myPortfolioFeedback9066'; 

    emailjs.sendForm(serviceID, templateID, this)
      .then((response) => {
        btn.value = 'Send Email';
        alert('Email sent successfully!',response);
      }, (error) => {
        btn.value = 'Send Email';
        console.log("error",error);
        
      });
      document.getElementById('contactForm').reset();
      
  });
