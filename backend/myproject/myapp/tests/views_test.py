from django.test import TestCase, Client
from django.urls import reverse


class TestEndpoints(TestCase):
	def setUp(self):
		self.client = Client()

	def test_handle_bandwidth_form_view(self):
		url = reverse('bandwidth_form')
		response = self.client.post(url, {'bandwidth': '20'})
		self.assertEqual(response.status_code, 200)

		response = self.client.post(url)
		self.assertEqual(response.status_code, 400)

	def test_run_results_scripts_view(self):
		url = reverse('results')
		response = self.client.get(url)
		self.assertEqual(response.status_code, 200)

	def test_run_dashboard_data_view(self):
		url = reverse('dashboard-data')
		response = self.client.get(url)
		self.assertEqual(response.status_code, 200)

	def test_run_probability_data_view(self):
		url = reverse('probability_data')
		response = self.client.get(url)
		self.assertEqual(response.status_code, 200)
