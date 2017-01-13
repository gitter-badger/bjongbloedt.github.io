#!/usr/bin/env python
# -*- coding: utf-8 -*- #
from __future__ import unicode_literals

AUTHOR = u'Ben Jongbloedt'
SITENAME = u'Ben Jongbloedt'
SITEURL = ''

PATH = 'content'

STATIC_PATHS = ["Blog", "Downloads"]

ARTICAL_PATHS = ["Blog"]

ARTICLE_SAVE_AS = '{date:%Y}/{slug}.html'

ARTICLE_URL = '{date:%Y}/{slug}.html'

TIMEZONE = 'America/Chicago'

DEFAULT_LANG = u'en'

THEME = u'pelican-clean-blog'

# Feed generation is usually not desired when developing
FEED_ALL_ATOM = None
CATEGORY_FEED_ATOM = None
TRANSLATION_FEED_ATOM = None
AUTHOR_FEED_ATOM = None
AUTHOR_FEED_RSS = None

# Blogroll
LINKS = (('Pelican', 'http://getpelican.com/'),
         ('Python.org', 'http://python.org/'),
         ('Jinja2', 'http://jinja.pocoo.org/'),
         ('You can modify those links in your config file', '#'),)

# Social widget
SOCIAL = (('You can add links in your config file', '#'),
          ('Another social link', '#'),)

DEFAULT_PAGINATION = 10

# Uncomment following line if you want document-relative URLs when developing
#RELATIVE_URLS = True
