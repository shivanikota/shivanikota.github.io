
function myFunction() {
    var x = document.getElementById("frm1");
    var id = "";
    id = x.elements[0].value;
    if(id=="1000")
    {
       document.getElementById("table").deleteRow(1);
      document.getElementById("h2").innerHTML ="Hai Malavika";
      document.getElementById("vtype").innerHTML ="Mercedes Benz S class";
      var table = document.getElementById("table");
    var row = table.insertRow(1);
    var cell1 = row.insertCell(0);
    var cell2 = row.insertCell(1);
    cell1.innerHTML = "11.8745° N, 75.3704° E";
  cell2.innerHTML ="30";
    }
    else if(id=="1001")
    {
        document.getElementById("table").deleteRow(1);
      document.getElementById("h2").innerHTML ="Hai shijon";
      document.getElementById("vtype").innerHTML ="Mercedes Benz S class";
      var table = document.getElementById("table");
    var row = table.insertRow(1);
    var cell1 = row.insertCell(0);
    var cell2 = row.insertCell(1);
    cell1.innerHTML = "11.8745° N, 75.3704° E";
  cell2.innerHTML ="30";
    }
    else if(id=="1002")
    {
          document.getElementById("table").deleteRow(1);
      document.getElementById("h2").innerHTML ="Hai shivani";
      document.getElementById("vtype").innerHTML ="Mercedes Benz S class";
      var table = document.getElementById("table");
    var row = table.insertRow(1);
    var cell1 = row.insertCell(0);
    var cell2 = row.insertCell(1);
    cell1.innerHTML = "11.8745° N, 75.3704° E";
  cell2.innerHTML ="30";
    }
    else if(id ="1003"){
             document.getElementById("table").deleteRow(1);
      document.getElementById("h2").innerHTML ="Hai Emil";
      document.getElementById("vtype").innerHTML ="Mercedes Benz C class";
      var table = document.getElementById("table");
    var row = table.insertRow(1);
    var cell1 = row.insertCell(0);
    var cell2 = row.insertCell(1);
    cell1.innerHTML = "11.8745° N, 75.3704° E";
  cell2.innerHTML ="30";
    }
    else if(id="1005"){
               document.getElementById("table").deleteRow(1);
      document.getElementById("h2").innerHTML ="Hai Emil";
      document.getElementById("vtype").innerHTML ="Mercedes Benz S class";
      var table = document.getElementById("table");
    var row = table.insertRow(1);
    var cell1 = row.insertCell(0);
    var cell2 = row.insertCell(1);
    cell1.innerHTML = "11.8745° N, 75.3704° E";
  cell2.innerHTML ="30";
    }
    else
    {
        alert("Number is invalid");
    }
}
