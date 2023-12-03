from django.urls import path, include
from rest_framework.routers import DefaultRouter
from .views import *

from rest_framework_simplejwt.views import (
    TokenObtainPairView,
    TokenRefreshView,
)

router = DefaultRouter()
router.register(r'users', UserViewSet)
router.register(r'teams', TeamViewSet)
router.register(r'matches', MatchViewSet)
router.register(r'rounds', RoundViewSet)
router.register(r'double_elimination_brackets', DoubleEliminationBracketViewSet)

urlpatterns = [
    path('', include(router.urls)),
    path('user/', UserAPIView.as_view(), name='user'),
    path('register/', UserRegistrationAPIView.as_view(), name='register'),
    path('login/', TokenObtainPairView.as_view(), name='token_obtain_pair'),
    path('token/refresh/', TokenRefreshView.as_view(), name='token_refresh'),
]
