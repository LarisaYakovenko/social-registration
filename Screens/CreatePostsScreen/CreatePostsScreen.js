import {
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
  Image,
  KeyboardAvoidingView,
  Platform,
  TextInput,
  Button,
} from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { Camera, CameraView, useCameraPermissions } from 'expo-camera';
import { useEffect, useState } from 'react';
import { MaterialIcons, Feather } from '@expo/vector-icons';
import * as Location from 'expo-location';

import * as MediaLibrary from 'expo-media-library';

export default function CreatePostsScreen() {
  // const navigation = useNavigation();
  const [cameraRef, setCameraRef] = useState(null);
  const [photo, setPhoto] = useState('');
  // const [facing, setFacing] = useState("back");
  const [permission, requestPermission] = useCameraPermissions();
  const [name, setName] = useState('');
  const [coordinateLocation, setCoordinateLocation] = useState('');

  const [location, setLocation] = useState(null);

  const navigation = useNavigation();

  useEffect(() => {
    (async () => {
      const { status } = await Camera.requestCameraPermissionsAsync();
      // if (status !== 'granted') {
      //   console.log('Permission to access Camera was denied');
      // }
      await MediaLibrary.requestForegroundPermissionsAsync();
      requestPermission(status === 'granted');
    })();
  });

  useEffect(() => {
    (async () => {
      let { status } = await Location.requestForegroundPermissionsAsync();
      if (status !== 'granted') {
        console.log('Permission to access location was denied');
      }

      let location = await Location.getCurrentPositionAsync({});
      const coords = {
        latitude: location.coords.latitude,
        longitude: location.coords.longitude,
      };

      // console.log(coords.latitude, coords.longitude);
      setLocation(coords);
    })();
  }, []);

  const takePhoto = async () => {
    const photo = await cameraRef.takePictureAsync();
    console.log(photo.uri);

    setPhoto(photo.uri);
  };

  if (!permission) {
    // Camera permissions are still loading.
    return <View />;
  }

  if (!permission.granted) {
    // Camera permissions are not granted yet.
    return (
      <View style={styles.container}>
        <Text style={{ textAlign: 'center' }}>
          Нам потрібен ваш дозвіл, щоб показати камеру
        </Text>
        <Button onPress={requestPermission} title="grant permission" />
      </View>
    );
  }

  const publishPost = () => {
    if (location) {
      navigation.navigate('PostsScreen');

      setPhoto('');
      setName('');
      setCoordinateLocation('');
    }
  };
  const clear = () => {
    setPhoto('');
    setName('');
    setCoordinateLocation('');
  };

  return (
    <View style={styles.container}>
      <View style={styles.contynerCamera}>
        <View style={styles.takePhotoContainer}>
          <CameraView style={styles.camera} ref={setCameraRef}>
            {photo ? (
              <TouchableOpacity style={styles.imageContainerOpacity}>
                <MaterialIcons name="camera-alt" size={24} color="white" />
                {/* <Image
                  source={require("../../assets/camera_alt-black.png")}
                  size={24}

                  // zIndex="1"
                /> */}
              </TouchableOpacity>
            ) : (
              <TouchableOpacity
                onPress={takePhoto}
                style={styles.imageContainer}
              >
                <MaterialIcons name="camera-alt" size={24} color="#BDBDBD" />
                {/* <Image
                  source={require("../../assets/camera_alt-black.png")}
                  size={24}
                  color="#BDBDBD"
                  // zIndex="1"
                /> */}
              </TouchableOpacity>
            )}
            {/* <TouchableOpacity onPress={takePhoto} style={styles.imageContainer}>
              <Image
                source={require("../../assets/camera_alt-black.png")}
                size={24}
                color="#BDBDBD"
                zIndex="1"
              />
            </TouchableOpacity> */}
            {photo && (
              <View style={styles.addImage}>
                <Image
                  source={{ uri: photo }}
                  style={{ height: 240, width: 343 }}
                />
              </View>
            )}
          </CameraView>
        </View>
        <View style={styles.addPhoto}>
          <Text
            style={{
              color: '#BDBDBD',
            }}
          >
            Завантажте фото
          </Text>
        </View>
      </View>
      <View style={styles.containerInput}>
        <KeyboardAvoidingView
          behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
        >
          <TextInput
            style={styles.input}
            placeholder="Назва..."
            value={name}
            onChange={setName}
          />
          <View
            style={{
              flexDirection: 'row',
              alignItems: 'center',

              // justifyContent: "center",
              // paddingTop: 20,
            }}
          >
            <TextInput
              style={[{ paddingLeft: 30, alignItems: 'center' }, styles.input]}
              placeholder="Місцевість"
              value={coordinateLocation}
              onChange={setCoordinateLocation}
            />
            <Feather
              name="map-pin"
              size={24}
              color="#BDBDBD"
              style={{
                position: 'absolute',
                top: 10,
                left: 0,

                // alignItems: "center",
                // justifyContent: "center",
                // height: 24,
              }}
            />
          </View>

          {photo ? (
            <TouchableOpacity style={styles.buttonActiv} onPress={publishPost}>
              <Text style={styles.buttonTitleActiv}>Опубліковати</Text>
            </TouchableOpacity>
          ) : (
            <TouchableOpacity style={styles.button}>
              <Text style={styles.buttonTitle}>Опубліковати</Text>
            </TouchableOpacity>
          )}
        </KeyboardAvoidingView>
      </View>
      <View style={styles.trashContainer}>
        <TouchableOpacity onPress={clear} style={styles.trash}>
          <Feather name="trash-2" size={24} color="#BDBDBD" />
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    // marginHorizontal: "auto",
    paddingHorizontal: 20,
    alignItems: 'center',
    justifyContent: 'center',
  },
  contynerCamera: {
    flex: 1,
    marginHorizontal: 'auto',
    alignItems: 'center',
    position: 'absolute',
    top: 28,
    bottom: 0,
    height: 267,
    // flex: 1,
    // width: "100%",
    // height: "100%",
  },
  takePhotoContainer: {
    // flex: 1,
    // margin: "auto",
    // alignItems: "center",
    // position: "absolute",
    // top: 28,
    backgroundColor: '#E8E8E8',
    borderWidth: 1,
    borderColor: '#E8E8E8',
    borderRadius: 8,
    width: 343,
    height: 240,
    justifyContent: 'center',
    overflow: 'hidden',
  },
  imageContainer: {
    width: 60,
    height: 60,
    borderRadius: 50,
    backgroundColor: '#fff',

    // // marginHorizontal: "auto",
    // // paddingHorizontal: 20,
    alignItems: 'center',
    justifyContent: 'center',
    // position: "absolute",
    // top: "50%",
    // left: "50%",
    // transform: [{ translateX: -30 }, { translateY: -30 }],
    // zIndex: 1,
  },
  imageContainerOpacity: {
    width: 60,
    height: 60,
    borderRadius: 50,
    backgroundColor: '#fff',

    // // marginHorizontal: "auto",
    // // paddingHorizontal: 20,
    alignItems: 'center',
    justifyContent: 'center',
    opacity: 0.3,
    // position: "absolute",
    // top: "50%",
    // left: "50%",
    // transform: [{ translateX: -30 }, { translateY: -30 }],
  },

  camera: {
    height: '100%',
    width: '100%',
    marginBottom: 0,
    // flex: 1,

    alignItems: 'center',
    justifyContent: 'center',
    position: 'absolute',
  },
  snap: {
    color: '#fff',
  },
  snapContainer: {
    borderWidth: 1,
    borderColor: '#ff0000',
    width: 70,
    height: 70,
    borderRadius: 50,
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 20,
  },
  addImage: {
    position: 'absolute',
  },
  addPhoto: {
    width: '100%',
  },
  containerInput: {
    // flex: 1,
    // backgroundColor: "#fff",
    alignItems: 'center',

    marginTop: 180,

    // paddingBottom: 30,
  },
  input: {
    width: 343,
    height: 50,
    // padding: 10,
    // borderRadius: 8,
    // backgroundColor: "#E8E8E8",
    marginBottom: 15,
    borderBottomWidth: 1,
    borderBottomColor: '#E8E8E8',
  },
  button: {
    backgroundColor: '#F6F6F6',
    height: 50,
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 50,
    width: 343,
    marginTop: 17,
  },
  buttonTitle: {
    color: '#BDBDBD',
    // fontFamily: "Roboto-Regular",
    fontSize: 16,

    textAlign: 'center',
    // backgroundColor: "transparent",
  },
  buttonActiv: {
    backgroundColor: '#FF6C00',
    height: 50,
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 50,
    width: 343,
    marginTop: 17,
  },
  buttonTitleActiv: {
    color: '#fff',
    // fontFamily: "Roboto-Regular",
    fontSize: 16,

    textAlign: 'center',
    // backgroundColor: "transparent",
  },
  trash: {
    width: 70,
    height: 40,
    borderRadius: 20,
    backgroundColor: '#F6F6F6',
    alignItems: 'center',
    justifyContent: 'center',
  },
  trashContainer: {
    top: 110,
  },
});
