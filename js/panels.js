jQuery(document).ready(function($){
	var is_firefox = navigator.userAgent.indexOf('Firefox') > -1;

	//open team-activity bio
	$('#avaraPanel-team').find('a').on('click', function(event){
		event.preventDefault();
		var selected_activity = $(this).data('type');
		$('.avaraPanel-activity-bio.'+selected_activity+'').addClass('slide-in');
		$('.avaraPanel-activity-bio-close').addClass('is-visible');

		// firefox transitions break when parent overflow is changed, so we need to wait for the end of the trasition to give the body an overflow hidden
		if( is_firefox ) {
			$('main').addClass('slide-out').one('webkitTransitionEnd otransitionend oTransitionEnd msTransitionEnd transitionend', function(){
				$('body').addClass('overflow-hidden');
			});
		} else {
			$('main').addClass('slide-out');
			$('body').addClass('overflow-hidden');
		}

	});

	//close team-activity bio
	$(document).on('click', '.avaraPanel-overlay, .avaraPanel-activity-bio-close', function(event){
		event.preventDefault();
		$('.avaraPanel-activity-bio').removeClass('slide-in');
		$('.avaraPanel-activity-bio-close').removeClass('is-visible');

		if( is_firefox ) {
			$('main').removeClass('slide-out').one('webkitTransitionEnd otransitionend oTransitionEnd msTransitionEnd transitionend', function(){
				$('body').removeClass('overflow-hidden');
			});
		} else {
			$('main').removeClass('slide-out');
			$('body').removeClass('overflow-hidden');
		}
	});
});