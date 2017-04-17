    /*
     *创建ajax对象
     *请求服务器
     *发送请求
     *接受返回值
    */
function ajax(url,fnSuccess,fnFaild){
        if(window.XMLHttpRequest){
            var xhr = new  XMLHttpRequest();
        }else{
            var xhr = new ActiveXObject("Microsoft.XMLHTTP");
        }
        xhr.open('GET',url,true);
        xhr.send();
        xhr.onreadystatechange = function(){
            if(xhr.readyState == 4){
                if(xhr.status == 200){
                    fnSuccess(xhr.responseText);
                }else{
                    console.log('请求失败')
                    if(fnFaild){
                        fnFaild(xhr.status);
                    }
                }
            }
        }
    }
