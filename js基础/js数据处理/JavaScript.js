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
function dataFor(){
    var data1 = new Date("January 12,2006 22:19:35");
    var data2 = new Date("January 12,2006");
    var data3 = new Date(2006,0,12,22,19,35);
    var data4 = new Date(2006,0,12);
    var data5 = new Date(1137075575000);
    console.log(data1 + '\n' + data2 + '\n' + data3 + '\n' + data4 + '\n' + data5 );
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
function strSearch(){
    var str = 'abcdefgh';
    var index = str.search('b')
    console.log('var str = abcdefgh'+'var index = str.search(b)')
    console.log('返回查找到的下标：'+ index)
}
function strSubString(){
    var str = 'abcdefgh';
    var index = str.substring(1,4)
    console.log('var str = abcdefgh'+'var index = str.aubString(1,4)')
    console.log('返回截取的字符串：'+ index)
}
function strCharAt(){
    var str = 'abcdefgh';
    var index = str.charAt(1)
    console.log('var str = abcdefgh'+'var index = str.charAt(1)')
    console.log('返回指定的某一项：'+ index)
}
function strSplit(){
    var str = 'abcdefgh';
    var index = str.split('')
    console.log('var str = abcdefgh'+'var index = str.split(,)')
    console.log('分割为数组：'+ index)
}
function strNumber(){
    var str='12 fff 32 str 15 30';
    var tmp = '';
    var arr = [];
    for(var i = 0;i < str.length;i++){
        if(str.charAt(i) >= '0' && str.charAt(i) <= '9'){
            tmp += str.charAt(i);
        }
    }
    console.log(tmp);
}
