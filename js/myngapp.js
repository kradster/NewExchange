(function () {

    var app = angular
        .module('myModule', [])
        .controller('myctrl', function ($scope) {            
            $scope.sprice = 3000;
            $scope.mprice = 5000;
            $scope.lprice = 10000;
            $scope.xlprice = 20000;
            $scope.olprice = 50000;

            $scope.sb = true;
            $scope.mb = true;
            $scope.lb = true;
            $scope.xlb = true;
            $scope.olb = true;

            $scope.sl1 = 1000;
            $scope.sl2 = 1000;
            $scope.sl3 = 1000;
            $scope.sl4 = 1000;
            $scope.sl5 = 1000;


            $scope.slb1 =  [{value:1000,selected:true,lable:"YES"},{value:0,selected:false,lable:"NO"}];
            $scope.slb2 =  [{value:1000,selected:true,lable:"YES"},{value:1000,selected:false,lable:"NO"}];
            $scope.slb3 =  [{value:1000,selected:true,lable:"YES"},{value:1000,selected:false,lable:"NO"}];
            $scope.slb4 =  [{value:1000,selected:true,lable:"YES"},{value:1000,selected:false,lable:"NO"}];
            $scope.slb5 =  [{value:1000,selected:true,lable:"YES"},{value:1000,selected:false,lable:"NO"}];
            

        });

}());