import React, {
    createContext,
    useContext,
    useEffect,
    useState,
} from 'react';

import {
    getPopularMovies,
    getTopRatedMovies,
    getUpcomingMovies,
    getNowPlayingMovies,
} from '../api/tmdb';

import { Movie } from '../types/movie';

interface MovieContextType {
    popular: Movie[];
    topRated: Movie[];
    upcoming: Movie[];
    nowPlaying: Movie[];

    loading: boolean;
    error: string | null;

    refresh: () => Promise<void>;
}

const MovieContext = createContext<MovieContextType>(
    {} as MovieContextType,
);

export const MovieProvider = ({
    children,
}: {
    children: React.ReactNode;
}) => {
    const [popular, setPopular] = useState<Movie[]>([]);
    const [topRated, setTopRated] = useState<Movie[]>([]);
    const [upcoming, setUpcoming] = useState<Movie[]>([]);
    const [nowPlaying, setNowPlaying] = useState<Movie[]>([]);

    const [loading, setLoading] = useState(true);

    const [error, setError] = useState<string | null>(null);

    const fetchMovies = async () => {
        try {
            setLoading(true);
            setError(null);

            const [
                popularRes,
                topRatedRes,
                upcomingRes,
                nowPlayingRes,
            ] = await Promise.all([
                getPopularMovies(),
                getTopRatedMovies(),
                getUpcomingMovies(),
                getNowPlayingMovies(),
            ]);

            setPopular(popularRes.data.results);
            setTopRated(topRatedRes.data.results);
            setUpcoming(upcomingRes.data.results);
            setNowPlaying(nowPlayingRes.data.results);
        } catch (err) {
            console.log('error', error);
            setError('Failed to load movies.');
        } finally {
            setLoading(false);
        }
    };

    useEffect(() => {
        fetchMovies();
    }, []);

    return (
        <MovieContext.Provider
            value={{
                popular,
                topRated,
                upcoming,
                nowPlaying,
                loading,
                error,
                refresh: fetchMovies,
            }}>
            {children}
        </MovieContext.Provider>
    );
};

export const useMovies = () => useContext(MovieContext);
