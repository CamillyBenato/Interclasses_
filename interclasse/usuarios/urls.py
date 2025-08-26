from django.urls import path
from . import views

urlpatterns = [
    path('modalidades/', views.ModalidadeList.as_view(), name='modalidade-list'),
    path('modalidades/<int:pk>/', views.ModalidadeDetail.as_view(), name='modalidade-detail'),
    path('usuarios/', views.UsuariosList.as_view(), name='usuario-list'),
    path('usuarios/<int:pk>/', views.UsuariosDetail.as_view(), name='usuario-detail'),

]