from django.urls import path, include
from rest_framework.routers import DefaultRouter
from .views import *

router = DefaultRouter()
router.register(r'teams', TeamViewSet)
router.register(r'matches', MatchViewSet)
router.register(r'rounds', RoundViewSet)
router.register(r'double_elimination_brackets', DoubleEliminationBracketViewSet)

urlpatterns = [
    path('', include(router.urls)),
]
