/*glo
* bal define*/

require.config({
    'baseUrl': require.appConfig.baseUrl,
    'paths': {
        'backbone': 'lib/backbone-0.9.9.min',
        'domready': 'lib/require-domready-2.0.1.min',
        'text':     'lib/require-text-2.0.3.min',
        'i18n':     'lib/require-i18n-2.0.1.min',
        'jquery':   'lib/jquery-1.8.3.min',
        'underscore':   'lib/lodash-1.0.0.min',
        'spin': 'lib/spin-1.2.7',
        'backbone-validation': 'lib/backbone-validation-0.6.2',
        'bootstrap': 'lib/bootstrap-2.2.2',
        'bootstrap-datepicker': 'lib/bootstrap-datepicker-2.0/js/bootstrap-datepicker-2.0',
        'bootstrap-timepicker': 'lib/bootstrap-timepicker-2.0/js/bootstrap-timepicker-2.0',
        'jquery-gravatar': 'lib/jquery-gravatar-1.0.1',
        'md5': 'lib/md5-2.1',
        'raven': 'lib/raven-0.6.min',
        'app': 'videotag-backoffice/app',
        'modules':  'videotag-backoffice/modules',
        'page': 'videotag/page/',
        'live': 'videotag/pseudolive/',
        'user': 'videotag/user/'
    },
    'shim': {
        'app': {
            'deps': ['backbone']
        },
        'backbone': {
            'deps': [
                'underscore',
                'jquery',
                'bootstrap/js/bootstrap'
            ],
            'exports': 'Backbone'
        },
        'backbone-validation': {
            'deps': [
                'backbone'
            ]
        }
    }
});

define(['app', 'poser/backbone-tastypie-0.1'], function (App) {

    //App.initialize();
});

