var React = require('react');
var {
  View,
  Platform,
  DatePickerIOS,
  PixelRatio
} = require('react-native')

var WidgetMixin = require('../mixins/WidgetMixin.js');
import DatePicker from 'react-native-datepicker'

module.exports = React.createClass({
  mixins: [WidgetMixin],

  getDefaultProps() {
    return {
      type: 'DatePickerAndroidWidget',
      getDefaultDate: () => { return new Date(); }
    };
  },

  getInitialState() {
    return {
      value: new Date(),
    };
  },

  componentDidMount() {
    this._onChange(this.props.getDefaultDate());
  },
  _getDatePicker() {
    if (Platform.OS === 'android') {
      return (
        <DatePicker
          style={this.getStyle('picker')}

          {...this.props}

          onDateChange={this._onChange}
          date={this.state.value}
        />
      );
    } else {
      return (
        <DatePickerIOS
          style={this.getStyle('picker')}

          {...this.props}

          onDateChange={this._onChange}
          date={this.state.value}
        />
      );
    }
  },
  render() {

    return (
      <View style={[this.props.style, this.getStyle('row')]}>
        {this._getDatePicker()}
      </View>
    );
  },

  defaultStyles: {
    row: {
      backgroundColor: '#FFF',
      borderBottomWidth: 1 / PixelRatio.get(),
      borderColor: '#c8c7cc',
    },
    picker: {
    },
  },

});
