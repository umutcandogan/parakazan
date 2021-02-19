
  
function button1(){
    var name = document.getElementById("name").value;
    var subject = document.getElementById("subject").value;
	if (name.length == 0 || subject.length==0){
    alert("Please fill in all of the required fields.");
    }
    else{
    addRow1();
    resetForm();
    }
   
}

function button2(){
    var name = document.getElementById("name2").value;
	if (name.length == 0){
    alert("Please fill in all of the required fields.");
    }
    else{
    addRow2();
    resetForm2();
    }
}
      
function addRow1() {
          
    var name = document.getElementById("name");
    var subject = document.getElementById("subject");
    var cluster= document.getElementById("cluster");
 
    var row = document.getElementById("table").insertRow();
 
    row.insertCell(0).innerHTML= name.value;
    row.insertCell(1).innerHTML= subject.value;
    row.insertCell(2).innerHTML= cluster.value;
    
 
}

function addRow2() {
          
    var name2 = document.getElementById("name2");
    var type = document.getElementById("type");
    
    var row2 = document.getElementById("table2").insertRow();
 
    row2.insertCell(0).innerHTML= type.value;
    row2.insertCell(1).innerHTML= name2.value;
  


 
}

function resetForm() {
  document.getElementById("form").reset();
}
function resetForm2() {
  document.getElementById("form2").reset();
}
 function display1() {
     document.getElementById("teacherform").style.display = "block";
     document.getElementById("sportsform").style.display = "none";
 }
 function display2() {
     document.getElementById("sportsform").style.display = "block";
     document.getElementById("teacherform").style.display = "none";
 }
