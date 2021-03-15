function sendEmail(){
  const name = document.querySelector('#name');
  const surname = document.querySelector('#surname');
  const email = document.querySelector('#email');
  const phone = document.querySelector('#phone');
  const message = document.querySelector('#message');
  const body= `Nombre: ${name.value} 
  Apellido: ${surname.value} 
  Telefono: ${phone.value}
  Email: ${email.value}
  Mensaje: ${message.value}`;
  name.value='';
  surname.value='';
  email.value='';
  phone.value='';
  message.value='';
  console.log(name.value,surname.value,email.value,phone.value,message.value);
  Email.send({
    Host : "smtp.gmail.com",
    Username : "matiascelt@gmail.com",
    Password : "tuhhunlidtewykni",
    To :'internacionales@upso.edu.ar',
    From : "matiascelt@gmail.com",
    Subject : "EMAIL WEB INTERNACIONALES",
    Body : body
  }).then(
    message => alert(message)
  );
}