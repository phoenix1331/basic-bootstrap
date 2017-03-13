var elixir = require('laravel-elixir');


elixir(function(mix) {

	 mix.scripts([

	 	'/bootstrap/dist/js/bootstrap.js'

	 ],'./js/scripts.js','./node_modules');

	 mix.sass([

	 	'./assets/scss/custom.scss',
	 	'./node_modules/bootstrap/scss/bootstrap.scss',

	 	], './css/styles.css');


});