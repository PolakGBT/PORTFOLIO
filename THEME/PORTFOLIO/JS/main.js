
$(function(){

    var $name = $('#name-mail'),
        $mail = $('#email-mail'),
        $mess = $('#message-mail'),
        $notif = $('.notif-mail'),
        $erreur = $('#erreur'),
        $champ = $('.champ-mail'),
        $accept= true;



$('#send-mail').click(function(e){
    e.preventDefault();

    var data = {
        email: $('#email-mail').val(),
        name: $('#name-mail').val(),
        message: $('#message-mail').val()
    };

    var rep1 = verifier($name,/^[A-Za-z0-9ÀÁÂÃÄÅàáâãäåÒÓÔÕÖØòóôõöøÈÉÊËèéêëÇçÌÍÎÏìíîïÙÚÛÜùúûüÿÑñ]{3,}/,$('#erreur-name')),
        rep2 = verifier($mail,/^[a-z0-9\-_.]+@[a-z0-9\-_.]+\.[a-z]{2,3}$/i,$('#erreur-mail')),
        rep3 = verifier($mess,/./,$('#erreur-mess'));
    
    if(bool(rep1,rep2,rep3) == true){
    $.ajax({
        url: "PHP/mail.php",
        type: 'POST',
        data: data,
        success: function(data) {
            $('.notif-mail').css({'display' : 'block'});
            setTimeout(function(){
                $('#email-mail').val("");
                $('#name-mail').val("");
                $('#message-mail').val("");
                $name.css({'border-color':'#dbdbdb'});
                $mail.css({'border-color':'#dbdbdb'});
                $mess.css({'border-color':'#dbdbdb'})
            }, 1000);
            setTimeout(function(){
                $('.notif-mail').css({'display' : 'none'});
            }, 2000);
        },
        error: function(data) {
            $('#js_alert_danger').css({'display' : 'block'});
            setTimeout(function(){
                alert('Pas envoyer');
                $('#email-mail').val("");
                $('#name-mail').val("");
                $('#message-mail').val("");
                $name.css({'border-color':'#dbdbdb'});
                $mail.css({'border-color':'#dbdbdb'});
                $mess.css({'border-color':'#dbdbdb'})
            }, 1000);
        }
    });
    }
});

function verifier($champ,regex,$erreur){
    var bool = true;
    if($champ.val().length < 3){ 
        $champ.css({'border-color':'red'}); // on affiche d'erreur
        $erreur.css({'display' : 'block'});
        return false;
    }
    if(!($champ.val().match(regex))){
        $champ.css({'border-color':'red'});
        $erreur.css({'display' : 'block'});
        return false;
    }
        $champ.css({'border-color':'green'});
        $erreur.css({'display' : 'none'});
        return true;  
}
function bool(bool1,bool2,bool3){
    if(bool1 == false){
        return false;
    }
    if(bool2 == false){
        return false;
    }
    if(bool3 == false){
        return false;
    }
    return true;
}

    //END-CONTACT

//MENU-MOBILE
$('#bouton-menu').click(function(){
    $('#menu-mobile').animate({height: '100%'}, 500);
    $('#bouton-menu').css({'display' : 'none'});
    $('#bouton-menu2').css({'display' : 'block'});
});
$('#bouton-menu2').click(function(){
    $('#menu-mobile').animate({height: '0%'}, 500);
    $('#bouton-menu').css({'display' : 'block'});
    $('#bouton-menu2').css({'display' : 'none'});
});
//END-MENU-MOBILE

//ME-DECOUVRIR
    $('#decou').click(function() {
      $('html,body').animate({scrollTop: $(".ancre").offset().top}, 'slow'      );
    });  

    //SITE-CHOIX-THEME
$('.carde-img').hover(function(){
    $(".carde-hov", this).animate({width: '100%'}, 100);
    $(".carde-ouv", this).css({'visibility' : 'visible'});

},function(){
    $(".carde-hov", this).animate({width: '0%'}, 100);
    $(".carde-ouv", this).css({'visibility' : 'hidden'});
});
//AFFICHER FRAME
$('.carde-hov').click(function(){
    var div = '#'+$(this).parents('div').attr('id')+'-frame';
    $(".total").css({'visibility' : 'visible'});
    $(div).css({'visibility' : 'visible'});
    $('#ordi').css({'border' : '6px solid'});
    $('#ordi').css({'border-color' : 'white'});
    $('#ordi').css({'border-radius' : '75px'});

    $('#tel').click(function(){
        $('#tel').css({'border' : '6px solid'});
        $('#tel').css({'border-color' : 'white'});
        $('#tel').css({'border-radius' : '75px'});
        $('#ordi').removeAttr('style');

        $('.frame-content').css({'width' : '400px'});


    });

    $('#ordi').click(function(){
        $('#ordi').css({'border' : '6px solid'});
        $('#ordi').css({'border-color' : 'white'});
        $('#ordi').css({'border-radius' : '75px'});
        $('#tel').removeAttr('style');
        $('.frame-content').css({'width' : '70%'});
    });


    

    $('.close').click(function(){
        $(div).css({'visibility' : 'hidden'});
        $(".total").css({'visibility' : 'hidden'});
    });

});




});


