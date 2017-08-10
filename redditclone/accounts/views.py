from django.shortcuts import render, redirect
# the import below is from django auth same as line 8,4
from django.contrib.auth.models import User
# gives us a login auth also does not allow for admin privliges
from django.contrib.auth import authenticate, login, logout

# Create your views here.
def signup(request):
    if request.method == 'POST':
        # this is checking of the password & confirm password match
        if request.POST['password1'] == request.POST['password2']:
            # try is checking if there is a username already exists if not it will run except
            try:
                user = User.objects.get(username=request.POST['username'])
                return render(request,'accounts/signup.html', {'error':'Username has already been taken'} )
            except User.DoesNotExist:
        # the request.POST[''] is comming from the name given in the form in signup.html
                user = User.objects.create_user(request.POST['username'], password=request.POST['password1'])
                # login(request, user) is from django auth
                login(request, user)
                return render(request, 'accounts/signup.html')
        else:
            # the \' allows there to be an apposterfee without messing up the quotes
            return render(request,'accounts/signup.html', {'error':'Passwords didn\'t match'} )
    else:
        return render(request, 'accounts/signup.html')
# with login validation in django have a diff name cause it wont know what function to run, like in line 34
def loginview(request):
    if request.method == 'POST':
        # this authenticates the login info
        user = authenticate(username = request.POST['username'], password = request.POST['password'])
        if user is not None:
            # a function with login
            login(request, user)
            # the 1st if is checking if there is a next
            # this is related to the login.html if request.GET.next
            if 'next' in request.POST:
                return redirect (request.POST['next'])
            return redirect('/')
        else:
            return render(request,'accounts/login.html', {'error':'The Username and Passwords didn\'t match'} )
    else:
        return render(request, 'accounts/login.html')

# this fxn will enable the logout
def logoutview(request):
    if request.method == 'POST':
        logout(request)
        return redirect('/')
