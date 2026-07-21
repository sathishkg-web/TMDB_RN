import React from 'react';
import {
    Text,
    View,
    Pressable,
    StyleSheet,
} from 'react-native';

import { Colors } from '../theme/colors';
import { Spacing } from '../theme/spacing';
import { Typography } from '../theme/typography';

interface Props {
    title: string;
    onPress?: () => void;
}

export default function SectionHeader({
    title,
    onPress,
}: Props) {
    return (
        <View style={styles.container}>
            <Text style={styles.title}>
                {title}
            </Text>

            {onPress && (
                <Pressable onPress={onPress}>
                    <Text style={styles.more}>
                        See All
                    </Text>
                </Pressable>
            )}
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        marginHorizontal: Spacing.md,
        marginBottom: Spacing.sm,
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
    },

    title: {
        fontSize: Typography.heading,
        color: Colors.text,
        fontWeight: '700',
    },

    more: {
        color: Colors.primary,
        fontWeight: '600',
    },
});