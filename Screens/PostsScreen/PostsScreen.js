// import React, { useState } from 'react';
import {
  View,
  Text,
  StyleSheet,
  // SafeAreaView,
  // FlatList,
  // Image,
  TouchableOpacity,
} from 'react-native';
import Feather from '@expo/vector-icons/Feather';
import { useNavigation } from '@react-navigation/native';

const PostsScreen = () => {
  // const [post, setPost] = useState([]);
  const navigation = useNavigation();
  return (
    <View style={styles.container}>
      <View style={styles.user}>
        <View style={styles.userPhoto}></View>
        <View style={styles.userNick}>
          <Text
            style={{
              color: '#212121',
              // fontFamily: "Roboto-Bold",
              fontSize: 13,
            }}
          >
            Natali Romanova
          </Text>
          <Text
            style={{
              color: '#212121',
              // fontFamily: "Roboto-Regular",
              fontSize: 11,
            }}
          >
            email@example.com
          </Text>
        </View>
      </View>
      {/* <SafeAreaView>
        <FlatList
          data={post}
          renderItem={({ item: { photo, location } }) => ( */}
      <View style={styles.listContainer}>
        <View style={styles.postPhoto}>
          {/* <Image source={{ uri: photo }} /> */}
        </View>
        <Text
          style={{
            color: '#212121',
            // fontFamily: "Roboto-Medium",
            fontSize: 16,
            marginVertical: 7,
          }}
        >
          Ліс
        </Text>
        <View
          style={{
            flexDirection: 'row',
            justifyContent: 'space-between',
          }}
        >
          <View
            style={{
              flexDirection: 'row',
            }}
          >
            <TouchableOpacity>
              <Feather
                name="message-circle"
                size={24}
                color="#BDBDBD"
                style={{ transform: [{ rotate: '-90deg' }] }}
                onPress={() => navigation.navigate('CommentsScreen')}
              />
            </TouchableOpacity>
            <Text
              style={{
                color: '#BDBDBD',
                // fontFamily: "Roboto-Regular",
                fontSize: 16,
                marginLeft: 3,
              }}
            >
              0
            </Text>
          </View>

          <TouchableOpacity
            onPress={() => navigation.navigate('MapScreen')}
            style={{
              flexDirection: 'row',
            }}
          >
            <Feather
              name="map-pin"
              size={24}
              color="#BDBDBD"
              style={{
                marginRight: 3,
                // position: "absolute",
                // top: 10,
                // left: 0,
                // alignContent: "center",
              }}
            />
            <Text
              style={{
                color: '#212121',
                fontFamily: 'Roboto-Regular',
                fontSize: 16,
                textDecorationLine: 'underline',
              }}
            >
              Локація
            </Text>
          </TouchableOpacity>
        </View>
      </View>
      {/* )}
          // keyExtractor={(item) => item.id}
        />
      </SafeAreaView> */}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    marginHorizontal: 'auto',
    paddingHorizontal: 20,
    // alignItems: "center",
    // justifyContent: "center",
  },
  user: {
    top: 31,

    borderColor: '#111',

    height: 60,
    flexDirection: 'row',
    // justifyContent: "center",
  },
  userPhoto: {
    // justifyContent: "center",
    // alignItems: "flex-start",
    left: 0,
    position: 'relative',

    borderRadius: 16,
    width: 60,
    height: 60,
    backgroundColor: 'red',
  },
  userNick: {
    justifyContent: 'center',
    left: 15,
    // position: "absolute",
    // top: 28,
    // bottom: 0,
    // width: 171,
    // height: 60,
  },
  listContainer: {
    marginTop: 63,
    width: 343,
    height: 299,
    borderColor: 'red',
  },
  postPhoto: {
    backgroundColor: '#E8E8E8',
    borderWidth: 1,
    borderColor: '#E8E8E8',
    borderRadius: 8,
    width: 343,
    height: 240,
    justifyContent: 'center',
    overflow: 'hidden',
  },
});

export default PostsScreen;
