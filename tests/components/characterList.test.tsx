import { render, screen } from "@testing-library/react";
import { describe, expect, it } from "vitest";
import { CharacterList } from "@/components/characterList";
import { Character } from "@/components/characterCard";

describe("CharacterList", () => {
  it("empty", async () => {
    const items: Character[] = [];

    render(<CharacterList characters={items} />);

    await screen.findByRole("list");
    expect(screen.queryAllByRole("listitem")).toHaveLength(0);
  });
});
