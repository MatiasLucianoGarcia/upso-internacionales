function sendEmail(){
  Email.send({
    Host : "smtp.gmail.com",
    Username : "mati.luciano.garcia@gmail.com",
    Password : "pukqnygyxwwcejmg",
    To : 'mati.luciano.garcia@gmail.com',
    From : "mati.luciano.garcia@gmail.com",
    Subject : "This is the subject",
    Body : "And this is the body"
}).then(
  message => alert(message)
);
}