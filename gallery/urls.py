from django.conf.urls import url, include
from . import views
from django.contrib.staticfiles.urls import staticfiles_urlpatterns

app_name = 'gallery'

urlpatterns = [
    url(r'^$', views.index, name='index'),
    url(r'^signIn/$', views.sign_in, name='signIn'),
    url(r'^add/$', views.add_multimedia, name='addMultimedia'),
    url(r'^logOut/$', views.log_out, name='logOut'),
    url(r'^signUp/$', views.signUp, name='signUp'),
    url(r'^userDetails/$', views.get_user, name='userDetails'),
]

urlpatterns += staticfiles_urlpatterns()