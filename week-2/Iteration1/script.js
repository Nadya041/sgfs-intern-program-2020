var eventCollection = [];

var EventManager = {

    eventCollection : [],

    addEvent : function (eventObject){
        EventManager.eventCollection.push(eventObject);
    },

    getEventCollection : function(){
        return EventManager.eventCollection;
    }
};

var createEvent = function (eventObject) {

    return{
        name            : eventObject.name,
        price           : eventObject.price,
        date            : eventObject.date

    }
};

var newEvent = createEvent({
    name : "Galena Secrets" ,
    price : 20
})

eventCollection.push(newEvent);