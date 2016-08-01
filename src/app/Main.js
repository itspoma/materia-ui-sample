import React from 'react';
import {deepOrange500} from 'material-ui/styles/colors';
import getMuiTheme from 'material-ui/styles/getMuiTheme';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import DatePickerExampleSimple from './DatePickerExampleSimple';
import AppBar from 'material-ui/AppBar';
import TextField from 'material-ui/TextField';

const styles = {
  appBar: {
    display: 'flex'
  }
}

const muiTheme = getMuiTheme({
  palette: {
    accent1Color: deepOrange500,
  },
});

class Main extends React.Component {
  render() {
    return (
      <MuiThemeProvider muiTheme={muiTheme}>
        <div>
          <AppBar title="My AppBar" style={styles.appBar} />
          <DatePickerExampleSimple />

          <TextField
            hintText="Hint Text"
            floatingLabelText="Floating Label Text"
          />
        </div>
      </MuiThemeProvider>
    );
  }
}

export default Main;