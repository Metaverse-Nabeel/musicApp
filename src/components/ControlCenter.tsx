import { Pressable, StyleSheet, Text, View } from 'react-native'
import TrackPlayer, { State, useActiveTrack, usePlaybackState } from 'react-native-track-player'
import Icon from 'react-native-vector-icons/MaterialIcons'

const ControlCenter = () => {
    const { state: playBackState } = usePlaybackState();

    const isPlaying = playBackState === State.Playing;
    // Next Button
    const skipToNext = async () => {
        await TrackPlayer.skipToNext()
    }

    // Prev Button
    const skipToPrev = async () => {
        await TrackPlayer.skipToPrevious()
    }

    // Toggle Play Button
    const togglePlay = async (playback: any) => {
        const currentTrack = await TrackPlayer.getActiveTrack()
        if (currentTrack !== null) {
            if (playback === State.Paused || playback === State.Ready) {
                await TrackPlayer.play()
            } else {
                await TrackPlayer.pause()
            }
        }
    }
    return (
        <View style={styles.container}>
            <Pressable onPress={skipToPrev}>
                <Icon style={styles.icon} name='skip-previous' size={40} />
            </Pressable>
            <Pressable onPress={() => togglePlay(playBackState)}>
                <Icon style={styles.icon} name={isPlaying ? 'pause' : 'play-arrow'} size={75} />
            </Pressable>
            <Pressable onPress={skipToNext}>
                <Icon style={styles.icon} name='skip-next' size={40} />
            </Pressable>

        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        marginBottom: 56,

        flex: 1,
        flexDirection: 'row',
        alignItems: 'center',
    },
    icon: {
        color: '#FFFFFF',
    },
    playButton: {
        marginHorizontal: 24,
    },
});

export default ControlCenter