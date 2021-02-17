import { render, screen } from "@testing-library/react";
import { ExchangeRate } from "../ExchangeRate";
import ReduxProvider from "../../test-utils";

test("renders title", () => {
  render(<ReduxProvider><ExchangeRate /></ReduxProvider>);
  const linkElement = screen.getByText(/exchange rates/i);
  expect(linkElement).toBeInTheDocument();
});
