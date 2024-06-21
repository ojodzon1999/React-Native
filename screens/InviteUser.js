import React, {useState} from 'react';
import {
  StyleSheet,
  View,
  Text,
  TouchableOpacity,
  TextInput,
  Image,
} from 'react-native';
import AntDesign from 'react-native-vector-icons/AntDesign';

const InviteUser = () => {
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
  const [selectedOption, setSelectedOption] = useState('Option 1');

  const toggleDropdown = () => {
    setIsDropdownOpen(!isDropdownOpen);
  };

  const handleOptionSelected = option => {
    setSelectedOption(option);
    setIsDropdownOpen(false);
  };

  return (
    <View style={styles.container}>
      <View style={styles.section}>
        <Text style={styles.text}>Invite Via</Text>
        <View style={styles.colorContainer}>
          <TouchableOpacity onPress={() => handleColorSelect(color)}>
            <Image
              source={require('../assets/images/social/Frame23.png')}
              style={styles.social}
            />
          </TouchableOpacity>
          <TouchableOpacity onPress={() => handleColorSelect(color)}>
            <Image
              source={require('../assets/images/social/Frame24.png')}
              style={styles.social}
            />
          </TouchableOpacity>
          <TouchableOpacity onPress={() => handleColorSelect(color)}>
            <Image
              source={require('../assets/images/social/Frame25.png')}
              style={styles.social}
            />
          </TouchableOpacity>
          <TouchableOpacity onPress={() => handleColorSelect(color)}>
            <Image
              source={require('../assets/images/social/Frame26.png')}
              style={styles.social}
            />
          </TouchableOpacity>
          <TouchableOpacity onPress={() => handleColorSelect(color)}>
            <Image
              source={require('../assets/images/social/Frame27.png')}
              style={styles.social}
            />
          </TouchableOpacity>
          <TouchableOpacity onPress={() => handleColorSelect(color)}>
            <Image
              source={require('../assets/images/social/Frame28.png')}
              style={styles.social}
            />
          </TouchableOpacity>
        </View>
      </View>
      <View style={styles.section}>
        <View style={styles.input}>
          <AntDesign name="search1" style={styles.searchIcon}></AntDesign>
          <TextInput
            onChangeText={handleTitleChange}
            value={title}
            placeholder="Find Friends"
          />
        </View>
      </View>
      <View style={styles.section}>
        <TouchableOpacity
          style={styles.dropdownButton}
          onPress={toggleDropdown}>
          <View style={styles.friend}>
            <Image
              source={require('../assets/images/friends/MarvinMcKinney.png')}
              style={styles.logo}
            />
            <Text style={styles.dropdownText}>
              {changeName('MarvinMcKinney')}
            </Text>
          </View>
          <View style={styles.invite}>
            <Image
              style={styles.addPerson}
              source={require('../assets/images/gadgets/profile-add.png')}
            />
            <Text style={styles.sm}>invite</Text>
          </View>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.dropdownButton}
          onPress={toggleDropdown}>
          <View style={styles.friend}>
            <Image
              source={require('../assets/images/friends/TheresaWebb.png')}
              style={styles.logo}
            />
            <Text style={styles.dropdownText}>{changeName('TheresaWebb')}</Text>
          </View>
          <View style={styles.invite}>
            <Image
              style={styles.addPerson}
              source={require('../assets/images/gadgets/profile-add.png')}
            />
            <Text style={styles.sm}>invite</Text>
          </View>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.dropdownButton}
          onPress={toggleDropdown}>
          <View style={styles.friend}>
            <Image
              source={require('../assets/images/friends/RobertFox.png')}
              style={styles.logo}
            />
            <Text style={styles.dropdownText}>{changeName('RobertFox')}</Text>
          </View>
          <View style={styles.invite}>
            <Image
              style={styles.addPerson}
              source={require('../assets/images/gadgets/profile-add.png')}
            />
            <Text style={styles.sm}>invite</Text>
          </View>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.dropdownButton}
          onPress={toggleDropdown}>
          <View style={styles.friend}>
            <Image
              source={require('../assets/images/friends/SavannaNguyen.png')}
              style={styles.logo}
            />
            <Text style={styles.dropdownText}>
              {changeName('SavannaNguyen')}
            </Text>
          </View>
          <View style={styles.invite}>
            <Image
              style={styles.addPerson}
              source={require('../assets/images/gadgets/profile-add.png')}
            />
            <Text style={styles.sm}>invite</Text>
          </View>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.dropdownButton}
          onPress={toggleDropdown}>
          <View style={styles.friend}>
            <Image
              source={require('../assets/images/friends/CourtneyHenry.png')}
              style={styles.logo}
            />
            <Text style={styles.dropdownText}>
              {changeName('CourtneyHenry')}
            </Text>
          </View>
          <View style={styles.invite}>
            <Image
              style={styles.addPerson}
              source={require('../assets/images/gadgets/profile-add.png')}
            />
            <Text style={styles.sm}>invite</Text>
          </View>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.dropdownButton}
          onPress={toggleDropdown}>
          <View style={styles.friend}>
            <Image
              source={require('../assets/images/friends/ArleneMcCoy.png')}
              style={styles.logo}
            />
            <Text style={styles.dropdownText}>{changeName('ArleneMcCoy')}</Text>
          </View>
          <View style={styles.invite}>
            <Image
              style={styles.addPerson}
              source={require('../assets/images/gadgets/profile-add.png')}
            />
            <Text style={styles.sm}>invite</Text>
          </View>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.dropdownButton}
          onPress={toggleDropdown}>
          <View style={styles.friend}>
            <Image
              source={require('../assets/images/friends/DarleneRobertson.png')}
              style={styles.logo}
            />
            <Text style={styles.dropdownText}>
              {changeName('DarleneRobertson')}
            </Text>
          </View>
          <View style={styles.invite}>
            <Image
              style={styles.addPerson}
              source={require('../assets/images/gadgets/profile-add.png')}
            />
            <Text style={styles.sm}>invite</Text>
          </View>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.dropdownButton}
          onPress={toggleDropdown}>
          <View style={styles.friend}>
            <Image
              source={require('../assets/images/friends/CameronWilliamson.png')}
              style={styles.logo}
            />
            <Text style={styles.dropdownText}>
              {changeName('CameronWilliamson')}
            </Text>
          </View>
          <View style={styles.invite}>
            <Image
              style={styles.addPerson}
              source={require('../assets/images/gadgets/profile-add.png')}
            />
            <Text style={styles.sm}>invite</Text>
          </View>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#FBFBFB',
    padding: 20,
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
    paddingLeft: 14,
    flexDirection: 'row',
    alignItems: 'center',
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
    marginBottom: 8,
    alignItems: 'center',
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
    width: 32,
    height: 32,
    marginRight: 12,
  },
  friend: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  social: {
    width: 48,
    height: 48,
    marginRight: 8,
  },
  invite: {
    flexDirection: 'row',
    backgroundColor: '#F5F5F5',
    alignItems: 'center',
    borderRadius: 8,
    paddingTop: 4,
    paddingRight: 8,
    paddingBottom: 4,
    paddingLeft: 8,
    height: 28,
  },
  sm: {
    color: '#222',
    fontFamily: 'DM Sans',
    fontSize: 12,
    fontWeight: '500',
    lineHeight: 16,
  },
  addPerson: {
    width: 20,
    height: 20,
    marginRight: 4,
  },
  search: {
    height: 24,
    width: 24,
  },
  searchIcon: {
    fontSize: 24,
    marginRight: 4,
  },
});

export default InviteUser;
