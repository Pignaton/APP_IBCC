import React from 'react';
import { View} from 'react-native';
import AwesomeAlert from 'react-native-awesome-alerts';
export default class App extends React.Component {

  constructor(props) {
    super(props);
    this.state = { showAlert: true };
  }

  showAlert = () => {
    this.setState({
      showAlert: true,
    });
  };

  hideAlert = () => {
    this.setState({
      showAlert: false,
    });
  };

  render() {
    const { showAlert } = this.state;

    return (
      <View>
        <AwesomeAlert
          show={showAlert}
          showProgress={false}
          title="Ops, problema"
          message="Esse CEP não foi encontrado!"
          closeOnTouchOutside={true}
          closeOnHardwareBackPress={false}
          showConfirmButton={true}
          confirmText="Beleza"
          confirmButtonColor="#DD6B55"
          onConfirmPressed={() => {
            this.hideAlert();
          }}
        />
      </View>
    );
  }
}
