import React, {Component} from 'react';
import { TouchableOpacity,ScrollView, StyleSheet, View,Alert,  SectionList, Text } from 'react-native';
import { ExpoLinksView } from '@expo/samples';

class LinksScreen extends Component {
  constructor(props){
    super(props);
    //this.state = this.getInitialState();
  }


  GetSectionListItem = (item) => {
    this.props.navigation.navigate('Details' , {name: item} )
  }

  render() {
    const {navigate} = this.props.navigation;

    var A = [
      { id: '1', value: 'Alevin', Contact: +11-9782741520},
      { id: '2', value: 'Ameen', Contact: +11-9782741520 },
      { id: '3', value: 'Alexa', Contact: +11-9782741520 },
    ];
    var B = [
      { id: '4', value: 'Benin', Contact: +11-9782741520 },
      { id: '5', value: 'Bhushan', Contact: +11-9782741520 },
      { id: '6', value: 'Bosnia', Contact: +11-9782741520 },
      { id: '7', value: 'Bowat', Contact: +11-9782741520 },
      { id: '8', value: 'Bruno', Contact: +11-9782741520 },
      { id: '9', value: 'Benils', Contact: +11-9782741520 },
      { id: '10', value: 'Beckham', Contact: +11-9782741520 },
    ];
    var C = [
      { id: '11', value: 'Cleien', Contact: +11-9782741520 },
      { id: '12', value: 'Colon', Contact: +11-9782741520 },
      { id: '13', value: 'Can', Contact: +11-9782741520 },
      { id: '14', value: 'Cab', Contact: +11-9782741520 },
    ];

    return (
      <View style={styles.container}>
        <SectionList
          sections={[
            { title: 'Section Head For Data A', data: A },
            { title: 'Section Head For Data B', data: B },
            { title: 'Section Head For Data C', data: C },
          ]}
          renderSectionHeader={({section}) => <Text style={styles.sectionHeader}>{section.title}</Text>}
          renderItem={({ item }) => (
            // Single Comes here which will be repeatative for the FlatListItems
            <Text
              style={styles.item}
              //Item Separator View
              onPress={this.GetSectionListItem.bind(this, 
                     item)}>
              {item.value}
            </Text>
          )}          
          keyExtractor={(item, index) => index}
        />
      </View>     
    )
  }
}

export default LinksScreen;

const styles = StyleSheet.create({
  container: {
   flex: 1,
   paddingTop: 22
  },
  sectionHeader: {
    paddingTop: 2,
    paddingLeft: 10,
    paddingRight: 10,
    paddingBottom: 2,
    fontSize: 14,
    fontWeight: 'bold',
    backgroundColor: '#f2f2f2',
  },
  item: {
    padding: 10,
    fontSize: 20,
    height: 44,
  },
})  
