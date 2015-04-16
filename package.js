Package.describe({
  name: 'yukilip:owl-carousel2',
  version: '0.0.1',
  // Brief, one-line summary of the package.
  summary: '',
  // URL to the Git repository containing the source code for this package.
  git: 'https://github.com/uniquey/owl-carousel2.git',
  // By default, Meteor will default to using README.md for documentation.
  // To avoid submitting documentation, set this field to null.
  documentation: 'README.md'
});

Package.onUse(function(api) {
  api.versionsFrom('1.1.0.2');
  api.use('jquery','client')
  api.addFiles([
    'owl.carousel.js',
    'owl.carousel.min.js',
    'assets/owl.carousel.css'
    ],'client');
});

Package.onTest(function(api) {
  api.use('tinytest');
  api.use('yukilip:owl-carousel2');
  api.addFiles('owl-carousel2-tests.js');
});
