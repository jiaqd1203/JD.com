
window.onload = function(){
    var imgList = document.getElementById("imgList");
    var imgArr = imgList.getElementsByTagName("img")[0];
    imgList.style.width = 590*(imgArr.length+1) + "px";
    var slider = document.getElementById("slider");
    var pointer = document.getElementById("pointer");
    var index=0;
    var allA = pointer.getElementsByTagName("a");
    play();    
    //为所有的超链接都绑定单击响应函数
    for(i=0;i<allA.length;i++){
        //为每一个超链接添加一个num属性,执行完后每一个a都对应了一个num“标签”
        allA[i].num = i;        
        allA[i].onclick = function(){            
            clearInterval(timer);
            //获取点击超链接的索引,并将其设置为index    
            index = this.num;
            // alert(i);这个不行，因为for先执行，
            //所以i等于for执行完的数值，也就是length
            imgList.style.left = -590*index + "px"; 
            setA();            
        }
    }
    var imageArr = ["/img/l1.jpg.webp","/img/l2.jpg.webp","/img/l3.jpg.webp","/img/l4.jpg.webp",
    "/img/l5.jpg.webp","/img/l6.jpg.webp","/img/l7.jpg.webp","/img/l8.jpg.webp",]
    //alert(imgArr[index]);
    //className返回的是数组，需要[0]
    var prev = document.getElementsByClassName("btn-prev")[0];    
        prev.onclick = function(){                                    
            
            index --;
            if(index<0){
                index = imageArr.length-1;
            }
            imgArr.src = imageArr[index];
            setA();                     
        }
    var next = document.getElementsByClassName("btn-next")[0];
        next.onclick = function(){            
            
            index ++;
            if(index>imageArr.length-1){
                index = 0;
            }
            imgArr.src = imageArr[index];
            setA();
        }
        var timer;
        function play() {
            timer = setInterval(function () {
                 next.onclick();
        },2500);
        }

        
            /*
          还有这种方法，利用imgList的偏移量    
        imgList.style.left = -590*index + "px";
            var prevPic;
            if(imgList.style.left === "0px"){
                prevPic = -4130;
            }else{
                prevPic =  parseInt(imgList.style.left)+590;
            }
            imgList.style.left = prevPic + "px";
            index--;
            if(index<0){
                index=8;
            }*/        
    //创建一个方法用来设置选中的a
    function setA(){
        for(var i=0 ; i<allA.length ; i++){                    
            allA[i].style.backgroundColor = "";
            allA[i].style.border = "";              
            }
            allA[index].style.backgroundColor = "#fff";
            allA[index].style.border = "2px solid rgba(0, 0, 0, .4)";
    }

}


    
    
    





