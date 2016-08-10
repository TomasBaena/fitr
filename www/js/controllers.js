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
		ga('set', 'page', '/genre/'+$scope.genre+'.html');
		ga('send', 'pageview');
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
		if(window.innerWidth <= 900 && window.innerHeight <= 700) {
			$scope.mobile = true;
		} else {
			$scope.mobile = false;
		}
		$scope.cart = JSON.parse(cartServices.getCart());
		ga('set', 'page', '/home.html');
		ga('send', 'pageview');
		
	});
	$scope.gotoCart = function(){
		$state.go('cart');
	}
	
})
.controller("AboutCtrl",function($scope,cartServices,$state){
	$scope.$on("$ionicView.enter", function(event, data){
		$scope.cart = JSON.parse(cartServices.getCart());
		ga('set', 'page', '/abousus.html');
		ga('send', 'pageview');
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
	$scope.doftw_num = today.getDay();
	$scope.$on("$ionicView.enter", function(event, data){
		ga('set', 'page', '/Farms.html');
		ga('send', 'pageview');
		if(window.innerWidth <= 700) {
			$scope.mobile = true;
		} else {
			$scope.mobile = false;
		}
	   	$scope.cart = JSON.parse(cartServices.getCart());
	   	$scope.searchList = cartServices.getSearchList();
		$scope.farms = JSON.parse(cartServices.getFarms());
		var current_hours = today.getHours();
		var current_minutes = today.getMinutes();
		for (i = 0;i<$scope.farms.length;i++){
			if ($scope.farms[i][$scope.doftw].charAt(0) >= '0' && $scope.farms[i][$scope.doftw].charAt(0) <= '9'){
				var hourInfo = $scope.formatHours($scope.farms[i][$scope.doftw]);
				$scope.farms[i].hours = hourInfo[0];
				if (hourInfo[1]=="Closed"){
					var split = $scope.farms[i][$scope.doftw].split("-");
					var first = split[0].split(":");
					var start_hours = parseInt(first[0]);
					var start_minutes = parseInt(first[1]);
					if(current_hours<start_hours){
						$scope.farms[i].status = "Closed - Open later today";
					}else if(current_hours==start_hours && current_minutes<start_minutes){
						$scope.farms[i].status = "Closed - Open later today";
					}else if ($scope.doftw_num==0){
						// if 
						if ($scope.farms[i][weekday[1]].charAt(0) >= '0' && $scope.farms[i][weekday[1]].charAt(0) <= '9'){
							$scope.farms[i].status = $scope.formatHoursB($scope.farms[i][weekday[1]],weekday[1]);
						}else if($scope.farms[i][weekday[2]].charAt(0) >= '0' && $scope.farms[i][weekday[2]].charAt(0) <= '9'){
							$scope.farms[i].status = $scope.formatHoursB($scope.farms[i][weekday[2]],weekday[2]);
						}else if($scope.farms[i][weekday[3]].charAt(0) >= '0' && $scope.farms[i][weekday[3]].charAt(0) <= '9'){
							$scope.farms[i].status = $scope.formatHoursB($scope.farms[i][weekday[3]],weekday[3]);
						}else if($scope.farms[i][weekday[4]].charAt(0) >= '0' && $scope.farms[i][weekday[4]].charAt(0) <= '9'){
							$scope.farms[i].status = $scope.formatHoursB($scope.farms[i][weekday[4]],weekday[4]);
						}
					}else if($scope.doftw_num==1){
						if ($scope.farms[i][weekday[2]].charAt(0) >= '0' && $scope.farms[i][weekday[2]].charAt(0) <= '9'){
							$scope.farms[i].status = $scope.formatHoursB($scope.farms[i][weekday[2]],weekday[2]);
						}else if($scope.farms[i][weekday[3]].charAt(0) >= '0' && $scope.farms[i][weekday[3]].charAt(0) <= '9'){
							$scope.farms[i].status = $scope.formatHoursB($scope.farms[i][weekday[3]],weekday[3]);
						}else if($scope.farms[i][weekday[4]].charAt(0) >= '0' && $scope.farms[i][weekday[4]].charAt(0) <= '9'){
							$scope.farms[i].status = $scope.formatHoursB($scope.farms[i][weekday[4]],weekday[4]);
						}else if($scope.farms[i][weekday[5]].charAt(0) >= '0' && $scope.farms[i][weekday[5]].charAt(0) <= '9'){
							$scope.farms[i].status = $scope.formatHoursB($scope.farms[i][weekday[5]],weekday[5]);
						}
					}else if($scope.doftw_num==2){
						if ($scope.farms[i][weekday[3]].charAt(0) >= '0' && $scope.farms[i][weekday[3]].charAt(0) <= '9'){
							$scope.farms[i].status = $scope.formatHoursB($scope.farms[i][weekday[3]],weekday[3]);
						}else if($scope.farms[i][weekday[4]].charAt(0) >= '0' && $scope.farms[i][weekday[4]].charAt(0) <= '9'){
							$scope.farms[i].status = $scope.formatHoursB($scope.farms[i][weekday[4]],weekday[4]);
						}else if($scope.farms[i][weekday[5]].charAt(0) >= '0' && $scope.farms[i][weekday[5]].charAt(0) <= '9'){
							$scope.farms[i].status = $scope.formatHoursB($scope.farms[i][weekday[5]],weekday[5]);
						}else if($scope.farms[i][weekday[6]].charAt(0) >= '0' && $scope.farms[i][weekday[6]].charAt(0) <= '9'){
							$scope.farms[i].status = $scope.formatHoursB($scope.farms[i][weekday[6]],weekday[6]);
						}
					}else if($scope.doftw_num==3){
						if ($scope.farms[i][weekday[4]].charAt(0) >= '0' && $scope.farms[i][weekday[4]].charAt(0) <= '9'){
							$scope.farms[i].status = $scope.formatHoursB($scope.farms[i][weekday[4]],weekday[4]);
						}else if($scope.farms[i][weekday[5]].charAt(0) >= '0' && $scope.farms[i][weekday[5]].charAt(0) <= '9'){
							$scope.farms[i].status = $scope.formatHoursB($scope.farms[i][weekday[5]],weekday[5]);
						}else if($scope.farms[i][weekday[6]].charAt(0) >= '0' && $scope.farms[i][weekday[6]].charAt(0) <= '9'){
							$scope.farms[i].status = $scope.formatHoursB($scope.farms[i][weekday[6]],weekday[6]);
						}else if($scope.farms[i][weekday[0]].charAt(0) >= '0' && $scope.farms[i][weekday[0]].charAt(0) <= '9'){
							$scope.farms[i].status = $scope.formatHoursB($scope.farms[i][weekday[0]],weekday[0]);
						}
					}else if($scope.doftw_num==4){
						if ($scope.farms[i][weekday[5]].charAt(0) >= '0' && $scope.farms[i][weekday[5]].charAt(0) <= '9'){
							$scope.farms[i].status = $scope.formatHoursB($scope.farms[i][weekday[5]],weekday[5]);
						}else if($scope.farms[i][weekday[6]].charAt(0) >= '0' && $scope.farms[i][weekday[6]].charAt(0) <= '9'){
							$scope.farms[i].status = $scope.formatHoursB($scope.farms[i][weekday[6]],weekday[6]);
						}else if($scope.farms[i][weekday[0]].charAt(0) >= '0' && $scope.farms[i][weekday[0]].charAt(0) <= '9'){
							$scope.farms[i].status = $scope.formatHoursB($scope.farms[i][weekday[0]],weekday[0]);
						}else if($scope.farms[i][weekday[1]].charAt(0) >= '0' && $scope.farms[i][weekday[1]].charAt(0) <= '9'){
							$scope.farms[i].status = $scope.formatHoursB($scope.farms[i][weekday[1]],weekday[1]);
						}
					}else if($scope.doftw_num==5){
						if ($scope.farms[i][weekday[6]].charAt(0) >= '0' && $scope.farms[i][weekday[6]].charAt(0) <= '9'){
							$scope.farms[i].status = $scope.formatHoursB($scope.farms[i][weekday[6]],weekday[6]);
						}else if($scope.farms[i][weekday[0]].charAt(0) >= '0' && $scope.farms[i][weekday[0]].charAt(0) <= '9'){
							$scope.farms[i].status = $scope.formatHoursB($scope.farms[i][weekday[0]],weekday[0]);
						}else if($scope.farms[i][weekday[1]].charAt(0) >= '0' && $scope.farms[i][weekday[1]].charAt(0) <= '9'){
							$scope.farms[i].status = $scope.formatHoursB($scope.farms[i][weekday[1]],weekday[1]);
						}else if($scope.farms[i][weekday[2]].charAt(0) >= '0' && $scope.farms[i][weekday[2]].charAt(0) <= '9'){
							$scope.farms[i].status = $scope.formatHoursB($scope.farms[i][weekday[2]],weekday[2]);
						}
					}else if($scope.doftw_num==6){
						if ($scope.farms[i][weekday[0]].charAt(0) >= '0' && $scope.farms[i][weekday[0]].charAt(0) <= '9'){
							$scope.farms[i].status = $scope.formatHoursB($scope.farms[i][weekday[0]],weekday[0]);
						}else if($scope.farms[i][weekday[1]].charAt(0) >= '0' && $scope.farms[i][weekday[1]].charAt(0) <= '9'){
							$scope.farms[i].status = $scope.formatHoursB($scope.farms[i][weekday[1]],weekday[1]);
						}else if($scope.farms[i][weekday[2]].charAt(0) >= '0' && $scope.farms[i][weekday[2]].charAt(0) <= '9'){
							$scope.farms[i].status = $scope.formatHoursB($scope.farms[i][weekday[2]],weekday[2]);
						}else if($scope.farms[i][weekday[3]].charAt(0) >= '0' && $scope.farms[i][weekday[3]].charAt(0) <= '9'){
							$scope.farms[i].status = $scope.formatHoursB($scope.farms[i][weekday[3]],weekday[3]);
						}
					}
				}else{
					$scope.farms[i].status = hourInfo[1];
				}
			}else{
				if ($scope.farms[i][$scope.doftw]=="Closed"){
					var split = $scope.farms[i][$scope.doftw].split("-");
					var first = split[0].split(":");
					var start_hours = parseInt(first[0]);
					var start_minutes = parseInt(first[1]);
					if(current_hours<start_hours){
						$scope.farms[i].status = "Closed - Open later today";
					}else if(current_hours==start_hours && current_minutes<start_minutes){
						$scope.farms[i].status = "Closed - Open later today";
					}else if ($scope.doftw_num==0){
						// if 
						if ($scope.farms[i][weekday[1]].charAt(0) >= '0' && $scope.farms[i][weekday[1]].charAt(0) <= '9'){
							$scope.farms[i].status = $scope.formatHoursB($scope.farms[i][weekday[1]],weekday[1]);
						}else if($scope.farms[i][weekday[2]].charAt(0) >= '0' && $scope.farms[i][weekday[2]].charAt(0) <= '9'){
							$scope.farms[i].status = $scope.formatHoursB($scope.farms[i][weekday[2]],weekday[2]);
						}else if($scope.farms[i][weekday[3]].charAt(0) >= '0' && $scope.farms[i][weekday[3]].charAt(0) <= '9'){
							$scope.farms[i].status = $scope.formatHoursB($scope.farms[i][weekday[3]],weekday[3]);
						}else if($scope.farms[i][weekday[4]].charAt(0) >= '0' && $scope.farms[i][weekday[4]].charAt(0) <= '9'){
							$scope.farms[i].status = $scope.formatHoursB($scope.farms[i][weekday[4]],weekday[4]);
						}
					}else if($scope.doftw_num==1){
						if ($scope.farms[i][weekday[2]].charAt(0) >= '0' && $scope.farms[i][weekday[2]].charAt(0) <= '9'){
							$scope.farms[i].status = $scope.formatHoursB($scope.farms[i][weekday[2]],weekday[2]);
						}else if($scope.farms[i][weekday[3]].charAt(0) >= '0' && $scope.farms[i][weekday[3]].charAt(0) <= '9'){
							$scope.farms[i].status = $scope.formatHoursB($scope.farms[i][weekday[3]],weekday[3]);
						}else if($scope.farms[i][weekday[4]].charAt(0) >= '0' && $scope.farms[i][weekday[4]].charAt(0) <= '9'){
							$scope.farms[i].status = $scope.formatHoursB($scope.farms[i][weekday[4]],weekday[4]);
						}else if($scope.farms[i][weekday[5]].charAt(0) >= '0' && $scope.farms[i][weekday[5]].charAt(0) <= '9'){
							$scope.farms[i].status = $scope.formatHoursB($scope.farms[i][weekday[5]],weekday[5]);
						}
					}else if($scope.doftw_num==2){
						if ($scope.farms[i][weekday[3]].charAt(0) >= '0' && $scope.farms[i][weekday[3]].charAt(0) <= '9'){
							$scope.farms[i].status = $scope.formatHoursB($scope.farms[i][weekday[3]],weekday[3]);
						}else if($scope.farms[i][weekday[4]].charAt(0) >= '0' && $scope.farms[i][weekday[4]].charAt(0) <= '9'){
							$scope.farms[i].status = $scope.formatHoursB($scope.farms[i][weekday[4]],weekday[4]);
						}else if($scope.farms[i][weekday[5]].charAt(0) >= '0' && $scope.farms[i][weekday[5]].charAt(0) <= '9'){
							$scope.farms[i].status = $scope.formatHoursB($scope.farms[i][weekday[5]],weekday[5]);
						}else if($scope.farms[i][weekday[6]].charAt(0) >= '0' && $scope.farms[i][weekday[6]].charAt(0) <= '9'){
							$scope.farms[i].status = $scope.formatHoursB($scope.farms[i][weekday[6]],weekday[6]);
						}
					}else if($scope.doftw_num==3){
						if ($scope.farms[i][weekday[4]].charAt(0) >= '0' && $scope.farms[i][weekday[4]].charAt(0) <= '9'){
							$scope.farms[i].status = $scope.formatHoursB($scope.farms[i][weekday[4]],weekday[4]);
						}else if($scope.farms[i][weekday[5]].charAt(0) >= '0' && $scope.farms[i][weekday[5]].charAt(0) <= '9'){
							$scope.farms[i].status = $scope.formatHoursB($scope.farms[i][weekday[5]],weekday[5]);
						}else if($scope.farms[i][weekday[6]].charAt(0) >= '0' && $scope.farms[i][weekday[6]].charAt(0) <= '9'){
							$scope.farms[i].status = $scope.formatHoursB($scope.farms[i][weekday[6]],weekday[6]);
						}else if($scope.farms[i][weekday[0]].charAt(0) >= '0' && $scope.farms[i][weekday[0]].charAt(0) <= '9'){
							$scope.farms[i].status = $scope.formatHoursB($scope.farms[i][weekday[0]],weekday[0]);
						}
					}else if($scope.doftw_num==4){
						if ($scope.farms[i][weekday[5]].charAt(0) >= '0' && $scope.farms[i][weekday[5]].charAt(0) <= '9'){
							$scope.farms[i].status = $scope.formatHoursB($scope.farms[i][weekday[5]],weekday[5]);
						}else if($scope.farms[i][weekday[6]].charAt(0) >= '0' && $scope.farms[i][weekday[6]].charAt(0) <= '9'){
							$scope.farms[i].status = $scope.formatHoursB($scope.farms[i][weekday[6]],weekday[6]);
						}else if($scope.farms[i][weekday[0]].charAt(0) >= '0' && $scope.farms[i][weekday[0]].charAt(0) <= '9'){
							$scope.farms[i].status = $scope.formatHoursB($scope.farms[i][weekday[0]],weekday[0]);
						}else if($scope.farms[i][weekday[1]].charAt(0) >= '0' && $scope.farms[i][weekday[1]].charAt(0) <= '9'){
							$scope.farms[i].status = $scope.formatHoursB($scope.farms[i][weekday[1]],weekday[1]);
						}
					}else if($scope.doftw_num==5){
						if ($scope.farms[i][weekday[6]].charAt(0) >= '0' && $scope.farms[i][weekday[6]].charAt(0) <= '9'){
							$scope.farms[i].status = $scope.formatHoursB($scope.farms[i][weekday[6]],weekday[6]);
						}else if($scope.farms[i][weekday[0]].charAt(0) >= '0' && $scope.farms[i][weekday[0]].charAt(0) <= '9'){
							$scope.farms[i].status = $scope.formatHoursB($scope.farms[i][weekday[0]],weekday[0]);
						}else if($scope.farms[i][weekday[1]].charAt(0) >= '0' && $scope.farms[i][weekday[1]].charAt(0) <= '9'){
							$scope.farms[i].status = $scope.formatHoursB($scope.farms[i][weekday[1]],weekday[1]);
						}else if($scope.farms[i][weekday[2]].charAt(0) >= '0' && $scope.farms[i][weekday[2]].charAt(0) <= '9'){
							$scope.farms[i].status = $scope.formatHoursB($scope.farms[i][weekday[2]],weekday[2]);
						}
					}else if($scope.doftw_num==6){
						if ($scope.farms[i][weekday[0]].charAt(0) >= '0' && $scope.farms[i][weekday[0]].charAt(0) <= '9'){
							$scope.farms[i].status = $scope.formatHoursB($scope.farms[i][weekday[0]],weekday[0]);
						}else if($scope.farms[i][weekday[1]].charAt(0) >= '0' && $scope.farms[i][weekday[1]].charAt(0) <= '9'){
							$scope.farms[i].status = $scope.formatHoursB($scope.farms[i][weekday[1]],weekday[1]);
						}else if($scope.farms[i][weekday[2]].charAt(0) >= '0' && $scope.farms[i][weekday[2]].charAt(0) <= '9'){
							$scope.farms[i].status = $scope.formatHoursB($scope.farms[i][weekday[2]],weekday[2]);
						}else if($scope.farms[i][weekday[3]].charAt(0) >= '0' && $scope.farms[i][weekday[3]].charAt(0) <= '9'){
							$scope.farms[i].status = $scope.formatHoursB($scope.farms[i][weekday[3]],weekday[3]);
						}
					}
				}else{
					$scope.farms[i].hours = $scope.farms[i][$scope.doftw];
				}	
			}
			
			// $scope.farms[i].open = 
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
	$scope.formatHoursB = function(hours,day) {
		var status = "Closed - Opens again "+day+" - ";
		var split = hours.split("-");
		var first = split[0].split(":");
		var firstA = parseInt(first[0]);
		var firstB = first[1];
		var second = split[1].split(":");
		var secondA = parseInt(second[0]);
		var secondB = second[1];
		//format hours
		if (firstA>=12){
			if (firstA==12){
				status=status+"12:"+firstB+"pm";
			}else{
				status=status+(firstA-12)+":"+firstB+"pm";
			}
		}else{
			if(firstA==0){
				status=status+"12:"+firstB+"am";
			}else{
				status=status+firstA+":"+firstB+"am";
			}
			
		}
		status=status+"-";
		if (secondA>=12){
			if (secondA==12){
				status=status+"12:"+secondB+"pm";
			}else{
				status=status+(secondA-12)+":"+secondB+"pm";
			}
		}else{
			if(secondA==0){
				status=status+"12:"+secondB+"am";
			}else{
				status=status+secondA+":"+secondB+"am";
			}
		}
		return status;
	}
	$scope.formatHours = function(hours) {
		var today = new Date();
		var status = "Closed";
		var split = hours.split("-");
		var first = split[0].split(":");
		var firstA = parseInt(first[0]);
		var firstB = first[1];
		var second = split[1].split(":");
		var secondA = parseInt(second[0]);
		var secondB = second[1];
		//status
		if (today.getHours()>firstA && today.getHours() <secondA){
			status = "Open"
		}else if (today.getHours()==firstA){
			if (today.getMinutes()>parseInt(firstB)){
				status = "Open";
			}
		}else if(today.getHours()==secondA){
			if (today.getMinutes()<parseInt(secondB)){
				status = "Open";
			}
		}
		//format hours
		if (firstA>=12){
			if (firstA==12){
				newHours="12:"+firstB+"pm";
			}else{
				newHours=(firstA-12)+":"+firstB+"pm";
			}
		}else{
			if(firstA==0){
				newHours="12:"+firstB+"am";
			}else{
				newHours=firstA+":"+firstB+"am";
			}
		}
		newHours=newHours+"-";
		if (secondA>=12){
			if (secondA==12){
				newHours=newHours+"12:"+secondB+"pm";
			}else{
				newHours=newHours+(secondA-12)+":"+secondB+"pm";
			}
		}else{
			if(secondA==0){
				newHours=newHours+"12:"+secondB+"am";
			}else{
				newHours=newHours+secondA+":"+secondB+"am";
			}
		}
		return [newHours,status];
	}
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
            "ios": "maps:?saddr=Current Location&daddr= "+$scope.farms[index].Address+" "+$scope.farms[index].Town+" Ontario Canada",
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
		ga('set', 'page', '/Cart.html');
		ga('send', 'pageview');
		if(window.innerWidth <= 700) {
			$scope.mobile = true;
		} else {
			$scope.mobile = false;
		}
	   	$scope.cart = JSON.parse(cartServices.getCart());
		$scope.farms = JSON.parse(cartServices.getPotentialCart());
		$scope.searchList = cartServices.getSearchList();
		var current_hours = today.getHours();
		var current_minutes = today.getMinutes();
		for (i = 0;i<$scope.farms.length;i++){
			if ($scope.farms[i][$scope.doftw].charAt(0) >= '0' && $scope.farms[i][$scope.doftw].charAt(0) <= '9'){
				var hourInfo = $scope.formatHours($scope.farms[i][$scope.doftw]);
				$scope.farms[i].hours = hourInfo[0];
				if (hourInfo[1]=="Closed"){
					var split = $scope.farms[i][$scope.doftw].split("-");
					var first = split[0].split(":");
					var start_hours = parseInt(first[0]);
					var start_minutes = parseInt(first[1]);
					if(current_hours<start_hours){
						$scope.farms[i].status = "Closed - Open later today";
					}else if(current_hours==start_hours && current_minutes<start_minutes){
						$scope.farms[i].status = "Closed - Open later today";
					}else if ($scope.doftw_num==0){
						// if 
						if ($scope.farms[i][weekday[1]].charAt(0) >= '0' && $scope.farms[i][weekday[1]].charAt(0) <= '9'){
							$scope.farms[i].status = $scope.formatHoursB($scope.farms[i][weekday[1]],weekday[1]);
						}else if($scope.farms[i][weekday[2]].charAt(0) >= '0' && $scope.farms[i][weekday[2]].charAt(0) <= '9'){
							$scope.farms[i].status = $scope.formatHoursB($scope.farms[i][weekday[2]],weekday[2]);
						}else if($scope.farms[i][weekday[3]].charAt(0) >= '0' && $scope.farms[i][weekday[3]].charAt(0) <= '9'){
							$scope.farms[i].status = $scope.formatHoursB($scope.farms[i][weekday[3]],weekday[3]);
						}else if($scope.farms[i][weekday[4]].charAt(0) >= '0' && $scope.farms[i][weekday[4]].charAt(0) <= '9'){
							$scope.farms[i].status = $scope.formatHoursB($scope.farms[i][weekday[4]],weekday[4]);
						}
					}else if($scope.doftw_num==1){
						if ($scope.farms[i][weekday[2]].charAt(0) >= '0' && $scope.farms[i][weekday[2]].charAt(0) <= '9'){
							$scope.farms[i].status = $scope.formatHoursB($scope.farms[i][weekday[2]],weekday[2]);
						}else if($scope.farms[i][weekday[3]].charAt(0) >= '0' && $scope.farms[i][weekday[3]].charAt(0) <= '9'){
							$scope.farms[i].status = $scope.formatHoursB($scope.farms[i][weekday[3]],weekday[3]);
						}else if($scope.farms[i][weekday[4]].charAt(0) >= '0' && $scope.farms[i][weekday[4]].charAt(0) <= '9'){
							$scope.farms[i].status = $scope.formatHoursB($scope.farms[i][weekday[4]],weekday[4]);
						}else if($scope.farms[i][weekday[5]].charAt(0) >= '0' && $scope.farms[i][weekday[5]].charAt(0) <= '9'){
							$scope.farms[i].status = $scope.formatHoursB($scope.farms[i][weekday[5]],weekday[5]);
						}
					}else if($scope.doftw_num==2){
						if ($scope.farms[i][weekday[3]].charAt(0) >= '0' && $scope.farms[i][weekday[3]].charAt(0) <= '9'){
							$scope.farms[i].status = $scope.formatHoursB($scope.farms[i][weekday[3]],weekday[3]);
						}else if($scope.farms[i][weekday[4]].charAt(0) >= '0' && $scope.farms[i][weekday[4]].charAt(0) <= '9'){
							$scope.farms[i].status = $scope.formatHoursB($scope.farms[i][weekday[4]],weekday[4]);
						}else if($scope.farms[i][weekday[5]].charAt(0) >= '0' && $scope.farms[i][weekday[5]].charAt(0) <= '9'){
							$scope.farms[i].status = $scope.formatHoursB($scope.farms[i][weekday[5]],weekday[5]);
						}else if($scope.farms[i][weekday[6]].charAt(0) >= '0' && $scope.farms[i][weekday[6]].charAt(0) <= '9'){
							$scope.farms[i].status = $scope.formatHoursB($scope.farms[i][weekday[6]],weekday[6]);
						}
					}else if($scope.doftw_num==3){
						if ($scope.farms[i][weekday[4]].charAt(0) >= '0' && $scope.farms[i][weekday[4]].charAt(0) <= '9'){
							$scope.farms[i].status = $scope.formatHoursB($scope.farms[i][weekday[4]],weekday[4]);
						}else if($scope.farms[i][weekday[5]].charAt(0) >= '0' && $scope.farms[i][weekday[5]].charAt(0) <= '9'){
							$scope.farms[i].status = $scope.formatHoursB($scope.farms[i][weekday[5]],weekday[5]);
						}else if($scope.farms[i][weekday[6]].charAt(0) >= '0' && $scope.farms[i][weekday[6]].charAt(0) <= '9'){
							$scope.farms[i].status = $scope.formatHoursB($scope.farms[i][weekday[6]],weekday[6]);
						}else if($scope.farms[i][weekday[0]].charAt(0) >= '0' && $scope.farms[i][weekday[0]].charAt(0) <= '9'){
							$scope.farms[i].status = $scope.formatHoursB($scope.farms[i][weekday[0]],weekday[0]);
						}
					}else if($scope.doftw_num==4){
						if ($scope.farms[i][weekday[5]].charAt(0) >= '0' && $scope.farms[i][weekday[5]].charAt(0) <= '9'){
							$scope.farms[i].status = $scope.formatHoursB($scope.farms[i][weekday[5]],weekday[5]);
						}else if($scope.farms[i][weekday[6]].charAt(0) >= '0' && $scope.farms[i][weekday[6]].charAt(0) <= '9'){
							$scope.farms[i].status = $scope.formatHoursB($scope.farms[i][weekday[6]],weekday[6]);
						}else if($scope.farms[i][weekday[0]].charAt(0) >= '0' && $scope.farms[i][weekday[0]].charAt(0) <= '9'){
							$scope.farms[i].status = $scope.formatHoursB($scope.farms[i][weekday[0]],weekday[0]);
						}else if($scope.farms[i][weekday[1]].charAt(0) >= '0' && $scope.farms[i][weekday[1]].charAt(0) <= '9'){
							$scope.farms[i].status = $scope.formatHoursB($scope.farms[i][weekday[1]],weekday[1]);
						}
					}else if($scope.doftw_num==5){
						if ($scope.farms[i][weekday[6]].charAt(0) >= '0' && $scope.farms[i][weekday[6]].charAt(0) <= '9'){
							$scope.farms[i].status = $scope.formatHoursB($scope.farms[i][weekday[6]],weekday[6]);
						}else if($scope.farms[i][weekday[0]].charAt(0) >= '0' && $scope.farms[i][weekday[0]].charAt(0) <= '9'){
							$scope.farms[i].status = $scope.formatHoursB($scope.farms[i][weekday[0]],weekday[0]);
						}else if($scope.farms[i][weekday[1]].charAt(0) >= '0' && $scope.farms[i][weekday[1]].charAt(0) <= '9'){
							$scope.farms[i].status = $scope.formatHoursB($scope.farms[i][weekday[1]],weekday[1]);
						}else if($scope.farms[i][weekday[2]].charAt(0) >= '0' && $scope.farms[i][weekday[2]].charAt(0) <= '9'){
							$scope.farms[i].status = $scope.formatHoursB($scope.farms[i][weekday[2]],weekday[2]);
						}
					}else if($scope.doftw_num==6){
						if ($scope.farms[i][weekday[0]].charAt(0) >= '0' && $scope.farms[i][weekday[0]].charAt(0) <= '9'){
							$scope.farms[i].status = $scope.formatHoursB($scope.farms[i][weekday[0]],weekday[0]);
						}else if($scope.farms[i][weekday[1]].charAt(0) >= '0' && $scope.farms[i][weekday[1]].charAt(0) <= '9'){
							$scope.farms[i].status = $scope.formatHoursB($scope.farms[i][weekday[1]],weekday[1]);
						}else if($scope.farms[i][weekday[2]].charAt(0) >= '0' && $scope.farms[i][weekday[2]].charAt(0) <= '9'){
							$scope.farms[i].status = $scope.formatHoursB($scope.farms[i][weekday[2]],weekday[2]);
						}else if($scope.farms[i][weekday[3]].charAt(0) >= '0' && $scope.farms[i][weekday[3]].charAt(0) <= '9'){
							$scope.farms[i].status = $scope.formatHoursB($scope.farms[i][weekday[3]],weekday[3]);
						}
					}
				}else{
					$scope.farms[i].status = hourInfo[1];
				}
			}else{
				if ($scope.farms[i][$scope.doftw]=="Closed"){
					var split = $scope.farms[i][$scope.doftw].split("-");
					var first = split[0].split(":");
					var start_hours = parseInt(first[0]);
					var start_minutes = parseInt(first[1]);
					if(current_hours<start_hours){
						$scope.farms[i].status = "Closed - Open later today";
					}else if(current_hours==start_hours && current_minutes<start_minutes){
						$scope.farms[i].status = "Closed - Open later today";
					}else if ($scope.doftw_num==0){
						// if 
						if ($scope.farms[i][weekday[1]].charAt(0) >= '0' && $scope.farms[i][weekday[1]].charAt(0) <= '9'){
							$scope.farms[i].status = $scope.formatHoursB($scope.farms[i][weekday[1]],weekday[1]);
						}else if($scope.farms[i][weekday[2]].charAt(0) >= '0' && $scope.farms[i][weekday[2]].charAt(0) <= '9'){
							$scope.farms[i].status = $scope.formatHoursB($scope.farms[i][weekday[2]],weekday[2]);
						}else if($scope.farms[i][weekday[3]].charAt(0) >= '0' && $scope.farms[i][weekday[3]].charAt(0) <= '9'){
							$scope.farms[i].status = $scope.formatHoursB($scope.farms[i][weekday[3]],weekday[3]);
						}else if($scope.farms[i][weekday[4]].charAt(0) >= '0' && $scope.farms[i][weekday[4]].charAt(0) <= '9'){
							$scope.farms[i].status = $scope.formatHoursB($scope.farms[i][weekday[4]],weekday[4]);
						}
					}else if($scope.doftw_num==1){
						if ($scope.farms[i][weekday[2]].charAt(0) >= '0' && $scope.farms[i][weekday[2]].charAt(0) <= '9'){
							$scope.farms[i].status = $scope.formatHoursB($scope.farms[i][weekday[2]],weekday[2]);
						}else if($scope.farms[i][weekday[3]].charAt(0) >= '0' && $scope.farms[i][weekday[3]].charAt(0) <= '9'){
							$scope.farms[i].status = $scope.formatHoursB($scope.farms[i][weekday[3]],weekday[3]);
						}else if($scope.farms[i][weekday[4]].charAt(0) >= '0' && $scope.farms[i][weekday[4]].charAt(0) <= '9'){
							$scope.farms[i].status = $scope.formatHoursB($scope.farms[i][weekday[4]],weekday[4]);
						}else if($scope.farms[i][weekday[5]].charAt(0) >= '0' && $scope.farms[i][weekday[5]].charAt(0) <= '9'){
							$scope.farms[i].status = $scope.formatHoursB($scope.farms[i][weekday[5]],weekday[5]);
						}
					}else if($scope.doftw_num==2){
						if ($scope.farms[i][weekday[3]].charAt(0) >= '0' && $scope.farms[i][weekday[3]].charAt(0) <= '9'){
							$scope.farms[i].status = $scope.formatHoursB($scope.farms[i][weekday[3]],weekday[3]);
						}else if($scope.farms[i][weekday[4]].charAt(0) >= '0' && $scope.farms[i][weekday[4]].charAt(0) <= '9'){
							$scope.farms[i].status = $scope.formatHoursB($scope.farms[i][weekday[4]],weekday[4]);
						}else if($scope.farms[i][weekday[5]].charAt(0) >= '0' && $scope.farms[i][weekday[5]].charAt(0) <= '9'){
							$scope.farms[i].status = $scope.formatHoursB($scope.farms[i][weekday[5]],weekday[5]);
						}else if($scope.farms[i][weekday[6]].charAt(0) >= '0' && $scope.farms[i][weekday[6]].charAt(0) <= '9'){
							$scope.farms[i].status = $scope.formatHoursB($scope.farms[i][weekday[6]],weekday[6]);
						}
					}else if($scope.doftw_num==3){
						if ($scope.farms[i][weekday[4]].charAt(0) >= '0' && $scope.farms[i][weekday[4]].charAt(0) <= '9'){
							$scope.farms[i].status = $scope.formatHoursB($scope.farms[i][weekday[4]],weekday[4]);
						}else if($scope.farms[i][weekday[5]].charAt(0) >= '0' && $scope.farms[i][weekday[5]].charAt(0) <= '9'){
							$scope.farms[i].status = $scope.formatHoursB($scope.farms[i][weekday[5]],weekday[5]);
						}else if($scope.farms[i][weekday[6]].charAt(0) >= '0' && $scope.farms[i][weekday[6]].charAt(0) <= '9'){
							$scope.farms[i].status = $scope.formatHoursB($scope.farms[i][weekday[6]],weekday[6]);
						}else if($scope.farms[i][weekday[0]].charAt(0) >= '0' && $scope.farms[i][weekday[0]].charAt(0) <= '9'){
							$scope.farms[i].status = $scope.formatHoursB($scope.farms[i][weekday[0]],weekday[0]);
						}
					}else if($scope.doftw_num==4){
						if ($scope.farms[i][weekday[5]].charAt(0) >= '0' && $scope.farms[i][weekday[5]].charAt(0) <= '9'){
							$scope.farms[i].status = $scope.formatHoursB($scope.farms[i][weekday[5]],weekday[5]);
						}else if($scope.farms[i][weekday[6]].charAt(0) >= '0' && $scope.farms[i][weekday[6]].charAt(0) <= '9'){
							$scope.farms[i].status = $scope.formatHoursB($scope.farms[i][weekday[6]],weekday[6]);
						}else if($scope.farms[i][weekday[0]].charAt(0) >= '0' && $scope.farms[i][weekday[0]].charAt(0) <= '9'){
							$scope.farms[i].status = $scope.formatHoursB($scope.farms[i][weekday[0]],weekday[0]);
						}else if($scope.farms[i][weekday[1]].charAt(0) >= '0' && $scope.farms[i][weekday[1]].charAt(0) <= '9'){
							$scope.farms[i].status = $scope.formatHoursB($scope.farms[i][weekday[1]],weekday[1]);
						}
					}else if($scope.doftw_num==5){
						if ($scope.farms[i][weekday[6]].charAt(0) >= '0' && $scope.farms[i][weekday[6]].charAt(0) <= '9'){
							$scope.farms[i].status = $scope.formatHoursB($scope.farms[i][weekday[6]],weekday[6]);
						}else if($scope.farms[i][weekday[0]].charAt(0) >= '0' && $scope.farms[i][weekday[0]].charAt(0) <= '9'){
							$scope.farms[i].status = $scope.formatHoursB($scope.farms[i][weekday[0]],weekday[0]);
						}else if($scope.farms[i][weekday[1]].charAt(0) >= '0' && $scope.farms[i][weekday[1]].charAt(0) <= '9'){
							$scope.farms[i].status = $scope.formatHoursB($scope.farms[i][weekday[1]],weekday[1]);
						}else if($scope.farms[i][weekday[2]].charAt(0) >= '0' && $scope.farms[i][weekday[2]].charAt(0) <= '9'){
							$scope.farms[i].status = $scope.formatHoursB($scope.farms[i][weekday[2]],weekday[2]);
						}
					}else if($scope.doftw_num==6){
						if ($scope.farms[i][weekday[0]].charAt(0) >= '0' && $scope.farms[i][weekday[0]].charAt(0) <= '9'){
							$scope.farms[i].status = $scope.formatHoursB($scope.farms[i][weekday[0]],weekday[0]);
						}else if($scope.farms[i][weekday[1]].charAt(0) >= '0' && $scope.farms[i][weekday[1]].charAt(0) <= '9'){
							$scope.farms[i].status = $scope.formatHoursB($scope.farms[i][weekday[1]],weekday[1]);
						}else if($scope.farms[i][weekday[2]].charAt(0) >= '0' && $scope.farms[i][weekday[2]].charAt(0) <= '9'){
							$scope.farms[i].status = $scope.formatHoursB($scope.farms[i][weekday[2]],weekday[2]);
						}else if($scope.farms[i][weekday[3]].charAt(0) >= '0' && $scope.farms[i][weekday[3]].charAt(0) <= '9'){
							$scope.farms[i].status = $scope.formatHoursB($scope.farms[i][weekday[3]],weekday[3]);
						}
					}
				}else{
					$scope.farms[i].hours = $scope.farms[i][$scope.doftw];
				}	
			}
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
            "ios": "maps:?saddr=Current Location&daddr= "+$scope.farms[index].Address+" "+$scope.farms[index].Town+" Ontario Canada",
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
	$scope.formatHoursB = function(hours,day) {
		var status = "Closed - Opens again "+day+" - ";
		var split = hours.split("-");
		var first = split[0].split(":");
		var firstA = parseInt(first[0]);
		var firstB = first[1];
		var second = split[1].split(":");
		var secondA = parseInt(second[0]);
		var secondB = second[1];
		//format hours
		if (firstA>=12){
			if (firstA==12){
				status=status+"12:"+firstB+"pm";
			}else{
				status=status+(firstA-12)+":"+firstB+"pm";
			}
		}else{
			if(firstA==0){
				status=status+"12:"+firstB+"am";
			}else{
				status=status+firstA+":"+firstB+"am";
			}
			
		}
		status=status+"-";
		if (secondA>=12){
			if (secondA==12){
				status=status+"12:"+secondB+"pm";
			}else{
				status=status+(secondA-12)+":"+secondB+"pm";
			}
		}else{
			if(secondA==0){
				status=status+"12:"+secondB+"am";
			}else{
				status=status+secondA+":"+secondB+"am";
			}
		}
		return status;
	}
	$scope.formatHours = function(hours) {
		var today = new Date();
		var status = "Closed";
		var split = hours.split("-");
		var first = split[0].split(":");
		var firstA = parseInt(first[0]);
		var firstB = first[1];
		var second = split[1].split(":");
		var secondA = parseInt(second[0]);
		var secondB = second[1];
		//status
		if (today.getHours()>firstA && today.getHours() <secondA){
			status = "Open"
		}else if (today.getHours()==firstA){
			if (today.getMinutes()>parseInt(firstB)){
				status = "Open";
			}
		}else if(today.getHours()==secondA){
			if (today.getMinutes()<parseInt(secondB)){
				status = "Open";
			}
		}
		//format hours
		if (firstA>=12){
			if (firstA==12){
				newHours="12:"+firstB+"pm";
			}else{
				newHours=(firstA-12)+":"+firstB+"pm";
			}
		}else{
			if(firstA==0){
				newHours="12:"+firstB+"am";
			}else{
				newHours=firstA+":"+firstB+"am";
			}
		}
		newHours=newHours+"-";
		if (secondA>=12){
			if (secondA==12){
				newHours=newHours+"12:"+secondB+"pm";
			}else{
				newHours=newHours+(secondA-12)+":"+secondB+"pm";
			}
		}else{
			if(secondA==0){
				newHours=newHours+"12:"+secondB+"am";
			}else{
				newHours=newHours+secondA+":"+secondB+"am";
			}
		}
		return [newHours,status];
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
			var newPostKey = firebase.database().ref().child('emails').push().key;
			var updates = {};
			var postData = {
				email: $scope.emailDetails.email,
				date: new Date()
			}
  			updates['/emails/' + newPostKey] = postData;
  			firebase.database().ref().update(updates);
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

 