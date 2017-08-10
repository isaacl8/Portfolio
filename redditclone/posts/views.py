from django.shortcuts import render, redirect
# this is coming from django auth same w/ line 6
from django.contrib.auth.decorators import login_required
# need to import this for the timezone
from django.utils import timezone
from .models import Post
from django.contrib.auth.models import User

# Create your views here.
@login_required
# this is the forms action in create.html
def create(request):
    # checking if == post then if it is it will run the function
    if request.method == 'POST':
        if request.POST['title'] and request.POST['url']:
            post = Post()
            post.title = request.POST['title']
            # this is allowing for links without the http to be added to it so if there isnt it wont throw an error
            if request.POST['url'].startswith('http://') or request.POST['url'].startswith('https://'):
                post.url = request.POST['url']
            else:
                post.url = 'http://' + request.POST['url']
            post.pub_date = timezone.datetime.now()
            # line below is refering to the ForeignKey
            post.author = request.user
            # saving the post with save() fxn
            post.save()
            return redirect('home')
        else:
            return render(request, 'posts/create.html', {'error':'ERROR: You must include a title and a URL to create a post.'})
    else:
        return render(request, 'posts/create.html')

# this fxn shows the posts
def home(request):
    # this is grabbing from the post models and ordering by the votes_total w/ descending order
    posts = Post.objects.order_by('-votes_total')
    return render(request, 'posts/home.html', {'posts':posts})

# fxn adds the votes
def upvote(request, pk):
    if request.method == 'POST':
        # having pk=pk is due to it constantly changing and we dont want it to be hard coded.
        post = Post.objects.get(pk=pk)
        # when it is clicked it will add 1
        post.votes_total += 1
        # saves what is being added
        post.save()
        return redirect('/')
# fxn adds the votes
def downvote(request, pk):
    if request.method == 'POST':
        # having pk=pk is due to it constantly changing and we dont want it to be hard coded.
        post = Post.objects.get(pk=pk)
        # when it is clicked it will add 1
        post.votes_total -= 1
        # saves what is being added
        post.save()
        return redirect('/')

# this fxn allows you to click a author and view all their posts
def userposts(request, pk):
    posts = Post.objects.filter(author__id=pk).order_by('-votes_total')
    author = User.objects.get(pk=pk)
    return render(request, 'posts/userposts.html', {'posts':posts, 'author':author})
