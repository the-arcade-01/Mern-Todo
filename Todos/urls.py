from django.contrib import admin
from django.urls import path
from . import views

urlpatterns = [
    path('',views.list_todo_items, name = 'list_todo_item'),
    path('insert_todo/',views.insert_todo, name='insert_todo_item'),
    path('delete_todo/<int:todo_id>',views.delete_todo, name='delete_todo_item'),
]
