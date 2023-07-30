from rest_framework import viewsets
from .models import *
from .serializers import *

class TeamViewSet(viewsets.ModelViewSet):
    queryset = Team.objects.all()
    serializer_class = TeamSerializer

    def get_queryset(self):
        return Team.objects.all().order_by('id')


class MatchViewSet(viewsets.ModelViewSet):
    queryset = Match.objects.all()
    serializer_class = MatchSerializer

    def get_queryset(self):
        return Match.objects.all().order_by('id')


class RoundViewSet(viewsets.ModelViewSet):
    queryset = Round.objects.all()
    serializer_class = RoundSerializer

    def get_queryset(self):
        return Round.objects.all().order_by('id')

class DoubleEliminationBracketViewSet(viewsets.ModelViewSet):
    queryset = DoubleEliminationBracket.objects.all()
    serializer_class = DoubleEliminationBracketSerializer

    def get_queryset(self):
        return DoubleEliminationBracket.objects.all().order_by('id')