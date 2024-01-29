/**
 * @jest-environment jsdom
 */

import Home from "./index";
import "@testing-library/jest-dom";
import { ITEMS_PER_PAGE } from "../../constants";

beforeEach(async () => {
    document.body.innerHTML = await Home.render();
});

afterEach(() => {
    document.body.innerHTML = "";
});

describe("renders Header component", () => {
    it("header should be present", () => {
        const headerElement = document.querySelector(".main-header");
        expect(headerElement).toBeInTheDocument();
    });
});

describe("renders Home component", () => {
    it("should be as many sensor cards as the ITEMS_PER_PAGE constant", () => {
        const sensorCards = document.querySelectorAll(".sensor-card");
        expect(sensorCards.length).toEqual(ITEMS_PER_PAGE);
    });
});
