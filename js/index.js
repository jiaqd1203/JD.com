
window.onload = function () {
    var imgList = document.getElementById("imgList");
    var imgArr = imgList.getElementsByTagName("img")[0];
    imgList.style.width = 590 * (imgArr.length + 1) + "px";
    var slider = document.getElementById("slider");
    var pointer = document.getElementById("pointer");
    var index = 0;
    var allA = pointer.getElementsByTagName("a");
    allA[0].style.backgroundColor = "#fff";
    allA[0].style.border = "2px solid rgba(0, 0, 0, .4)";
    for (i = 0; i < allA.length; i++) {
        allA[i].num = i;
        allA[i].onclick = function () {
            clearInterval(timer);
            index = this.num;
            setA();
            imgList.style.left = -590 * index + "px";
        }
    }
    var imageArr = ["/img/l1.jpg.webp", "/img/l2.jpg.webp", "/img/l3.jpg.webp", "/img/l4.jpg.webp",
        "/img/l5.jpg.webp", "/img/l6.jpg.webp", "/img/l7.jpg.webp", "/img/l8.jpg.webp",]
    var prev = document.getElementsByClassName("btn-prev")[0];
    prev.onclick = function () {
        index--;
        if (index < 0) {
            index = imageArr.length - 1;
        }
        imgList.style.left = -590 * index + "px";
        setA();
    }
    var next = document.getElementsByClassName("btn-next")[0];
    next.onclick = function () {
        index++;
        if (index > imageArr.length - 1) {
            index = 0;
        }
        imgList.style.left = -590 * index + "px";
        setA();
    }

    slider.onmouseover = function () {
        clearInterval(timer);
    }
    slider.onmouseout = function () {
        clearInterval(timer);
        play();
    }

    var timer = null;
    function play() {
        timer = setInterval(function () {
            index++;
            if (index > imageArr.length - 1) {
                index = 0;
            }
            imgList.style.left = -590 * index + "px";
            setA();
        }, 2500);
    }

    play();

    function setA() {
        for (var i = 0; i < allA.length; i++) {
            allA[i].style.backgroundColor = "";
            allA[i].style.border = "";
        }
        allA[index].style.backgroundColor = "#fff";
        allA[index].style.border = "2px solid rgba(0, 0, 0, .4)";
    }
    var boxwrap = document.getElementById("ad-boxwrap");
    var adbox = document.getElementsByClassName('ad-box');
    var adPrev = document.getElementsByClassName('btn-ad-prev')[0];
    adPrev.onclick = function () {
        adindex--;
        if (adindex < 0) {
            adindex = adbox.length - 1;
        }
        for (var i = 0; i < adbox.length - 1; i++) {
            adbox[i].style.display = "none";
        }
        adbox[adindex].style.display = "block";
    }
    var adNext = document.getElementsByClassName('btn-ad-next')[0];
    adNext.onclick = function () {
        adindex++;
        if (adindex > adbox.length - 1) {
            adindex = 0;
        }
        for (var i = 0; i < adbox.length - 1; i++) {
            adbox[i].style.display = "none";
        }
        adbox[adindex].style.display = "block";
    }

    boxwrap.onmouseover = function () {
        clearInterval(adtime);
    }
    boxwrap.onmouseout = function () {
        clearInterval(adtime);
        run();
    }
    var adindex = 0;
    var adtime = null;
    function run() {
        adtime = setInterval(function () {
            adindex++;
            if (adindex > adbox.length - 1) {
                adindex = 0;
            }
            for (var i = 0; i < adbox.length - 1; i++) {
                adbox[i].style.display = "none";
            }
            adbox[adindex].style.display = "block";
        }, 3000)
    }
    run();
    var secList = document.getElementById('seckill-slider-list');
    var secItem = secList.getElementsByClassName('seckill-slider-item');
    var sectime = null;
    var secindex = 0;
    function secSlider() {
        sectime = setInterval(function () {
            secindex++;
            if (secindex > secItem.length - 1) {
                secindex = 0;
                secList.style.left = 0;
            }
            move(secList, "left", -200 * secindex, 20, function () {
                if (secindex >= secItem.length - 1) {
                    secindex = 0;
                    secList.style.left = 0;
                }
            });
        }, 3000);
    }
    secSlider();
    window.onscroll = function () {
        var elevator = document.getElementById('elevator');
        if (parseInt(document.documentElement.scrollTop) < 510) {
            elevator.style.cssText = 'position:absolute;top:760px;left:50%;margin-left:635px;';
        } else {
            elevator.style.cssText = 'position:fixed;top:250px;left:50%;margin-left:635px;';
        }
        var top = document.documentElement.scrollTop ? document.documentElement.scrollTop : document.body.scrollTop;
        var item1 = document.getElementById('item1');
        var item2 = document.getElementById('item2');
        var item3 = document.getElementById('item3');
        var elevatorItem1 = document.getElementById('elevator-item1').getElementsByTagName('a')[0];
        var elevatorItem2 = document.getElementById('elevator-item2').getElementsByTagName('a')[0];
        var elevatorItem3 = document.getElementById('elevator-item3').getElementsByTagName('a')[0];
        console.log(item1.offsetTop - document.documentElement.scrollTop);
        if (top > item1.offsetTop - document.documentElement.scrollTop && top < item2.offsetTop - document.documentElement.scrollTop) {
            elevatorItem1.style.cssText = "color:#c81623;";
            elevatorItem2.style.cssText = "";
            elevatorItem3.style.cssText = "";
        } else if (top > item2.offsetTop - document.documentElement.scrollTop && top < item3.offsetTop - document.documentElement.scrollTop) {
            elevatorItem1.style.cssText = "";
            elevatorItem2.style.cssText = "color:#c81623;";
            elevatorItem3.style.cssText = "";
        } else if (top > item3.offsetTop - document.documentElement.scrollTop) {
            elevatorItem1.style.cssText = "";
            elevatorItem2.style.cssText = "";
            elevatorItem3.style.cssText = "color:#c81623;";
        } else {
            return false;
        }
    }
}










