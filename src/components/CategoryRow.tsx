import React from 'react';
import {
    FlatList,
    View,
} from 'react-native';

import MovieCard from './MovieCard';
import SectionHeader from './SectionHeader';
import { Movie } from '../types/movie';

interface Props {
    title: string;
    movies: Movie[];
    onMoviePress: (movie: Movie) => void;
    onSeeAll?: () => void;
}

export default function CategoryRow({
    title,
    movies,
    onMoviePress,
    onSeeAll,
}: Props) {
    return (
        <View style={{ marginBottom: 24 }}>
            {movies.length > 0 && <SectionHeader
                title={title}
                onPress={onSeeAll}
            />}

            <FlatList
                horizontal
                data={movies}
                keyExtractor={item => item.id.toString()}
                renderItem={({ item }) => (
                    <MovieCard
                        movie={item}
                        onPress={() => onMoviePress(item)}
                    />
                )}
                showsHorizontalScrollIndicator={false}
                contentContainerStyle={{
                    paddingHorizontal: 16,
                }}
            />
        </View>
    );
}
