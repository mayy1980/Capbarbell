// ==UserScript==
// @name         Capbarbell
// @namespace    http://tampermonkey.net/
// @include      *pbsc.capbarbell.com*
// @version      2024-06-14
// @description  make work easy
// @author       May
// @match        https://www.tampermonkey.net/index.php?browser=chrome&locale=zh
// @icon         https://www.google.com/s2/favicons?sz=64&domain=tampermonkey.net
// @grant        none
// ==/UserScript==

(function() {
    'use strict';

    // Your code here...
    //alert("hello Jasmine");
    $(function(){
        // 把百度的标题，直接改成暴力猴
        $(document).attr("title","暴力猴");
        console.log($(location).attr('href'));
        if ($(location).attr('href').includes("module/autopo/autopoiii.aspx")){
            console.log("ok");
            return
        }
        if ($(location).attr('href').includes("pbsc.capbarbell.com")){
            console.log("ok2");
            $("#tbAccount2").append("123");
            $("#tbAccount2").after("456");
            return
        }
    });
})();
