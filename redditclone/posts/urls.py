from django.conf.urls import url
from . import views

app_name = 'posts'

urlpatterns = [
    # name=create is a easier way to refernence the url, used in create.html
    url(r'^create/', views.create, name='create'),
    # the [0-9] makes sure its only int and not special char. for function also this goes to the views in posts holding the function
    url(r'^(?P<pk>[0-9]+)/upvote', views.upvote, name='upvote'),
    url(r'^(?P<pk>[0-9]+)/downvote', views.downvote, name='downvote'),
    # this is linking the views userposts 
    url(r'^user/(?P<pk>[0-9]+)', views.userposts, name='userposts'),
]
