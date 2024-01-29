import unittest
from selenium import webdriver
from selenium.webdriver.support.ui import WebDriverWait
from selenium.webdriver.support import expected_conditions as EC

class CapteurDetailTest(unittest.TestCase):

    def setUp(self):
        self.driver = webdriver.Chrome()
        self.driver.get("http://127.0.0.1:5500/#/facade-details?id=7")
        self.driver.set_window_size(976, 752)
        self.wait = WebDriverWait(self.driver, 10)

    def test_capteur_detail(self):
        driver = self.driver

        # Click on the section title for capteur details
        section_title = self.find_and_click("css selector", ".section-title")

        # Assertion: Check if the section title has the text "Détails du capteur 7"
        expected_title = "Détails du capteur #7"
        self.assertTrue(section_title.is_displayed())
        self.assertEqual(section_title.text.strip(), expected_title)

    def find_and_click(self, by, value):
        element = self.wait.until(EC.element_to_be_clickable((by, value)))
        element.click()
        return element

    def tearDown(self):
        self.driver.close()

if __name__ == "__main__":
    unittest.main()
