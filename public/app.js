angular.module('clashRoyale', [])
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

    function getAllIndexes(pattern){
      var indexes = [];
      var i = -1;
      while ((i = tab.indexOf(pattern[0],i+1)) != -1){
        indexes.push(i);
      }
      return indexes;
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
          if (pattern[i-indexes[j]] !== tab[i]){
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

    function afficherResultats(result, pattern, range){
      var res = [];
      for (var j = 0; j<result.length; j++){
        var temp=[];
        for (var i = result[j]; i < result[j]+pattern.length+range; i++)
        {
          temp.push(i+". "+tab[i]);
        }
        res.push(temp);
      }

      return res;
    }

    $scope.refresh = function(){
      $scope.result = getAllPossibilities($scope.pattern);
      $scope.res = afficherResultats($scope.result,$scope.pattern,10);
    }
    $scope.result = getAllPossibilities($scope.pattern);

    $scope.res = afficherResultats($scope.result,$scope.pattern,10);





  });
