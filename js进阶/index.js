var btn = document.getElementById("button");
var inputList = document.getElementsByTagName("input");
var txt = document.getElementById("txt");
txt.onfocus = function(){
	txt.value = '';
	txt.oninput = function(){
		txt.value = '该输入框内容暂未开通数据提交功能！请不要提交数据...'
	}
}
txt.onblur = function(){
	txt.value = '请输入内容...'
}
console.log(txt);
console.log(btn)
var arrInput = [];
btn.onclick = function(){
	var str = '停机原因';
	for(var i = 0;i < inputList.length;i++){
		if(inputList[i].checked){
			arrInput.push(inputList[i]);
			console.log(typeof(inputList[i].id));
			// if(inputList[i].id == '1'){
				// str += inputList[i].value
			// }
			str += "--"+inputList[i].value+"";	
		}
	}
	if(str.length == 4){
		alert('数据不能为空！');
		return;
	}
	console.log(arrInput);
	data = 'ProductionLineid=23&Content='+str+'';
	ajax('post','http://jxd.unitoon.cn/api/GoldenXD/FeedInfoSubmit?t='+new Date().getTime(),function(str){
	 var json = JSON.parse(str);
		if(str == 'true'){
			alert('添加数据成功！');
			arrInput.map(function(item){
				item.checked = false;	
			})
			arrInput = [];
			console.log(arrInput)
		}else{
			alert('添加数据失败!');
		}
	},function(str){
		console.log('请求异常原因:'+str);
	},data)	
	console.log(str);
	return false;
}