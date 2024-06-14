// ==UserScript==
// @name         Capbarbell
// @namespace    http://tampermonkey.net/
// @include      *pbsc.capbarbell.com*
// @version      2024-06-16
// @description  make work easy
// @downloadURL  https://raw.githubusercontent.com/mayy1980/Capbarbell/main/Capbarbell.js
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
        //console.log($(location)[0].href);55
        if ($(location)[0].href.includes("Module/AutoPO/AutoPoIII.aspx")){
            addGlobalStyle("#divGeneral{overflow-y: auto; }#TabContainer_tabGeneral_grdGeneral tr:first-of-type{position: sticky;top: 0;} td.locked{position: inherit;}");
            var tableCssTemplate="#divInbound4All{overflow-y: auto; }#TabContainer_tabInbound4All_grdInbound4All tr:nth-child(1){position: sticky;top: 0;} #TabContainer_tabInbound4All_grdInbound4All tr:nth-child(2){position: sticky;top: 55px;}";
            var stateCode=["CA","TX","GA","IL","NJ","All","ON"];
            for (const x of stateCode) {
                addGlobalStyle(`#divInbound4${x}{overflow-y: auto; }#TabContainer_tabInbound4${x}_grdInbound4${x} tr:nth-child(1){position: sticky;top: 0;} #TabContainer_tabInbound4${x}_grdInbound4${x} tr:nth-child(2){position: sticky;top: 55px;}`);
            }
            return
        }
        if ($(location)[0].href.includes("pbsc.capbarbell.com")){
            
            $("#tbAccount2").val("BQJY");
            $("#tbPassword2").val("POR$77042");
            return
        }
    });
})();
function addGlobalStyle(css) {
    var head, style;
    head = document.getElementsByTagName('head')[0];
    if (!head) { return; }
    style = document.createElement('style');
    style.type = 'text/css';
    style.innerHTML = css;
    head.appendChild(style);
}
