transition();

animates();

kid.onclick = function () {
    goHome.style.transition = '0.2s';
    navBar.style.transition = '0.2s';
    setTimeout(function () {
        goHome.style.top = '-50px';
        navBar.style.top = '-50px';
    },100)
    setTimeout(function () {
        move(wrap,{top:-1914},500,'easeIn')
    },400)
    setTimeout(function () {
        square[1].style.transform = 'scale(0) rotate(90deg)'
    },1000)
    setTimeout(function () {
        square[1].style.transform = 'scale(1) rotate(180deg)';
    },1800)
    setTimeout(function () {
        move(wrap,{top:-2552},500,'easeIn')
    },3000)
    setTimeout(function () {
        goHome.style.top = '35px';
        navBar.style.top = '48px';
    },3800)

}

addMouseScroll({
    ele:box,
    fnDown:function(){
        if(onOff == false)return;
        num++;
        if(num>=4){
            num=4;
        }
        move(btns[num-1],{opacity:1},300,'linear');
        onOff = false;
        pageNum();
        let t = parseInt(getComputedStyle(wrap).top);
        if(t<=-5104){
            return;
        }else{
            move(wrap,{top:t-638},300,'easeIn');
        }
    },
    fnUp:function(){
        if(onOff == false)return;
        num--;
        if(num<=0){
            num=0;
        }
        if(num!=0){
            move(btns[num-1],{opacity:1},500,'linear');
        }
        onOff = false;
        pageNum();
        let t = parseInt(getComputedStyle(wrap).top);
        if(t>-3190){
            return;
        }else{
            move(wrap,{top:t+638},500,'easeIn');
        }
    }
})

for(var i=0;i<adds.length;i++){
    adds[i].index = i;
    adds[i].onclick = function () {
        btns[this.index].style.opacity = 0;
        m = this.index;
        goHome.style.top = '-50px';
        navBar.style.top = '-50px';
        details.style.zIndex = 2;
        details.style.top = h*(this.index+1) + 'px';
        Switch(this.index);
    }
}

prev.onclick = function () {
    n--;
    if(n<0){
        n=dataArr[m].imgs.length-1;
    }
    Switch(m);
}
next.onclick = function () {
    n++;
    if(n>dataArr[m].imgs.length-1){
        n=0;
    }
    Switch(m);
}
cancel.onclick = function () {
    goHome.style.transition = '0.2s';
    navBar.style.transition = '0.2s';
    goHome.style.top = '35px';
    navBar.style.top = '48px';
    details.style.zIndex = -1;
    num = (m+1);
    pageNum();
    n = 0;
    btns[m].style.opacity = 1;
}

document.onmousedown = function () {
    return false;
}

details.onmousewheel = function (ev) {
    ev.stopPropagation();
}



