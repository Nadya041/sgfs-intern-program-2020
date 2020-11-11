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

var numberOfEvents = 0;
class Event1 {
    id;
    clients = Array < Person > [];
    constructor(name, isForAdults) {
        this.id = numberOfEvents++;
        this.name = name;
        this.isForAdults = isForAdults;
        this.clients = [];
        if (!name) {
            throw new Error('Whoops!')
        }
    }

    //p = person
    addClient(p) {
        if (p.age >= 18) {
            this.clients.push(p);
            //console.log("You just add new client to this event!")
        }
        else {
            if (this.isForAdults) {
                console.log("You can't add clients under 18 to this event!")
            }
            else {
                this.clients.push(p);
            }
        }
    }
    listClients() {
        console.log("All clients: ");

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

var events = [];
/*var event1 = new Event1("Megami Opening Party", );
var event2 = new Event1("Secrets Azis Live", false);
var event3 = new Event1("Bushido Toni Storaro Live", true); */

var event1 = createEvent("Megami Opening Party");
var event2 = createEvent("Secrets Azis Live", false);
var event3 = createEvent("Bushido Toni Storaro Live", true);

var people = [];
var p1 = new Person("Ivan", "Ivanov", 16, true);
var p2 = new Person("Mihail", "Petrov", 28, true);
var p3 = new Person("Nadya", "Georgieva", 22, false);
var p4 = new Person("Mariya", "Stancheva", 20, false);
var p5 = new Person("Aycan", "Feyzila", 21, true);
var p6 = new Person("Konstantin", "Gogov", 23, true);
var p7 = new Person("Radoslav", "Enev", 22, true);
var p8 = new Person("Peter", "Velickov", 32, true);

people.push(p1, p2, p3, p4, p5, p6, p7, p8);


event1.addClient(p1);
event1.addClient(p2);
event1.addClient(p3);

event2.addClient(p4);
event2.addClient(p5);
event2.addClient(p6);
event2.addClient(p7);

event3.addClient(p8);
event3.addClient(p2);

saveAllEvents();

listAllEvents();
event2.listClients();

console.log("delete event Megami Opening Party");
deleteEventByID(0);



function saveAllEvents() {
    events.push(event1, event2, event3);
}

function listAllEvents() {
    for (let ev of events) {

        if (ev.isForAdults) {
            console.log(ev.name + " : 18+ ");
        }
        else {
            console.log(ev.name + " : no age restriction ");
        }
    }
}

function deleteEventByID(id) {

    eventToDelete = events.find(element => element.id == id);
    index = events.indexOf(eventToDelete);
    events.splice(index, 1);
}


function createEvent(name, isForAdults) {

    try {
        var event;
        if (isForAdults) {
            event = new Event1(name, true);
        }
        else if (isForAdults === undefined) {
            event = new Event1(name, true);
        }
        else {
            event = new Event1(name, false);
        }
        return event
    } catch (err) {
        console.log("Грешка");
    }
}

function updateEventById(id, name, isForAdults) {
    eventToUpdate = events.find(element => element.id == id);
    if (name) {
        eventToUpdate.name(name);
    }
    if (isForAdults) {
        eventToUpdate.isForAdults(isForAdults);
    }
}

function addClientToAnEvent(client, event) {
    if ((event.isForAdults && client.age >= 18) || !event.isForAdults)
        event.addClientToAnEvent(client);
    else {
        console.log("This event is 18+");
    }

}

function getAllCLientsByEvent(event, filterBy) {
    for (let client of event.clients) {
        if (filterBy && isMale == filterBy) {
            console.log(client);
        }
    }
}

function removeCLientOfAnEvent(event, client) {
    event.removeClient(client);
}
