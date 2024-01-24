$(document).ready(function(){
    $('#image-carousel').slick({
        autoplay: true,
    });
    $('.hamburger-menu').click(function(){
        $('nav').slideToggle();
    });
    $('#tel').mask('(00) 00000-0000', {
        placeholder: '(DDD) XXXXX-XXXX'
    });
    $('form').validate({
        rules: {
            name:{
                required: true
            },
            email:{
                required: true,
                email: true
            },
            tel:{
                required: true
            },
            message:{
                required: true
            },
            vehicleForm:{
                required: false
            }
        },
        messages: {
            name: 'Por favor, insira seu nome.'
        },
        submitHandler: function(form){
            console.log(form)
        },
        invalidHandler: function(event, validator){
            let incorrectFields = validator.numberOfInvalids();
            if(invalidFields){
                alert(`Existem ${incorrectFields} campos incorretos`)
            }
        }
    });
    $('.vehicle-list button').click(function(){
        const destination = $('#contact');

        const vehicleName = $(this).parent().find('h3').text();
        $('#vehicle-form').val(vehicleName);
        
        $('html').animate({
            scrollTop: destination.offset().top
        }, 1000)
    })
})