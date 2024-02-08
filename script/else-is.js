var walNyaachuun = false;
if (walNyaachuun) {
  console.log("eyye");
} else {
  console.log("lakki");
}



var barataanYooDhufe = false;
if(barataanYooDhufe === true){ 
  console.log("yes");
} else{
console.log("no");
}



var male = true;
var long = true;
if(male && long) {
        console.log("he is long male");
        } else if (male && !long) {
          console.log("he is short male");
        } else if (!male && long) {
          console.log("he is long but not male");
        } else (!male  && !long)
        {
          console.log("not both");
    }



function walCaalmaa(jalqaba, lammaffa, sadaffa) {
  if (jalqaba>= lammaffa && jalqaba >= sadaffa) {
    return jalqaba;
  }else if (lammaffa>= jalqaba && lammaffa>= sadaffa) {
    return lammaffa;
  } else if (sadaffa >= jalqaba && sadaffa >= lammaffa) {
    return sadaffa;
  }
}
console.log(walCaalmaa(20, 30, 6));


function maqaa(filadhu) {
  var kuufama;
  switch (filadhu) {
    case 0:
      kuufama = "kaardii guutuuf";
      break;
      case 1:
        kuufama = "yeroo qilleensaa bitachuuf";
        break;
        case 2:
      kuufama = "kuufama sagalee bitachuuf";
      break;
        case 3:
        kuufama= " kufama interneeta bitachuuf";
        break;
        case 4:            
        kuufama = "kuufafama  bitachuu";
        break;
        case 5:
          kuufama = "kuufamaa halkanii bitachuuf";
          break;
          case 6:
           kuufama ="ayyanaa bitachuuf";
             break;
    default: kuufama= " maaloo filannoon akkasii hinjiru!";
  }
  return kuufama;
}

console.log(maqaa(3));


var i=1;
while (i<=10) {
  console.log(i);
  i++;
  if (i===5){
    break;
  }
}

var i=10;
do {
  console.log(i);
  i--
  } while (i >=5)
