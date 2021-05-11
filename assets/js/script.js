$( document ).ready(function(){
    $('.carousel').carousel({
    interval: 2000
    })
    $("a").click(function(event){
        if (this.hash !== "") {
            event.preventDefault();

            let lnk = this.hash;

            $("html,body").animate({
                scrollTop: $(lnk).offset().top
            }, 800, function(){
                window.location.hash = lnk;
        });
    }
});

});