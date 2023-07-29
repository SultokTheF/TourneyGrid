from rest_framework import viewsets
from .models import *
from .serializers import *

class TeamViewSet(viewsets.ModelViewSet):
    queryset = Team.objects.all()
    serializer_class = TeamSerializer


class MatchViewSet(viewsets.ModelViewSet):
    queryset = Match.objects.all()
    serializer_class = MatchSerializer


class RoundViewSet(viewsets.ModelViewSet):
    queryset = Round.objects.all()
    serializer_class = RoundSerializer


class DoubleEliminationBracketViewSet(viewsets.ModelViewSet):
    queryset = DoubleEliminationBracket.objects.all()
    serializer_class = DoubleEliminationBracketSerializer
