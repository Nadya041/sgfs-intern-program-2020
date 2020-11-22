var EventManager = {

    selectedEventId : null,
    eventCollection : [],


    addEvent : function (eventObject){
        EventManager.eventCollection.push(eventObject);
    },

    getEventCollection : function(){
        return EventManager.eventCollection;
    },

    getEvent(eventIndex) {
        return EventManager.eventCollection[eventIndex];
    },

    addClient(client) {
        var eventObject = EventManager.eventCollection[EventManager.selectedEventId];
      
        if(client.age < eventObject.age ){
            alert("You can't enter!")
            return;
        }
        eventObject.clientCollection.push(client);
    },

    setCurrentSelectedEvent(id){
        EventManager.selectedEventId = id;
    },

    getCurrentSelectedEventId(){
        return EventManager.selectedEventId;
    }


};


const createEvent = function (eventObject) {

    return{
        name             : eventObject.name,
        price            : eventObject.price,
        date             : eventObject.date,
        age              : eventObject.age,
        isRestricted     : (eventObject.age > 18),
        clientCollection : []

    };
};

const createClient = function (clientObject){

    return{
      firstName        : clientObject.firstName,
      lastName         : clientObject.lastName,
      age              : clientObject.age,
   };
};

// function addClientToAnEvent(client, event) {

//     if(client.age < 18){
//         return console.log(" This event is 18+ !");
//     }

//     event.addClientToAnEvent(clientObject);
// };
