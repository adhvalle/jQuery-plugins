(function($){
	$.fn.ajaxForm = function(options){
		var settings = $.extend({}, $.fn.ajaxForm.defaults, options);

		return this.each(function(){
			var $this = $(this);
			var self = this;

			$this.on('submit', function(ev){
				ev.preventDefault();

				if($this.data('basicvalidation-isvalid'))
				{
					var $submit = $this.find(':submit');
					$submit.prop('disabled', true);

					var data = $this.serialize();

					$.post($(this).attr('action'), data)
						.done(function(resultado){
							console.info('success');
							settings.onSuccess.call(self, resultado);
						})
						.fail(function(resultado){
							console.info('fail');
							settings.onFail.call(self, resultado);
						})
						.always(function(){
							$submit.prop('disabled', false);
						});
				}
			});
		});
	};

	$.fn.ajaxForm.defaults = {
		onSuccess : function(){},
		onFail : function(){}
	};
})(jQuery);