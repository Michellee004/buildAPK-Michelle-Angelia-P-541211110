import React, {useState} from 'react';

import { 
  View, 
  ScrollView,
  Text, 
  StyleSheet, 
  Image,
  Pressable,
  Linking } from 'react-native';

// You can import supported modules from npm
import { Card } from 'react-native-paper';

// or any files within the Snack
import AssetExample from './components/AssetExample';

export default function App() {
    const handlePressProject1 = () => {
      Linking.openURL('https://www.figma.com/file/5GsgmwUc9MN6I88SzYYT9L/DIET-YUK?type=design&node-id=47%3A36&mode=design&t=3n1RASH1m8QYvFBF-1');
    };
    const handlePressProject2 = () => {
      Linking.openURL('https://drive.google.com/drive/folders/1OP7v7cM_JKkXaAvqnV8Kicsyn-0ZZZGm?usp=sharing');
    };
  const [like1, setLike1] = useState(0);
  const [like2, setLike2] = useState(0);
  return(
  <ScrollView>
   <View style={styles.container}>
    <Image
    source={require('./assets/6eeaa5a1-8c16-46e5-b19c-eaed7822849e-removebg-preview.png')}
    style={styles.profile} />

    <Text style={styles.title}>Michelle Angelia Putri</Text>
    <Text style={styles.paragraph}>
    Saya merupakan siswi SMK Telkom Purwokerto mempunyai ketertarikan di bidang IT terutama pada bagian UI/UX Designer.
    </Text>

    <Pressable style={({pressed}) => [styles.btnLogin, {backgroundColor: pressed ? '#DDDDDD' : '#000000'}]} >
        <Text style={styles.btntext}>Contact Me</Text>
    </Pressable>
    <View style={{maxWidth:'100%'}}>
      <Text style={styles.title}>My Project</Text>

      <Image
      source={require('./assets/aaaa.png')}
      style={styles.project2}
      />
      
      <Text style={styles.projectTitle}>Diet Mobile App</Text>
      <Text style={styles.projectCat}>UI/UX Design</Text>
      <Text style={[styles.projectCat,{marginTop: 10}]}>View on:</Text>
      <Pressable
      style={({pressed}) => [styles.btnProject, {backgroundColor: pressed ? '#DDDDDD' : '#000000'}]}
      onPress={handlePressProject1}> 
        <Image 
        source={require('./assets/figma.webp')}
        style={{width: 16, height: 16}}/>
        <Text style={{color: '#ffffff'}}>Figma</Text>
      </Pressable>

      <Text style={{borderColor: 'black'}}></Text>

      <View style={{flexDirection:'row'}}>
      <Text>like : {like1}</Text>

      <Pressable onPress={()=>setLike1(like1+1)}>
      <Image source={require('./assets/thumb_up_FILL0_wght400_GRAD0_opsz24.png')} 
      style={{ width: 25, height: 25, marginLeft: -40, marginTop: -25, marginBottom: 30}}/>
      </Pressable>
      <Pressable onPress={()=>setLike1(like1-1)}>
      <Image source={require('./assets/thumb_down_FILL0_wght400_GRAD0_opsz24.png')} 
      style={{ width: 25, height: 25, marginLeft: -10, marginTop: -25}}/>
      </Pressable>
      </View>
      
      <Image
      source={require('./assets/Project2.png')}
      style={styles.project}
      />
      
      <Text style={styles.projectTitle}>Magical Forest</Text>
      <Text style={styles.projectCat}>Photoshop Design</Text>
      <Text style={[styles.projectCat,{marginTop: 10}]}>View on:</Text>
      <Pressable
      style={({pressed}) => [styles.btnProject, {backgroundColor: pressed ? '#DDDDDD' : '#000000'}]}
      onPress={handlePressProject2}> 
        <Image 
        source={require('./assets/Drive.png')}
        style={{width: 16, height: 16}}/>
        <Text style={{color: '#ffffff'}}>Drive</Text>
      </Pressable>
    </View>
    <View style={{flexDirection:'row'}}>
      <Text>like : {like2}</Text>

      <Pressable onPress={()=>setLike2(like2+1)}>
      <Image source={require('./assets/thumb_up_FILL0_wght400_GRAD0_opsz24.png')} 
      style={{ width: 25, height: 25, marginLeft: -40, marginTop: -25, marginBottom: 30}}/>
      </Pressable>
      <Pressable onPress={()=>setLike2(like2-1)}>
      <Image source={require('./assets/thumb_down_FILL0_wght400_GRAD0_opsz24.png')} 
      style={{ width: 25, height: 25, marginLeft: -10, marginTop: -25}}/>
      </Pressable>
      </View>
      </View>
  </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 24,
    backgroundColor: '#FFE4C4', 
    alignItems: 'center',
  },
  title: {
    marginTop: 20,
    paddingVertical: 8,
    color: 'black',
    textAlign: 'center',
    fontSize: 30,
    fontWeight: 'bold',
  },
  paragraph: {
    fontSize: 14,
    margin: 10,
    color: 'grey',
    textAlign: 'center',
    justifyContent: 'center',
  },
  profile: {
    width: 156,
    height: 156,
    marginTop: 50,
    borderRadius: 10,
    marginLeft: '28%'
  },
  btnLogin: {
    flexDirection: 'row',
    marginBottom: 10,
    alignItems: 'center',
    justifyContent: 'center',
    paddingVertical: 12,
    paddingHorizontal: 32,
    borderRadius: 10,
    elevation: 3,
    backgroundColor: '#2F3540',
  },
  btntext: {
    fontSize: 16,
    lineHeight: 21,
    fontWeight: 'bold',
    letterSpacing: 0.25,
    color: 'white',
  },
  project: {
    maxWidth: 300,
    maxHeight: 200,
    marginTop: 10,
    marginBottom: 10,
    borderRadius: 4,
  },
    project2: {
    maxWidth: 300,
    maxHeight: 215,
    marginTop: 10,
    marginBottom: 10,
    borderRadius: 5,
  },
  projectTitle: {
    fontWeight: 'bold',
    textAlign: 'left',
    fontSize: 18,
  },
  projectCat: {

  },
  btnProject: {
    flexDirection: 'row',
    marginTop: 10,
    marginBottom: 40,
    alignItems: 'center',
    justifyContent: 'center',
    paddingVertical: 12,
    borderRadius: 10,
    elevation: 3,
    backgroundColor: 'black',
  },
});