# -*- coding: utf-8 -*-
from django.shortcuts import render_to_response, redirect
from poser.views import _get_app_context
from django.core.urlresolvers import reverse


def root(request):
    """
    returns application configuration JSON data
    """
    abs_uri = request.build_absolute_uri('/').rstrip('/')
    context = _get_app_context(request)
    context['melomaniacApiUrl'] = '%s%s' % (abs_uri, reverse('api_melomaniacs_top_level', args=['melomaniacs']))
    if request.user.is_authenticated():
        return render_to_response('videotag-backoffice/index.html', context)
    else:
        return redirect('account_login')
