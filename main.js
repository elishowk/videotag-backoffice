/*global define*/

require.config({
    'baseUrl': require.appConfig.baseUrl,
    'paths': {
        'backbone': 'lib/backbone-0.9.9.min',
        'domready': 'lib/require-domready-2.0.1.min',
        'text':     'lib/require-text-2.0.3.min',
        'i18n':     'lib/require-i18n-2.0.1.min',
        'jquery':   'lib/jquery-1.8.3.min',
        'underscore':   'lib/lodash-1.0.0.min',
        'spin': 'lib/spin-1.2.7.js',
        'backbone-validation': 'lib/backbone-validation-0.6.2.js',
        'bootstrap': 'lib/bootstrap-2.2.2',
        'bootstrap-datepicker': 'lib/bootstrap-datepicker-2.0.js',
        'bootstrap-timepicker': 'lib/bootstrap-timepicker-2.0.js',
        'jquery-gravatar': 'lib/jquery-gravatar-1.0.1.js',
        'md5': 'lib/md5-2.1.js',
        'raven': 'lib/raven-0.6.min.js',
        'app':      'videotag-backoffice/app',
        'modules':  'videotag-backoffice/modules',
        'page': 'videotag/page/'
    },
    'shim': {
        'app': {
            'deps': ['backbone']
        },
        'backbone': {
            'deps': [
                'underscore',
                'jquery'
            ],
            'exports': 'Backbone'
        }
    }
});

define(['app', 'poser/backbone-tastypie-0.1'], function (App) {
    App.initialize();
});

