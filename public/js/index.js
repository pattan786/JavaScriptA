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
   card.style.border="solid 3px";
   card.style.background="white";
   card.style.margin="10px 10px 10px 10px";
   var m;
   var no = document.getElementById("cardCreate");
   if(no.childElementCount==0){
     m=1;
   }
   else{
     m=parseInt(no.lastChild.id)+1;
   }
   card.id=m;
   
   //heading
  var header = document.createElement("h3");
    var headerContent = document.querySelector("#inputLarge").value;
     header.innerHTML=headerContent;
     header.style.textAlign="center";
     header.style.borderBottom="solid";
  //list
  var list = document.createElement("ul") ;     
  var l = document.getElementById("New-List");
  var child = l.firstChild.nextSibling;
  for(var i=0;i<l.childElementCount;i++){
    var li = document.createElement("li");
     li.innerHTML = child.value;
     list.appendChild(li);
     child = child.nextSibling;
  }
  list.className="sortable";
  //card footer cancel button 
  var butt = document.createElement("button");
  butt.className="btn"+" ";
  butt.className+="cardButt";
  butt.innerHTML="Delete Card"
  butt.onclick = function(){
    this.parentElement.remove();
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


  //Deleting card 

  // function DeleteCard(w){
  //   $("#"+w).remove;
    
  // }


  

  RemoveLastChild = function(){
    
    var lc = document.getElementById("New-List");
    if(lc.childElementCount>0){
      console.log(lc.childElementCount)
    lc.removeChild(lc.lastChild);;
    }
  }

  // RefreshModal = function(){
    
  //   document.getElementById("inputLarge").value = "";
  //   var rl = document.getElementById("New-List");
  //   for(var x=0;x<rl.childElementCount;x++){
      
  //   }
  // }


















