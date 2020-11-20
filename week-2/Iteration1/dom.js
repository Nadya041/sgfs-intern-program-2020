const actionAddEvent   = document.getElementById("action--add-event");
const eventNameInput   = document.getElementById("event-name");
const eventPriceInput  = document.getElementById("event-price");
const eventDateInput   = document.getElementById("event-date");
const eventAgeInput    = document.getElementById("event-age");
const eventListLayout  = document.getElementById("event-list--layout");
const clientListLayout = document.getElementById("event-list--layout");
const actionAddClient  = document.getElementById("")

const renderEventList = () =>{
    

 const eventCollection =  EventManager.getEventCollection();



    // if(eventListLayout.length == 0 ){
    //     return '<div> No party </div>';
    // }


var template        = [ `<table>
                       <tbody>
                       <thead>
                       <tr>
   
                       <td>  Event Name  </td>
                       <td>  Event Price  </td>
                       <td> Event Date </td>
                       <td> Event Restriction </td> </thead>`];
for(var i = 0; i < eventCollection.length; i++) {

    var eventName  = eventCollection[i].name    || '[No name]'
    var eventAge   = eventCollection[i].age     || '[Child friendly]';
    var eventPrice = eventCollection[i].price   || '[free]';
    var eventDate  = eventCollection[i].date    || '[No date yet]';

   template.push( `<tr>
   
                        <td>  
                        ${eventName} 
                        </td>
                        <td> 
                        ${eventPrice} лв 
                        </td>
                        <td>  
                        ${eventDate} 
                        </td>
                        <td>  
                        ${eventAge}
                        </td>
                        <td>  
                        <button action = "edit" item-position="${i}" class="event-item-edit--action" >Edit</button>   
                        </td>
                        <td>  
                        <button action = "delete" item-position="${i}" class="event-item-delete--action" >Delete</button>
                        </td>
                        <td>  
                        <button action = "show-clients" item-position="${i}" class="event-show-clients--action" >Show Clients</button>   
                        </td>
                  </tr>`);

}
 template.push(`</tbody>
            </table>`);
eventListLayout.innerHTML = template.join('');


var eventItemDomEditCollection   = document.getElementsByClassName("event-item-edit--action")
var eventItemDomDeleteCollection = document.getElementsByClassName("event-item-delete--action")


for(var i = 0; i < eventItemDomDeleteCollection.length; i++){
    eventItemDomDeleteCollection[i].addEventListener('click', (e)=>{

     var eventIndex = e.target.getAttribute('item-position');
     
     eventCollection.splice(eventIndex, 1);
     renderEventList();

    });
}

for(var i = 0; i < eventItemDomEditCollection.length; i++){
    eventItemDomEditCollection[i].addEventListener('click', (e)=>{

     var eventIndex = e.target.getAttribute('item-position');
    
    
    
     console.log('name: ',eventCollection);
     eventNameInput.value  =  eventCollection[eventIndex].name;
     eventPriceInput.value =  eventCollection[eventIndex].price;
     eventDateInput.value  =  eventCollection[eventIndex].date;
     eventAgeInput.value   =  eventCollection[eventIndex].age;

      eventName  = eventNameInput.value   || '[No Name]';
      eventAge   = eventPriceInput.value  || '[Child friendly]';
      eventPrice = eventDateInput.value   || '[free]';
      eventDate  = eventAgeInput.value    || '[No date yet]';



     eventCollection.splice(eventIndex, 1);


    renderEventList();

    });
}
   
};

var renderEventCollection = function(){

    eventListLayout.innerHTML = getDomEventCollection();

 };

 actionAddEvent.addEventListener('click', function() {

    var eventName   = eventNameInput.value;
    var eventPrice  = eventPriceInput.value;
    var eventDate   = eventDateInput.value;
    var eventAge    = eventAgeInput.value;
    var eventObject = createEvent({
        name  : eventName,
        price : eventPrice,
        date  : eventDate,
        age   : eventAge
    });

    

    //Create new event
    EventManager.addEvent(eventObject);



    // EventManager.addClient(client);

    
   

    //Nulify the dom components
    eventNameInput.value  = "";
    eventPriceInput.value = "";
    eventDateInput.value  = "";
    eventAgeInput.value   = "";

    renderEventList();
    
});

