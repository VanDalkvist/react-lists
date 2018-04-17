import React, {Component} from 'react';
import logo from './logo.svg';
import './App.css';
import {connect} from 'react-redux';
import ReactList from 'react-list';

class App extends Component {

    // componentWillMount() {
        // loadAccounts(::this.handleAccounts);
    // }

    renderLeftItem (index, key) {
        let item = this.props.left.items[index];
        return <div key={key}>
            {item.name}
        </div>;
    };

    renderRightItem (index, key) {
        let item = this.props.right.items[index];
        return <div key={key}>
            {item.name}
            <p>
                {item.body}
            </p>
        </div>;
    };

    render() {
        return (
            <div className="App">
                <header className="App-header">
                    <img src={logo} className="App-logo" alt="logo"/>
                    <h1 className="App-title">Welcome to React</h1>
                </header>

                <p className="App-intro">
                    To get started, edit <code>src/App.js</code> and save to reload.
                </p>

                <div className="row">
                    <div className="col-md-6 col-lg-6 col-sm-6">
                        <ReactList
                            itemRenderer={this.renderLeftItem.bind(this)}
                            length={this.props.left.items.length}
                            type='uniform'
                        />
                    </div>
                    <div className="col-md-6 col-lg-6 col-sm-6">
                        <ReactList
                            itemRenderer={this.renderRightItem.bind(this)}
                            length={this.props.right.items.length}
                            type='uniform'
                        />
                    </div>
                </div>
            </div>
        );
    }
}

function mapStateToProps(state) {
    return {
        left: state.left,
        right: state.right
    };
}

export default connect(mapStateToProps)(App);
