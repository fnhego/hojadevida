/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */

function actualizarMapa(){
    var sitio =document.getElementById("sitio").value;
    var zoom =document.getElementByNId("zoom").value;
    var ancho =document.getElementById("ancho").value;
    var alto =document.getElementById("alto").value;
    document.getElementById("image").src = "../img/Foto_Fredy.png";
    
    window.alert(sitio);
    window.alert(zoom);
    window.alert(ancho);
    window.alert(alto);
    
}
function justNumbers(e)
            {
                var keynum = window.event ? window.event.keyCode : e.which;
                if ((keynum === 8) || (keynum === 46))
                    return true;

                return /\d/.test(String.fromCharCode(keynum));
            }
