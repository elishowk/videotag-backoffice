# -*- coding: utf-8 -*-
from django.shortcuts import render_to_response, redirect
from poser.views import _get_app_context


def root(request):
    """
    returns application configuration JSON data
    """
    context = _get_app_context(request)
    if request.user.is_authenticated():
        return render_to_response('videotag-backoffice/index.html', context)
    else:
        return redirect('account_login')
