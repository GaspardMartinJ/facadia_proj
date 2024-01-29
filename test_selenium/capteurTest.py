import unittest
from selenium import webdriver
from selenium.webdriver.support.ui import WebDriverWait
from selenium.webdriver.support import expected_conditions as EC

class CapteurTest(unittest.TestCase):

    def setUp(self):
        self.driver = webdriver.Chrome()
        self.driver.get("http://127.0.0.1:5500/#/home")
        self.driver.set_window_size(664, 752)
        self.wait = WebDriverWait(self.driver, 10)

    def test_capteur(self):
        driver = self.driver

        # Click on the section title
        section_title = self.find_and_click("css selector", ".section-title")

        # Assertion: Check if the section title has the text "Vos capteurs"
        expected_title = "Vos capteurs"
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
