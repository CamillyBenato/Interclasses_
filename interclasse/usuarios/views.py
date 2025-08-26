from django.shortcuts import render

from rest_framework import generics
from .models import Modalidade, Usuarios
from .serializers import ModalidadeSerializer, UsuariosSerializer

class ModalidadeList(generics.ListCreateAPIView):
    queryset = Modalidade.objects.all()
    serializer_class = ModalidadeSerializer

class ModalidadeDetail(generics.RetrieveUpdateDestroyAPIView):
    queryset = Modalidade.objects.all()
    serializer_class = ModalidadeSerializer

class UsuariosList(generics.ListCreateAPIView):
    queryset = Usuarios.objects.all()
    serializer_class = UsuariosSerializer

class UsuariosDetail(generics.RetrieveUpdateDestroyAPIView):
    queryset = Usuarios.objects.all()
    serializer_class = UsuariosSerializer
# Create your views here.