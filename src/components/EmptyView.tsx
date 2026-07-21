import React from 'react';
import {
    View,
    Text,
} from 'react-native';

import { Colors } from '../theme/colors';

export default function EmptyView() {
    return (
        <View
            style={{
                alignItems: 'center',
                marginTop: 80,
            }}>
            <Text
                style={{
                    color: Colors.textSecondary,
                }}>
                No movies found.
            </Text>
        </View>
    );
}