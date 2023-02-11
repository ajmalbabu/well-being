import React, { useEffect, useState } from "react";
import { StyleSheet, Text, View, Pressable, Dimensions } from 'react-native';
import sanityClient from "../shared/client";
import { globalStyles } from '../styles/global';

const { width } = Dimensions.get('window');

// This series from,  https://www.youtube.com/watch?v=D8xaQxhJHlg&list=PLRzQpWc3zNPnmQgTZdTR-sCvYfj5Uil6s
// and https://www.sanity.io/guides/build-your-first-blog-using-react
// and local sanity is already developed at /Users/admin/software/workspace/react-blog/myreactblog - start with 'sanity start'
// also local ract front is at /Users/admin/software/workspace/react-blog - start with npm start
export default function Blog() {

  const [allPostsData, setAllPosts] = useState(null);

  useEffect(() => {
    sanityClient
      .fetch(
        `*[_type == "post"]{
        title,
        slug,
        mainImage{
          asset->{
          _id,
          url
        }
      }
    }`
      )
      .then((data) => {
        console.log(data);
        setAllPosts(data);
      })
      .catch(console.error);
  }, []);

  
  const blogData = () => {
    return allPostsData.map((post,index) => {
      return (
        <View key={index} style={{margin: 10}}>
          <Text>{post.slug.current}</Text>
          <Text>{post.title}</Text>
        </View>
      );
    });
  };

  if(!allPostsData)   {return (<View style={globalStyles.container}><Text>Loading...</Text></View>)}

  return (
        <View style={globalStyles.container}>
          <Text style={styles.headerText}>Blog Posts</Text>
          <Text style={styles.headerText}>Welcome to my blog posts page!</Text>    
          {blogData()}
        </View>
  );

}


const styles = StyleSheet.create({
  header: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    padding: 20,
    width: width,
    alignItems: 'center',
  },
  headerText: {
    fontSize: 20,
    fontWeight: 'bold',
  }
});
