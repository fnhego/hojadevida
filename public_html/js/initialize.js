function initialize() {
  var mapProp = {
    center:new google.maps.LatLng(4.190231,-74.8962741),
    zoom:13,
    mapTypeId:google.maps.MapTypeId.ROADMAP
  };
  var map=new google.maps.Map(document.getElementById("mapa"),mapProp);
  }
 google.maps.event.addDomListener(window, 'load', initialize) 