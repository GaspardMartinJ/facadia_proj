/**
 * @jest-environment jsdom
 */

// Import necessary modules and functions
import "@testing-library/jest-dom";
import FacadeDetails from "./index";
import { retrieveSensorDetails } from "../../utils/api/sensorsApi"
import { retrieveWeatherData, weatherCodeToUFN } from "../../utils/api/weatherApi"

describe("renderSensorImg", () => {
  test("renders sensor image correctly", () => {

    const sensorData = retrieveSensorDetails(1);

    // Render the component
    document.body.innerHTML = FacadeDetails.renderSensorImg(sensorData);

    // Assert that the expected HTML structure is rendered
    const imgElement = document.getElementsByClassName("sensor-details-img")[0];

    expect(imgElement).toHaveAttribute(
      "src",
      `/assets/${sensorData.medias[0]}`
    );
    expect(imgElement).toHaveAttribute(
      "alt",
      `Capteur n°${sensorData.id}`
    );
  });
});

describe("renderSensorTable", () => {
  test("renders sensor table correctly", () => {

    const sensorData = retrieveSensorDetails(1);

    // Render the component
    document.body.innerHTML = FacadeDetails.renderSensorTable(sensorData);

    // Assert that the expected HTML structure is rendered
    const dataTable = document.querySelector(".data-table>tbody");
    const tableRows = dataTable.getElementsByTagName("tr");
    const firstRow = tableRows[0];
    const cell = firstRow.getElementsByTagName("td")[0].textContent.trim();
    expect(cell).toBe(String(sensorData.id));
  });
});

describe("renderWeatherForecast", () => {
    test("renders weather forecast correctly", () => {

    const weatherForecastData = retrieveWeatherData()
    const weatherUFN = weatherCodeToUFN(weatherForecastData.current.weather_code)
    // Render the component
    document.body.innerHTML = FacadeDetails.renderWeatherForecast(weatherForecastData, weatherUFN);

    // Assert that the expected HTML structure is rendered
    const dataTable = document.querySelector(".data-table>tbody");
    const tableRows = dataTable.getElementsByTagName("tr");
    const secondRow = tableRows[1];
    const cell = secondRow.getElementsByTagName("td")[0].textContent.trim();
    expect(cell).toBe(`${weatherForecastData.current.temperature_2m} °C`);
  });
});
