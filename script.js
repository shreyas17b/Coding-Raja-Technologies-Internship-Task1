function addNewWEField(){

   let newNode = document.createElement("textarea");
   newNode.classList.add("form-control");
   newNode.classList.add("weField");
   newNode.classList.add("mt-2");
   newNode.setAttribute("rows", 3);
   newNode.setAttribute("placeholder" , "Enter Here");
   newNode.style.backgroundColor = "rgb(232, 232, 232)";

   let weOb = document.getElementById("we");
   let weAddButtonOb = document.getElementById("weAddButton");

   weOb.insertBefore(newNode, weAddButtonOb);
}

function addNewAQField(){
 
    let newNode = document.createElement("textarea");
    newNode.classList.add("form-control");
    newNode.classList.add("eqField");
    newNode.classList.add("mt-2");
    newNode.setAttribute("rows", 3);
    newNode.setAttribute("placeholder" , "Enter Here");
    newNode.style.backgroundColor = "rgb(232, 232, 232)";
    let aqOb = document.getElementById("aq");
    let aqAddButtonOb = document.getElementById("aqAddButton");
 
    aqOb.insertBefore(newNode, aqAddButtonOb);
 }

 function addNewLangField(){
   let newNode = document.createElement("textarea");
    newNode.classList.add("form-control");
    newNode.classList.add("LanguageField");
    newNode.classList.add("mt-2");
    newNode.setAttribute("rows", 3);
    newNode.setAttribute("placeholder" , "Enter Here");
    newNode.style.backgroundColor = "rgb(232, 232, 232)";
    let laOb = document.getElementById("lang");
    let langAddButtonOb = document.getElementById("langAddButton");
 
    laOb.insertBefore(newNode, langAddButtonOb);
 }

 function generateCV(){
  
   let nameField = document.getElementById("nameField").value;

   let nameT1 = document.getElementById("nameT1"); 

   nameT1.innerHTML = nameField;

   document.getElementById("nameT2").innerHTML = nameField;

   document.getElementById("contactT").innerHTML = document.getElementById("contactField").value;

   document.getElementById("addressT").innerHTML = document.getElementById("AddressField").value;

   document.getElementById("fbT").innerHTML = document.getElementById("fbField").value;

   document.getElementById("instaT").innerHTML = document.getElementById("instaField").value;

   document.getElementById("linkedT").innerHTML = document.getElementById("linkedField").value;



   document.getElementById("objectiveT").innerHTML = document.getElementById("objectiveField").value;

   let wes = document.getElementsByClassName("weField");
   let str = "";
   for(let e of wes) {
      str = str + `<li> ${e.value} </li>`;
   }

   document.getElementById("weT").innerHTML = str;

   let aqs = document.getElementsByClassName("eqField");
   let str1 = "";
   for(let e of aqs) {
      str1 = str1 + `<li> ${e.value} </li>`;
   }

   document.getElementById("aqT").innerHTML = str1;

   let file = document.getElementById("imgField").files[0];
   console.log(file);

   let reader = new FileReader();
   reader.readAsDataURL(file);
   console.log(reader.result);

   reader.onloadend = function(){
   document.getElementById("imgTemplate").src=reader.result;
   };

   document.getElementById("cv-form").style.display = "none";
   document.getElementById("cv-template").style.display = "block";
 }

 function printCV(){
   window.print()
 }