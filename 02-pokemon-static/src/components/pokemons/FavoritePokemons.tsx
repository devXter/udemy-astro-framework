import type { FavoritePokemon } from '@interfaces/favorite-pokemons';
import { For, createSignal } from 'solid-js';
import { FavoritePokemonCard } from './FavoritePokemonCard';

const getLocalStorage = (): FavoritePokemon[] => {
  const favorites: FavoritePokemon[] = JSON.parse(
    localStorage.getItem('favorites') || '[]',
  );
  return favorites;
};

export const FavoritePokemons = () => {
  const [pokemons, setPokemons] =
    createSignal<FavoritePokemon[]>(getLocalStorage());

  return (
    <div class="grid gird-cols-2 sm:grid-cols-4">
      <For each={pokemons()}>
        {(pokemon: FavoritePokemon) => (
          <FavoritePokemonCard pokemon={pokemon} />
        )}
      </For>
    </div>
  );
};
