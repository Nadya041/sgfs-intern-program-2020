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
    clients = Array < Person > [];
    constructor(name, isForAdults) {
        this.id = numberOfEvents++;
        this.name = name;
        this.isForAdults = isForAdults;
        this.clients = [];
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
            this.clients.push(client);
        }
    }

    listClients() {
        console.log("Clients of the event - ", this.name, "are: ");

        for (let cl of this.clients) {
            console.log(cl.firstName + " " + cl.lastName);

        }
    }

    removeCLient(client) {
        index = this.clients.indexOf(client);
        this.clients.splice(index, 1);
        console.log("You just removed a client from this event!")
    }
}

//Task 1. Collection of all events which are created
var events = [];

//Task 2. Listing of all events with all the information
function listAllEvents() {
    for (let ev of events) {

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

    for (let ev of events) {
        if (ev.id == id) {
            events.splice(events.indexOf(ev), 1);
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
            events.push(event);
            // console.log('event: ', event.name);
            // console.log('date: ', event.currentDate);
            return event;
        } catch (err) {
            event = new Event1('event ' + events.length, false);
            events.push(event);
            return event;
        }
    }

}

//Task 5. Updating event by ID
function updateEventById(id, name, isForAdults) {
    eventToUpdate = events.find(element => element.id == id);
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
    for (let client of event.clients) {
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

    for (let ev of events) {
        if (ev.clients.length > largestNumberOfPeople) {
            largestNumberOfPeople = ev.clients.length;
        }

    }
    if (largestNumberOfPeople == 0) {
        console.log("There are no people in the parties")
    }

    else {
        var biggestParties = events.filter(ev => ev.clients.length == largestNumberOfPeople)
        console.log("The biggest parties are " + biggestParties.length + " and they are with " + largestNumberOfPeople + " people!")
        for (let ev of biggestParties) {
            console.log(ev.name)
        }

    }

}

//AdditionalTask 4. Showing all no-age-restricted events
function listAllNoAgeRestrictedParties() {
    console.log("No age restrictited partiest are : ");
    for (let ev of events) {

        if (!ev.isForAdults) {
            console.log(ev.name);
        }
    }
}

//AdditionalTask 5. Grouping the events by age restriction (*-18+ ; #no age restriction)
function listAllEventsGroupedByRestriction() {
    var allRestrictedEvents = [];
    var allNoRestrictedEvents = [];
    for (let ev of events) {

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

//     for (let ev of events) {

//         if (ev.name = "Azis") {
//             console.log(events.indexOf('Azis'));
//         }
//         break;
//     }
//     for (let ev of events) {

//         if (ev.isForAdults) {
//             fiterByIsForAdults.push(ev);
//         }
//         else {
//             fiterByIsNotForAdults.push(ev);
//         }
//     }
// }

var event1 = createEvent("Megami Grand Opening", true);
var event2 = createEvent("Secrets Azis Live", false);
var event3 = createEvent("Bushido Toni Storaro Live", true);
var event4 = createEvent("Bedroom 100 Kila", true);
var event5 = createEvent("The One Suzanita", false);



var p1 = new Person("Ivan", "Ivanov", 16, true);
var p2 = new Person("Mihail", "Petrov", 28, true);
var p3 = new Person("Nadya", "Georgieva", 22, false);
var p4 = new Person("Mariya", "Stancheva", 20, false);
var p5 = new Person("Aycan", "Feyzila", 21, true);
var p6 = new Person("Konstantin", "Gogov", 23, true);
var p7 = new Person("Radoslav", "Enev", 22, true);
var p8 = new Person("Peter", "Velickov", 32, true);

allCLients.push(p1, p2, p3, p4, p5, p6, p7);


event1.addClient(p1);
event1.addClient(p2);
event1.addClient(p3);
event1.addClient(p5);


event2.addClient(p4);
event2.addClient(p5);
event2.addClient(p6);
event2.addClient(p7);

event3.addClient(p8);
event3.addClient(p2);

listAllEvents();
event2.listClients();

deleteEventByID(15);

listAllNoAgeRestrictedParties()
showBiggestEvents();
toggleSystemClose();
event3.addClient(p8);
console.log('The system is open now!');
toggleSystemClose();
event3.addClient(p8);
toggleSystemClose();
listAllEventsGroupedByRestriction();
//filterByNameAndIsForAdults("Secrets Azis Live", false)




