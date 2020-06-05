document.addEventListener("DOMContentLoaded", function() {
    var lnkAll  = document.querySelector("#lnkAll");
    var lnkNear = document.querySelector("#lnkNear");
    var lnkMap  = document.querySelector("#lnkMap");

    var mapContainer = document.querySelector("#mapContainer");
    var list = document.querySelector("#list ul");
    var listTitle = document.querySelector("#listTitle");

    lnkAll.addEventListener("click", function() {
        var html = "";
        for (var r of restaurants) {
            html += "<li><h3>" + r.name + "</h3>";
            html += "<p><address>" + r.address + "</address></p>";
            html += "</li>";
        }
        list.innerHTML = html;
        listTitle.innerHTML = "All Restaurants";
    });
    lnkNear.addEventListener("click", function() {
        navigator.geolocation.getCurrentPosition(
            function(location) {
                var lat = location.coords.latitude;
                var lon = location.coords.longitude;
                      var table = document.getElementById("table");
                      var row = table.insertRow(1);
                        var cell1 = row.insertCell(0);
                        var cell2 = row.insertCell(1);
                        cell1.innerHTML = lat+" "+lon;
                        cell2.innerHTML ="30";
            },
            function() {
                alert("We can't locate you");
            },
            {
                enableHighAccuracy: true,
                maximumAge: 60000,
                timeout: 5000
            }
        );
    });
    lnkMap.addEventListener("click", function() {
    initMap();
        if (mapContainer.className == "hidden") {
            mapContainer.className = "";
            lnkMap.innerHTML = "show map";      
        } else {
            mapContainer.className = "hidden";
            lnkMap.innerHTML = "show map";            
        }
    });
});

var map;

function initMap() {
    var uluru = {lat: 37.751, lng:-97.822};
    var table = document.getElementById("table");
    var row = table.insertRow(1);
    var cell1 = row.insertCell(0);
    var cell2 = row.insertCell(1);
    cell1.innerHTML = uluru.lat+" "+uluru.lng;
    cell2.innerHTML ="30";
    map = new google.maps.Map(document.getElementById('map'), {
        zoom: 15,
        center: uluru
    });
}

function myFunction() {
    var x = document.getElementById("frm1");
    var id = "";
    lnkMap.innerHTML = "Locate Me";
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
