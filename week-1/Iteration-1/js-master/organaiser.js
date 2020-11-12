var numberOfEvents = 0;
var isSystemClose  = false;

class Person {
    id = 0;

    constructor(firstName, lastName, age, isMale, wallet, isThisClientVip) {
        this.firstName       = firstName;
        this.lastName        = lastName;
        this.age             = age;
        this.isMale          = isMale;
        this.id              = Person.incrementId();
        this.wallet          = wallet;
        this.isThisClientVip = isThisClientVip;
        this.numberOfEvents  = 0;
    }

    static incrementId() {
        if (!this.latestId) this.latestId = 1
        else this.latestId++
        return this.latestId;
    }
}
var allCLients = [];

class Event1 {
    id;
    clientCollection = Array < Person > [];

    constructor(name, isForAdults, price) {
        this.id               = numberOfEvents++;
        this.name             = name;
        this.isForAdults      = isForAdults;
        this.clientCollection = [];
        this.price            = price;

        if (price) {
            this.price = price
            this.name  = " $ " + name
        }

        else {
            this.price = 0;
            this.name  = " ! " + name
        }
    
        //AdditionalTask 2. Saving the current date of the event
        this.currentDate = new Date().toLocaleDateString();
    }
    
    //Cheking is the system open
    //Cheking if the client is VIP and if it is - adding him/her to the event for free
    //Checking if the clients have enought money in the wallet to enter in a event and adding them or not
    //Every time we add a client to an event we also update the count of the events that he/she went 

     addClient(client) {
        if (isSystemClose) {
            console.log(" The operation can not be processed! ")
        }
        else{

            if (this.getIsClientVip()){
                this.clientCollection.push(client);
                client.numberOfEvents++;
            }
            
            else {
                if(client.wallet >= this.price){
                    this.clientCollection.push(client);
                    client.numberOfEvents++;
                    client.wallet -= this.price;
                    console.log(client.firstName +  ", you are in!------------->" + " Now you have "  + client.wallet + " bgn left in your wallet! ")
                }else{
                    console.log( client.firstName + ", you are poor go away!--->" + " You have only " + client.wallet + " bgn in your wallet! ")
                }
                
            }
        }
    }

   //Cheking if the client is VIP by Modulus Division with 5 on all client' events
   // In this way every time when the result is 0 the client is VIP
     getIsClientVip() {
        return this.numberOfEvents % 5 == 0
    }
    
    listClients() {
        console.log("Clients of the event - ", this.name, "are: ");

        for (let cl of this.clientCollection) {
            console.log(cl.firstName + " " + cl.lastName);

        }
    }

    removeCLient(client) {
        index = this.clientCollection.indexOf(client);
        this.clientCollection.splice(index, 1);
        console.log("You just removed a client from this event!")
    }
}

//Task 1. Collection of all events which are created
var eventCollection = [];

//Task 2. Listing of all events with all the information for them
function listAllEvents() {
    for (let ev of eventCollection) {

        if (ev.isForAdults) {
            console.log( ev.name  + " : You must be 18+    | " + " Date: ", ev.currentDate, " | Price: " + ev.price + " bgn" );
        }
        else {
            console.log( ev.name  + " : No age restriction | " + " Date: ", ev.currentDate, " | Price: " + ev.price + " bgn");
        }
    }
}

//Task 3. Deleting event by ID
function deleteEventByID(id) {

    for (let ev of eventCollection) {
        if (ev.id == id) {
            eventCollection.splice(eventCollection.indexOf(ev), 1);
            console.log("delete event: ", eventToDelete.name);
        }
    }
}

//Task 4. Creating event with name, age restriction and price parameters
function createEvent(name, isForAdults, price) {

    if (isSystemClose) {
        console.log("The operation can not be processed! ")
    }
    else {
        try {
            if (!name) {
                throw new Error(" Error : There is no name of the event! ")
            }

            var event;

            if (isForAdults) {
                event = new Event1(name, true, price);
            }
            else {
                event = new Event1(name, false, price);
            }
            eventCollection.push(event);

            return event;

        } catch (err) {
            event = new Event1( " event " + eventCollection.length, false);
            eventCollection.push(event);
            return event;
        }
    }

}

//Task 5. Updating event by ID
function updateEventById(id, name, isForAdults) {

    eventToUpdate = eventCollection.find(element => element.id == id);
    if (name) {
        eventToUpdate.name(name);
    }
    if (isForAdults) {
        eventToUpdate.isForAdults(isForAdults);
    }
}

//Task 6. Adding clients to an existing event
function addClientToAnEvent(client, event) {
    if ((event.isForAdults && client.age >= 18) || !event.isForAdults)
        event.addClientToAnEvent(client);
    else {
        console.log("This event is 18+");
    }

}

//Task 7. Listing all clients on one event and filtering them by gender
function getAllCLientsByEvent(event, filterBy) {

    for (let client of event.clientCollection) {
        if (filterBy && isMale == filterBy) {
            console.log(client);
        }
    }
}

