angular.module("myApp.search")
  .factory('Search', function() {
    var Search = {};
    var filteredPara = [];

    Search.find = function(searchText, list) {
      filteredPara = [];
      angular.forEach(list, function(para) {
        if(para.text.indexOf(searchText) !== -1) {
          filteredPara.push(para);
        }
      });
      return filteredPara;
    }
    return Search;
  });
