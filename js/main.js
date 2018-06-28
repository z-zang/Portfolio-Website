function getUsers() {
  fetch('users.json')
  .then((res) => res.json())
  .then((data) => {
    data.forEach((user) => {

      // user output is an empty string
      let userOutput = '';
      console.log(data);
      userOutput += `
      <ul>
        <li>ID: ${user.id}</li>
        <li>Name: ${user.name}</li>
        <li>Email: ${user.email}</li>
      </ul>
      `;
      document.getElementById('output').innerHTML += userOutput;
    })
  })
}


$(document).ready(function($){

  $("#portfolio-btn").click(function() {
    $('html, body').animate({
      scrollTop: $("#portfolio").offset().top -135    }, 1000);
  });

    $("#about-btn").click(function() {
      $('html, body').animate({
        scrollTop: $("#about").offset().top -140
      }, 1000);
    });


    $("#contact-btn").click(function() {
      $('html, body').animate({
        scrollTop: $("#contact").offset().top -140
      }, 1000);
    });

    $("#github").click(function(){
      window.open('http://github.com/z-zang', '_blank');
    })

    $("#linkedin").click(function(){
      window.open('http://www.linkedin.com/in/z-zang', '_blank');
    })

    $("#twitter").click(function(){
      window.open('http://twitter.com/zichaozang', '_blank');
    })

    $("#mail").click(function(){
      window.open('mailto:zang.code@gmail.com', '_blank');
    })

});
