var eventCollection = [];

var EventManager = {

    eventCollection : [],

    addEvent : function (eventObject){
        EventManager.eventCollection.push(eventObject);
    },

    getEventCollection : function(){
        return EventManager.eventCollection;
    },

    getEvent(eventIndex) {
        return EventManager.eventCollection[eventIndex];
    }

   
    
};



const createEvent = function (eventObject) {

    if(eventObject.age > 18){
        return{
            name            : eventObject.name,
            price           : eventObject.price,
            date            : eventObject.date,
            age             : true
    
            
        };
    }

    return{
        name            : eventObject.name,
        price           : eventObject.price,
        date            : eventObject.date,
        age             : eventObject.age,
        isRestricted    : (eventObject.age > 18)

    };
};

var newEvent = createEvent({
    name : "Galena Secrets" ,
    price : 20
})

eventCollection.push(newEvent);