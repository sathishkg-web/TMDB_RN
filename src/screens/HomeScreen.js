import React, { useState, useMemo } from "react";
import { ScrollView, Text, View, RefreshControl } from "react-native";

import { useNavigation } from "@react-navigation/native";

import { useMovies } from "../hooks/useMovies";

import Loader from "../components/Loader";
import ErrorView from "../components/ErrorView";
import HeroBanner from "../components/HeroBanner";
import CategoryRow from "../components/CategoryRow";
import SearchBar from "../components/SearchBar";

import { Colors } from "../theme/colors";

export default function HomeScreen() {
  const navigation = useNavigation();

  const [searchQuery, setSearchQuery] = useState("");

  const { popular, topRated, upcoming, nowPlaying, loading, error, refresh } =
    useMovies();

  // Helper function to filter a movie list based on search query
  const filterMovies = (movies) => {
    if (!searchQuery.trim()) return movies;
    return movies.filter((movie) =>
      movie.title?.toLowerCase().includes(searchQuery.toLowerCase()),
    );
  };

  // Memoize filtered results for performance
  const filteredPopular = useMemo(
    () => filterMovies(popular),
    [popular, searchQuery],
  );
  const filteredTopRated = useMemo(
    () => filterMovies(topRated),
    [topRated, searchQuery],
  );
  const filteredUpcoming = useMemo(
    () => filterMovies(upcoming),
    [upcoming, searchQuery],
  );
  const filteredNowPlaying = useMemo(
    () => filterMovies(nowPlaying),
    [nowPlaying, searchQuery],
  );

  if (loading) {
    return <Loader />;
  }

  if (error) {
    return <ErrorView message={error} onRetry={refresh} />;
  }

  return (
    <ScrollView
      style={{
        flex: 1,
        backgroundColor: Colors.background,
      }}
      refreshControl={
        <RefreshControl refreshing={loading} onRefresh={refresh} />
      }
    >
      <View
        style={{
          padding: 20,
        }}
      >
        <Text
          style={{
            color: "white",
            fontSize: 30,
            fontWeight: "700",
          }}
        >
          Discover
        </Text>

        <Text
          style={{
            color: "#aaa",
            marginTop: 6,
          }}
        >
          Find your next favourite movie
        </Text>
      </View>

      <SearchBar value={searchQuery} onChangeText={setSearchQuery} />

      {/* {popular.length > 0 && (
        <HeroBanner
          movie={popular[1]}
          onPress={() =>
            navigation.navigate("Details", {
              movie: popular[1],
            })
          }
        />
      )} */}

      <CategoryRow
        title="Popular"
        movies={filteredPopular}
        onMoviePress={(movie) => navigation.navigate("Details", { movie })}
      />

      <CategoryRow
        title="Top Rated"
        movies={filteredTopRated}
        onMoviePress={(movie) => navigation.navigate("Details", { movie })}
      />

      <CategoryRow
        title="Upcoming"
        movies={filteredUpcoming}
        onMoviePress={(movie) => navigation.navigate("Details", { movie })}
      />

      <CategoryRow
        title="Now Playing"
        movies={filteredNowPlaying}
        onMoviePress={(movie) => navigation.navigate("Details", { movie })}
      />
    </ScrollView>
  );
}
