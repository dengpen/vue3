const remjs = function(win, doc) {
    //3. 【原始宽度】  或者  【改变后的宽度】 经过换算，赋值到 html=>style=>font-size    640px 是设计稿的原始尺寸
    var fn = function(width) {
        if (width <= 750) {
            // 手机版本
            doc.documentElement.style.fontSize = 100 * (width / 750) + "px";
        } else {
            // pc版本
            doc.documentElement.style.fontSize = 100 * (width / 1920) + "px";
        }

        var html = document.getElementsByTagName('html')[0];
        var settedFs = parseInt(html.style.fontSize);
        var realFs = parseInt(window.getComputedStyle(html).fontSize);
        var whileCount = 0;


        while (true) {
            realFs = parseInt(window.getComputedStyle(html).fontSize);
            var delta = realFs - settedFs;
            //console.log(settedFs, realFs)
            if (Math.abs(delta) != 0) //不相等
            {
                html.setAttribute('style', 'font-size:' + settedFs * ((settedFs - 1) / realFs) + 'px!important');
                break;
                //settedFs/realFs 计算比实际值小N倍  然后在原基础上在放大N倍
            } else
                break;

            if (whileCount++ > 100) //为了避免死循环
                break
        }
    }


    function checkLetIE9() {
        var theUA = window.navigator.userAgent.toLowerCase();
        if ((theUA.match(/msie\s\d+/) && theUA.match(/msie\s\d+/)[0]) || (theUA.match(/trident\s?\d+/) &&
                theUA.match(/trident\s?\d+/)[0])) {
            var ieVersion = theUA.match(/msie\s\d+/)[0].match(/\d+/)[0] || theUA.match(/trident\s?\d+/)[0];
            if (ieVersion <= 9) {
                return true;
                //console.log('浏览器小于IE9,请升级!')
            }
        }
        return false;
    }
    if (!checkLetIE9()) {
        // 1.获取 client 屏幕宽度
        var clien_width = doc.documentElement.clientWidth || doc.body.clientWidth;

        // 2.如果屏幕的宽度发生改变 触发 onresize 方法
        window.onresize = function() {
            clien_width = doc.documentElement.clientWidth || doc.body.clientWidth;
            fn(clien_width);
        }


        fn(clien_width);
    }


}

export default remjs;