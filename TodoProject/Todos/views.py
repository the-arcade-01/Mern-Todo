from django.shortcuts import render, redirect
from django.http import HttpResponse
from .models import Todo
# Create your views here.

def list_todo_items(request):
    context = {'todo_list': Todo.objects.all()}
    return render(request,'Todos/index.html',context)

def insert_todo(request):
    todo = Todo(content = request.POST['intodo'])
    todo.save()
    return redirect('/todos/list')

def delete_todo(request,todo_id):
    todo_del = Todo.objects.get(id = todo_id)
    todo_del.delete()
    return redirect('/todos/list')
