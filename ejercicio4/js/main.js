// Ready method
$(function() {
    /*
    * Variables
    */
    var formContact = $("#formContact");

    /*
    *set default values
    */
    $.extend($.validator.messages, {
        required: "Este campo es obligatorio",
        email: "Ingresa un correo válido",
        url: "Ingresa una url válida",
        minlength: "Ingresa al menos {0} caracteres"
    });

    /*
    *Apply validation plugin 
    */

    formContact.validate();
    // $("#formContact").validate();
});