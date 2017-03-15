var elixir = require('laravel-elixir');


elixir(function(mix) {

	 mix.scripts([

	 	'/jquery/dist/jquery.js',
	 	'/tether/dist/js/tether.js',
	 	'/bootstrap/dist/js/bootstrap.js'

	 ],'./js/scripts.js','./node_modules');

	 mix.sass([

	 	'./node_modules/bootstrap/scss/bootstrap.scss',
	 	'./assets/scss/custom.scss',

	 	], './css/styles.css');

});