eventListLayout.addEventListener('çlick', function(e){

});


const renderClientList = () =>{

const clientCollection =  clientManager.getClientCollection();

var templateClients        = [ `<table>
                       <tbody>
                       <thead>
                       <tr>
   
                       <td>  First Name  </td>
                       <td>  Last Name  </td>
                       <td> Age  </td> </thead>`];
for(var i = 0; i < clientCollection.length; i++) {

    var clientFirstName   = clientCollection[i].firstName     || '[First Name]'
    var clientLasttName   = clientCollection[i].lastName     || '[Last Name]';
    var clientAge         = clientCollection[i].age          || '[age]';
   
   templateClients.push( `<tr>
   
                        <td>  
                        ${clientFirstName} 
                        </td>
                        <td> 
                        ${eventPrice} лв 
                        </td>
                        <td>  
                        ${clientLasttName} 
                        </td>
                        <td>  
                        ${clientAge}
                        </td>
                        <td>  
                        <button action = "edit" item-position="${i}" class="client-item-edit--action" >Edit</button>   
                        </td>
                        <td>  
                        <button action = "delete" item-position="${i}" class="client-item-delete--action" >Delete</button>
                        </td>
                        <td>  
                        <button action = "add-clients" item-position="${i}" class="client-itenm-add--action" >Add clients</button>   
                        </td>
                  </tr>`);

}
templateClients.push(`</tbody>
            </table>`);
ClientListLayout.innerHTML = templateClients.join('');

var clientItemDomEditCollection   = document.getElementsByClassName("client-item-edit--action")
var clientItemDomDeleteCollection = document.getElementsByClassName("client-item-delete--action")
var clientItemAddDomShowClients   = document.getElementsByClassName("client-itenm-add--action")
var eventItemDomShowClients       = document.getElementsByClassName("event-show-clients--action")


for(var i = 0; i <eventItemDomShowClients.length; i++){
    eventItemDomShowClients[i].addEventListener('click', (e)=>{

     var eventIndex = e.target.getAttribute('item-position');
     
     clientCollection.show(eventIndex);
     renderEventList();

    });
}

for(var i = 0; i < clientItemDomDeleteCollection; i++){
    clientItemDomDeleteCollection[i].addEventListener('click', (e)=>{

     var clientIndex = e.target.getAttribute('item-position');
     
    clientCollection.splice(clientIndex, 1);
     renderEventList();

    });
}

for(var i = 0; i < clientItemDomEditCollection.length; i++){
    clientItemDomEditCollection[i].addEventListener('click', (e)=>{

     var clientIndex = e.target.getAttribute('item-position');
    

     console.log('name: ',clientCollection);
     clientFirstNameInput.value  =  clientCollection[clientIndex].firstName;
     clientLastNameInput.value =  clientCollection[clientIndex].lastName;
     clientAgeInput.value  =  clientCollection[clientIndex].age;
    

      clientFirstName  = clientFirstNameInput.value   || '[First Name]';
     clientLastName   = clientLastNameInput.value  || '[Last Name]';
      clientAge = clientAgeInput.value   || '[age]';
      


      clientCollection.splice(clientIndex, 1);


      renderClientList();
  
      });
  }
     
  };
  
  var renderClientCollection = function(){
  
      clientListLayout.innerHTML = getDomCkientCollection();
  
   };
  
    actionAddClient.addEventListener('click', function() {

    var clientFirstName   = clientFirstNameInput.value;
    var clientLastName    = clientLastNameInput.value;
    var clientAge         = clientAgeInput.value;
  
    var clientObject = createClient({
        firstName : clientFirstName,
        lastName  : clientLastName,
        age       : clientAge
       
    });


    ClientManager.addClient(clentObject);
    


    //Nulify the dom components
   
    clientFirstNameInput.value = "";
    clientLastNameInput.value  = "";
    eventAgeInput.value   = "";

    renderClientList();

    
});


var renderClientCollection = function(){

    eventListLayout.innerHTML = getDomClientCollection();

 };






renderClisentList();



