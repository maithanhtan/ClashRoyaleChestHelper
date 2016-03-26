// Command line version (Node required)
/*
* -> node test.js
* # Then type:
* 0 for Silver
* 1 for Golden
* 2 for Magical
*
* This script for testing purposes.
*/
var readline = require('readline');
var tab = ["Silver"
,"Silver"
,"Silver"
,"Gold"
,"Silver"
,"Silver"
,"Gold"
,"Silver"
,"Silver"
,"Silver"
,"Silver"
,"Magic"
,"Silver"
,"Silver"
,"Gold"
,"Silver"
,"Silver"
,"Silver"
,"Gold"
,"Silver"
,"Silver"
,"Silver"
,"Silver"
,"Gold"
,"Silver"
,"Gold"
,"Silver"
,"Silver"
,"Silver"
,"Silver"
,"Gold"
,"Silver"
,"Silver"
,"Silver"
,"Silver"
,"Gold"
,"Silver"
,"Silver"
,"Gold"
,"Silver"
,"Silver"
,"Silver"
,"Silver"
,"Gold"
,"Silver"
,"Silver"
,"Gold"
,"Silver"
,"Silver"
,"Silver"
,"Silver"
,"Gold"
,"Silver"
,"Silver"
,"Gold"
,"Silver"
,"Silver"
,"Silver"
,"Gold"
,"Silver"
,"Silver"
,"Silver"
,"Silver"
,"Gold"
,"Silver"
,"Gold"
,"Silver"
,"Silver"
,"Silver"
,"Silver"
,"Gold"
,"Silver"
,"Silver"
,"Silver"
,"Silver"
,"Gold"
,"Silver"
,"Silver"
,"Gold"
,"Silver"
,"Silver"
,"Silver"
,"Silver"
,"Gold"
,"Silver"
,"Silver"
,"Gold"
,"Silver"
,"Silver"
,"Silver"
,"Silver"
,"Gold"
,"Silver"
,"Silver"
,"Gold"
,"Silver"
,"Silver"
,"Silver"
,"Gold"
,"Silver"
,"Silver"
,"Silver"
,"Silver"
,"Gold"
,"Silver"
,"Gold"
,"Silver"
,"Silver"
,"Silver"
,"Silver"
,"Gold"
,"Silver"
,"Silver"
,"Silver"
,"Silver"
,"Gold"
,"Silver"
,"Silver"
,"Gold"
,"Silver"
,"Silver"
,"Silver"
,"Silver"
,"Gold"
,"Silver"
,"Silver"
,"Gold"
,"Silver"
,"Silver"
,"Silver"
,"Silver"
,"Magic"
,"Silver"
,"Silver"
,"Gold"
,"Silver"
,"Silver"
,"Silver"
,"Gold"
,"Silver"
,"Silver"
,"Silver"
,"Silver"
,"Gold"
,"Silver"
,"Gold"
,"Silver"
,"Silver"
,"Silver"
,"Silver"
,"Gold"
,"Silver"
,"Silver"
,"Silver"
,"Silver"
,"Gold"
,"Silver"
,"Silver"
,"Gold"
,"Silver"
,"Silver"
,"Silver"
,"Silver"
,"Gold"
,"Silver"
,"Silver"
,"Gold"
,"Silver"
,"Silver"
,"Silver"
,"Silver"
,"Gold"
,"Silver"
,"Silver"
,"Gold"
,"Silver"
,"Silver"
,"Silver"
,"Gold"
,"Silver"
,"Silver"
,"Silver"
,"Silver"
,"Gold"
,"Silver"
,"Gold"
,"Silver"
,"Silver"
,"Silver"
,"Silver"
,"Gold"
,"Silver"
,"Silver"
,"Silver"
,"Silver"
,"Gold"
,"Silver"
,"Silver"
,"Gold"
,"Silver"
,"Silver"
,"Silver"
,"Silver"
,"Magic"
,"Silver"
,"Silver"
,"Gold"
,"Silver"
,"Silver"
,"Silver"
,"Silver"
,"Gold"
,"Silver"
,"Silver"
,"Gold"
,"Silver"
,"Silver"
,"Silver"
,"Gold"
,"Silver"
,"Silver"
,"Silver"
,"Silver"
,"Gold"
,"Silver"
,"Gold"
,"Silver"
,"Silver"
,"Silver"
,"Silver"
,"Gold"
,"Silver"
,"Silver"
,"Silver"
,"Silver"
,"Gold"
,"Silver"
,"Silver"
,"Gold"
,"Silver"];

function getPatternSize(pattern){
  return pattern.length;
}
/*
* Check if 2 arrays are equals
*/

function isUnknown(chest){
    return chest == 'Unknown';
}
function getAllPossibilities(pattern){
  var length = getPatternSize(pattern);
  var indexes = getAllIndexes(pattern);
  var count;
  var result = [];
  for (var j = 0; j < indexes.length; j++){
    count = 0;
    for (var i = indexes[j]; i < indexes[j]+length; i++)
    {
      if (!(isUnknown(chest)) && pattern[i-indexes[j]] !== tab[i]){
        // Différence pattern / cycle
        break;
      }
      count++;
    }
    if (count == pattern.length){
      result.push(indexes[j]);
      console.log(tab[indexes[j]]);
    }
  }
  return result;
}

function getAllIndexes(pattern){
  var indexes = [];
  var i = -1;
  while ((i = tab.indexOf(pattern[0],i+1)) != -1){
    indexes.push(i);
  }
  return indexes;
}


function searchFistMagic(results, pattern){
    // Pour chaque résultat, cherchez la distance au plus proche magique.
    var min = 240;
    for(var i=0;i < results.length; i++){
        var last = results[i]+pattern.length;
        Magics = [11,131,203];
        Magics.forEach(function(magic){

            if (last > magic){
                magic = magic + 240;
            }
            d = Math.abs(magic - last) % tab.length
            if (d < min){
                min = d;
            }
        });

        ( (203+240)- 219)

    }


    return min;
}




function afficherResultats(result, pattern, range){
  for (var j = 0; j<result.length; j++){
    console.log("Occurence n°"+j+1);
    console.log("__________________");
  for (var i = result[j]; i < result[j]+pattern.length+range; i++)
  {
    console.log(i+". "+tab[i]);
  }
  console.log("________________");
  }
}


function saisirPattern(){
    var j=1;
    var array = ["Silver", "Gold", "Magic"];
    var pattern = [];
    var r1 = readline.createInterface(process.stdin, process.stdout);

    r1.on('line', function(line){
      r1.setPrompt('Chest '+j+'> ');
      if ( array.indexOf(array[line]) !== -1){
        pattern.push(array[line]);
        j++;
      }
      else{
        console.log("Erreur.");
      }

      if (line === "done") r1.close();
      r1.prompt();
    }).on('close', function(){


      result = getAllPossibilities(pattern);
      afficherResultats(result,pattern,25);
      console.log("Nombre de résultat trouvés: "+result.length);

      firstMagic = searchFistMagic(result,pattern);
      console.log(firstMagic);
      process.exit(0);

    });
}
console.log(tab.length);
pattern = saisirPattern();
