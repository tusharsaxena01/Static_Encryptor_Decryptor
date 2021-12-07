angular.module('app', [])
.controller('ctrl', function($scope){
  var omittedChar = 'j';
  var alphabet = 'abcdefghijklmnopqrstuvwxyz';
  $scope.key1 = 'four';
  $scope.key2 = 'square';
  $scope.squares = [];
  $scope.squares[1] = alphabet.toArray().getUnique(omittedChar).toSquare2DArray(5);
  $scope.squares[2] = alphabet.toArray().getUnique(omittedChar).toSquare2DArray(5);
  
  $scope.$watch('[key1,key2]', function(){
      $scope.squares[0] = $scope.key1.toArray().getUnique(omittedChar).toSquare2DArray(5);
      $scope.squares[3] = $scope.key2.toArray().getUnique(omittedChar).toSquare2DArray(5);
  })
})
String.prototype.toArray = function(){
  return this.replace(/ /g,'').split('');
}
Array.prototype.toSquare2DArray = function(count){
  var temp = [];
  for (var i = 0; i < count; i++){
    temp[i] = [];
    for (var j = 0; j < count; j++){
      temp[i].push(this[i*count + j]);
    }
  }
  return temp;
}
Array.prototype.getUnique = function(omittedChar){
   var u = {}, a = [];
   temp = this.concat('abcdefghijklmnopqrstuvwxyz'.split(''))
   for(var i = 0, l = temp.length; i < l; ++i){
      if(u.hasOwnProperty(temp[i])) {
         continue;
      }
      a.push(temp[i]);
      u[temp[i]] = 1;
   }
   a.splice(a.indexOf(omittedChar),1); //Remove whatever character
   return a;
}
