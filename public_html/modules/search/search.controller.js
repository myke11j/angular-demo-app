angular.module("myApp.search")
        .controller("searchCtrl", ["$scope", "parasList", "Search", function($scope, parasList, Search) {
                var vm = this;

                vm.init = init;
                vm.findParas = findParas;

                vm.paras = [];
                vm.filteredPara = [];

                function init() {
                  if(parasList.status === 200) {
                    console.log("JSON received");
                    vm.paras = parasList.data.data;
                  }
                }

                function findParas() {
                  vm.filteredPara = Search.find(vm.searchPara, vm.paras);
                  // vm.filteredPara = [];
                  // angular.forEach(vm.paras, function(para) {
                  //   if(para.text.indexOf(vm.searchPara) !== -1) {
                  //     vm.filteredPara.push(para);
                  //   }
                  // });
                }
                vm.init();
            }
        ]);
