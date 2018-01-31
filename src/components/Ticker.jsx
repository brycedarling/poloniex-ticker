import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import reduxAutobahn from 'redux-autobahn-js';

const isConnected = props => {
  return props.autobahn.connection.isConnected;
};

const isSubscribed = (props, topic) => {
  return props.autobahn.subscriptions.filter(s => s.topic === topic).length > 0;
};

class Ticker extends Component {
  componentWillMount() {
    console.log('open connection');
    this.props.actions.openConnection();
  }

  componentWillReceiveProps(newProps) {
    if (this.isNewConnection(newProps)) {
      console.log('connected');
      this.props.actions.subscribe('BTC_ETH');
      this.props.actions.subscribe('BTC_XMR');
    }

    if (this.isNewSubscription(newProps, 'BTC_ETH')) {
      console.log('subscribed to BTC_ETH');
    }

    if (this.isNewSubscription(newProps, 'BTC_XMR')) {
      console.log('subscribed to BTC_XMR');
    }
  }

  isNewConnection(newProps) {
    return !isConnected(this.props) && isConnected(newProps);
  }

  isNewSubscription(newProps, topic) {
    return !isSubscribed(this.props, topic) && isSubscribed(newProps, topic);
  }

  render() {
    return (
      <div>
        <div>
          ticker: {JSON.stringify(this.props.ticker)}
        </div>
      </div>
    );
  }
}

const mapStateToProps = state => state;

const mapDispatchToProps = dispatch => ({
  actions: bindActionCreators(reduxAutobahn.actions, dispatch),
});

export default connect(mapStateToProps, mapDispatchToProps)(Ticker);
