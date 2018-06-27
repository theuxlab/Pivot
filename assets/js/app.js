$('document').ready(function() {
    

    


    // console.log(inputs.values);
}); 


// Form validation function 
function ValidateForm() {
    var inputs = $("form input");
    var inputLength = inputs.length;
    var error_message = $(".error-message .error").html("");

    inputs.each(function (index, element) {

        if(element.value === "") {
            $(".error-message").show();
            element.classList.add("error-highlight");
            
            if (inputLength - 1 === index){
                error_message.append($(element).data("validation-name"));
            } else {
                error_message.append($(element).data("validation-name") + ", ");
            }
        } else {
            $(".error-message").hide();
            element.classList.remove("error-highlight");

        }
    });
}


// Password hide show button function
function PasswordHideShow() {
    var passwordInputField = $(".passwordField input");

    if (passwordInputField[0].type === "password") {
        $(".hideShowPasswordBtn").html("Hide");
        passwordInputField[0].type = "text";
    }  else {
        $(".hideShowPasswordBtn").html("Show");
        passwordInputField[0].type = "password";
    }
}

$(".features .timeline .item").on("click", function() {

    $(".features .timeline .item").removeClass("active");  
    $( this ).addClass("active");

});




    