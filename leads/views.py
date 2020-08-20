from django.shortcuts import render
from .models import Lead
from rest_framework import viewsets,permissions
from .serializers import LeadSerializer

# Create your views here.
class LeadViewSets(viewsets.ModelViewSet):
    permission_classes=[
        permissions.IsAuthenticated,
    ]
    serializer_class = LeadSerializer
    
    def get_queryset(self):
        leads = Lead.objects.filter(owner = self.request.user)
        print(leads)
        return leads
    
    def perform_create(self,serializer):
        serializer.save(owner = self.request.user)