import React, {useState} from 'react';
import {
  StyleSheet,
  View,
  Text,
  TouchableOpacity,
  TextInput,
  Image,
} from 'react-native';
import {ScrollView} from 'react-native-gesture-handler';
import CalendarPicker from 'react-native-calendar-picker';
import Icon from 'react-native-vector-icons/FontAwesome6';
import AntDesign from 'react-native-vector-icons/AntDesign';

const Calendar = () => {
  const [text, setText] = useState('');
  const [title, setTitle] = useState('');
  const [selectedDuration, setSelectedDuration] = useState('Option 1');
  const colors = [
    '#A68BF2',
    '#8BBAF2',
    '#F28B8B',
    '#8BF28F',
    '#F28BE2',
    '#8BD9F2',
  ];
  const [selectedColor, setSelectedColor] = useState(null);
  const options = ['2 days', '7 days', '15 days'];

  const peoples = [
    'ArleneMcCoy',
    'CameronWilliamson',
    'CourtneyHenry',
    'DarleneRobertson',
    'MarvinMcKinney',
    'RobertFox',
    'SavannahNguyen',
    'TheresaWebb',
  ];
  const [selectedFriend, setSelectedFriend] = useState(peoples[0]);

  const customDayHeaderStylesCallback = ({dayOfWeek}) => {
    return {
      style: {
        borderRadius: 12,
      },
      textStyle: {
        color: '#222222',
        fontSize: 12,
      },
    };
  };

  const handleTextChange = newText => {
    setText(newText);
  };

  const handleTitleChange = newText => {
    setTitle(newText);
  };

  const changeName = name => {
    let newName = '';
    for (let i = 0; i < name.length; i++) {
      if (i > 0 && name[i] === name[i].toUpperCase()) {
        newName = newName + ' ' + name[i];
      } else {
        newName += name[i];
      }
    }
    return newName;
  };

  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [isDropdownOpen2, setIsDropdownOpen2] = useState(false);
  const [selectedOption, setSelectedOption] = useState(options[0]);

  const toggleDropdown = () => {
    setIsDropdownOpen(!isDropdownOpen);
  };

  const toggleDropdown2 = () => {
    setIsDropdownOpen2(!isDropdownOpen2);
  };

  const handleOptionSelected = option => {
    setSelectedOption(option);
    setIsDropdownOpen(false);
  };

  const handleColorSelect = color => {
    setSelectedColor(color);
  };

  return (
    <ScrollView style={styles.container}>
      <View style={styles.section}>
        <Text style={styles.text}>Title</Text>
        <TextInput
          style={styles.input}
          onChangeText={handleTitleChange}
          value={title}
          placeholder="Event title"
        />
      </View>
      <View style={styles.section}>
        <Text style={styles.text}>Description</Text>
        <TextInput
          style={styles.input}
          onChangeText={handleTextChange}
          value={text}
          placeholder="Event description"
          multiline={true}
          numberOfLines={4}
          textAlignVertical="top"
        />
      </View>
      <View style={styles.section}>
        <Text style={styles.text}>Color</Text>
        <View style={styles.colorContainer}>
          {colors.map(color => (
            <TouchableOpacity
              key={color}
              style={[styles.colorBox, {backgroundColor: color}]}
              onPress={() => handleColorSelect(color)}>
              {selectedColor === color && (
                <Icon
                  name="check"
                  size={24} // Set the icon size
                  color="#FFF"
                />
              )}
            </TouchableOpacity>
          ))}
        </View>
      </View>
      <View style={styles.section}>
        <Text style={styles.text}>Date</Text>
        <CalendarPicker
          style={styles.calendar}
          startFromMonday={true}
          allowRangeSelection={true}
          todayBackgroundColor="#f2e6ff"
          selectedDayColor="#7300e6"
          selectedDayTextColor="#FFFFFF"
          dayOfWeekStyles={{borderBottomColor: 'red'}}
          previousComponent={
            <Icon name="chevron-left" size={20} color="#000" marginLeft={30} />
          }
          nextComponent={
            <Icon
              name="chevron-right"
              size={20}
              color="#000"
              marginRight={30}
            />
          }
          customStyles={{
            container: {
              backgroundColor: '#FBFBFB', // Set your desired background color here
            },
            day: {
              fontSize: 16,
              textAlign: 'center',
            },
            weekdays: {
              borderBottomColor: 'red', // Hide the border between the weekdays and the dates
            },
            headerWrapper: {
              borderBottomWidth: 0, // Hide the border of the header
            },
          }}
          customDayHeaderStyles={customDayHeaderStylesCallback}
        />
      </View>
      <View style={styles.section}>
        <Text style={styles.text}>Duration</Text>
        <TouchableOpacity
          style={styles.dropdownButton}
          onPress={toggleDropdown}>
          <Text style={styles.dropdownText}>{selectedOption}</Text>
          <Text style={styles.dropdownIcon}>
            {isDropdownOpen ? (
              <Icon name="chevron-up" size={18} color="#222" />
            ) : (
              <Icon name="chevron-down" size={18} color="#222" />
            )}
          </Text>
        </TouchableOpacity>
        {isDropdownOpen && (
          <View style={styles.dropdownMenu}>
            {options.map((option, index) => (
              <TouchableOpacity
                key={index}
                style={styles.dropdownOption}
                onPress={() => handleOptionSelected(option)}>
                <Text style={styles.dropdownOptionText}>{option}</Text>
              </TouchableOpacity>
            ))}
          </View>
        )}
      </View>
      <View style={styles.section}>
        <Text style={styles.text}>Person</Text>
        <TouchableOpacity
          style={styles.dropdownButton}
          onPress={toggleDropdown2}>
          <View style={styles.friend}>
            <Image
              source={require('../assets/images/friends/RobertFox.png')}
              style={styles.logo}
            />
            <Text style={styles.dropdownText}>
              {changeName(selectedFriend)}
            </Text>
          </View>
          <Text style={styles.dropdownIcon}>
            {isDropdownOpen2 ? (
              <Icon name="chevron-up" size={18} color="#222" />
            ) : (
              <Icon name="chevron-down" size={18} color="#222" />
            )}
          </Text>
        </TouchableOpacity>
        {isDropdownOpen2 && (
          <View style={styles.dropdownMenu}>
            {options.map((option, index) => (
              <TouchableOpacity
                key={index}
                style={styles.dropdownOption}
                onPress={() => handleOptionSelected(option)}>
                <Text style={styles.dropdownOptionText}>{option}</Text>
              </TouchableOpacity>
            ))}
          </View>
        )}
      </View>
      <View style={styles.section}>
        <TouchableOpacity style={styles.button1}>
          <AntDesign
            name="plus"
            size={20}
            color={'#FFF'}
            style={{marginRight: 10}}></AntDesign>
          <Text style={styles.buttonText}>Add Event</Text>
        </TouchableOpacity>
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#FBFBFB',
    padding: 20,
    minHeight: '100vh',
  },
  section: {
    display: 'flex',
    flexDirection: 'column',
    width: '100%',
    marginBottom: 20,
  },
  text: {
    color: '#222',
    fontFamily: 'DM Sans',
    fontSize: 16,
    fontWeight: '500',
    marginBottom: 16,
    lineHeight: 20,
  },
  input: {
    backgroundColor: '#F5F5F5',
    fontFamily: 'DM Sans',
    fontSize: 14,
    lineHeight: 18,
    color: '#222',
    borderRadius: 12,
    borderWidth: 1,
    borderColor: '#EEEEEE',
    paddingLeft: 20,
  },
  dropdownButton: {
    color: '#222',
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingTop: 12,
    paddingRight: 16,
    paddingBottom: 12,
    paddingLeft: 16,
    borderBottomColor: '#EEEEEE',
    borderTopWidth: 0,
    borderRightWidth: 0,
    borderBottomWidth: 2,
    borderLeftWidth: 0,
    borderRadius: 12,
    backgroundColor: '#ffffff',
    height: 48,
  },
  dropdownText: {
    color: '#222',
    fontFamily: 'DM Sans',
    fontSize: 18,
    fontWeight: '500',
    lineHeight: 20,
  },
  button1: {
    backgroundColor: '#007AFF',
    paddingTop: 12,
    paddingRight: 16,
    paddingBottom: 12,
    paddingLeft: 16,
    borderRadius: 12,
    alignItems: 'center',
    marginBottom: 20,
    flexDirection: 'row',
    justifyContent: 'center',
  },
  buttonText: {
    color: '#ffffff',
    fontFamily: 'DM Sans',
    fontSize: 16,
    fontWeight: '500',
    lineHeight: 20,
  },
  dropdownMenu: {
    paddingRight: 20,
    paddingLeft: 20,
    borderRadius: 12,
    backgroundColor: '#FFFFFF',
    borderBottomColor: '#EEEEEE',
    borderTopWidth: 0,
    borderRightWidth: 0,
    borderBottomWidth: 2,
    borderLeftWidth: 0,
  },
  dropdownOptionText: {
    color: '#222',
    fontFamily: 'DM Sans',
    fontSize: 18,
    fontWeight: '500',
    lineHeight: 20,
    marginTop: 10,
    marginBottom: 10,
  },
  colorBox: {
    width: 40,
    height: 40,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 20,
  },
  colorContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    padding: 8,
  },
  logo: {
    color: '#FFFFFF',
    fontSize: 24,
  },
  friend: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  logo: {
    width: 32,
    height: 32,
    marginRight: 8,
  },
  calendar: {
    backgroundColor: 'red',
  },
});

export default Calendar;
