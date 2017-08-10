"""redditclone URL Configuration

The `urlpatterns` list routes URLs to views. For more information please see:
    https://docs.djangoproject.com/en/1.10/topics/http/urls/
Examples:
Function views
    1. Add an import:  from my_app import views
    2. Add a URL to urlpatterns:  url(r'^$', views.home, name='home')
Class-based views
    1. Add an import:  from other_app.views import Home
    2. Add a URL to urlpatterns:  url(r'^$', Home.as_view(), name='home')
Including another URLconf
    1. Import the include() function: from django.conf.urls import url, include
    2. Add a URL to urlpatterns:  url(r'^blog/', include('blog.urls'))
"""
from django.conf.urls import url, include
from django.contrib import admin
from posts import views


urlpatterns = [
    url(r'^admin/', admin.site.urls),
    # the include will route to the urls.p file in accounts also used when adding new apps; links them all together
    url(r'^accounts/', include('accounts.urls')),
    url(r'^posts/', include('posts.urls')),
    # this line of code was made to have the home page be linked with the post apps, thats why we imported the ports views
    url(r'^$', views.home, name="home"),
]
