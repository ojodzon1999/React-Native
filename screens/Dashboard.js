import {he} from 'date-fns/locale';
import React, {useState} from 'react';
import {
  View,
  Text,
  Switch,
  Button,
  StyleSheet,
  Image,
  TouchableOpacity,
} from 'react-native';
import Contact from '../components/Contact';
import {ScrollView} from 'react-native-gesture-handler';
import Icon from 'react-native-vector-icons/FontAwesome6';
import AntDesign from 'react-native-vector-icons/AntDesign';

const Data = [
  {
    event: 'Panama Open Air',
    backColor: '#A68BF2',
    iconUrl: require('../assets/images/event/event5.png'),
    date: 'Fr 25 June, 2024.',
    avatarUrl: require('../assets/images/friends/DarleneRobertson.png'),
  },
  {
    event: 'Taylor Swift Concert',
    backColor: '#8BBAF2',
    iconUrl: require('../assets/images/event/event1.png'),
    date: 'Sa 26 June, 2024.',
    avatarUrl: require('../assets/images/friends/ArleneMcCoy.png'),
  },
  {
    event: 'Japan',
    backColor: '#F28B8B',
    iconUrl: require('../assets/images/event/event2.png'),
    date: 'Su 27 June, 2024.',
    avatarUrl: require('../assets/images/friends/CourtneyHenry.png'),
  },
  {
    event: 'Mail Opening',
    backColor: '#8BF28F',
    iconUrl: require('../assets/images/event/event3.png'),
    date: 'Mo 28 June, 2024.',
    avatarUrl: require('../assets/images/friends/TheresaWebb.png'),
  },
  {
    event: 'Football Club',
    backColor: '#F28BE2',
    iconUrl: require('../assets/images/event/event4.png'),
    date: 'Tu 29 June, 2024.',
    avatarUrl: require('../assets/images/friends/DarleneRobertson.png'),
  },
];

const Dashboard = () => {
  return (
    <View style={styles.container}>
      <View style={styles.section}>
        <View style={styles.avatarWrapper}>
          <Image
            style={styles.avatar}
            source={require('../assets/images/friends/Emily.png')}
          />
          <View style={styles.avatarText}>
            <Text style={styles.sm}>Welcome</Text>
            <Text style={styles.md}>Emily Gibbs</Text>
          </View>
        </View>
        <View>
          <TouchableOpacity style={styles.profileAdd}>
            <Image
              style={styles.optionIcon}
              source={require('../assets/images/gadgets/profile-add2x.jpg')}></Image>
          </TouchableOpacity>
        </View>
      </View>
      <View style={styles.options}>
        <Text style={styles.text}>Calendar</Text>
        <TouchableOpacity style={styles.dropdownButton}>
          <View style={styles.option}>
            <Image
              style={(styles.optionIcon, styles.mr)}
              source={require('../assets/images/gadgets/apple_logo.svg.png')}
            />
            <Text style={styles.md}>Apple Calendar</Text>
          </View>
          <View>
            <Image
              style={styles.optionIcon}
              source={require('../assets/images/gadgets/arrow-down.png')}
            />
          </View>
        </TouchableOpacity>
      </View>
      <View style={styles.options}>
        <Text style={styles.text}>Month</Text>
        <View style={styles.dropdownButton}>
          <TouchableOpacity style={styles.option}>
            <Icon name="angle-left" style={styles.arrowIcon}></Icon>
          </TouchableOpacity>
          <TouchableOpacity style={styles.calendarWrapper}>
            <AntDesign name="calendar" style={styles.calendar}></AntDesign>
            <Text style={styles.md}>June 2024</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.option}>
            <Icon name="angle-right" style={styles.arrowIcon}></Icon>
          </TouchableOpacity>
        </View>
      </View>
      <ScrollView style={styles.contactView}>
        <Text style={styles.text}>Events</Text>
        <View>
          <Text style={styles.evenTitle}>This Week</Text>
          {Data.slice(0, 3).map((item, index) => (
            <Contact
              key={index}
              event={item.event}
              backColor={item.backColor}
              iconUrl={item.iconUrl}
              date={item.date}
              avatarUrl={item.avatarUrl}
            />
          ))}
        </View>
        <View>
          <Text style={styles.evenTitle}>Next Week</Text>

          {Data.slice(3, 5).map((item, index) => (
            <Contact
              key={index}
              event={item.event}
              backColor={item.backColor}
              iconUrl={item.iconUrl}
              date={item.date}
              avatarUrl={item.avatarUrl}
            />
          ))}
        </View>
      </ScrollView>
      <View style={styles.addIcon}>
        <TouchableOpacity style={styles.plus}>
          <Image
            style={styles.optionIcon}
            source={require('../assets/images/gadgets/Vector2.png')}></Image>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 20,
    flex: 1,
    backgroundColor: '#FBFBFB',
  },
  text: {
    color: '#222',
    fontFamily: 'DM Sans',
    fontSize: 16,
    fontWeight: '500',
    marginBottom: 12,
    lineHeight: 20,
  },
  options: {
    display: 'flex',
    flexDirection: 'column',
    width: '100%',
    marginBottom: 8,
  },
  dropdownButton: {
    color: '#222',
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingRight: 16,
    paddingLeft: 16,
    borderBottomColor: '#EEEEEE',
    borderTopWidth: 0,
    borderRightWidth: 0,
    borderBottomWidth: 2,
    borderLeftWidth: 0,
    borderRadius: 12,
    backgroundColor: '#ffffff',
    height: 48,
    marginBottom: 8,
    alignItems: 'center',
  },
  option: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  optionIcon: {
    width: 24,
    height: 24,
  },
  section: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 20,
  },
  avatar: {
    width: 44,
    height: 44,
  },
  avatarWrapper: {
    flexDirection: 'row',
    width: 148,
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  sm: {
    color: '#888888',
    fontFamily: 'DM Sans',
    fontSize: 14,
    fontWeight: '500',
    lineHeight: 18,
  },
  md: {
    color: '#222',
    fontFamily: 'DM Sans',
    fontSize: 16,
    fontWeight: '500',
    lineHeight: 20,
  },
  avatarText: {
    flexDirection: 'column',
    justifyContent: 'space-between',
  },
  mr: {
    marginRight: 12,
  },
  profileAdd: {
    width: 44,
    height: 44,
    borderRadius: 22,
    backgroundColor: '#ffffff',
    justifyContent: 'center',
    alignItems: 'center',
    borderBottomWidth: 2,
    borderBottomColor: '#EEEEEE',
  },
  plus: {
    width: 56,
    height: 56,
    borderRadius: 28,
    backgroundColor: '#222222',
    justifyContent: 'center',
    alignItems: 'center',
  },
  addIcon: {
    position: 'absolute',
    right: 20,
    bottom: 20,
  },
  evenTitle: {
    color: '#888888',
    fontFamily: 'DM Sans',
    fontSize: 14,
    fontWeight: '600',
    lineHeight: 18,
    marginBottom: 12,
  },
  contactView: {
    height: 300,
  },
  arrowIcon: {
    fontSize: 24,
  },

  calendar: {
    fontSize: 24,
    marginRight: 6,
  },
  calendarWrapper: {
    flexDirection: 'row',
    alignItems: 'center',
  },
});

export default Dashboard;
