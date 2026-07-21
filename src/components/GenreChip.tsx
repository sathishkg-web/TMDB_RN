import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

import { Colors } from '../theme/colors';

interface Props {
    name: string;
}

export default function GenreChip({ name }: Props) {
    return (
        <View style={styles.container}>
            <Text style={styles.text}>
                {name}
            </Text>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: Colors.surface,
        paddingHorizontal: 14,
        paddingVertical: 8,
        borderRadius: 18,
        marginRight: 8,
        marginBottom: 8,
    },

    text: {
        color: Colors.text,
        fontSize: 13,
    },
});