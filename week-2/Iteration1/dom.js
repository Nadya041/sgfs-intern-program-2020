var actionAddEvent  = document.getElementById("action--add-event");
var eventNameInput  = document.getElementById("event-name");
var eventPriceInput = document.getElementById("event-price");

var eventListComponent = document.getElementById("event-list");

var getDomEventCollection = function(){

    var eventCollection =  EventManager.getEventCollection();

    if(eventCollection.length == 0 ){
        return '<div> No party </div>';
    }

     //Render all events
   var template        = [];
   for(var i = 0; i < eventCollection.length; i++) {
      template.push(`<div>${eventCollection[i].name} - ${eventCollection[i].price}`)
   }
   
   return template.join('');
};

var renderEventCollection = function(){
    eventListComponent.innerHTML = getDomEventCollection();
 };

actionAddEvent.addEventListener('click', function() {

    var eventName   = eventNameInput.value;
    var eventPrice  = eventPriceInput.value;
    var eventObject = createEvent({
        name : eventName,
        price : eventPrice 
    });


    //Create new event
    EventManager.addEvent({ eventObject });

    //Nulify the dom components
    eventNameInput.value  = "";
    eventPriceInput.value = "";

    // eventListComponent.innerHTML = getDomEventCollection();
    renderEventCollection();
   
});

renderEventCollection();