var actionAddEvent  = document.getElementById("action--add-event");
var eventNameInput  = document.getElementById("event-name");
var eventPriceInput = document.getElementById("event-price");
var eventDateInput = document.getElementById("event-date");

var eventListComponent = document.getElementById("event-list");

var getDomEventCollection = function(){

    var eventCollection =  EventManager.getEventCollection();

    if(eventCollection.length == 0 ){
        return '<div> No party </div>';
    }

     //Render all events
   var template        = [];
   for(var i = 0; i < eventCollection.length; i++) {
      template.push(`<div data-possition= " ${i}  "class="event-item">${eventCollection[i].name} - ${eventCollection[i].price} - ${eventCollection[i].date}</div>`)
   }
   
   return template.join('');
};

var renderEventCollection = function(){



    eventListComponent.innerHTML = getDomEventCollection();
 //  var eventElementCollection    = document.getElementsByClassName("event-item")
    
    // for(var i = 0; i< eventElementCollection.length; i++){

    //    eventElementCollection.addEventListener('click', function(){
    //         console.log("item is selected");
    //     });
    // }

 };

actionAddEvent.addEventListener('click', function() {

    var eventName   = eventNameInput.value;
    var eventPrice  = eventPriceInput.value;
    var eventDate   = eventDateInput.value;
    var eventObject = createEvent({
        name  : eventName,
        price : eventPrice,
        date  : eventDate
    });


    //Create new event
    EventManager.addEvent(eventObject);

    //Nulify the dom components
    eventNameInput.value  = "";
    eventPriceInput.value = "";
    eventDateInput.value  = "";

    renderEventCollection();
});

eventListComponent.addEventListener('çlick', function(e){
    console.log(e.target.getAttribute('data-position')); //

console.log(e.target);
});

renderEventCollection();



