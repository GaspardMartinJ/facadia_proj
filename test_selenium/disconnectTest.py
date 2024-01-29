import unittest
from selenium import webdriver
from selenium.webdriver.common.by import By
from selenium.webdriver.support.ui import WebDriverWait
from selenium.webdriver.support import expected_conditions as EC

class DeconnectTest(unittest.TestCase):

    def setUp(self):
        self.driver = webdriver.Chrome()
        self.driver.get("http://127.0.0.1:5500/#/home")
        self.driver.set_window_size(976, 752)
        self.wait = WebDriverWait(self.driver, 10)

    def test_deconnect(self):
        driver = self.driver

        # Click on the "Se Déconnecter" link
        deconnect_link = self.find_and_click("link text", "Se Déconnecter")
        
        sign_in_div = self.wait.until(EC.presence_of_element_located((By.CLASS_NAME, "sign-in-page")))

        # check that we are on the sign in page
        self.assertTrue(sign_in_div.is_displayed())
        self.assertTrue("Façadia - Se connecter" in driver.title)

    def find_and_click(self, by, value):
        element = self.wait.until(EC.element_to_be_clickable((by, value)))
        element.click()
        return element

    def tearDown(self):
        self.driver.close()

if __name__ == "__main__":
    unittest.main()
