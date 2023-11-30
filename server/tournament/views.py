#REST
from rest_framework import viewsets
from rest_framework import status
from rest_framework.response import Response
from rest_framework.views import APIView
from rest_framework.permissions import IsAuthenticated
from rest_framework.authentication import SessionAuthentication
from rest_framework_simplejwt.authentication import JWTAuthentication

#JWT


#
from .models import *
from .serializers import *

class UserRegistrationAPIView(APIView):
    def post(self, request):
        serializer = UserSerializer(data=request.data)
        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data, status=status.HTTP_201_CREATED)
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)
    
class UserViewSet(viewsets.ModelViewSet):
    queryset = User.objects.all()
    serializer_class = UserSerializer
    authentication_classes = [JWTAuthentication, SessionAuthentication]
    permission_classes = [IsAuthenticated]

    def get_queryset(self):
        return User.objects.all().order_by('id')

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
    
class MyProtectedView(APIView):
    permission_classes = [IsAuthenticated]

    def get(self, request):
        # Your view logic here
        return Response({"message": "You have access to this data."})