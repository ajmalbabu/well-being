import React, { useEffect, useState, useCallback } from "react";
import { StyleSheet, Text, View,Image, Dimensions,SafeAreaView, ScrollView, StatusBar, TouchableOpacity, Button  } from 'react-native';
import sanityClient from "../shared/client";
import { globalStyles } from '../styles/global';
import BlockContent from "@sanity/block-content-to-react";
import imageUrlBuilder from "@sanity/image-url";
import { Card } from "../shared/card";

// Below works if the CMS video are MP3 not pure youtube videos, but then on CMS screen preview does not work because that preview is set with below
// guide and would not support MP3 format https://www.sanity.io/guides/portable-text-how-to-add-a-custom-youtube-embed-block
// import { Video, AVPlaybackStatus } from 'expo-av';
// Below is needed to extract youtube id, this package is suggested by above Sanity guide, but Snaity suggested youtube player does not work in RN 
// First part of this video to set youtube in sanity part of application is developed using this guide though and it is available at /Users/admin/software/workspace/react-blog/myreactblog
import getYouTubeId from 'get-youtube-id';

// Insead of above, youtube plater, use this youtube player to get data in RN application https://lonelycpp.github.io/react-native-youtube-iframe/basic-usage
import YoutubePlayer from "react-native-youtube-iframe";

const serializers =  {
  types: {
    youtube: ({node}) => {

      const [playing, setPlaying] = useState(false);

      const onStateChange = useCallback((state) => {
        if (state === "ended") {
          setPlaying(false);
          Alert.alert("video has finished playing!");
        }
      }, []);
    
      const togglePlaying = useCallback(() => {
        setPlaying((prev) => !prev);
      }, []);

      const video = React.useRef(null);

      const [status, setStatus] = React.useState({});            
      console.log("start -> node", node);
      const { url } = node
      console.log("url", url);
      const id = getYouTubeId(url)
      console.log("id", id);

      return (
        // <TouchableOpacity onPress={() => status.isPlaying ? video.current.pauseAsync() : video.current.playAsync()}>
        <TouchableOpacity>
          <Card>
            <Text style={globalStyles.titleText}>Sample title</Text>        
            <YoutubePlayer
              height={300}
              play={playing}
              videoId={id}
              onChangeState={onStateChange}
            />
            <Button title={playing ? "pause" : "play"} onPress={togglePlaying} />          
            {/* <Video
              ref={video}
              style={styles.video}
              source={{uri: url}}
              useNativeControls
              resizeMode="contain"
              isLooping
              onPlaybackStatusUpdate={status => setStatus(() => status)}
            /> */}
          </Card>
        </TouchableOpacity>            
      );
    }
  }
}

const { width } = Dimensions.get('window');

const builder = imageUrlBuilder(sanityClient);

function urlFor(source) {
  const imageSource = builder.image(source)
  return imageSource;
}

export default function BlogBySlug() {

  const [postData, setPostData] = useState(null);
  const slug  = 'my-second-post';
  // const slug  = 'my-very-first-blog-post';

  useEffect(() => {
    sanityClient
      .fetch(
        `*[slug.current == $slug]{
          title,
          slug,
          mainImage{
            asset->{
              _id,
              url
             }
           },
         body,
        "authorName": author->name,
        "authorImage": author->image
       }`,
        { slug }
      )
      .then((data) => {
        // console.log("start");
        // console.log(data);
        // console.log("end");
        setPostData(data[0]);
      }).catch(console.error);
  },[]);

  if(!postData)   {return (<View style={globalStyles.container}><Text>Loading...</Text></View>)}

  return (
    <SafeAreaView style={styles.container}>
      <ScrollView style={styles.scrollView}>
        <Text>{postData.title}</Text>
        <Image
          style={styles.tinyLogo}
          source={{
            uri: urlFor(postData.authorImage).url(),
          }}
        />
        <Text>{postData.authorName}</Text>
        <Image  style={styles.mainImage}
            source={{uri: urlFor(postData.mainImage).width(200).url()}} 
        />
        <BlockContent 
          blocks={postData.body}
          projectId='kepampzc'
          dataset='production'
          serializers={serializers} 
        />
      </ScrollView>
    </SafeAreaView>
  ); 

}


const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: StatusBar.currentHeight,
    // backgroundColor: "red"
  },
  scrollView: {
    // backgroundColor: 'pink',
    marginHorizontal: 10,
  }, 
  tinyLogo: {
    width: 50,
    height: 50,
  },  
  mainImage: {
    width: width,
    height: width,
  }, 
  video: {
    // flex: 1,
    alignSelf: 'center',
    width: 320,
    height: 150,
}  
});
