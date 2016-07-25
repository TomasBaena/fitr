angular.module('starter.controllers', ['ionic','starter.services'])

.controller("SplashCtrl",function($scope){
	// alert(0);
})
.controller("GenreCtrl",function($scope,$stateParams,cartServices,$ionicScrollDelegate){
	$scope.genre = $stateParams.genre;
	var productInfo = JSON.parse(cartServices.getProducts($scope.genre));
	$scope.products = productInfo.list;
	$scope.headerURL = productInfo.headerImg;
	// if ($scope.genre=="Fruits"){
	// 	$scope.products = $scope.Fruits;
	// }
	$scope.selectProduct = function(index){
		if($scope.products[index].selected==false){
			var productInfo = JSON.parse(cartServices.setProduct($scope.genre,index,true));
			$scope.products = productInfo.list;
		}else{
			var productInfo = JSON.parse(cartServices.setProduct($scope.genre,index,false));
			$scope.products = productInfo.list;
		}
	}
	$scope.scrollToTop = function(){
		$ionicScrollDelegate.scrollTop();
	}

})
.controller("HomeCtrl",function($scope,cartServices){
	if(localStorage["productsInfo"]){
		// var productsInfo = localStorage["productsInfo"];
		// cartServices.setAllProducts(productsInfo);
		localStorage["productsInfo"]=null;
	}
	
})
.controller("FarmCtrl",function($scope,cartServices,$ionicScrollDelegate){
	if(localStorage["productsInfo"]){
		// var productsInfo = localStorage["productsInfo"];
		// cartServices.setAllProducts(productsInfo);
		localStorage["productsInfo"]=null;
	}
	$scope.scrollToTop = function(){
		$ionicScrollDelegate.scrollTop();
	}
	
})

 