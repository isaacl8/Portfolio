from django.conf.urls import url
from . import views

app_name = 'accounts'

urlpatterns = [
    # name=signup/login is a easier way to refernence the url, used in signup/login.html
    url(r'^signup/', views.signup, name='signup'),
    url(r'^login/', views.loginview, name='login'),
    url(r'^logout/', views.logoutview, name='logout'),
]
