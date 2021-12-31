import React from 'react';
//import i18n from '../../i18n';
import { I18n } from 'react-i18next';
import { getName } from '../../api/names-api';
import { getNameInSession, addNameInSession, hasNameInSession } from '../../session/session';

class NameHeader extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      name: props.name,
      loading: true
    };
  }
  //Load the default name from api on initial load
  componentDidMount() {
    this.getDefaultName();
  }
  //Update the header if the user updates the current name
  componentDidUpdate(prevProps) {
    if (this.props.name !== prevProps.name) {
      const name = this.props.name;
      addNameInSession(name);
      this.setState(() => {
        return { 
          name: name
        }
      });
    }
  }

  async getDefaultName() {
    //Check if we have a saved name already
    if (hasNameInSession()) {
      this.setState(() => {
        return {
          name: getNameInSession(),
          loading: false
        }
      })
    } else {
      const { name } = await getName();
      this.setState(() => {
        return {
          name: name,
          loading: false
        }
      });
    }
  }

  render() {
    return (
    <I18n>
      {t => (
        this.state.loading ? '' : <h1>{t("Name.Header")} {this.state.name}!</h1>
      )}
    </I18n>  
    );
  }
}
export default NameHeader;