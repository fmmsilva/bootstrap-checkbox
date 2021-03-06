'use strict';

$(function() {
	$.ajax({
		url: 'https://api.github.com/repos/vsn4ik/bootstrap-checkbox',
		success: function(data) {
			var $group = $('<div class="input-group"><span class="input-group-btn"></span></div>');

			$group.append('<span class="input-group-addon"><span>' + data.stargazers_count + '</span><span class="octicon octicon-star"></span></span>');

			$('#gh-view-link').wrap($group);
		}
	});

	$('#scroll_top').click(function() {
		// 'html' for Mozilla Firefox, 'body' for other browsers
		$('body, html').animate({
			scrollTop: 0
		}, 800);

		this.blur();
	});

	$(':checkbox').checkboxpicker({
		style: 'm-b'
	});
});
