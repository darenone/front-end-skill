    /*
     *创建ajax对象
     *请求服务器
     *发送请求
     *接受返回值
    */
function ajax(method,url,fnSuccess,fnFaild,data){
		creatXmlHttpRequest();
		console.log(xhr);
		if(method == 'post'){
			xhr.open(method,url,true);
			xhr.setRequestHeader("Content-Type","application/x-www-form-urlencoded"); 
			xhr.send(data);
			// xhr.send("fname=Bill&lname=Gates");
		}else if(method == 'get'){
			xhr.open(method,url,true);
			xhr.send(null);
		}else{
			console.log('参数异常！');
		}       
        xhr.onreadystatechange = function(){
			if(xhr.readyState == 4){
				if(xhr.status == 200){
					fnSuccess(xhr.responseText);
				}else{
					fnFaild(xhr.status);
				}
			}
			// if((xhr.readyState == 4)&&(xhr.status == 200)){
				// fnSuccess(xhr.responseText);	
			// }else{
				// // fnFaild(xhr.status);
				
			// }
            // if(xhr.readyState == 4){
                // if(xhr.status == 200){
                    // // 获取数据
                    // fnSuccess(xhr.responseText);
                     // if(fnFaild){
                         // fnFaild(xhr.status);
                     // }
                // }
            // }
        }
    }
var xhr;
function creatXmlHttpRequest(){
	if(window.XMLHttpRequest){
		xhr = new  XMLHttpRequest(); 
	}else if(window.ActiveXObject){
		// IE6
        xhr = new ActiveXObject('Msxml2.XMLHTTP');
	}else{
		// IE5及以下
		xhr = new ActiveXObject("Microsoft.XMLHTTP");
	}
}
function fn1(){
	console.log('hello');
}