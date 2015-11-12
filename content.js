
var thumbs = $('img[alt=":+1:"]');

console.log(thumbs);

var top_menu = $('ul.pagehead-actions')

top_menu.append('<li><a href="#accept-box" class="btn btn-sm btn-primary btn-with-count" title="Accept"><span class="octicon octicon-check"></span>Approve</a><a href="#" class="social-count">'+thumbs.length+'</a></li>');


$('img[alt=":+1:"]').each(function(){
  top_menu.append('<li><img class="avatar" height="25" width="25" src="'+$(this).parents().eq(5).find('img.timeline-comment-avatar').attr('src')+'"></li>');
});

$('a[href="#accept-box"]').on('click',function(e){
	e.preventDefault();
	console.log('clicked');
$('#new_comment_field').text(':+1:');
$('.js-new-comment-form').submit();
});

