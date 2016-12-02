function openNav() {
    document.getElementById("mySidenav").style.width = "250px";
}

function closeNav() {
    document.getElementById("mySidenav").style.width = "0";
}

/* SLIDER */
$(document).ready(function(){
      $('.slider').slider({full_width: true});
    });



$(document).ready(function(){
    // the "href" attribute of .modal-trigger must specify the modal ID that wants to be triggered
    $('.modal').modal();
  });
       
 $('#modal1').modal('open');
 $('#modal1').modal('close');


 /* menu */
 $(".button-collapse").sideNav();