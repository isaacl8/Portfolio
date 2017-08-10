"""blog URL Configuration

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
from django.conf.urls import url
from django.contrib import admin
# was org from posts import views but only with one app, if adding another use this:
import posts.views
# to import a second app
import sitepages.views
from django.conf.urls.static import static
from django.conf import settings
# commetnabove applies to the url patterns, puting posts.___ is showing which app is being accessed
urlpatterns = [
    url(r'^admin/', admin.site.urls),
    url(r'^$', posts.views.home, name='home'),
    # the [0-9] only allows num to be added not char
    # adding name to make it easier to call in html
    url(r'^posts/(?P<post_id>[0-9]+)/$', posts.views.post_details, name='post_detail'),
    # this url is connecting the new app
    url(r'^about/', sitepages.views.about, name='about'),

] + static(settings.MEDIA_URL, document_root=settings.MEDIA_ROOT)
