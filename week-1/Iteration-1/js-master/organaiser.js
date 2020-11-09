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
    }


    addClient(p) {
        if (p.age >= 18) {
            this.clients.push(p);
        }
        else {
            if (this.isForAdults) {
                console.log("you cant add a client under 18!")
            }
            else {
                this.client.push(p);
            }
        }
    }

    removeCLient(client) {
        index = this.clients.indexOf(client);
        this.clients.splice(index, 1);
    }

}

var events = [];
var event1 = new Event1("Megami Opening Party", true);
var event2 = new Event1("Secrets Azis Live", false);
var event3 = new Event1("Bushido Toni Storaro Live", true);

var p1 = new Person("Ivan", "Bekyarov", 16, true);

event1.addClient(p1);


events.push(event1, event2, event3);

listAllEvents();
console.log ("delete event Megami Opening Party");
deleteEventByID(0);
listAllEvents();


function saveAllEvents() {
    events.push(event1, event2, event3);
}

function listAllEvents() {
    for (let ev of events) {

        if (ev.isForAdults) {
            console.log(ev.name + ' 18+');
        }
        else {

            console.log(ev.name + ' for all ages');
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
        if (isForAdults) {
            let event = new Event1(name, true);
        }
        else {
            let event = new Event1(name, false);
        }
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
        if (filterBy && sex == filterBy) {
            console.log(client);
        }
    }
}

function removeCLientOfAnEvent(event, client) {
    event.removeClient(client);
}
