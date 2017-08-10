from __future__ import unicode_literals

from django.db import models

# Create your models here; also input the fields
class Post(models.Model):
    title = models.CharField(max_length=250)
    pub_date = models.DateTimeField()
    # in the () you put where this images be saved inside a certain direct.
    image = models.ImageField(upload_to='media/')
    body = models.TextField()

# gives back info on what the title in the admin will be or string version of the object.
    def __str__(self):
        return self.title
# function month_date is being used to make our pub_date in models to display the way we want it.
    def month_date(self):
        # strftime in python allows us to make time a readible for humans.
        return self.pub_date.strftime('%b %e %Y')

# Fxn summary is limiting the number of characters you see to 100,each post; we will be able to see more with a link.
    def summary(self):
        # [:100] = all the characters # from 0 to 100
        return self.body[:100]
