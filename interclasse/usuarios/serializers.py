from rest_framework import serializers
from .models import Modalidade, Usuarios

class ModalidadeSerializer(serializers.ModelSerializer):
    class Meta:
        model = Modalidade
        fields = '__all__'

class UsuariosSerializer(serializers.ModelSerializer):
    modalidade = ModalidadeSerializer(read_only=True)
    modalidade_id = serializers.PrimaryKeyRelatedField(queryset=Modalidade.objects.all(), source='modalidade', write_only=True)

    class Meta:
        model = Usuarios
        fields = '__all__'