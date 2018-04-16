function xml2html() {
	if (window.XMLHttpRequest)
	  {// codigo para IE7+, Firefox, Chrome, Opera, Safari
	  xmlhttp = new XMLHttpRequest();
	  }
	else
	  {// codigo para IE6, IE5
	  xmlhttp = new ActiveXObject("Microsoft.XMLHTTP");
	  }
	xmlhttp.open("GET","cd_catalog.xml",false);
	xmlhttp.send();
	xmlDoc=xmlhttp.responseXML; 
	document.write("<H1>Tienda mis Cd's</H1>");
	document.write("<table border=1 style='color:red'><tr><th>Artista</th><th>Titulo</th></tr>");
	var x = xmlDoc.getElementsByTagName("CD");
	for (i=0;i<x.length;i++)
	  { 
	  document.write("<tr><td>");
	  document.write(x[i].getElementsByTagName("ARTIST")[0].childNodes[0].nodeValue);
	  document.write("</td><td>");
	  document.write(x[i].getElementsByTagName("TITLE")[0].childNodes[0].nodeValue);
	  document.write("</td></tr>");
	  }
	document.write("</table>");
}