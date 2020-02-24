/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React from 'react';
import {
  SafeAreaView,
  StyleSheet,
  ScrollView,
  View,
  TouchableOpacity,
  Text,
  StatusBar,
} from 'react-native';
import branch from 'react-native-branch';

import {Header, Colors} from 'react-native/Libraries/NewAppScreen';

const App: () => React$Node = () => {
  return (
    <>
      <StatusBar barStyle="dark-content" />
      <SafeAreaView>
        <ScrollView
          contentInsetAdjustmentBehavior="automatic"
          style={styles.scrollView}>
          <Header />
          {global.HermesInternal == null ? null : (
            <View style={styles.engine}>
              <Text style={styles.footer}>Engine: Hermes</Text>
            </View>
          )}
          <View style={styles.body}>
            <View style={styles.sectionContainer}>
              <Text style={styles.sectionTitle}>Time to test</Text>
              <Text style={styles.sectionDescription}>
                Press the button below to generate a Branch Universal Object,
                and display a link for the object in an Alert window.
              </Text>
            </View>
            <View style={styles.sectionContainer}>
              <TouchableOpacity
                onPress={generateTestLink}
                style={styles.touchable}>
                <View style={styles.button}>
                  <Text style={styles.buttonText}>Go!</Text>
                </View>
              </TouchableOpacity>
            </View>
          </View>
        </ScrollView>
      </SafeAreaView>
    </>
  );
};

const generateTestLink = () => {
  console.log('Generating link');
  const canonicalID = 'test/SOME_TEST_ID1/SOME_TEST_ID2';
  return branch
    .createBranchUniversalObject(canonicalID, {
      locallyIndex: true,
      title: 'Some Test Title',
      contentDescription: 'Check out this neat description!',
      contentImageUrl: 'https://dummyimage.com/600x400/000/fff',
      contentMetadata: {
        customMetaData: {
          pathData: 'some/database/path/needed/by/our/app',
        },
      },
    })
    .then(branchUniversalObject => {
      console.log('BUO Generated');
      const linkProperties = {feature: 'share', channel: 'branchtest'};
      console.log('Generating short URL');
      return branchUniversalObject.generateShortUrl(linkProperties);
    })
    .then(res => {
      console.log('URL Generated.');
      console.log(res.url);
      return res.url;
    })
    .catch(e => {
      console.error(e);
    });
};

const styles = StyleSheet.create({
  scrollView: {
    backgroundColor: Colors.lighter,
  },
  engine: {
    position: 'absolute',
    right: 0,
  },
  body: {
    backgroundColor: Colors.white,
  },
  sectionContainer: {
    marginTop: 32,
    paddingHorizontal: 24,
  },
  sectionTitle: {
    fontSize: 24,
    fontWeight: '600',
    color: Colors.black,
  },
  sectionDescription: {
    marginTop: 8,
    fontSize: 18,
    fontWeight: '400',
    color: Colors.dark,
  },
  footer: {
    color: Colors.dark,
    fontSize: 12,
    fontWeight: '600',
    padding: 4,
    paddingRight: 12,
    textAlign: 'right',
  },
  touchable: {
    flex: 1,
  },
  button: {
    backgroundColor: '#4BC2E2',
    borderRadius: 10,
    padding: 10,
    alignItems: 'center',
    flex: 1,
  },
  buttonText: {
    color: '#FFFFFF',
  },
});

export default App;
