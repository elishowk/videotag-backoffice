# -*- coding: utf-8 -*-
from django.shortcuts import render_to_response
from poser.views import _get_app_context


def root(request):
    """
    returns application configuration JSON data
    """
    context = _get_app_context(request)
    return render_to_response('videotag-backoffice/index.html', context)
