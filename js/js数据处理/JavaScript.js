function hello(){
	console.log('hello');
}
function arrFormat(){
	var arr1 = [
		{'name':'张三','age':10},
		{'name':'张四','age':11},
		{'name':'张五','age':12}
	];
	var arr2 = [];
	for(var i = 0;i < arr1.length;i++){
		arr1[i].index = i;
		arr2.push({'age':arr1[i].age});
	}
	console.log(arr1)
	console.log(arr2);
}
function jsonParse(){
	console.log(2)
	var obj = '{"name": "张三"}';
	console.log(obj);
	console.log(JSON.parse(obj));
}
function arrIndex(){
	var arr1 = [
		{'name': '张三','id': 1},
		{'name': '张四','id': 3},
		{'name': '张五','id': 5},
		{'name': '张六','id': 7},
		{'name': '张七','id': 9}
	]
	var arr2 = [];
	arr3 = [];
	for(var i = 0;i < arr1.length;i++){
		var id = arr1[i].id;
		arr3.push(arr1[i].name)
		fn();
	}
	console.log(arr1)
	console.log(arr2)
	console.log(arr3)
	console.log(arr2['1']);
	console.log(arr3[0])
	function fn(){
		arr2[id] = arr1[i].name;
	}
}
function dataFormat(ms){
	timeFormat = "yyyy-MM-dd hh:mm:ss";
    dayFormat = "yyyy-MM-dd";
    var ms = 1492411838993;
    var tempDate = new Date(ms);
    tempDate1 = tempDate.Format(timeFormat);
    tempDate2 = tempDate.Format(dayFormat);
    console.log(1492411838993)
    console.log(tempDate1)
    console.log(tempDate2)
}
Date.prototype.Format = function (fmt) { //author: meizz
    var o = {
        "M+": this.getMonth() + 1,                 //月份
        "d+": this.getDate(),                    //日
        "h+": this.getHours(),                   //小时
        "m+": this.getMinutes(),                 //分
        "s+": this.getSeconds(),                 //秒
        "q+": Math.floor((this.getMonth() + 3) / 3), //季度
        "S": this.getMilliseconds()             //毫秒
    };
    if (/(y+)/.test(fmt))
        fmt = fmt.replace(RegExp.$1, (this.getFullYear() + "").substr(4 - RegExp.$1.length));
    for (var k in o)
        if (new RegExp("(" + k + ")").test(fmt))
            fmt = fmt.replace(RegExp.$1, (RegExp.$1.length == 1) ? (o[k]) : (("00" + o[k]).substr(("" + o[k]).length)));
    return fmt;
}
