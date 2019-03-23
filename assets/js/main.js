// smooth scroll to particular div
$(document).ready(function(){
    $(".navbar-nav li a").on('click', function(event) {
    if (this.hash !== "") {
        event.preventDefault();
        var hash = this.hash;
        $('html, body').animate({
        scrollTop: $(hash).offset().top
        }, 800, function(){
        if(hash == '#home'){
            hash = ''
        }
        window.location.hash = hash;
        });
    }
    });
});

// change background color on scroll position
$(window).scroll(function() {    
    var scroll = $(window).scrollTop();
    if (scroll >= 50) {
        $("nav").addClass("bg-def");
    } else {
        $("nav").removeClass("bg-def");
    }
});

//validate and persist data to devless
$(document).ready(function(){
    var constants = {
        "token": "77c8a39846f93b49501bbcc05dff33af",
        "domain": "https://apoga-ent.herokuapp.com"
    };
    SDK = new Devless(constants);
    $("#msg").click(function(e){
        e.preventDefault();
        $("#msg i").toggleClass(" fas fa-comment-dots  fas fa-spinner fa-pulse");
        var data = {"name":$('#name').val(), "email":$('#email').val(), "message":$('#comment').val()};
    
        if( $.trim($('#name').val()) == '' || $.trim($('#email').val()) == '' || $.trim($('#comment').val()) == ''){
            swal("Empty Fields", "Kindly fill all the fields!", "info");
            $("#msg i").toggleClass(" fas fa-comment-dots  fas fa-spinner fa-pulse");
            return;
        };
    
        SDK.addData("Personal", "contact", data,  function(res){
            // console.log(JSON.stringify(res));
            if(res.status_code == 609){
                swal("Submission Successful", "Your Message has been Received, Thank You!", "success");
                $('#name').val(""); $('#email').val(""); $('#comment').val("");
                
            }
            else{
                swal("Submission Failed", "Oops!, Something went wrong. Kindly Resend!", "error");
            }
            
            $("#msg i").toggleClass("fas fa-spinner fa-pulse fas fa-comment-dots");
            return;
            });
        
    });
});

//change navbar toggler-icon on click
$(document).ready(function(){
    $(".navbar-toggler").click(function(){
        $(".navbar-toggler span").toggleClass("fas fa-2x fa-bars fas fa-2x fa-times");
    });
});        

