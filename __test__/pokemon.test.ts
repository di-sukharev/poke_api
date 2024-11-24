import { expect, test, describe, beforeAll } from "bun:test";
import Pokemon from "../src/pokemon/Pokemon";

describe("Pokemon", () => {
  let pikachu: Pokemon;

  beforeAll(async () => {
    pikachu = await new Pokemon("pikachu").init();
  });

  test("should fetch basic pokemon data", async () => {
    const data = await pikachu.fullData;
    expect(data.name).toBe("pikachu");
  });

  test("should get abilities", async () => {
    const ability = await pikachu.getAbilityByName("static");
    expect(ability.name).toBe("static");
  });

  test("should get moves", async () => {
    const move = await pikachu.move("thunder-shock");
    expect(move.name).toBe("thunder-shock");
  });

  test("should get forms", async () => {
    const form = await pikachu.getFormByName("pikachu");
    expect(form.name).toBe("pikachu");
  });

  test("should get species", async () => {
    const species = await pikachu.getSpecies();
    expect(species.name).toBe("pikachu");
  });

  test("should get stats", async () => {
    const stat = await pikachu.getStatByName("speed");
    expect(stat.name).toBe("speed");
  });

  test("should get types", async () => {
    const type = await pikachu.getTypeByName("electric");
    expect(type.name).toBe("electric");
  });

  test("should get held items", async () => {
    const item = await pikachu.getHeldItemByName("light-ball");
    expect(item.name).toBe("light-ball");
  });

  test("should get game versions", async () => {
    const version = await pikachu.getGameVersionByName("red");
    expect(version.name).toBe("red");
  });

  test("should get location area encounters", async () => {
    const encounters = await pikachu.getLocationAreaEncounters();
    expect(Array.isArray(encounters)).toBe(true);
  });

  test("should get past types", async () => {
    const magnemite = await new Pokemon("magnemite").init();
    const pastType = await magnemite.getPastTypeByName("electric");
    expect(pastType.name).toBe("electric");
  });

  test("should get past type generations", async () => {
    const magnemite = await new Pokemon("magnemite").init();
    const generation = await magnemite.getPastTypeGenerationByName(
      "generation-i"
    );
    expect(generation.name).toBe("generation-i");
  });

  describe("Error cases", () => {
    test("should throw error for non-existent ability", async () => {
      await expect(pikachu.getAbilityByName("nonexistent")).rejects.toThrow(
        "Ability nonexistent not found"
      );
    });

    test("should throw error for non-existent move", async () => {
      await expect(pikachu.move("nonexistent")).rejects.toThrow(
        "Move nonexistent not found"
      );
    });
  });
});
