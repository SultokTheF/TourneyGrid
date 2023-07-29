from rest_framework import serializers
from .models import *

class TeamSerializer(serializers.ModelSerializer):
    class Meta:
        model = Team
        fields = '__all__'


class MatchSerializer(serializers.ModelSerializer):
    class Meta:
        model = Match
        fields = '__all__'


class RoundSerializer(serializers.ModelSerializer):
    matches = MatchSerializer(many=True, read_only=True)

    class Meta:
        model = Round
        fields = '__all__'


class DoubleEliminationBracketSerializer(serializers.ModelSerializer):
    upper_bracket_rounds = RoundSerializer(many=True, read_only=True)
    lower_bracket_rounds = RoundSerializer(many=True, read_only=True)

    class Meta:
        model = DoubleEliminationBracket
        fields = '__all__'
