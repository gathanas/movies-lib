import baseMoviesApi from './baseMoviesApi';

const getMoviesApi = async () => {
    try {
        const response = await baseMoviesApi.get('movies/')
        return response;
    } catch (error) {
        console.error('Error fetching movies:', error);
        throw error;
    }
};

export default getMoviesApi;