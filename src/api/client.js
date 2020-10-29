import axios from 'axios';

const baseURL = 'https://pokeapi.co/api/v2/';
const config = {}

export  const getClient = () => axios.create({ baseURL, ...config });
