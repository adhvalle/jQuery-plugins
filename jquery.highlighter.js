(function($){
	$.fn.hilight = function(options){

		var settings = $.extend({}, $.fn.hilight.defaults, options);

		return this.each(function(){
			var $this = $(this);

			$this.css({
				'color': settings.foreground,
				'background-color': settings.background
			});

			var originalHtml = $this.html();
			var formattedHtml = "<strong>" + originalHtml +"</strong>";

			$this.html(formattedHtml);

			settings.onFormatted.call(this);
		});
	};

	$.fn.hilight.defaults = {
		foreground : "red",
		background : "yellow",
		onFormatted : function(){}
	};
})(jQuery);