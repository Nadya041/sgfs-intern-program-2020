var EventManager = {

    selectedEventId: null,
    eventCollection: [],
    clientCollection: [],
    selectedClientId: null,



    addEvent: function (eventObject) {
        EventManager.eventCollection.push(eventObject);
    },

    getEventCollection: function () {
        return EventManager.eventCollection;
    },

    getEvent(eventIndex) {
        return EventManager.eventCollection[eventIndex];
    },

    getIsClientVip() {
        return EventManager.numberOfEvents % 5 == 0
    },

    addClient(client) {
        var eventObject = EventManager.eventCollection[EventManager.selectedEventId];

        if(client.idTag == null || isNaN(client.idTag) || client.idTag.trim() == ""){
            alert("ID Tag field is required!")
            return;
        }
        


        if (client.age < eventObject.age) {
            alert("You are under the age restriction of this event.")
            return;
        }

        var isClientInvited = false;
        for (var i = 0; i < eventObject.clientIdTags.length; i++) {
            if (client.idTag == eventObject.clientIdTags[i]) {
                isClientInvited = true;
            }
        }
        if (isClientInvited) {
            alert(" This client is already in! ")
            return;
        }

        if (client.wallet < eventObject.price) {
            alert(" You don't have enought money to enter! ")
            return;
        }

        var isClientThere = false;
        for (var i = 0; i < EventManager.clientCollection.length; i++) {
            if (client.idTag == EventManager.clientCollection[i].idTag) {
                isClientThere = true;
            }
        }

        if (!isClientThere) {
            EventManager.clientCollection.push(client);
        }
        eventObject.clientIdTags.push(client.idTag);
        client = EventManager.getClientByIdTag(client.idTag);
        if(client.numberOfEvents % 5 != 0 || client.numberOfEvents == 0 ){
            client.wallet -= eventObject.price;
        }
        client.numberOfEvents++;
        alert(client.firstName + ", you have " + client.wallet + " bgn left in your wallet!")
    },

    editClient(clientIdTag, newClientData) {
        if (clientIdTag != newClientData.idTag) {
            alert("You can not change your ID tag! ")
            return;
        }
        var oldClientData = EventManager.getClientByIdTag(clientIdTag);
        oldClientData.firstName = newClientData.firstName;
        oldClientData.lastName = newClientData.lastName;
        oldClientData.age       = newClientData.age;




    },

    setCurrentSelectedEvent(id) {
        EventManager.selectedEventId = id;
    },

    getCurrentSelectedEventId() {
        return EventManager.selectedEventId;
    },

    setCurrentSelectedClientId(idTag){
        EventManager.selectedClientId = idTag;

    },

    getClientByIdTag(id) {
        for (var i = 0; i < EventManager.clientCollection.length; i++) {
            if (id == EventManager.clientCollection[i].idTag) {
                return EventManager.clientCollection[i];
            }
        }
    },
    getEventClients() {
        var eventId = EventManager.selectedEventId;
        var eventObject = EventManager.getEvent(eventId)
        let clientInfo = [];

        for (var i = 0; i < eventObject.clientIdTags.length; i++) {
            let clientId = eventObject.clientIdTags[i];
            let client = EventManager.getClientByIdTag(clientId);
            clientInfo.push(client);

        }
        return clientInfo;
    }

};


const createEvent = function (eventObject) {

    return {
        name: eventObject.name,
        price: eventObject.price,
        date: eventObject.date,
        age: eventObject.age,
        isRestricted: (eventObject.age > 18),
        clientIdTags: [],

    };
};

var numberOfEvents = 0;

const createClient = function (clientObject) {

    return {
        firstName: clientObject.firstName,
        lastName: clientObject.lastName,
        age: clientObject.age,
        wallet: clientObject.wallet,
        idTag: clientObject.idTag,

        isThisClientVip: clientObject.isThisClientVip,
        numberOfEvents: 0


    };
};
