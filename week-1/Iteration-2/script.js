

var eventCollection = [];

var event1 = createEvent("Megami Grand Opening", true, 15);
var event2 = createEvent("Secrets Azis Live", false, 20);
var event3 = createEvent("Bushido Fiki Live", true, 10);
var event4 = createEvent("Bedroom 100 Kila", true);
var event5 = createEvent("The One Suzanita", false, 50);

eventCollection.push(event1);
eventCollection.push(event2);
eventCollection.push(event3);
eventCollection.push(event4);
eventCollection.push(event5);

var btn = document.createElement('action--show-all-events');

// var arr = [
//     [0,1,2],
//     [1,2,3],
//     [2,3,4]
// ];

// var body, tab, tr, td, tn, row, col;
// body = document.getElementsByTagName('body')[0];
// tab = document.createElement('table');
// for (row=0; row < arr.length; row++){
//     tr = document.createElement('tr');
//     for (col=0; col < arr[row].length; col++){
//         td = document.createElement('td');
//         tn = document.createTextNode(arr[row][col]);
//         td.appendChild(tn);
//         tr.appendChild(td);
//     }
//     tab.appendChild(tr);
// }
// body.appendChild(tab);

// function makeTableHTML(eventCollection) {
//     var result = "<table border=1>";
//     for(var i=0; i<eventCollection.length; i++) {
//         result += "<tr>";
//         for(var j=0; j<eventCollection[i].length; j++){
//             result += "<td>"+eventCollection[i][j]+"</td>";
//         }
//         result += "</tr>";
//     }
//     result += "</table>";

//     return result;
// }

// function createTable() {
//     var myTableDiv = document.getElementById("myDynamicTable");
  
//     var table = document.createElement('TABLE');
//     table.border = '1';
  
//     var tableBody = document.createElement('TBODY');
//     table.appendChild(tableBody);
  
//     for (var i = 0; i < eventCollection.length; i++) {
//       var tr = document.createElement('TR');
//       tableBody.appendChild(tr);
  
//       for (var j = 0; j < 3; j++) {
//         var td = document.createElement('TD');
//         td.width = '75';
//         td.appendChild(document.createTextNode( i + "," + j));
//         tr.appendChild(td);
//       }
//     }
//     myTableDiv.appendChild(table);
//   }
//   createTable();

//   var btn = document.createElement('button');
//   btn.innerHTML = "Show all events";
//   document.body.appendChild(btn);
//   btn.addEventListener("click", createTable, true);
//   function createTable(){
// var div = document.createElement('div');
// div.setAttribute("id", "tbl");
// document.body.appendChild(div)
// 	document.getElementById("tbl").innerHTML = "<table border = '1'>" +
//   '<tr>' +
//     '<th>Header 1</th>' +
//     '<th>Header 2</th> ' +
//     '<th>Header 3</th>' +
//   '</tr>' +
//   '<tr>' +
//     '<td>Data 1</td>' +
//     '<td>Data 2</td>' +
//     '<td>Data 3</td>' +
//   '</tr>' +
//   '<tr>' +
//     '<td>Data 1</td>' +
//     '<td>Data 2</td>' +
//     '<td>Data 3</td>' +
//   '</tr>' +
//   '<tr>' +
//     '<td>Data 1</td>' +
//     '<td>Data 2</td>' +
//     '<td>Data 3</td>' +
//   '</tr>' 
// };

// var customerEgnInput            = undefined;
// var actionProcessDocumentButton = undefined;
// var eventListenerProcessor      = undefined;

// customerEgnInput                = document.getElementById("customer-egn");
// actionProcessDocumentButton     = document.getElementById("action--process-document");

// var messageDiv                  = document.getElementById("message");

// let mountains = [
//     { name: "Monte Falco", height: 1658, place: "Parco Foreste Casentinesi" },
//     { name: "Monte Falterona", height: 1654, place: "Parco Foreste Casentinesi" },
//     { name: "Poggio Scali", height: 1520, place: "Parco Foreste Casentinesi" },
//     { name: "Pratomagno", height: 1592, place: "Parco Foreste Casentinesi" },
//     { name: "Monte Amiata", height: 1738, place: "Siena" }
//   ];
  
//   function generateTableHead(table, data) {
//     let thead = table.createTHead();
//     let row = thead.insertRow();
//     for (let key of data) {
//       let th = document.createElement("th");
//       let text = document.createTextNode(key);
//       th.appendChild(text);
//       row.appendChild(th);
//     }
//   }
  
//   function generateTable(table, data) {
//     for (let element of data) {
//       let row = table.insertRow();
//       for (key in element) {
//         let cell = row.insertCell();
//         let text = document.createTextNode(element[key]);
//         cell.appendChild(text);
//       }
//     }
//   }
  
//   let table = document.querySelector("table");
//   let data = Object.keys(mountains[0]);
//   generateTableHead(table, data);
//   generateTable(table, mountains);

// console.log(customerEgnInput.id);
// console.log(customerEgnInput.type);
// console.log(customerEgnInput.value);

// //
// var verifyUserEgn = function() {

// };

// var isEgnValid = function() {

// };


// var doesEgnExistsInVerifyPersonList = function(verifableEgn) {

//     var veryfiyEgnCollection = [
//         '9205044582', 
//         '9205044581',
//         '9205044580'
//     ];

//     for(var i = 0; i < veryfiyEgnCollection.length; i++) {
//         if(veryfiyEgnCollection[i] == verifableEgn) return true;
//     }

//     return false;
// }



// // eventListenerProcessor();
// function eventListenerProcessorNamed() {
//     console.log("Process user sequrity infromation");
// };

// eventListenerProcessor = function() {
//     console.log("Process user sequrity infromation : Anonimus function");
// };

// // console.log(eventListenerProcessorNamed);
// // console.log(eventListenerProcessor);

// var handledocumentProcessor = function() {

//     var customerEgn = customerEgnInput.value;
//     if(doesEgnExistsInVerifyPersonList(customerEgn)) {
//         return messageDiv.innerHTML = "Person is verify";
//     }

//     customerEgnInput.value = "";
//     messageDiv.innerHTML = "No No NO";
//     messageDiv.style.color = "#ff0000";
// }

// // add event
// customerEgnInput.addEventListener('keydown', function() {
//     console.log("Typeing ...");
// });

// customerEgnInput.addEventListener('change', handledocumentProcessor);

// actionProcessDocumentButton.addEventListener('click', handledocumentProcessor);

// //var eventAdd               = document.getElementById("add-event");
// //var actionAddEventDocument = document.getElementById("action--add-event");
// var showAllEvents          = document.getElementById("action--show-all-events");
// let allData                = document.getElementById("addDataHere");

// function addData(){
//     var eventName = document.getElementById("eventName").value;
//     var newRow = document.createElement("tr");
//     var newCell = document.createElement("td");
//     newCell.innerHTML = eventName;
//     newRow.append(newCell);
//     document.getElementById("rows").appendChild(newRow);
//     document.getElementById("eventName").value = '';
  
  
//   }

// showAllEvents.addEventListener('click', () => {
//     allData.innerHTML = "";

//     eventCollection.forEach(element => {
//         let item = document.createElement("row");
//         item.className = "d-block";
//         var isForAdults = element.isForAdults ? " 18+ " : " No age restriction ";
//         item.innerText = element.name + "---PRICE:---" +element.price+ "---AGE CATEGORY:---" +isForAdults+ "---DATE:---" +element.date;
//         allData.appendChild(item);
//     });

// });

// //add event
// actionAddEventDocument.addEventListener("click", function(){

// });
