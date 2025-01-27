Package.describe({
	summary: "Adds helpers for displaying profile pictures etc.",
	version: "0.0.7",
	git: "http://github.com/yogiben/meteor-user-helpers.git"
});

both = ['client','server']

Package.onUse(function(api) {
	api.versionsFrom('METEOR@0.9.2.2');

	api.use(
		[
			'coffeescript',
			'less@2.5.0',
			'templating',
			'yogiben:helpers@0.0.1'
		],
		both);

	 api.addFiles(
		[
			'lib/client/templates.html',
			'lib/client/templates.coffee',
			'lib/client/helpers.coffee',
			'lib/client/templates.less',
      'lib/client/utils.coffee'
		],
		'client')

});
