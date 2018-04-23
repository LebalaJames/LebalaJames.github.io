/* global NexT: true */

$(document).ready(function () {
	var gitment = new Gitment({
		/*id: '页面 ID', // 可选。默认为 location.href*/
		owner: 'LebalaJames',
		repo: 'http://github.com/LebalaJames/LebalaJames.github.io',
		oauth: {
			client_id: '87a24d89635df3f54b1b',
			client_secret: 'fe63adb9dda1032fb9082ea14c52290af438db8c',
		},
	})
	gitment.render('comments');
});
