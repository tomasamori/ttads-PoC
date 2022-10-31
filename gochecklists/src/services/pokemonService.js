export const getPokemons = async () => {
    try {
        const url = 'https://pokeapi.co/api/v2/pokemon?limit=10&offset=0';
        const response = await fetch(url);
        const data = await response.json();
        return data
    } catch (err) {}
};

export const getPokemonData = async (url) => {
    try {
        const response = await fetch(url);
        const data = await response.json();
        return data;
    } catch (err) {}
};

export const getPageMode = async () => {
    return window.location.pathname.replace("/", "");
}