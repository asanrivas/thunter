angular.module('starter.controllers', [])

.controller('DashCtrl', function($scope) {
    $scope.result = {};
    $scope.scanBar = function(obj){
        cordova.plugins.barcodeScanner.scan(
      function (result) {
        //   alert("We got a barcode\n" +
        //         "Result: " + result.text + "\n" +
        //         "Format: " + result.format + "\n" +
        //         "Cancelled: " + result.cancelled);
        $scope.result = result;
        $scope.$apply();
      },
      function (error) {
          alert("Scanning failed: " + error);
      }
   );
    };
})

.controller('ChatsCtrl', function($scope, Chats) {
  $scope.chats = Chats.all();
  $scope.remove = function(chat) {
    Chats.remove(chat);
  }
})

.controller('ChatDetailCtrl', function($scope, $stateParams, Chats) {
  $scope.chat = Chats.get($stateParams.chatId);
})

.controller('AccountCtrl', function($scope) {
  $scope.settings = {
    enableFriends: true
  };
});
