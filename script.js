var x = navigator.geolocation;
x.getCurrentPosition(success, failure);


function success(position){
  var myLat = position.coords.latitude;
  var myLong = position.coords.longitude;
  $("#lat").html(myLat);
  $("#long").html(myLong);
  
  //google-API-ready lat and long string
  
  var coords = new google.maps.LatLng(myLat,myLong);
  //alert(coords);
  //coords = "47.6101,-122.3421";
 // var coords = "47.6101,-122.3421";
//  alert(coords);
  //setting up google map
  
  var mapOptions = {
    zoom:16,
    center: coords,
    mapTypeId: google.maps.MapTypeId.ROADMAP
    
  }
  var map = new google.maps.Map(document.getElementById("map"),mapOptions); 
  
  
}


function showmap(e) {
  
   
  
  //  lat = position.coords.latitude;
  //  lon = position.coords.longitude;
  

  lat = "47.6101";
  lon = "-122.3421";
  var latlon = new google.maps.LatLng(lat,lon);
  alert(latlon); 
  
 var mapOptions = {
    zoom:16,
    center: latlon,
    mapTypeId: google.maps.MapTypeId.ROADMAP
    
  }

  var map = new google.maps.Map(document.getElementById("map"),mapOptions);

   /* mapholder = document.getElementById('mapholder')
    mapholder.style.height = '250px';
    mapholder.style.width = '500px';

    var myOptions = {
    center:latlon,zoom:14,
    mapTypeId:google.maps.MapTypeId.ROADMAP,
    mapTypeControl:false,
    navigationControlOptions:{style:google.maps.NavigationControlStyle.SMALL}
    }
    
    var map = new google.maps.Map(document.getElementById("mapholder"), myOptions);
    var marker = new google.maps.Marker({position:latlon,map:map,title:"You are here!"});*/
}

function failure(){
  $("#lat").html("<p>Co-ordinates not available</p>");
}