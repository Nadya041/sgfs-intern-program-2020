var numberOfEvents = 0;
var isSystemClose = false;


class Person {
    id = 0;

    constructor(firstName, lastName, age, isMale) {
        this.firstName = firstName;
        this.lastName = lastName;
        this.age = age;
        this.isMale = isMale;
        this.id = Person.incrementId();
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

    constructor(name, isForAdults) {
        this.id = numberOfEvents++;
        this.name = name;
        this.isForAdults = isForAdults;
        this.clientCollection = [];

        //AdditionalTask 2. Saving the current date of the event
        this.currentDate = new Date().toLocaleDateString();
    }

    addClient(client) {
        if (isSystemClose) {
            console.log("The operation can not be processed! ")
        }
        else {
            if (allCLients.indexOf(client) == -1) {
                allCLients.push(client);
            }
            this.clientCollection.push(client);
        }
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

//Task 2. Listing of all events with all the information
function listAllEvents() {
    for (let ev of eventCollection) {

        if (ev.isForAdults) {
            console.log(ev.name + " : 18+ " + "Date: ", ev.currentDate);
        }
        else {
            console.log(ev.name + " : no age restriction " + "Date: ", ev.currentDate);
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

//Task 4. Creating event with name and age-restriction parameters
function createEvent(name, isForAdults) {

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
                event = new Event1(name, true);
            }
            else {
                event = new Event1(name, false);
            }
            eventCollection.push(event);

            return event;

        } catch (err) {
            event = new Event1('event ' + eventCollection.length, false);
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

//AdditionalTask 1. Stop adding clients or events on central level
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

//AdditionalTask 4. Showing all no-age-restricted events
function listAllNoAgeRestrictedParties() {
    console.log("No age restrictited partiest are : ");
    for (let ev of eventCollection) {

        if (!ev.isForAdults) {
            console.log(ev.name);
        }
    }
}

//AdditionalTask 5. Grouping the events by age restriction (*-18+ ; #no age restriction)
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

//AdditionalTask 6. Fitering the events by name and age restriction and displayng only the ones who follow the criterias
//function filterByNameAndIsForAdults(name, isForAdults) {
//     var fiterByIsForAdults = [];
//     var fiterByIsNotForAdults = [];
//     var filterByName = [];

//     for (let ev of eventCollection) {

//         if (ev.name = "Azis") {
//             console.log(events.indexOf('Azis'));
//         }
//         break;
//     }
//     for (let ev of eventCollection) {

//         if (ev.isForAdults) {
//             fiterByIsForAdults.push(ev);
//         }
//         else {
//             fiterByIsNotForAdults.push(ev);
//         }
//     }
// }

//We create our events here:
var event1 = createEvent("Megami Grand Opening", true);
var event2 = createEvent("Secrets Azis Live", false);
var event3 = createEvent("Bushido Toni Storaro Live", true);
var event4 = createEvent("Bedroom 100 Kila", true);
var event5 = createEvent("The One Suzanita", false);


//We create our clients here:
var p1 = new Person("Ivan", "Ivanov", 16, true);
var p2 = new Person("Mihail", "Petrov", 28, true);
var p3 = new Person("Nadya", "Georgieva", 22, false);
var p4 = new Person("Mariya", "Stancheva", 20, false);
var p5 = new Person("Aycan", "Feyzila", 21, true);
var p6 = new Person("Konstantin", "Gogov", 23, true);
var p7 = new Person("Radoslav", "Enev", 22, true);
var p8 = new Person("Peter", "Velickov", 32, true);

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
event2.addClient(p7);

//Adding clients to event3
event3.addClient(p8);
event3.addClient(p2);

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

//Closing system
toggleSystemClose();

//Displaying all events grouped by age restriction
listAllEventsGroupedByRestriction();

//filterByNameAndIsForAdults("Secrets Azis Live", false)




