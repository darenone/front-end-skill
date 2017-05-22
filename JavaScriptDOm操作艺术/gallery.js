
// 自己写的烂代码
// var a = document.getElementsByTagName('a');
// var img = document.getElementsByTagName("img")[0];
// for(var i = 0;i < a.length;i++){
//     var src = null;
//     var describe = null;
//     a[i].onclick = function(){
//         href = this.getAttribute('href');
//         describe = this.getAttribute('title');
//         img.setAttribute('src', href);
//         return false;
//     }
// }

window.onload = prepareGallery();

function prepareGallery(){
    var a = document.getElementsByTagName('a');
    var img = document.getElementsByTagName("img")[0];
    var href = a[0].getAttribute('href');
    var description = document.getElementById("description");
    var describe = a[0].getAttribute('title');
    description.innerHTML = describe;
    img.setAttribute('src', href);
    for(var i = 0;i < a.length;i++){
        a[i].onclick = function(){
            img.setAttribute('src', this.getAttribute('href'));
            description.innerHTML = this.getAttribute('title');
            return false;
        }
    }
}
