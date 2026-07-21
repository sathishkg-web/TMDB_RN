import React from 'react';
import {
    Image,
    Pressable,
    StyleSheet,
    Text,
    View,
} from 'react-native';

import { Movie } from '../types/movie';
import { Colors } from '../theme/colors';
import { Spacing } from '../theme/spacing';
import { Typography } from '../theme/typography';
import { getImage } from '../utils/image';

interface Props {
    movie: Movie;
    onPress: () => void;
}

export default function MovieCard({
    movie,
    onPress,
}: Props) {
    return (
        <Pressable
            style={styles.container}
            onPress={onPress}>
            <Image
                source={{
                    uri: getImage(movie.poster_path),
                }}
                style={styles.image}
            />

            <View style={styles.info}>
                <Text
                    numberOfLines={1}
                    style={styles.title}>
                    {movie.title}
                </Text>

                <View style={styles.row}>
                    <Text style={styles.rating}>
                        ⭐ {movie.vote_average.toFixed(1)}
                    </Text>

                    <Text style={styles.date}>
                        {movie.release_date?.slice(0, 4)}
                    </Text>
                </View>
            </View>
        </Pressable>
    );
}

const styles = StyleSheet.create({
    container: {
        width: 150,
        marginRight: Spacing.md,
    },

    image: {
        width: '100%',
        height: 220,
        borderRadius: 16,
    },

    info: {
        paddingTop: 8,
    },

    title: {
        color: Colors.text,
        fontSize: Typography.body,
        fontWeight: '600',
    },

    row: {
        marginTop: 4,
        flexDirection: 'row',
        justifyContent: 'space-between',
    },

    rating: {
        color: Colors.primary,
    },

    date: {
        color: Colors.textSecondary,
    },
});