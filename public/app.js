angular.module('clashRoyale', ['ui.bootstrap'])
  .controller('mainCtrl', function($scope) {

    $scope.pattern = ['Silver','Silver','Gold'];

    $scope.addChest = function(type){
      $scope.pattern.push(type);
      $scope.refresh();
    }

    $scope.isPattern = function(count){
      return ($scope.pattern.length >= count);
    }
    $scope.removeChest = function(id){
      $scope.pattern.splice(id,1);
      $scope.refresh();
    }

    var tab = ['Silver','Silver','Silver','Gold','Silver','Silver','Gold','Silver','Silver','Silver','Silver','Magic','Silver','Silver','Gold','Silver','Silver','Silver','Gold','Silver','Silver','Silver','Silver','Gold','Silver','Gold','Silver','Silver','Silver','Silver','Gold','Silver','Silver','Silver','Silver','Gold','Silver','Silver','Gold','Silver','Silver','Silver','Silver','Gold','Silver','Silver','Gold','Silver','Silver','Silver','Silver','Gold','Silver','Silver','Gold','Silver','Silver','Silver','Gold','Silver','Silver','Silver','Silver','Gold','Silver','Gold','Silver','Silver','Silver','Silver','Gold','Silver','Silver','Silver','Silver','Gold','Silver','Silver','Gold','Silver','Silver','Silver','Silver','Gold','Silver','Silver','Gold','Silver','Silver','Silver','Silver','Gold','Silver','Silver','Gold','Silver','Silver','Silver','Gold','Silver','Silver','Silver','Silver','Gold','Silver','Gold','Silver','Silver','Silver','Silver','Gold','Silver','Silver','Silver','Silver','Gold','Silver','Silver','Gold','Silver','Silver','Silver','Silver','Gold','Silver','Silver','Gold','Silver','Silver','Silver','Silver','Magic','Silver','Silver','Gold','Silver','Silver','Silver','Gold','Silver','Silver','Silver','Silver','Gold','Silver','Gold','Silver','Silver','Silver','Silver','Gold','Silver','Silver','Silver','Silver','Gold','Silver','Silver','Gold','Silver','Silver','Silver','Silver','Gold','Silver','Silver','Gold','Silver','Silver','Silver','Silver','Gold','Silver','Silver','Gold','Silver','Silver','Silver','Gold','Silver','Silver','Silver','Silver','Gold','Silver','Gold','Silver','Silver','Silver','Silver','Gold','Silver','Silver','Silver','Silver','Gold','Silver','Silver','Gold','Silver','Silver','Silver','Silver','Magic','Silver','Silver','Gold','Silver','Silver','Silver','Silver','Gold','Silver','Silver','Gold','Silver','Silver','Silver','Gold','Silver','Silver','Silver','Silver','Gold','Silver','Gold','Silver','Silver','Silver','Silver','Gold','Silver','Silver','Silver','Silver','Gold','Silver','Silver','Gold','Silver'];

    function getPatternSize(pattern){
      return pattern.length;
    }

    function isUnknown(chest){
        return (chest == 'Unknown');
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

        }


        return min;
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
          if (!(isUnknown(pattern[i-indexes[j]])) && pattern[i-indexes[j]] !== tab[i]){
            // Différence pattern / cycle
            break;
          }
          count++;
        }
        if (count == pattern.length){
          result.push(indexes[j]);
        }
      }
      return result;
    };


    function getResultat(result, pattern, range){
      var res = [];
      for (var j = 0; j<result.length; j++){
        var temp=[];
        for (var i = result[j]; i < result[j]+pattern.length+range; i++)
        {
          if (i < result[j]+pattern.length){
              isPattern = true;
          }
          else{
              isPattern = false;
          }
          temp.push([isPattern,i,tab[i]]);
        }
        res.push(temp);
      }

      return res;
    }

    $scope.active = 0;

    $scope.setActive = function(num){
        $scope.active = num;
    }

    $scope.isActive = function(num){
        return $scope.active == num;
    }

    $scope.refresh = function(){
      $scope.result = getAllPossibilities($scope.pattern);
      $scope.res = getResultat($scope.result, $scope.pattern, 10);
      $scope.distMin = searchFistMagic($scope.result, $scope.pattern);
    }
    $scope.result = getAllPossibilities($scope.pattern);
    $scope.distMin = searchFistMagic($scope.result, $scope.pattern);
    $scope.res = getResultat($scope.result, $scope.pattern, 10);





  });
