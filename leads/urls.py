from rest_framework import routers
from .views import LeadViewSets

router = routers.DefaultRouter()
router.register('api/leads',LeadViewSets, 'leads')

urlpatterns = router.urls