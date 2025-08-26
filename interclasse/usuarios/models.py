
from django.db import models
from django.core.validators import RegexValidator
from django.contrib.auth.hashers import make_password

class Modalidade(models.Model):
    nome = models.CharField(max_length=100)

    def __str__(self):
        return self.nome

class Usuarios(models.Model):
    nome = models.CharField(max_length=100)
    email = models.EmailField(unique=True)
    senha = models.CharField(max_length=128)  # para armazenar hash
    telefone = models.CharField(
        max_length=11, 
        validators=[RegexValidator(r'^\d{10,11}$', 'Digite um número de telefone válido')]
    )
    modalidade = models.ForeignKey(Modalidade, related_name='usuarios', on_delete=models.CASCADE)

    def save(self, *args, **kwargs):
        if not self.pk: #cria a senha e deixa ser reutilizada
            self.senha = make_password(self.senha)
        super().save(*args, **kwargs) #gera um hash seguro da senha

    def __str__(self):
        return self.nome
