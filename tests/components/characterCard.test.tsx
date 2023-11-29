import { render, screen } from "@testing-library/react";
import { describe, it } from "vitest";
import { CharacterCard, Character } from "@/components/characterCard";

describe("CharacterCard", () => {
  it("no sub title", async () => {
    const content: Character = {
      fullname: "Michael Bay",
      description: "Great Director",
    };

    render(<CharacterCard content={content} />);

    await screen.findByRole("heading");
  });
});
