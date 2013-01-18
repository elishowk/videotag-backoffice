/*glo
* bal define*/

require.config({
    'baseUrl': require.appConfig.baseUrl,
    'paths': {
        'backbone': 'lib/backbone-0.9.9.min',
        'domready': 'lib/require-domready-2.0.1.min',
        'i18n':     'lib/require-i18n-2.0.1.min',
        'jquery':   'lib/jquery-1.8.3.min',
        'underscore':   'lib/lodash-1.0.0.min',
        'spin': 'lib/spin-1.2.7',
        'jquery-validation': 'lib/jquery-validation-1.10.0/dist/jquery.validate.min',
        'bootstrap': 'lib/bootstrap-2.2.2',
        'bootstrap-datepicker': 'lib/bootstrap-datepicker-2.0/js/bootstrap-datepicker-2.0',
        'bootstrap-timepicker': 'lib/bootstrap-timepicker-2.0/js/bootstrap-timepicker-2.0',
        'jquery-gravatar': 'lib/jquery-gravatar-1.0.1',
        'md5': 'lib/md5-2.1',
        'raven': 'lib/raven-0.6.min',
        'app': 'videotag-backoffice/app',
        'modules':  'videotag-backoffice/modules',
        'page': 'videotag/page',
        'live': 'videotag/pseudolive',
        'user': 'videotag/user',
        'melomaniac': 'videotag/melomaniac'
    },
    'shim': {
        'app': {
            'deps': ['backbone']
        },
        'bootstrap/js/bootstrap': {
            'deps': ['jquery']
        },
        'backbone': {
            'deps': [
                'underscore',
                'jquery',
                'bootstrap/js/bootstrap'
            ],
            'exports': 'Backbone'
        },
        'raven': {
            'deps': [
                'jquery'
            ]
        },

        'jquery-gravatar': {
            'deps': ['md5']
        }
    }
});

define(['app', 'raven', 'poser/backbone-tastypie-0.1'], function (App) {
    Raven.config('https://1849bbdf8c80460cb4564f91f378f0d3@app.getsentry.com/92');
    //window.onerror = Raven.process;
    App.WidgetsList();
});

