import React from "react"
import {
  View,
  Image,
  ImageBackground,
  TouchableOpacity,
  Text,
  Button,
  Switch,
  TextInput,
  StyleSheet
} from "react-native"
import DateTimePicker from "react-native-datepicker"
import Icon from "react-native-vector-icons/FontAwesome"
import Slider from "@react-native-community/slider"
import { CheckBox } from "react-native-elements"
import { SlideMenuIcon } from "../../../navigator/slideMenuIcon"

export default class Blank extends React.Component {
  static navigationOptions = ({ navigation }) => {
    return {
      headerLeft: <SlideMenuIcon navigationProps={navigation} />
    }
  }

  state = { Switch_3: true, TextInput_12: "", TextInput_15: "" }

  render = () => (
    <View>
      <Switch
        trackColor={{ true: "#409EFF", false: "#C0CCDA" }}
        style={styles.Switch_3}
        value={this.state.Switch_3}
        onValueChange={nextChecked => this.setState({ Switch_3: nextChecked })}
      />
      <Image
        source={{
          uri:
            "https://crowdbotics-slack-dev.s3.amazonaws.com/media/project_component_resources/eae4a5191fafae3979ea975d206fcd0b_0bdGYtC.jpg"
        }}
      />
      <TextInput
        placeholder="Sample text input placeholder"
        value={this.state.TextInput_12}
        onChangeText={nextValue => this.setState({ TextInput_12: nextValue })}
      />
      <TextInput
        placeholder="Sample text input placeholder"
        multiline={true}
        value={this.state.TextInput_15}
        onChangeText={nextValue => this.setState({ TextInput_15: nextValue })}
      />
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginHorizontal: 16
  },

  View_1: {},
  Switch_3: { alignSelf: "flex-start" },
  Image_5: {},
  View_1: {},
  Switch_3: { alignSelf: "flex-start" },
  Image_5: {},
  View_1: {},
  Switch_3: { alignSelf: "flex-start" },
  Image_5: {},
  TextInput_12: {},
  TextInput_15: {}
})
