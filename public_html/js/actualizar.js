/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */

function actualizarMapa(){
    var sitio =document.getElementById("sitio").value;
    var zoom =document.getElementById("zoom").value;
    var ancho =document.getElementById("ancho").value;
    var alto =document.getElementById("alto").value;
    var tipomapa =document.getElementById("tipomapa").value;
    var url= "http://maps.googleapis.com/maps/api/staticmap?center="
    url =url+sitio+"&zoom="+zoom+"&size="+ancho+"x"+alto+"&maptype="+tipomapa;
       
    document.getElementById("image").src=url;
    
}
function justNumbers(e)
            {
                var keynum = window.event ? window.event.keyCode : e.which;
                if ((keynum === 8) || (keynum === 46))
                    return true;

                return /\d/.test(String.fromCharCode(keynum));
            }
