$(document).ready(function() {
    $('#pag_numero').mask('9999 9999 9999 9999');
    $('#pag_data').mask('99/9999');
    $('#pag_cod').mask('99?9');

    $('input[type="submit"]').click(function(){
        $(this).parent().fadeOut('fast');
        $('.showPedido').fadeIn();
    });
});