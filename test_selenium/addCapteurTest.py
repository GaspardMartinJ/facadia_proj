import unittest
from selenium import webdriver
from selenium.webdriver.common.by import By
from selenium.webdriver.support.ui import WebDriverWait
from selenium.webdriver.support import expected_conditions as EC

class AddCapteurTest(unittest.TestCase):

    def setUp(self):
        self.driver = webdriver.Chrome()
        self.driver.get("http://127.0.0.1:5500/#/home")
        self.driver.set_window_size(976, 752)
        self.wait = WebDriverWait(self.driver, 10)

    def test_add_capteur(self):
        driver = self.driver

        # Click on "Ajouter un capteur" link
        add_capteur_link = self.find_and_click("link text", "Ajouter un capteur")

        # Fill in the form fields
        self.fill_form_field("css selector", "fieldset:nth-child(1) > .form-group:nth-child(2) > input", "111")
        self.fill_form_field("css selector", ".form-group:nth-child(4) > input", "AA")
        self.fill_form_field("css selector", ".lat-input", "11")
        self.fill_form_field("css selector", ".lng-input", "11")
        self.fill_form_field("css selector", "fieldset:nth-child(3) input", "11")

        # Click on "Ajouter le capteur" button
        add_capteur_button = self.find_and_click("css selector", ".submit-btn")
        
        home_page_div = self.wait.until(EC.presence_of_element_located((By.CLASS_NAME, "home-page")))

        # check that we return on the home page (fails)
        self.assertTrue(home_page_div.is_displayed())
        self.assertTrue("Page d'accueil" in driver.title)

    def fill_form_field(self, by, value, text):
        field = self.find_and_clear(by, value)
        field.send_keys(text)

    def find_and_clear(self, by, value):
        element = self.wait.until(EC.presence_of_element_located((by, value)))
        element.clear()
        return element

    def find_and_click(self, by, value):
        element = self.wait.until(EC.element_to_be_clickable((by, value)))
        element.click()
        return element

    def tearDown(self):
        self.driver.close()

if __name__ == "__main__":
    unittest.main()
