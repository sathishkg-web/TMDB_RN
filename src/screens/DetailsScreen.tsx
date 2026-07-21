import React, { useEffect, useState } from 'react';
import {
  Image,
  ScrollView,
  StyleSheet,
  Text,
  View,
  Pressable,
} from 'react-native';

import { RouteProp, useRoute } from '@react-navigation/native';
import { MovieDetails } from '../types/movie';

import { getMovieDetails } from '../api/tmdb';

import Loader from '../components/Loader';
import ErrorView from '../components/ErrorView';
import GenreChip from '../components/GenreChip';

import { getImage } from '../utils/image';
import { Colors } from '../theme/colors';

export default function DetailsScreen() {
  const { params } = useRoute<
    any
  >();

  const [movie, setMovie] =
    useState<MovieDetails | null>(null);

  const [loading, setLoading] =
    useState(true);

  const [error, setError] =
    useState('');

  const loadMovie = async () => {
    try {
      setLoading(true);

      const response =
        await getMovieDetails(params?.movie?.id);

      setMovie(response.data);
    } catch (e) {
      console.error(e);
      setError('Unable to load movie.');
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    loadMovie();
  }, []);

  if (loading) {
    return <Loader />;
  }

  if (error) {
    return (
      <ErrorView
        message={error}
        onRetry={loadMovie}
      />
    );
  }

  if (!movie) {
    return null;
  }

  return (
    <ScrollView
      style={styles.container}>

      <Image
        source={{
          uri: getImage(movie.backdrop_path),
        }}
        style={styles.backdrop}
      />

      <View style={styles.content}>

        <Image
          source={{
            uri: getImage(movie.poster_path),
          }}
          style={styles.poster}
        />

        <Text style={styles.title}>
          {movie.title}
        </Text>

        {!!movie.tagline && (
          <Text style={styles.tagline}>
            {movie.tagline}
          </Text>
        )}

        <View style={styles.infoRow}>

          <Text style={styles.info}>
            ⭐ {movie.vote_average.toFixed(1)}
          </Text>

          <Text style={styles.info}>
            📅 {movie.release_date}
          </Text>

          <Text style={styles.info}>
            ⏱ {movie.runtime} min
          </Text>

        </View>

        <View style={styles.genreContainer}>
          {movie.genres.map(item => (
            <GenreChip
              key={item.id}
              name={item.name}
            />
          ))}
        </View>

        <Text style={styles.heading}>
          Overview
        </Text>

        <Text style={styles.overview}>
          {movie.overview}
        </Text>

        <Text style={styles.heading}>
          Production
        </Text>

        {movie.production_companies.map(item => (
          <Text
            key={item.id}
            style={styles.company}>
            • {item.name}
          </Text>
        ))}

      </View>

    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.background,
  },

  backdrop: {
    width: '100%',
    height: 260,
  },

  content: {
    padding: 20,
  },

  poster: {
    width: 160,
    height: 240,
    borderRadius: 18,
    alignSelf: 'center',
    marginTop: -80,
  },

  title: {
    color: Colors.text,
    fontSize: 28,
    fontWeight: '700',
    textAlign: 'center',
    marginTop: 20,
  },

  tagline: {
    color: Colors.primary,
    textAlign: 'center',
    marginTop: 8,
    fontStyle: 'italic',
  },

  infoRow: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    marginVertical: 20,
  },

  info: {
    color: Colors.text,
  },

  genreContainer: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    marginBottom: 20,
  },

  heading: {
    color: Colors.text,
    fontSize: 20,
    fontWeight: '700',
    marginBottom: 10,
  },

  overview: {
    color: '#DDD',
    lineHeight: 24,
    marginBottom: 24,
  },

  company: {
    color: Colors.textSecondary,
    marginBottom: 6,
  },
});