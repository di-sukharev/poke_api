import Pokemon from "./src/pokemon/Pokemon";
import Generation from "./src/generation/Generation";

const sdk = {
  Pokemon,
  Generation,
};

const pokemon = await new Pokemon("luxray").init();

const ability = await pokemon.getAbilityByName("intimidate");

export default sdk;
