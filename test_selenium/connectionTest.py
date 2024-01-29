import unittest
from selenium import webdriver
from selenium.webdriver.common.by import By
from selenium.webdriver.support import expected_conditions as EC
from selenium.webdriver.support.ui import WebDriverWait

class ConnectionTest(unittest.TestCase):

    def setUp(self):
        self.driver = webdriver.Chrome()
        self.driver.get("http://127.0.0.1:5500/")
        self.wait = WebDriverWait(self.driver, 10)

    def test_connection(self):
        driver = self.driver

        # Set window size
        driver.set_window_size(663, 752)

        # Find and type in user email
        user_email = driver.find_element("id", "user-email")
        user_email.clear()
        user_email.send_keys("user1@facadia.com")

        # Find and type in user password
        user_password = driver.find_element("id", "user-password")
        user_password.clear()
        user_password.send_keys("azerty")

        # Click on the submit button
        submit_button = driver.find_element("css selector", ".submit-btn")
        submit_button.click()
        
        home_page_div = self.wait.until(EC.presence_of_element_located((By.CLASS_NAME, "home-page")))

        # check that we are on the home page based on the presence of the "home-page" class
        self.assertTrue(home_page_div.is_displayed())
        # fails
        self.assertTrue("Page d'accueil" in driver.title)

    def tearDown(self):
        self.driver.close()

if __name__ == "__main__":
    unittest.main()
