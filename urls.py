# -*- coding: utf-8 -*-
from django.conf.urls.defaults import patterns, url


urlpatterns = patterns('videotag-backoffice.views',
                       url(r'^$', 'root'),
                       )
