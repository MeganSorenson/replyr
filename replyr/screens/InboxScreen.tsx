import { StyleSheet } from 'react-native';

import EditScreenInfo from '../components/EditScreenInfo';
import { Text, View } from '../components/Themed';
import { RootTabScreenProps } from '../types';

import { Button, Header } from '@rneui/themed';

import InboxEmailEntry from '../components/InboxEmailEntry';

const sampleEmailData = [
  {
    id: 1,
    title: 'Hello World',
    body: 'This is a sample email',
    sender: 'John Doe',
    date: '2020-01-01',
  },
  {
    id: 2,
    title: 'Hello World',
    body: 'This is a sample email',
    sender: 'John Doe',
    date: '2020-01-01',
  },
  {
    id: 3,
    title: 'Hello World',
    body: 'This is a sample email',
    sender: 'John Doe',
    date: '2020-01-01',
  }
]


export default function InboxScreen({ navigation }: RootTabScreenProps<'TabOne'>) {
  return (
    <View style={styles.container}>
      <Header
        backgroundColor="#5f9ea0"
        placement="center"
        centerComponent={{ text: 'Inbox', style: styles.heading }}
      // FOR SOME REASON, WHEN THIS IS UNCOMMENTED THE HEADER TEXT DISAPPEARED
      // containerStyle={styles.header}
      />

      <Button>Test</Button>
      <View style={styles.separator} lightColor="#eee" darkColor="rgba(255,255,255,0.2)" />
      {sampleEmailData.map((email) =>
        <InboxEmailEntry key={email.id} email={email} />
      )}

      <EditScreenInfo path="/screens/IndexScreen.tsx" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center'
  },
  title: {
    fontSize: 40,
    fontWeight: 'bold',
  },
  separator: {
    marginVertical: 30,
    height: 1,
    width: '80%',
  },
  heading: {
    fontSize: 40,
    color: "#fff"
  },
  header: {
    height: 60
  }
});
