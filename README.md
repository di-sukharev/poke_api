# SE Poké API

An almost good and type-safe Pokémon API wrapper for TypeScript/JavaScript one is able to do in 1 hour.

## Installation

```bash
bun install se_poke_api
# or
npm install se_poke_api
# or
yarn add se_poke_api
```

## Usage

```typescript
import { Pokemon } from "se_poke_api";

async function main() {
  // Initialize a Pokemon instance
  const pikachu = await new Pokemon("pikachu").init();
  // You can also use Pokemon ID
  const bulbasaur = await new Pokemon(69).init();

  // Get basic information
  console.log(pikachu.types); // [{type: {name: "electric", ...}}, ...]
  console.log(pikachu.abilities); // [{ability: {name: "static", ...}}, ...]
  console.log(pikachu.stats); // [{stat: {name: "hp", ...}, base_stat: 35}, ...]

  // Get detailed information about specific attributes
  const staticAbility = await pikachu.getAbilityByName("static");
  const thunderboltMove = await pikachu.move("thunderbolt");
  const electricType = await pikachu.getTypeByName("electric");

  // Get species information
  const species = await pikachu.getSpecies();
  console.log(species.evolution_chain);

  // Get encounter locations
  const encounters = await pikachu.getLocationAreaEncounters();

  // Access game-specific information
  const redVersion = await pikachu.getGameVersionByName("red");

  // Get held items
  const heldItems = pikachu.heldItems;
  const lightBall = await pikachu.getHeldItemByName("light-ball");

  // Get full raw data
  const allData = pikachu.fullData;
}

main().catch(console.error);
```

## Features

- 🎯 Strongly typed - written in TypeScript
- 🚀 Promise-based API
- 🔍 Access to all Pokémon data:
  - Abilities
  - Moves
  - Stats
  - Types
  - Forms
  - Species information
  - Held items
  - Game version appearances
  - Location encounters
  - Past type data

## Development

To install dependencies:

```bash
bun install
```

To run:

```bash
bun run index.ts
```

## Testing

```bash
bun test
```

## Publishing

```bash
bun run publish
```

## License

MIT

This project was created using `bun init` in bun v1.1.34. [Bun](https://bun.sh) is a fast all-in-one JavaScript runtime.
