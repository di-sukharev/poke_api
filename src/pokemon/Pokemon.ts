import type { Pokemon as PokemonType } from "./types";

export default class Pokemon {
  private data!: PokemonType;

  constructor(private nameOrId: string | number) {}

  async init(): Promise<Pokemon> {
    const response = await fetch(
      `https://pokeapi.co/api/v2/pokemon/${this.nameOrId}`
    );
    this.data = await response.json();
    return this;
  }

  async getAbilityByName(name: string) {
    const ability = this.data.abilities.find(
      (a) => a.ability.name === name
    )?.ability;

    if (!ability) {
      throw new Error(`Ability ${name} not found`);
    }

    const response = await fetch(ability.url);
    return response.json();
  }

  get abilities() {
    return this.data.abilities;
  }

  async move(name: string) {
    const move = this.data.moves.find((m) => m.move.name === name)?.move;

    if (!move) {
      throw new Error(`Move ${name} not found`);
    }

    const response = await fetch(move.url);
    return response.json();
  }

  get moves() {
    return this.data.moves;
  }

  get fullData(): PokemonType {
    return this.data;
  }

  async getFormByName(name: string) {
    const form = this.data.forms.find((f) => f.name === name);

    if (!form) {
      throw new Error(`Form ${name} not found`);
    }

    const response = await fetch(form.url);
    return response.json();
  }

  get forms() {
    return this.data.forms;
  }

  async getSpecies() {
    const response = await fetch(this.data.species.url);
    return response.json();
  }

  get species() {
    return this.data.species;
  }

  async getStatByName(name: string) {
    const stat = this.data.stats.find((s) => s.stat.name === name)?.stat;

    if (!stat) {
      throw new Error(`Stat ${name} not found`);
    }

    const response = await fetch(stat.url);
    return response.json();
  }

  get stats() {
    return this.data.stats;
  }

  async getTypeByName(name: string) {
    const type = this.data.types.find((t) => t.type.name === name)?.type;

    if (!type) {
      throw new Error(`Type ${name} not found`);
    }

    const response = await fetch(type.url);
    return response.json();
  }

  get types() {
    return this.data.types;
  }

  async getHeldItemByName(name: string) {
    const item = this.data.held_items.find((i) => i.item.name === name)?.item;

    if (!item) {
      throw new Error(`Held item ${name} not found`);
    }

    const response = await fetch(item.url);
    return response.json();
  }

  get heldItems() {
    return this.data.held_items;
  }

  async getGameVersionByName(name: string) {
    const version = this.data.game_indices.find(
      (g) => g.version.name === name
    )?.version;

    if (!version) {
      throw new Error(`Game version ${name} not found`);
    }

    const response = await fetch(version.url);
    return response.json();
  }

  get gameIndices() {
    return this.data.game_indices;
  }

  async getLocationAreaEncounters() {
    const response = await fetch(this.data.location_area_encounters);
    return response.json();
  }

  async getPastTypeByName(name: string) {
    const type = this.data.past_types
      .flatMap((pt) => pt.types)
      .find((t) => t.type.name === name)?.type;

    if (!type) {
      throw new Error(`Past type ${name} not found`);
    }

    const response = await fetch(type.url);
    return response.json();
  }

  get pastTypes() {
    return this.data.past_types;
  }

  async getPastTypeGenerationByName(name: string) {
    const generation = this.data.past_types
      .flatMap((pt) => pt.generation)
      .find((g) => g.name === name);

    if (!generation) {
      throw new Error(`Past generation ${name} not found`);
    }

    const response = await fetch(generation.url);
    return response.json();
  }
}
