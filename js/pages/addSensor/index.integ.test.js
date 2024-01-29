/**
 * @jest-environment jsdom
 */

// Import necessary modules and functions
import "@testing-library/jest-dom";
import AddSensor from "./index";
import { getByTestId } from "@testing-library/dom";

beforeEach(() => {
    document.body.innerHTML = AddSensor.render();
});

afterEach(() => {
    document.body.innerHTML = "";
});

describe("Title", () => {
  test("title is correct", () => {
    expect(getByTestId(document.body, 'add-sensor-title')).toHaveTextContent("Ajout d'un nouveau capteur");
  });
});

describe("input fields", () => {
  test("there are 5 input fields", () => {
    const inputFields = document.getElementsByTagName('input');
    expect(inputFields).toHaveLength(5);
  });
});