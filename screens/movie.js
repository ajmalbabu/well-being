import React, { useState } from 'react'
import { View, Text, Button, StyleSheet, FlatList, TouchableOpacity } from 'react-native';
import { Video, AVPlaybackStatus } from 'expo-av';
import {globalStyles} from '../styles/global';
import { Card } from '../shared/card';

function Movie({navigation}) {

    const video = React.useRef(null);
    const [status, setStatus] = React.useState({});

    const [reviews,setReviews] = useState([
        { key: '1', title: 'Watch this video before you start', videoUrl: 'http://d23dyxeqlo5psv.cloudfront.net/big_buck_bunny.mp4' },
        { key: '2', title: 'Watch ANOTHER video before you start', videoUrl: 'https://test-videos.co.uk/vids/jellyfish/mp4/h264/720/Jellyfish_720_10s_1MB.mp4' },
        { key: '3', title: 'Watch third video before you start', videoUrl: 'http://d23dyxeqlo5psv.cloudfront.net/big_buck_bunny.mp4' },
        { key: '4', title: 'Watch third video before you start', videoUrl: 'https://test-videos.co.uk/vids/jellyfish/mp4/h264/720/Jellyfish_720_10s_1MB.mp4' },
        { key: '5', title: 'Watch third video before you start', videoUrl: 'http://d23dyxeqlo5psv.cloudfront.net/big_buck_bunny.mp4' }
    ]);

    return (
        <View style={globalStyles.container}>
            <FlatList
                data={reviews}
                renderItem={({item}) => (
                    <TouchableOpacity onPress={() => status.isPlaying ? video.current.pauseAsync() : video.current.playAsync()}>
                        <Card>
                            <Text style={globalStyles.titleText}>{item.title}</Text>
                            <Video
                                    ref={video}
                                    style={styles.video}
                                    source={{uri: item.videoUrl}}
                                    useNativeControls
                                    resizeMode="contain"
                                    isLooping
                                    onPlaybackStatusUpdate={status => setStatus(() => status)}
                                />
                        </Card>
                    </TouchableOpacity>
                )}
            />
        </View>

    )
}

const styles = StyleSheet.create({
    // container: {
    //     flex: 1,
    //     justifyContent: 'center',
    //     backgroundColor: '#ecf0f1',
    // },
    // textHeading: {
    //     flex: 1,
    //     textAlign: 'center',
    // },
    video: {
        flex: 1,
        alignSelf: 'center',
        width: 320,
        height: 150,
    }
  });

export default Movie

