function hello(){
			console.log('hello');
}
function arrFormat(){
	console.log('hello')
	var arr1 = [
		{'name':'张三','age':10},
		{'name':'张四','age':11},
		{'name':'张五','age':12},
		{'name':'张六','age':13},
		{'name':'张七','age':14},
		{'name':'张八','age':15}
	];
	var arr2 = [];
	for(var i = 0;i < arr1.length;i++){
		arr1[i].index = i;
		arr2.push({'age':arr1[i].age});
	}
	console.log(arr2);
}
