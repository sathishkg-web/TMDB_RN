import React from 'react';
import {
    Button,
    Text,
    View,
} from 'react-native';

interface Props {
    message: string;
    onRetry: () => void;
}

export default function ErrorView({
    message,
    onRetry,
}: Props) {
    return (
        <View
            style={{
                flex: 1,
                justifyContent: 'center',
                alignItems: 'center',
            }}>
            <Text>{message}</Text>

            <Button
                title="Retry"
                onPress={onRetry}
            />
        </View>
    );
}