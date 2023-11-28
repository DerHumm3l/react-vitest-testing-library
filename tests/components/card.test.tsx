import { render, screen } from "@testing-library/react";
import { describe, expect, it } from "vitest";
import { Card, CardContent } from "@/components/card";

describe("CardList", () => {
  it("no sub title", async () => {
    const content: CardContent = {
      title: "Michael Bay",
      description: "Great Director",
    };

    render(<Card content={content} />);

    await screen.findByRole("heading");
  });
});
