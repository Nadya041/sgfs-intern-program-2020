// class Person {
//     id = 0;

//     constructor(firstName, lastName, age, isMale, wallet, isThisClientVip) {
//         this.firstName = firstName;
//         this.lastName = lastName;
//         this.age = age;
//         this.isMale = isMale;
//         this.id = Person.incrementId();
//         this.wallet = wallet;
//         this.isThisClientVip = isThisClientVip;
//         this.numberOfEvents = 0;
//     }

//     static incrementId() {
//         if (!this.latestId) this.latestId = 1
//         else this.latestId++
//         return this.latestId;
//     }
// }
// var allCLients = [];

// class Event1 {
//     id;
//     clientCollection = Array < Person > [];

//     constructor(name, isForAdults, price) {
//         this.id = numberOfEvents++;
//         this.name = name;
//         this.isForAdults = isForAdults;
//         this.clientCollection = [];
//         this.price = price;

//         if (price) {
//             this.price = price
//             this.name = " $ " + name
//         }

//         else {
//             this.price = 0;
//             this.name = " ! " + name
//         }

//         //AdditionalTask 2. Saving the current date of the event
//         this.currentDate = new Date().toLocaleDateString();
//     }

//     //Adding clients


//     addClient(client) {
//         if (isSystemClose) { //Cheking is the system open
//             console.log(" The operation can not be processed! ")
//         }
//         else {

//             if (this.getIsClientVip()) {              //Cheking if the client is VIP and if it is - adding him/her to the event for free
//                 this.clientCollection.push(client); // adding him to the event
//                 client.numberOfEvents++;           // update the count of the events that he/she went 
//             }

//             else {
//                 if (client.wallet >= this.price) {         //if the clients have enought money in the wallet to enter we add him
//                     this.clientCollection.push(client); // adding him to the event
//                     client.numberOfEvents++;           // update the count of the events that he/she went 
//                     client.wallet -= this.price;      // taking the price for the event out of his wallet
//                     console.log(client.firstName + ", you are in!------------->" + " Now you have " + client.wallet + " bgn left in your wallet! ")
//                 } else {
//                     console.log(client.firstName + ", you are poor go away!--->" + " You have only " + client.wallet + " bgn in your wallet! ")
//                 }

//             }
//         }
//     }

//     //Cheking if the client is VIP 

//     getIsClientVip() {
//         return this.numberOfEvents % 5 == 0 // every time when the result is 0 the client is VIP
//     }

//     listClients() {
//         console.log("Clients of the event - ", this.name, "are: ");

//         for (let cl of this.clientCollection) {
//             console.log(cl.firstName + " " + cl.lastName);

//         }
//     }
// }

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

    clientCollection: [],

    


    addClientToEvent(clientObject) {
        ClientManager.clientCollection.push(clientObject);
    },

    getClientCollection: function () {
        return ClientManager.clientCollection;
    },

    getClient(eventIndex) {
        return ClientManager.clientCollection[eventIndex];
    }
    
};


const createClient = function (clientObject){

    return{
    name            : clientObject.firstName,
    price           : clientObject.lastName,
    age             : clientObject.age,
   };
};
// function addClientToAnEvent(client, event) {

//     if(client.age < 18){
//         return console.log(" This event is 18+ !");
//     }

//     event.addClientToAnEvent(clientObject);
// };

// function removeCLientOfAnEvent(eventObject, clientObject) {
//     eventObject.removeClient(clientObject);
// }

