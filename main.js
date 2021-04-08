
/* SLIDER */

$(document).ready( function(){

    // referenze
    var nextBtn = $(".next");
    var prevBtn = $(".prev");


    // next
    nextBtn.click( function(){
        nextPrevSlide("next");
    });

    // prev
    prevBtn.click( function(){
        nextPrevSlide("prev");
    });



    // End doc 
});



/*****************************
 * FUNCTIONS 
 ****************************/





 /**
  * Naviga tra le slide
  * @param {*} direction next or prev 
  */

  function nextPrevSlide(direction){
     console.log(direction);
    // referenza active (dove si trova l'active iniziale)
    var activeImage = $(".images img.active");
    var activeCircle = $ (".nav i.active");

    // reset ( quando sposto la selezione voglio che sia active solo quella img/circle e non la precedente )
    activeImage.removeClass("active");
    activeCircle.removeClass("active");



    //next
    if (direction === "next"){

        // quando l'img active arriva  all'ultima    (hasClass === true)
        if (activeImage.hasClass("last")){
             // sposto active alla prima img e sul primo circle (i)
            $(".images img.first").addClass("active");
            $(".nav i.first").addClass("active");
        } else {
             //sposto la selezione di Jquery da activeImage per andare al prox elem e gli agg la classe active
             activeImage.next("img").addClass("active");
             activeCircle.next(".nav i").addClass("active");
        } 
  
    } 
    // prev
    else if(direction === "prev"){
        // se l'active raggiunge la prima
        if (activeImage.hasClass("first")){
            //sposto l'active sull'ultima img e sull'ultimo circle
            $(".images img.last").addClass("active");
            $(".nav i.last").addClass("active");
        } else {
             //sposto la selezione di Jquery da activeImage per andare all'elemento precendente e aggiungo classe active
             activeImage.prev("img").addClass("active");
             activeCircle.prev(".nav i").addClass("active");
        }

    }
  

}

