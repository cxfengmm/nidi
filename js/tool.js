function transition() {
    square[0].style.transition = '1.5s';
    square[1].style.transition = '1.5s';
    ps[0].style.transition = '1s';
    ps[1].style.transition = '2s';
    ps[2].style.transition = '1s';
    goHome.style.transition = '0.2s';
    navBar.style.transition = '0.2s';
}

function animates() {
    setTimeout(function () {
        square[0].style.transform = 'scale(0) rotate(90deg)'
    },200)
    setTimeout(function () {
        square[0].style.transform = 'scale(1) rotate(180deg)';
    },1200)
    setTimeout(function () {
        wrap.style.top = '-638px';
    },2400);
    setTimeout(function () {
        ps[0].style.height = '120px';
    },2500)
    setTimeout(function () {
        ps[1].style.width = '900px';
        ps[1].style.margin = '0 auto';
    },3500)
    setTimeout(function () {
        ps[2].style.height = '120px';
    },5000)
    setTimeout(function () {
        goHome.style.top = '35px';
        navBar.style.top = '48px';
    },6100)
    setTimeout(function () {
        move(wrap,{top:-1276},400,'linear')
    },6500)
    setTimeout(function () {
        move(title,{bottom:0},300,'easeIn')
    },7000)
}

function addMouseScroll(init){
    init.ele.onmousewheel = fn;
    init.ele.addEventListener('DOMMouseScroll',fn)
    function fn(ev){
        ev.preventDefault();
        // ev.stopPropagation();
        var onOff = null;
        //true:向上，false:向下
        if(ev.wheelDelta){
            //谷歌，ie
            onOff = ev.wheelDelta>0?true:false;
        }else{
            //火狐
            onOff = ev.detail<0?true:false;
        }
        if(onOff){
            typeof init.fnUp == 'function' && init.fnUp();
        }else{
            typeof init.fnDown == 'function' && init.fnDown();
        }
    }
}
function pageZero() {
    console.log(num)
    setTimeout(function () {
        onOff = true;
    },200)
}
function pageONe() {
    setTimeout(function () {
        move(decOne,{opacity:1},500,'linear');
    },200)
    setTimeout(function () {
        move(imgOnes[0],{left:0},500,'linear');
        move(textOne,{opacity:1},500,'linear');
        move(adds[0],{opacity:1},500,'linear');
    },600)
    setTimeout(function () {
        move(imgOnes[1],{bottom:50},500,'linear');
        move(imgOnes[2],{right:0},500,'linear');
    },1000)
    setTimeout(function () {
        onOff = true;
    },1500)
}

function pageTwo() {
    setTimeout(function () {
        move(decTwo,{opacity:1},500,'linear');
    },200)
    setTimeout(function () {
        move(imgTwos[0],{left:66},500,'linear');
        move(imgTwos[3],{left:140},500,'linear')
        move(textTwo,{opacity:1},500,'linear');
        move(adds[1],{opacity:1},500,'linear');
    },600)
    setTimeout(function () {
        move(imgTwos[1],{right:168},500,'linear');
        move(imgTwos[2],{bottom:20},500,'linear');

    },800)
    setTimeout(function () {
        onOff = true;
    },1500)
}

function pageThree() {
    setTimeout(function () {
        move(decThree,{opacity:1},500,'linear');
    },200)
    setTimeout(function () {
        move(imgThrees[1],{left:275},500,'linear');
        move(imgThrees[2],{left:65},500,'linear');
        move(imgThrees[3],{bottom:30},500,'linear');
        move(textThree,{opacity:1},500,'linear');
        move(adds[2],{opacity:1},500,'linear');
    },600)
    setTimeout(function () {
        move(imgThrees[5],{right:0},500,'linear');
        move(imgThrees[6],{right:380},500,'linear');
    },800)
    setTimeout(function () {
        move(imgThrees[0],{left:0},300,'linear');
    },1000)
    setTimeout(function () {
        move(imgThrees[4],{height:150},300,'linear');
    },1200)
    setTimeout(function () {
        onOff = true;
    },2000)
}

function pageFour() {
    setTimeout(function () {
        move(decFour,{opacity:1},500,'linear');
    },200)
    setTimeout(function () {
        move(imgFours[0],{bottom:0},500,'linear');
        move(textFour,{opacity:1},500,'linear');
        move(adds[3],{opacity:1},500,'linear');
    },600)
    setTimeout(function () {
        move(imgFours[1],{left:66},500,'linear');
        move(imgFours[2],{bottom:5},500,'linear');
    },800)
    setTimeout(function () {
        move(imgFours[3],{right:55},300,'linear');
    },1000)
    setTimeout(function () {
        //move(imgFours[4],{height:150},500,'linear');
    },1200)
    setTimeout(function () {
        onOff = true;
    },2000)
}

function notOne() {
    decOne.style.opacity = '0';
    textOne.style.opacity = '0';
    imgOnes[0].style.left = '-500px';
    imgOnes[1].style.bottom = '-300px';
    imgOnes[2].style.right = '-500px';
    adds[0].style.opacity = '0';
    btns[0].style.opacity = '0';
};

function notTwo() {
    decTwo.style.opacity = '0';
    textTwo.style.opacity = '0';
    imgTwos[0].style.left = '-600px';
    imgTwos[1].style.right = '-300px';
    imgTwos[2].style.bottom = '-500px';
    imgTwos[3].style.left = '-200px';
    adds[1].style.opacity = '0';
    btns[1].style.opacity = '0';
};

function notThree() {
    decThree.style.opacity = '0';
    textThree.style.opacity = '0';
    imgThrees[0].style.left = '-300px';
    imgThrees[1].style.left = '-60px';
    imgThrees[2].style.left = '-400px';
    imgThrees[3].style.bottom = '-200px';
    imgThrees[4].style.height = '0px';
    imgThrees[5].style.right = '-400px';
    imgThrees[6].style.right = '-40px';
    adds[2].style.opacity = '0';
    btns[2].style.opacity = '0';
};

function notFour() {
    decFour.style.opacity = '0';
    textFour.style.opacity = '0';
    imgFours[0].style.bottom = '-200px';
    imgFours[1].style.left = '-500px';
    imgFours[2].style.bottom = '-500px';
    imgFours[3].style.right = '-350px';
    imgFours[4].style.height = '0px';
    adds[3].style.opacity = '0';
    btns[3].style.opacity = '0';
};

function pageNum() {
    if(num==0){
        pageZero();
        notOne();
        notTwo();
        notThree();
        notFour();
    }else if(num==1){
        pageONe();
        notTwo();
        notThree();
        notFour();
    }else if(num==2){
        pageTwo();
        notOne();
        notThree();
        notFour();
    }else if(num==3){
        pageThree();
        notOne();
        notTwo();
        notFour();
    }else if(num==4){
        pageFour();
        notOne();
        notTwo();
        notThree();
    }
};

function Switch(index) {
    console.log(textH3,dataArr[index])
    img.src = dataArr[index].imgs[n];
    textH3.innerHTML = dataArr[index].textH3[n];
    textP.innerHTML = dataArr[index].textP[n];
    switchNum.innerHTML = (n+1);
    total.innerHTML = dataArr[index].imgs.length;
};