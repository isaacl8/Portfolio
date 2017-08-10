from __future__ import unicode_literals
from django.contrib.auth.models import User
from django.db import models

# Create your models here.
class Post(models.Model):
    title = models.CharField(max_length=200)
    url = models.TextField()
    pub_date = models.DateTimeField()
    author = models.ForeignKey(User)
    # default is setting a nuber to start off at or what is in the ()
    votes_total = models.IntegerField(default=1)

    # function month_date is being used to make our pub_date in models to display the way we want it.
    def month_date(self):
        # strftime in python allows us to make time a readible for humans.
        return self.pub_date.strftime('%b %e %Y')
