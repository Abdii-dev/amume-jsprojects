/*var maqaa=widow.promptn("maqaakee barressii");
document.write(maqaa);
*/  
//messagee walif barressuu

var ergaaSana=document.getElementById("ergaaSana");
var ergaa = document.getElementById("ergaa");
var ergi=document.getElementById("ergi");
ergi.addEventListener("click", function () {
  var ergaa_haaraa = document.createElement("li"); 
  ergaa_haaraa.innerHTML= ergaa.value;
ergaaSana.appendChild(ergaa_haaraa);
  //ergaaSana.append(ergaa_haaraa);
  ergaa.value="";
});