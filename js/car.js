var goods=[
	{name:'苹果',price:3.5},
	{name:'香蕉',price:5},
	{name:'橘子',price:2.5},
	{name:'西瓜',price:20},
	{name:'葡萄',price:3}
]
var app=angular.module('app',[]);
app.controller('o',function($scope){
	$scope.goods=goods;
	$scope.buy=[];
	$scope.buyBtn=function(i){
		var g=$scope.goods;
		var b=$scope.buy;
		if(b.length>0){
			var flag=true;
			angular.forEach(b,function(obj,j){
				if(b[j].name==g[i].name){
					b[j].num++;
					flag=false;
				}
			})
			if(!flag){
				return;
			}
		}
		var o ={};
		o.name=g[i].name;
		o.price=g[i].price;
		o.num=1;
		b.push(o);
	}
	$scope.addBtn=function(name){
		angular.forEach($scope.buy,function(obj,j){
			if(obj.name==name){
				obj.num++;
			}
		})
	}
	$scope.reduceBtn=function(name){
		angular.forEach($scope.buy,function(obj,j){
			if(obj.name==name){
				obj.num--;
				if(obj.num<=0){
					var sta=confirm('您确定不购买了吗？');
					if(sta){
						obj.num=0;
						$scope.buy.splice(j,1)
					}else{
						obj.num=0;
					}
				}
			}
		})
	}
	$scope.del=function(name){
		var sta=confirm('您确定要删除商品吗？')
		if(sta){
			angular.forEach($scope.buy,function(obj,j){
				if(obj.name==name){
					$scope.buy.splice(j,1)
				}
			})
		}	
	}
	$scope.sum=function(i){
		var s=0;
		var b=$scope.buy;
		angular.forEach(b,function(obj,j){
			s+=obj.price*obj.num;
		})
		return s;
	}
	$scope.aa=true;
	$scope.order=function(k){
		$scope.aa=!$scope.aa;
		$scope.k=k;
	}
	$scope.$watch('buy',function(newVal,oldVal){
		for(var i=0;i<newVal.length;i++){
			newVal[i].sum=newVal[i].num*newVal[i].price;
		}
	},true)
})