angular.module('starter.controllers', ['ionic','starter.services'])
.controller("SplashCtrl",function($scope,$state){
	$scope.gotoHome = function(){
		$state.go('home');
	}
})
.controller("GenreCtrl",function($scope,$stateParams,cartServices,$ionicScrollDelegate,$state){
	$scope.genre = $stateParams.genre;
	var productInfo = JSON.parse(cartServices.getProducts($scope.genre));
	$scope.products = productInfo.list;
	$scope.headerURL = productInfo.headerImg;
   	if(window.innerWidth <= 900 && window.innerHeight <= 700) {
	     $scope.mobile = true;
	   } else {
	     $scope.mobile = false;
	   }
	$scope.$on("$ionicView.enter", function(event, data){
		$scope.cart = JSON.parse(cartServices.getCart());
	});
	$scope.selectProduct = function(index){
		if($scope.products[index].selected==false){
			$scope.products[index].selected = true;
			var productInfo = JSON.parse(cartServices.setProduct($scope.genre,index,true));
			cartServices.refreshCart();
			$scope.cart = JSON.parse(cartServices.getCart());
		}else{
			$scope.products[index].selected = false;
			var productInfo = JSON.parse(cartServices.setProduct($scope.genre,index,false));
			cartServices.refreshCart();
			$scope.cart = JSON.parse(cartServices.getCart());
		}
	}
	$scope.gotoCart = function(){
		$state.go('cart');
	}
	$scope.scrollToTop = function(){
		$ionicScrollDelegate.scrollTop();
	}

})
.controller("HomeCtrl",function($scope,cartServices,$state){
	if(localStorage["productsInfo"]){
		// var productsInfo = localStorage["productsInfo"];
		// cartServices.setAllProducts(productsInfo);
		localStorage["productsInfo"]=null;
	}
	$scope.$on("$ionicView.enter", function(event, data){
		$scope.cart = JSON.parse(cartServices.getCart());
	});
	$scope.gotoCart = function(){
		$state.go('cart');
	}
	
})
.controller("FarmCtrl",function($scope,cartServices,$ionicScrollDelegate,$state){
	if(localStorage["productsInfo"]){
		// var productsInfo = localStorage["productsInfo"];
		// cartServices.setAllProducts(productsInfo);
		localStorage["productsInfo"]=null;
	}
	var today = new Date();
	var weekday = new Array(7);
	weekday[0]=  "Sunday";
	weekday[1] = "Monday";
	weekday[2] = "Tuesday";
	weekday[3] = "Wednesday";
	weekday[4] = "Thursday";
	weekday[5] = "Friday";
	weekday[6] = "Saturday";
	$scope.doftw = weekday[today.getDay()];
	$scope.$on("$ionicView.enter", function(event, data){
	   	$scope.cart = JSON.parse(cartServices.getCart());
	   	$scope.searchList = cartServices.getSearchList();
		$scope.farms = JSON.parse(cartServices.getFarms());
		for (i = 0;i<$scope.farms.length;i++){
			$scope.farms[i].hours = $scope.farms[i][$scope.doftw];
			$scope.farms[i].call = "tel:"+$scope.farms[i].Phone;
			var found = false;
			for (e=0;e<$scope.cart.length;e++){
				if ($scope.farms[i].Name == $scope.cart[e].Name){
					found=true;
				}
			}
			if (found==true){
				$scope.farms[i].selected = true;
			}else{
				$scope.farms[i].selected = false;
			}
		}
	})
	$scope.scrollLeft = function(index){
		var id = "#farm-product-container-"+index;
		$(id).scrollLeft($(id).scrollLeft()-70);
	}
	$scope.scrollRight = function(index){
		var id = "#farm-product-container-"+index;
		$(id).scrollLeft($(id).scrollLeft()+70);
	}
	$scope.openMaps = function(index){
		///Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent)
		var urlTemplates = {
            "default": "http://maps.google.com?q= "+$scope.farms[index].Address+" "+$scope.farms[index].Town+" Ontario Canada",
            "ios": "maps:?saddr=Current Location&daddr={streetAddress} {addressLocality} {addressRegion} {postalCode} {addressCountry}",
            "android": "geo:"+$scope.farms[index].Address+" "+$scope.farms[index].Town+" Ontario Canada",
            "windows_phone7": "maps:"+$scope.farms[index].Address+" "+$scope.farms[index].Town+" Ontario Canada",
            "windows_phone8": "bingmaps:?where="+$scope.farms[index].Address+" "+$scope.farms[index].Town+" Ontario Canada",
            "blackberry": "javascript:blackberry.launch.newMap({'address':{'address1':'"+$scope.farms[index].Address+"','city':'"+$scope.farms[index].Town+"','country':'Canada','stateProvince':'Ontario'}})"};
		if( /Android/i.test(navigator.userAgent) ) {
		 	window.open(urlTemplates.android , '_system');
		}else if(/iPhone|iPad|iPod/i.test(navigator.userAgent)){
			window.open(urlTemplates.ios , '_system');
		}else if(/BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent)){
			window.open(urlTemplates.blackberry , '_system');
		}else if(/IEMobile|Opera Mini/i.test(navigator.userAgent)){
			window.open(urlTemplates.windows_phone7 , '_system');
		}else{
			window.open(urlTemplates.default , '_system');
		}
	}
	$scope.gotoCart = function(){
		$state.go('cart');
	}
	$scope.addToCart = function(index){
		if ($scope.farms[index].selected==false || !$scope.farms[index].selected){
		    $scope.farms[index].selected = true;
		    $scope.cart = JSON.parse(cartServices.addToCart(JSON.stringify($scope.farms[index])));
		}else{
		    $scope.farms[index].selected = false;
		    $scope.cart = JSON.parse(cartServices.removeFromCart($scope.farms[index].Name));
		}
	}
	$scope.scrollToTop = function(){
		$ionicScrollDelegate.scrollTop();
	}
	
})
.controller("CartCtrl",function($scope,cartServices,$ionicScrollDelegate,$state){
	if(localStorage["productsInfo"]){
		// var productsInfo = localStorage["productsInfo"];
		// cartServices.setAllProducts(productsInfo);
		localStorage["productsInfo"]=null;
	}
	var today = new Date();
	var weekday = new Array(7);
	weekday[0]=  "Sunday";
	weekday[1] = "Monday";
	weekday[2] = "Tuesday";
	weekday[3] = "Wednesday";
	weekday[4] = "Thursday";
	weekday[5] = "Friday";
	weekday[6] = "Saturday";
	$scope.doftw = weekday[today.getDay()];
	$scope.emailDetails = {};
	$scope.$on("$ionicView.enter", function(event, data){
	   	$scope.cart = JSON.parse(cartServices.getCart());
		$scope.farms = JSON.parse(cartServices.getPotentialCart());
		$scope.searchList = cartServices.getSearchList();
		for (i = 0;i<$scope.farms.length;i++){
			$scope.farms[i].hours = $scope.farms[i][$scope.doftw];
			$scope.farms[i].call = "tel:"+$scope.farms[i].Phone;
			var found = false;
			for (e=0;e<$scope.cart.length;e++){
				if ($scope.farms[i].Name == $scope.cart[e].Name){
					found = true;
				}
			}
			if (found==true){
				$scope.farms[i].selected = true;
			}else{
				$scope.farms[i].selected = false;
			}
		}
		for (i=0;i<$scope.cart.length;i++){
			var found = false;
			for (e=0;e<$scope.farms.length;e++){
				if ($scope.cart[i].Name==$scope.farms[e].Name){
					found=true;
				}
			}
			if (found==false){
				$scope.cart[i].selected=true;
				$scope.farms.push($scope.cart[i]);
			}
		}
	})
	$scope.openMaps = function(index){
		///Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent)
		var urlTemplates = {
            "default": "http://maps.google.com?q= "+$scope.farms[index].Address+" "+$scope.farms[index].Town+" Ontario Canada",
            "ios": "maps:?saddr=Current Location&daddr={streetAddress} {addressLocality} {addressRegion} {postalCode} {addressCountry}",
            "android": "geo:"+$scope.farms[index].Address+" "+$scope.farms[index].Town+" Ontario Canada",
            "windows_phone7": "maps:"+$scope.farms[index].Address+" "+$scope.farms[index].Town+" Ontario Canada",
            "windows_phone8": "bingmaps:?where="+$scope.farms[index].Address+" "+$scope.farms[index].Town+" Ontario Canada",
            "blackberry": "javascript:blackberry.launch.newMap({'address':{'address1':'"+$scope.farms[index].Address+"','city':'"+$scope.farms[index].Town+"','country':'Canada','stateProvince':'Ontario'}})"};
		if( /Android/i.test(navigator.userAgent) ) {
		 	window.open(urlTemplates.android , '_system');
		}else if(/iPhone|iPad|iPod/i.test(navigator.userAgent)){
			window.open(urlTemplates.ios , '_system');
		}else if(/BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent)){
			window.open(urlTemplates.blackberry , '_system');
		}else if(/IEMobile|Opera Mini/i.test(navigator.userAgent)){
			window.open(urlTemplates.windows_phone7 , '_system');
		}else{
			window.open(urlTemplates.default , '_system');
		}
	}
	$scope.sendEmail = function(){
		if (!$scope.emailDetails.email || $scope.emailDetails.email==''){
			alert('Please add an email');
		}else{
		// 	if(/Android|iPhone|iPad|iPod/i.test(navigator.userAgent)){
		// 		if(window.plugins && window.plugins.emailComposer) {
		// 			var body="&body=";
		// 			for (i = 0;i<$scope.cart.length;i++){
		// 				body = body+"Name:%20"+$scope.cart[i].Name+"%0A";
		// 				body = body+"Phone Number:%20"+$scope.cart[i].Phone+"%0A";
		// 				body = body+"Address:%20"+$scope.cart[i].Address+",%20"+$scope.cart[i].Town+",%20Ontario,%20Canada%0A";
		// 				body = body+"This farm sells:%20";
		// 				for (var key in $scope.cart[i]) {
		// 					if ($scope.cart[i][key]=="Y"){
		// 						body = body+key+",%20";
		// 					}
		// 				}
		// 				body = body+"%0A";
		// 				body = body+"%0A-------------------------------%0A";
		// 				body = body+"%0A";
		// 			}
		// 			body = body+"Thank you for using FITR! We hope you get to visit these farms and experience the amazing products they have to offer.%0A%0AAll the Best,%0A%0AThe Fork In The Road Team";
		//             window.plugins.emailComposer.showEmailComposerWithCallback(function(result) {
		//                 console.log("Response -> " + result);
		//             }, 
		//             "Your FITR Farm Selection", // Subject
		//             body,                      // Body
		//             [$scope.emailDetails.email],    // To
		//             null,                    // CC
		//             null,                    // BCC
		//             false,                   // isHTML
		//             null,                    // Attachments
		//             null);                   // Attachment Data
		//         }
		// }else{
			var body="&body=";
			for (i = 0;i<$scope.cart.length;i++){
				body = body+"Name:%20"+$scope.cart[i].Name+"%0A";
				body = body+"Phone Number:%20"+$scope.cart[i].Phone+"%0A";
				body = body+"Address:%20"+$scope.cart[i].Address+",%20"+$scope.cart[i].Town+",%20Ontario,%20Canada%0A";
				body = body+"This farm sells:%20";
				for (var key in $scope.cart[i]) {
					if ($scope.cart[i][key]=="Y"){
						body = body+key+",%20";
					}
				}
				body = body+"%0A";
				body = body+"%0A-------------------------------%0A";
				body = body+"%0A";
			}
								body = body+"Thank you for using FITR! We hope you get to visit these farms and experience the amazing products they have to offer.%0A%0AAll the Best,%0A%0AThe Fork In The Road Team";
			var mailStr="";
			mailStr = mailStr + "mailto:"+ $scope.emailDetails.email;
			mailStr = mailStr + "?subject=" + "Your%20FITR%20Farm%20Selection";
			mailStr = mailStr + body;
			var emailWindow = window.open(mailStr , '_top');
		}
		// }
	}
	$scope.scrollLeft = function(index){
		var id = "#cart-product-container-"+index;
		$(id).scrollLeft($(id).scrollLeft()-70);
	}
	$scope.scrollRight = function(index){
		var id = "#cart-product-container-"+index;
		$(id).scrollLeft($(id).scrollLeft()+70);
	}
	$scope.gotoCart = function(){
		$state.go('cart');
	}
	$scope.addToCart = function(index){
		if ($scope.farms[index].selected==false || !$scope.farms[index].selected){
		    $scope.farms[index].selected = true;
		    $scope.cart = JSON.parse(cartServices.addToCart(JSON.stringify($scope.farms[index])));
		}else{
		    $scope.farms[index].selected = false;
		    $scope.cart = JSON.parse(cartServices.removeFromCart($scope.farms[index].Name));
		}
	}
	// alert(cartServices.getFarms());
	$scope.scrollToTop = function(){
		$ionicScrollDelegate.scrollTop();
	}
	
})

 