
/* SLIDER */

$(document).ready( function(){

    // referenze
    var nextBtn = $(".next");
    var prevBtn = $(".prev");

    // NAVIGAZIONE CON MOUSE
    // next
    nextBtn.click( function(){
        nextPrevSlide("next");
    });

    // prev
    prevBtn.click( function(){
        nextPrevSlide("prev");
    });

    //NAVIGAZIONE CON KEYBOARD
    //  $(document) --> voglio che l'azione sia appena si carica il doc 
    // .keydown --> metodo/ascoltatore di evento (quando si preme su tastiera)
    //  e/event param che passiamo all funz di callback e che contiene info sull'evento keydown
    $(document).keydown( function(event){                  
    console.log(event); 
    console.log(event.keyCode);    
        
        if (event.keyCode == 39){        // freccia tastiera destra 
            nextPrevSlide("next");
        } else if (event.keyCode == 37){ // freccia tastiera sinistra 
            nextPrevSlide("prev");
        }

    });
    
    
    // CLICK CIRCLE

    // ref
    var circle = $(".nav i");
    var image = $(".images img");

    circle.click( function(){

        // indice circle
        var index = circle.index(this);
        // console.log(Index);

        // RESET
        image.removeClass("active");
        circle.removeClass("active");

        // seguono insieme lo stesso indice e agg classe active
        $(image[index]).addClass("active");
        $(circle[index]).addClass("active");



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
     
    // REFERENZE active (dove si trova l'active iniziale)
    var activeImage = $(".images img.active");
    var activeCircle = $ (".nav i.active");
    // referenze primo e ultimo elemento
    var firstImage = $(".images img.first");
    var firstCircle = $(".nav i.first");
    var lastImage = $(".images img.last");
    var lastCircle = $(".nav i.last");


    // RESET  ( quando sposto la selezione voglio che active sia solo quella img/circle e non anche la precedente )
    activeImage.removeClass("active");
    activeCircle.removeClass("active");


    //NEXT
    if (direction === "next"){

        // quando l'img active arriva  all'ultima    (hasClass === true)
        if (activeImage.hasClass("last")){
             // sposto active alla prima img e sul primo circle (i)
            firstImage.addClass("active");
            firstCircle.addClass("active");
        } else {
             //sposto la selezione di Jquery da activeImage per andare al prox elem e gli agg la classe active
             activeImage.next("img").addClass("active");
             activeCircle.next(".nav i").addClass("active");
        } 
  
    } 
    // PREV
    else if(direction === "prev"){
        // se l'active raggiunge la prima
        if (activeImage.hasClass("first")){
            //sposto l'active sull'ultima img e sull'ultimo circle
            lastImage.addClass("active");
            lastCircle.addClass("active");
        } else {
             //sposto la selezione di Jquery da activeImage per andare all'elemento precendente e aggiungo classe active
             activeImage.prev("img").addClass("active");
             activeCircle.prev(".nav i").addClass("active");
        }

    }
  

}



 
    


   
    
    

