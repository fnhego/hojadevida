function getLocation() {
    if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition(initialize2);
    } else { 
        window.alert("Este navegador no soporta Geolocalización");
    }
}
function initialize2(position) {

  var mapProp = {
    center:new google.maps.LatLng(position.coords.latitude,position.coords.longitude),
    zoom:13,
    mapTypeId:google.maps.MapTypeId.ROADMAP
  };
  var map=new google.maps.Map(document.getElementById("mapa"),mapProp);
  return
  }
 google.maps.event.addDomListener(window, 'load', initialize)
 
 function initialize() {
  var mapProp = {
    center:new google.maps.LatLng(4.190231,-74.8962741),
    zoom:13,
    mapTypeId:google.maps.MapTypeId.ROADMAP
  };
  var map=new google.maps.Map(document.getElementById("mapa"),mapProp);
  }
 google.maps.event.addDomListener(window, 'load', initialize) 
 
 
