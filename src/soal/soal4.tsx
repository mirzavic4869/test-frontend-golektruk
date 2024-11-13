import { useState, useRef, useEffect } from 'react';

// Soal Nomor 4
// Buatlah sebuah website yang menampilkan daftar pokemon yang di load dengan infinite scroll

const BASE_URL = 'https://pokeapi.co/api/v2';

const fetchPokemon = async (offset: number, limit: number) => {
  // fungsi untuk fetch data pokemon
  const response = await fetch(`${BASE_URL}/pokemon?offset=${offset}&limit=${limit}`);
  const data = await response.json();
  return data.results;
};

const Soal4 = () => {
  const [pokemonList, setPokemonList] = useState<{ name: string; url: string }[]>([]);
  //  Tambahkan state yang dibutuhkan
  // ...
  const [offset, setOffset] = useState<number>(0);
  const [loading, setLoading] = useState<boolean>(false);
  const [hasMore, setHasMore] = useState<boolean>(true);

  const theRef = useRef<HTMLDivElement | null>(null);

  // Fungsi untuk infinite scroll
  // ...
  useEffect(() => {
    const loadPokemon = async () => {
      setLoading(true);
      const limit = 20;
      const newPokemon = await fetchPokemon(offset, limit);

      setPokemonList((prev) => [...prev, ...newPokemon]);
      setLoading(false);

      if (newPokemon.length < limit) setHasMore(false);
    };

    loadPokemon();
  }, [offset]);

  useEffect(() => {
    const handleScroll = () => {
      if (theRef.current && window.innerHeight + window.scrollY >= theRef.current.offsetTop && !loading && hasMore) {
        setOffset((prevOffset) => prevOffset + 20);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [loading, hasMore]);

  return (
    <div
      style={{
        display: 'flex',
        minHeight: '100vh',
      }}
    >
      <div
        style={{
          flexGrow: 1,
          color: 'white',
          fontSize: '1.5em',
          textAlign: 'center',
          fontFamily: 'sans-serif',
        }}
      >
        <h1
          style={{
            fontWeight: 'bolder',
          }}
        >
          Pokémon Infinite Scroll
        </h1>

        {/* List Pokemon */}
        <ul>
          {pokemonList.map((pokemon, index) => (
            <li key={index} style={{ marginBottom: '10px' }}>
              {pokemon.name}
            </li>
          ))}
        </ul>

        {/* Loading Spinner */}
        {loading && <p>Loading more Pokemon...</p>}

        {/* Reference for scroll position */}
        <div ref={theRef} style={{ height: '1px' }}></div>
      </div>
      <iframe
        src="/soal4.mp4"
        style={{
          height: '100vh',
          border: '1px solid white',
        }}
      ></iframe>
    </div>
  );
};

export default Soal4;
