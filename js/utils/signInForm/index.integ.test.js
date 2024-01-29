/**
 * @jest-environment jsdom
 */

import "@testing-library/jest-dom";
import { getByTestId } from "@testing-library/dom";
import SignInPage from "../../pages/signIn/index";
import { handleSignInForm } from "./index";

beforeEach(() => {
  document.body.innerHTML = SignInPage.render();
  handleSignInForm();
});

afterEach(() => {
  document.body.innerHTML = "";
});

describe("Wrong email", () => {
  it("should display a email error", () => {
    const emailField = document.querySelector("#user-email");
    emailField.value = "tom@tom.com";
    const submitButton = document.querySelector(".submit-btn");
    submitButton.click();
    const emailErrorMsg = getByTestId(document.body, "user-email-error-msg");
    const passwordErrorMsg = getByTestId(document.body, "user-password-error-msg");
    expect(emailErrorMsg).not.toHaveClass("hidden");
    expect(passwordErrorMsg).toHaveClass("hidden");
  });
});

describe("No password", () => {
  it("should display a password error", () => {
    const emailField = document.querySelector("#user-email");
    emailField.value = "user1@facadia.com";
    const submitButton = document.querySelector(".submit-btn");
    submitButton.click();
    const emailErrorMsg = getByTestId(document.body, "user-email-error-msg");
    const passwordErrorMsg = getByTestId(document.body, "user-password-error-msg");
    expect(emailErrorMsg).toHaveClass("hidden");
    expect(passwordErrorMsg).not.toHaveClass("hidden");
  });
});

describe("Wrong password", () => {
  it("should display a password error", () => {
    const emailField = document.querySelector("#user-email");
    const passwordField = document.querySelector("#user-password");
    emailField.value = "user1@facadia.com";
    passwordField.value = "qwerty";
    const submitButton = document.querySelector(".submit-btn");
    submitButton.click();
    const emailErrorMsg = getByTestId(document.body, "user-email-error-msg");
    const passwordErrorMsg = getByTestId(document.body, "user-password-error-msg");
    expect(emailErrorMsg).toHaveClass("hidden");
    expect(passwordErrorMsg).not.toHaveClass("hidden");
  });
});

describe("Correct email and password", () => {
  it("should not display any error", () => {
    const emailField = document.querySelector("#user-email");
    const passwordField = document.querySelector("#user-password");
    emailField.value = "user1@facadia.com";
    passwordField.value = "azerty";
    const submitButton = document.querySelector(".submit-btn");
    submitButton.click();
    const emailErrorMsg = getByTestId(document.body, "user-email-error-msg");
    const passwordErrorMsg = getByTestId(document.body, "user-password-error-msg");
    expect(emailErrorMsg).toHaveClass("hidden");
    expect(passwordErrorMsg).toHaveClass("hidden");
  });
});
