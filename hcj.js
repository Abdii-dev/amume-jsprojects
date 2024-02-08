



var gaafilee =[
  
  {
    gaa:"Magaalaan guddoon oromoo essaa?\n (a) Hawaasa\n (b) Harar\n (c) Shagar\n (d) Ambo",
    debii:"c"
  },
  {
  gaa:"JAALALLEEN TEE EENYUU?\n (a) OLAANTUU\n (B) Badhaatuu\n (c) caaltuu\n (d) Raggaatuu",
  debii:"a"
  },
  
  {
    gaa:"mallii makaa bishaaniifii zetrti addaan baasuuf ooluu kami?\n (a) Dhimbiibuu\n (b) calaluu\n (c) hurkisiisuu\n (d) distileeshini",
    debii:"b"
  }
]
var qabxii = 0;
for(var i = 0; i < gaafilee.length; i++) {
  var deebiiIsaa = window.prompt(gaafilee[i].gaa); 
  if(deebiiIsaa === gaafilee[i].debii) {
    qabxii++;
    alert("Argatteetta!");
  } else {
    alert("Dhabdeetta!");
}  
}
alert(gaafilee.length +  "keessaa"  + qabxii  + " argatteetta!");
