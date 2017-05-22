var btn = document.getElementById("button");
var inputList = document.getElementsByTagName("input");
var txt = document.getElementById("txt");
var mask = document.getElementById("mask");
// 文本域控制
txt.onfocus = function(){
	txt.value = '该输入框暂未开通数据提交功能！请不要在此输入数据...';
	// txt.oninput = function(){
	// 	console.log('hello')
	// 	txt.value = '该输入框内容暂未开通数据提交功能！请不要提交数据...'
	// }
}
txt.onblur = function(){
	txt.value = '请输入内容...'
}
var arrInput = [];
var arrInput2 = [];
btn.onclick = function(){
	for(var i = 0;i < inputList.length;i++){
		if(inputList[i].checked){
			arrInput2.push(inputList[i]);
			var id = inputList[i].id;
			var value = inputList[i].value;
			switch (id) {
				case '1':
					arrInput.push({a : ""+value+""});
					break;
				case '2':
					arrInput.push({b : ""+value+""});
					break;
				case '3':
					arrInput.push({c : ""+value+""});
					break;
				default:
					arrInput.push({d : ""+value+""});
					break;
			}
		}
	}
	var str1 = '停机原因:'
	var str2 = '客观原因:'
	var str3 = '主观原因:'
	var str4 = '设备故障原因:'
	for(var i = 0;i < arrInput.length;i++){
		if(arrInput[i].a){
			str1 += arrInput[i].a + ',';
		}else if (arrInput[i].b) {
			str2 += arrInput[i].b + ',';
		}else if (arrInput[i].c) {
			str3 += arrInput[i].c + ',';
		}else {
			str4 += arrInput[i].d + ',';
		}
	}
	str1.length == 5 ? str1 = '' : str1;
	str2.length == 5 ? str2 = '' : str2;
	str3.length == 5 ? str3 = '' : str3;
	str4.length == 7 ? str4 = '' : str4;
	var str = str1.replace(/,$/,';') + str2.replace(/,$/,';') + str3.replace(/,$/,';') + str4.replace(/,$/,';');
	if(str.length == 0){
		alertLayer('2.png');
		return;
	}else {
		mask.style.display  = 'block';
	}
	data = 'ProductionLineid=23&Content='+str+'';
	ajax('post','http://jxd.unitoon.cn/api/GoldenXD/FeedInfoSubmit?t='+new Date().getTime(),function(str){
	 // var json = JSON.parse(str);
		if(str == 'true'){
			arrInput = [];
			mask.children[0].src = 'load.gif';
			var timer = setTimeout(function() {
				mask.style.display = 'none';
				alertLayer('1.png')
				// arrInput2.map(function(item){
				// 	item.checked = false;
				// });
				for(var i = 0;i < arrInput2.length;i++){
					arrInput2[i].checked = false;
				}
				clearTimeout(timer);
			}, 500);
		}else{
			alert('添加数据失败!');
		}
	},function(str){
		return false;
	},data)
	return false;
}

//自定义弹出框
var winWidth;
var winHeight;
function alertLayer(imgUrl){
	var div = document.createElement("div");
	document.body.appendChild(div);
	var btn = document.createElement("button");
	div.appendChild(btn);
	div.style.cssText = 'position:relative;position: absolute;left: 40%;top: 27%;z-index: 10000;width:328px;height:213px;background:url('+imgUrl+');';
	btn.style.cssText = 'width: 59px;height: 25px;border: 1px solid #33a2db;position: absolute;left: 73%;top: 84%;text-align:center;z-index: 10800;';
	btn.innerHTML = '确定';
	btn.onclick = function(){
		document.body.removeChild(div);
		return false;
	}
}

