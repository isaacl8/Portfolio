from django.shortcuts import render, get_object_or_404
# get_object_or_404 is a shortcut that enables to grab only objects that exist if not will give 404
from .models import Post


# Create your views here.
def home(request):
    # adding the - before pub_date gives it the order of being new to later
    posts = Post.objects.order_by('-pub_date')
    return render(request, 'posts/home.html', {'post':posts})

# adding the extra param allows access to what we want to target
def post_details(request, post_id):
    # the next line of code is allowing us to grab info from the db
    # pk is equivl. to the id
    # the first thing past in the 404 what type of model we are looking for
    post = get_object_or_404(Post, pk=post_id)
    return render (request, 'posts/posts_detail.html', {'post': post})
