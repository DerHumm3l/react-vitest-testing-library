import { render, screen } from "@testing-library/react";
import { describe, expect, it } from "vitest";
import App from "@/App";

describe("App", () => {
  it("renders sample", async () => {
    render(<App />);

    await screen.findByRole("heading", { level: 2 });
    await screen.findByRole("list");
    expect(screen.getAllByRole("listitem")).toHaveLength(3);
  });
});
