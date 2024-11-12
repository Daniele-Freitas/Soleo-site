
//filtro do portifolio

//$ é para declarar função anonima
$('.filter-btn').on('click', function() {

    let type = $(this).attr('id');
    let boxes = $('.project-box');

    $('.main-btn').removeClass('active'); // aqui remove a classe active do todos
    $(this).addClass('active'); // aqui da a classe active para o selecionado

    if(type == 'taquara-btn'){
        eachBoxes('taquara', boxes);
    } else if(type == 'curicica-btn'){
        eachBoxes('curicica', boxes);
    } else if(type == 'tanque-btn'){
        eachBoxes('tanque', boxes);
    } else if(type == 'freguesia-btn'){
        eachBoxes('freguesia', boxes);
    } else {
        eachBoxes('all', boxes);
    }

});

function eachBoxes(type, boxes) {

    if(type == 'all'){
        $(boxes).fadeIn();
    } else {
        $(boxes).each(function(){        
            if(!$(this).hasClass(type)){
                $(this).fadeOut('slow');
            } else {
                $(this).fadeIn();
            }
        });
    }
}
//fadeout=esconder fadein=aparecer

