require ("../../node_modules/jquery/dist/jquery.js");
require ("../../node_modules/popper.js/dist/popper.js");
require ("../../node_modules/bootstrap/dist/js/bootstrap.min.js");
require ("../../node_modules/bootstrap/scss/bootstrap.scss"); 
require("./keep.js");
require("../scss/style.scss")
$( function() {
    $( ".sortable" ).sortable();
    $( ".sortable" ).disableSelection();
  } );
  $( function() {
    $( ".drag" ).sortable();
    $( ".drag" ).disableSelection();
  } ); 
var k=0;
CreateNewCard = function  (){
  var card = document.createElement("div");
   card.style.width="200px";
   card.style.height="250px";
   card.style.border="gray 1px";
   card.style.boxShadow="0px 0px 1px 1px"
   card.style.borderRadius="15px";
   card.style.background="white";
   card.style.margin="10px 10px 10px 10px";
    var m;
   var no = document.getElementById("cardCreate");
   if(no.childElementCount==0){
     m=1;
   }
   else{
     m=parseInt(no.lastChild.id)+1;
     console.log(no.lastChild.id);
   }
   //setting id to cards
   card.id=m;
  console.log(m);
   var header = document.createElement("h3");
    var headerContent = document.querySelector("#inputLarge").value;
    var list = document.createElement("ul") ;     
    var l = document.getElementById("New-List");
    var child = l.firstChild.nextSibling;
    var Schild = child;
//posting data into json
    let postUrl = "http://localhost:3000/cards";
    let data = {
      "title" : headerContent,
      "items":[],
      "id":card.id
  }
  for(var i=0;i<l.childElementCount;i++){
      data.items.push({
          "listitems" : child.value,
      })
      child = child.nextSibling;
  }
let fetchDat = {
    method: "POST", // *GET, POST, PUT, DELETE, etc.
mode: "cors", // no-cors, cors, *same-origin
cache: "no-cache", // *default, no-cache, reload, force-cache, only-if-cached
credentials: "same-origin", // include, same-origin, *omit
headers: {
"Content-Type": "application/json; charset=utf-8",
// "Content-Type": "application/x-www-form-urlencoded",
},
redirect: "follow", // manual, *follow, error
referrer: "no-referrer", // no-referrer, *client
body: JSON.stringify(data) 
}
fetch(postUrl,fetchDat);
   //heading
     header.innerHTML=headerContent;
     header.style.textAlign="center";
     header.style.borderBottom="solid 1px";
     header.style.fontWeight="400";
     header.style.lineHeight="1.5";
     header.style.marginBottom="0";
  //list
  for(var i=0;i<l.childElementCount;i++){
    var li = document.createElement("li");
     li.innerHTML = Schild.value;
     list.appendChild(li);
     Schild = Schild.nextSibling;
  }
  list.className="sortable";
  //card footer cancel button 
  var butt = document.createElement("button");
  butt.className="btn"+" ";
  butt.className+="cardButt";
  butt.innerHTML="Delete Card"
  butt.onclick = function(){
     //deleting card 
    this.parentElement.remove();
 //deleting card from Json
    fetch('http://localhost:3000/cards/' + card.id, {
      method: "DELETE",
      headers: {
      "Content-Type": "application/json; charset=utf-8",
      }
      })
  };
  //append amd return
  card.appendChild(header);
  card.appendChild(list);
  card.appendChild(butt);
  var container = document.getElementById("cardCreate");
  container.appendChild(card);
  return container;
  }
 //modal adding list item
 createListElement = function(){
  var CardList =document.getElementById("New-List")
  var x = document.createElement("INPUT");
  x.setAttribute("type", "text");
  x.id=CardList.childElementCount;
  x.className="width";
  CardList.appendChild(x);
  return CardList;
  }
  //remove last child for delete listitem button
  RemoveLastChild = function(){
    var lc = document.getElementById("New-List");
    if(lc.childElementCount>0){
    lc.removeChild(lc.lastChild);;
    }
  }
//when modal is closed refresing the dta and input fields
  RefreshModal = function(){
    document.getElementById("inputLarge").value = null;
    var rl = document.getElementById("New-List");
      for(var i=0;i<rl.childElementCount;){
        RemoveLastChild();
      }
  }
//Get Data from Json
getjsondata = function(){
  let getUrl = "http://localhost:3000/cards";
fetch(getUrl)
.then((resp)=>resp.json())
.then(function(data){
    data.map(function(dat){
        dat.items.map(function(listItem){
        })
    })
    for(var j=0;j<data.length;j++){
    CreateNewCard2(data[j]);
 }
    });
}
//creting cards using json data
CreateNewCard2 = function  (data){
  var card = document.createElement("div");
   card.style.width="200px";
   card.style.height="250px";
   card.style.border="gray 1px";
   card.style.boxShadow="0px 0px 1px 1px"
   card.style.borderRadius="15px";
   card.style.background="white";
   card.style.margin="10px 10px 10px 10px";
   card.id=data.id;
   //heading
  var header = document.createElement("h3");
    var headerContent = document.querySelector("#inputLarge").value;
     header.innerHTML= `${data.title}`;
     header.style.textAlign="center";
     header.style.borderBottom="solid 1px";
     header.style.fontWeight="400";
     header.style.lineHeight="1.5";
     header.style.marginBottom="0";
  //list
  var list = document.createElement("ul") ;     
  var l = document.getElementById("New-List");
  var child = l.firstChild.nextSibling;
  for(var i=0;i<data.items.length;i++){
    var li = document.createElement("li");
     li.innerHTML = data.items[i].listitems;
     list.appendChild(li);
  }
  list.className="sortable";
  //card footer cancel button 
  var butt = document.createElement("button");
  butt.className="btn"+" ";
  butt.className+="cardButt";
  butt.innerHTML="Delete Card"
  butt.onclick = function(){
  //deleating card
    this.parentElement.remove();
  //deleating card from json
    fetch('http://localhost:3000/cards/' + data.id, {
      method: "DELETE",
      headers: {
      "Content-Type": "application/json; charset=utf-8",
      }
      }) 
      };
  //append amd return
  card.appendChild(header);
  card.appendChild(list);
  card.appendChild(butt);
  var container = document.getElementById("cardCreate");
  container.appendChild(card);
  return container;
  }
  //get card automatically fro json on refresh
  getjsondata();