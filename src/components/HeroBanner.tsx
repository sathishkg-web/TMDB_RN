import React from 'react';
import {
    ImageBackground,
    StyleSheet,
    Text,
    View,
    Pressable,
} from 'react-native';

import LinearGradient from 'react-native-linear-gradient';

import { Movie } from '../types/movie';
import { getImage } from '../utils/image';
import { Colors } from '../theme/colors';

interface Props {
    movie: Movie;
    onPress: () => void;
}

export default function HeroBanner({
    movie,
    onPress,
}: Props) {
    return (
        <Pressable onPress={onPress}>
            <ImageBackground
                source={{ uri: getImage(movie.backdrop_path) }}
                style={styles.image}>

                <LinearGradient
                    colors={[
                        'transparent',
                        'rgba(15,17,21,0.95)',
                    ]}
                    style={styles.overlay}>

                    <Text
                        numberOfLines={2}
                        style={styles.title}>
                        {movie.title}
                    </Text>

                    <Text
                        numberOfLines={3}
                        style={styles.overview}>
                        {movie.overview}
                    </Text>

                </LinearGradient>

            </ImageBackground>
        </Pressable>
    );
}

const styles = StyleSheet.create({
    image: {
        height: 260,
        justifyContent: 'flex-end',
    },

    overlay: {
        padding: 20,
    },

    title: {
        color: Colors.text,
        fontSize: 30,
        fontWeight: '700',
    },

    overview: {
        color: '#ddd',
        marginTop: 8,
    },
});