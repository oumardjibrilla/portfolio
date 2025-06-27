
function sendMail() {
    
    let para = { 
        sujet: document.querySelector('#sujet').value,
        message: document.querySelector('#message').value,
        email: document.querySelector('#email').value
    };

    emailjs.send('service_01xnqmc', 'template_d3m36pz', para)
        .then(() => {
            alert('Message envoyé avec succès !');
            document.querySelector('#email').value = '';
            document.querySelector('#sujet').value = '';
            document.querySelector('#message').value = '';
        })
        .catch((error) => {
            console.error('Erreur lors de l\'envoi du message :', error);
            alert('Erreur lors de l\'envoi du message.');
        });
}


var boutton_mail = document.querySelector('#boutton-mail');
boutton_mail.addEventListener('click', ()=>{
    const email = document.querySelector('#email').value
    const sujet =  document.querySelector('#sujet').value
    const message =  document.querySelector('#message').value
    if(email == "" || sujet == "" || message == ""){
        alert('Des informations sont manquantes, merci de vérifier votre saisie.')
    }
    else{
        sendMail();
    }
    
});



/* le code pour afficher mon cv */


const voir_cv = document.querySelector('.voir-cv')

voir_cv.addEventListener('click' ,()=>{
    window.open('/image/cv de oumar.pdf' ,'_blank')
})
