import React from 'react';
import {
  Image,
  SafeAreaView,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from 'react-native';

export default function App() {
  return (
    <SafeAreaView style={styles.main}>
      <View style={styles.header}>
        <Image source={require('./src/assets/logo.png')} />
      </View>

      <View style={styles.addTaskContainer}>
        <TextInput
          style={styles.input}
          placeholder="Adicione uma nova tarefa"
          placeholderTextColor="#555"
          // onChangeText={() => 0}
          // value={''}
        />

        <TouchableOpacity style={styles.button} activeOpacity={0.8}>
          <Image style={styles.img} source={require('./src/assets/plus.png')} />
        </TouchableOpacity>
      </View>

      <View style={styles.containerInfo}>
        <View style={styles.wrapperInfo}>
          <View style={styles.wrapperStatus}>
            <Text style={[styles.info, styles.infoCreated]}>Criadas</Text>
            <Text style={styles.counter}>0</Text>
          </View>
          <View style={styles.wrapperStatus}>
            <Text style={[styles.info, styles.infoDone]}>Concluídas</Text>
            <Text style={styles.counter}>0</Text>
          </View>
        </View>
      </View>

      <View style={styles.containerEmpty}>
        <View style={styles.empty}>
          <Image
            style={styles.clipboard}
            source={require('./src/assets/clipboard.png')}
          />
          <Text style={[styles.emptyText, styles.emptyTitle]}>
            Você ainda não tem tarefas cadastradas
          </Text>
          <Text style={[styles.emptyText, styles.emptySubTitle]}>
            Crie tarefas e organize seus itens a fazer
          </Text>
        </View>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  main: {
    backgroundColor: '#1A1A1A',
    flex: 1,
  },
  header: {
    backgroundColor: '#0D0D0D',
    height: 173,
    alignItems: 'center',
    justifyContent: 'center',
  },
  addTaskContainer: {
    alignItems: 'center',
    justifyContent: 'center',
    flexDirection: 'row',
    marginTop: -27,
  },
  input: {
    padding: 16,
    backgroundColor: '#262626',
    border: '1px solid #0D0D0D',
    color: '#F2F2F2',
    lineHeight: 22.4,
    fontWeight: '400',
    fontSize: 16,
    borderRadius: 6,
    width: 271,
    height: 54,
    fontFamily: 'Inter',
  },
  button: {
    backgroundColor: '#1E6F9F',
    padding: 18,
    borderRadius: 6,
    width: 54,
    height: 54,
    marginLeft: 8,
    alignItems: 'center',
    justifyContent: 'center',
  },
  img: {width: 16, height: 16},
  containerInfo: {
    alignItems: 'center',
  },
  wrapperInfo: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: 327,
    marginTop: 32,
  },
  wrapperStatus: {flexDirection: 'row'},
  info: {fontFamily: 'Inter', fontWeight: '700', fontSize: 14, lineHeight: 17},
  infoCreated: {
    color: '#4EA8DE',
    marginRight: 8,
  },
  infoDone: {color: '#8284FA', marginRight: 8},
  counter: {
    paddingHorizontal: 8,
    paddingVertical: 2,
    backgroundColor: '#333333',
    borderRadius: 999,
    color: '#D9D9D9',
    fontSize: 12,
    fontWeight: '700',
    fontFamily: 'Inter',
    lineHeight: 15,
  },
  containerEmpty: {
    alignItems: 'center',
    marginTop: 20,
  },
  empty: {
    borderTopColor: '#333333',
    borderTopWidth: 1,
    width: 327,
    height: 208,
    alignItems: 'center',
  },
  emptyText: {
    fontFamily: 'Inter',
    fontSize: 14,
    color: '#808080',
    lineHeight: 19.6,
  },
  emptyTitle: {fontWeight: '700', marginTop: 16},
  emptySubTitle: {fontWeight: '400'},
  clipboard: {width: 56, height: 56, marginTop: 48},
});

// /**
//  * Sample React Native App
//  * https://github.com/facebook/react-native
//  *
//  * Generated with the TypeScript template
//  * https://github.com/react-native-community/react-native-template-typescript
//  *
//  * @format
//  */

// import React, {type PropsWithChildren} from 'react';
// import {
//   SafeAreaView,
//   ScrollView,
//   StatusBar,
//   StyleSheet,
//   Text,
//   useColorScheme,
//   View,
// } from 'react-native';

// import {
//   Colors,
//   DebugInstructions,
//   Header,
//   LearnMoreLinks,
//   ReloadInstructions,
// } from 'react-native/Libraries/NewAppScreen';

// const Section: React.FC<
//   PropsWithChildren<{
//     title: string;
//   }>
// > = ({children, title}) => {
//   const isDarkMode = useColorScheme() === 'dark';
//   return (
//     <View style={styles.sectionContainer}>
//       <Text
//         style={[
//           styles.sectionTitle,
//           {
//             color: isDarkMode ? Colors.white : Colors.black,
//           },
//         ]}>
//         {title}
//       </Text>
//       <Text
//         style={[
//           styles.sectionDescription,
//           {
//             color: isDarkMode ? Colors.light : Colors.dark,
//           },
//         ]}>
//         {children}
//       </Text>
//     </View>
//   );
// };

// const App = () => {
//   const isDarkMode = useColorScheme() === 'dark';

//   const backgroundStyle = {
//     backgroundColor: isDarkMode ? Colors.darker : Colors.lighter,
//   };

//   return (
//     <SafeAreaView style={backgroundStyle}>
//       <StatusBar barStyle={isDarkMode ? 'light-content' : 'dark-content'} />
//       <ScrollView
//         contentInsetAdjustmentBehavior="automatic"
//         style={backgroundStyle}>
//         <Header />
//         <View
//           style={{
//             backgroundColor: isDarkMode ? Colors.black : Colors.white,
//           }}>
//           <Section title="Step One">
//             Edit <Text style={styles.highlight}>App.tsx</Text> to change this
//             screen and then come back to see your edits.
//           </Section>
//           <Section title="See Your Changes">
//             <ReloadInstructions />
//           </Section>
//           <Section title="Debug">
//             <DebugInstructions />
//           </Section>
//           <Section title="Learn More">
//             Read the docs to discover what to do next:
//           </Section>
//           <LearnMoreLinks />
//         </View>
//       </ScrollView>
//     </SafeAreaView>
//   );
// };

// const styles = StyleSheet.create({
//   sectionContainer: {
//     marginTop: 32,
//     paddingHorizontal: 24,
//   },
//   sectionTitle: {
//     fontSize: 24,
//     fontWeight: '600',
//   },
//   sectionDescription: {
//     marginTop: 8,
//     fontSize: 18,
//     fontWeight: '400',
//   },
//   highlight: {
//     fontWeight: '700',
//   },
// });

// export default App;