//Task 8. Deleting an existing client from an event
function removeCLientOfAnEvent(event, client) {
    event.removeClient(client);
}

//AdditionalTask 1. Stop and start adding clients or events on central level
function toggleSystemClose() {
    isSystemClose = !isSystemClose;
}

//AdditionalTask 3. Showing the bigges event and displaying messages if there is no clients and if they are with equal number of clients
function showBiggestEvents() {

    var largestNumberOfPeople = 0;

    for (let ev of eventCollection) {
        if (ev.clientCollection.length > largestNumberOfPeople) {
            largestNumberOfPeople = ev.clientCollection.length;
        }

    }
    if (largestNumberOfPeople == 0) {
        console.log("There are no people in the parties")
    }

    else {
        var biggestParties = eventCollection.filter(ev => ev.clientCollection.length == largestNumberOfPeople)
        console.log("The biggest parties are " + biggestParties.length + " and they are with " + largestNumberOfPeople + " people!")
        for (let ev of biggestParties) {
            console.log(ev.name)
        }

    }

}

//AdditionalTask 4. Showing all no age restricted events
function listAllNoAgeRestrictedParties() {
    console.log("No age restrictited partiest are : ");
    for (let ev of eventCollection) {

        if (!ev.isForAdults) {
            console.log(ev.name);
        }
    }
}

//AdditionalTask 5. Grouping the events by age restriction ( " * " for 18+ ;  " # " for no age restriction)
function listAllEventsGroupedByRestriction() {
    var allRestrictedEvents   = [];
    var allNoRestrictedEvents = [];
    
    for (let ev of eventCollection) {

        if (ev.isForAdults) {
            allRestrictedEvents.push(ev);
        }
        else {
            allNoRestrictedEvents.push(ev);
        }

    }
    for (let ev of allRestrictedEvents) {

        console.log(" * " + ev.name);

    }
    for (let ev of allNoRestrictedEvents) {

        console.log(" # " + ev.name);

    }

}

// AdditionalTask 6. Fitering the events by name and age restriction and displayng only the ones who follow the criterias
function filterByNameAndIsForAdults(name, isForAdults) {
    var fiterByIsForAdults    = [];
    var filterByName          = [];

    for (let ev of eventCollection) {

        if (ev.name.indexOf(name) > -1) {
            filterByName.push(ev);
        }
    }

    for (let ev of filterByName) {

        if (ev.isForAdults == isForAdults) {
            fiterByIsForAdults.push(ev);
        }
    }

   for (let ev of fiterByIsForAdults){
        console.log ("Your filtered events are: " + ev.name )
   }
}

//We create our events here:
var event1 = createEvent("Megami Grand Opening", true, 15);
var event2 = createEvent("Secrets Azis Live", false, 20);
var event3 = createEvent("Bushido Fiki Live", true, 10);
var event4 = createEvent("Bedroom 100 Kila", true);
var event5 = createEvent("The One Suzanita", false, 50);


//We create our clients here:
var p1 = new Person("Ivan", "Ivanov", 16, true, 100);
var p2 = new Person("Mihail", "Petrov", 28, true, 50);
var p3 = new Person("Nadya", "Georgieva", 22, false, 68);
var p4 = new Person("Mariya", "Stancheva", 20, false, 45);
var p5 = new Person("Aycan", "Feyzila", 21, true, 5);
var p6 = new Person("Konstantin", "Gogov", 23, true, 1);
var p7 = new Person("Radoslav", "Enev", 22, true, 3);
var p8 = new Person("Peter", "Velickov", 32, true, 75);

//Filling our array of clients
allCLients.push(p1, p2, p3, p4, p5, p6, p7);

//Adding clients to event1
event1.addClient(p1);
event1.addClient(p2);
event1.addClient(p3);
event1.addClient(p5);

//Adding clients to event2
event2.addClient(p4);
event2.addClient(p5);
event2.addClient(p6);
event2.addClient(p2);

//Adding clients to event3
event3.addClient(p8);
event3.addClient(p2);

//Adding clients to event4
event4.addClient(p2);
event4.addClient(p8);

//Adding clients to event5
event5.addClient(p3);
event5.addClient(p2);


//Displaying all client
listAllEvents();

//Displaying all clients in event2
event2.listClients();

//Deleting event by ID 15 (no such event)
deleteEventByID(15);

//Displaying all no age restricted events
listAllNoAgeRestrictedParties()

//Displaying the event with most clients
showBiggestEvents();

//Closing system
toggleSystemClose();

//Trying to add client to event3
event3.addClient(p8);

//System is open
console.log('The system is open now!');

//Closing system
toggleSystemClose();

//Trying to add client to event3
event3.addClient(p8);

//Displaying all events grouped by age restriction
listAllEventsGroupedByRestriction();

//Filtering by name and age restriction
filterByNameAndIsForAdults("Secrets Azis Live", false)









