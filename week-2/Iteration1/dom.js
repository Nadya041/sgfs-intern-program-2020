const actionAddEvent  = document.getElementById("action--add-event");
const eventNameInput  = document.getElementById("event-name");
const eventPriceInput = document.getElementById("event-price");
const eventDateInput  = document.getElementById("event-date");
const eventAgeInput   = document.getElementById("event-age");
const eventListLayout = document.getElementById("event-list--layout");

const renderEventList = () =>{
    

const eventCollection =  EventManager.getEventCollection();

    // if(eventListLayout.length == 0 ){
    //     return '<div> No party </div>';
    // }


var template        = [ `<table>
                       <tbody>`];
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
                  </tr>`);

}
template.push(`</tbody>
            </table>`);
eventListLayout.innerHTML = template.join('');

var eventItemDomCollection = document.getElementsByClassName("event-item-edit--action")
var eventItemDomCollection = document.getElementsByClassName("event-item-delete--action")



for(var i = 0; i < eventItemDomCollection.length; i++){
    eventItemDomCollection[i].addEventListener('click', (e)=>{

     var eventIndex = e.target.getAttribute('item-position');
     console.log(EventManager.getEvent(eventIndex)) ;
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

    //Nulify the dom components
    eventNameInput.value  = "";
    eventPriceInput.value = "";
    eventDateInput.value  = "";
    eventAgeInput.value  = "";

    renderEventList();
});

eventListLayout.addEventListener('çlick', function(e){

});

renderEventList();


