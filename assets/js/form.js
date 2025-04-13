/*Form Validation*/
$(document).ready(function(){
    $('#form').submit(function(e){
        /*Get Values*/ 
        var name = $('#name').val().trim();
        var email = $('#email').val().trim();
        var msg = $('#msg').val().trim();

        //reset the erros
        $(".error").remove();

        var isValidForm = true;

        //Validation Conditions here
        if(name.length<1){
            $('#name').after('<span class="error">This field is required </span>');
            var isValidForm = false;
        }
        if(email.length<1){
            $('#email').after('<span class="error">This field is required </span>');
            var isValidForm = false;
        }
        if(msg.length<1){
            $('#msg').after('<span class="error">This field is required </span>');
            var isValidForm = false;
        }

        return isValidForm; // if isValidForm is true then form submits else submission is stopped

    });
});
