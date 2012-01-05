# Create your views here.
from django.http import HttpResponse
from django.shortcuts import render_to_response
from django.template import RequestContext
from django.utils import simplejson

def index(request):
	return render_to_response('chart.html')

def graph(request):
	data = [['Jinesh', 3],['Onions', 1],['Olives', 1],['Zucchini', 1], ['Pepperoni', 2],['Sandwich',4]]
	return HttpResponse(simplejson.dumps(data),mimetype='application/json')
	
