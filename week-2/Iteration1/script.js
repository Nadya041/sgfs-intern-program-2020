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

    return{
        name            : eventObject.name,
        price           : eventObject.price,
        date            : eventObject.date,
        age             : eventObject.age,
        isRestricted    : (eventObject.age > 18)

    };
};



var clientCollection = [];

var ClientManager = {

    clientCollection : [],
   

    addClientToEvent(clientObject){
        return ClientManager.clientCollection[i].push[eventIndex];
        
    },

    createClient(clientObject){
        return ClientManager.clientCollection[i].push[eventIndex];
        
    }

};


const createClient = function (clientObject){
   
    return{
    name            : clientObject.firstName,
    price           : clientObject.lastName,
    age             : clientObject.age,
    
};
};
