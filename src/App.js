import React from 'react';
import axios from 'axios';
import './App.css';

class App extends React.Component {
  state = {
    email: '',
  }

  handleSubscribe = async e => {
    e.preventDefault();

    await axios.post('https://intense-springs-43931.herokuapp.com/subscriptions', this.state);

    alert('Cadastrado com Sucesso!');
    this.setState({ email: '' });
  }

  handleInputChange = async e => {
    this.setState({ email: e.target.value });
  }

  render() {
    return (
      <div className="App">
        <form onSubmit={this.handleSubscribe}>
          <input
            type="email"
            placeholder="Email"
            name="email"
            value={this.state.email}
            onChange={this.handleInputChange}
          />
          <button type="submit">Cadastrar!</button>
        </form>
      </div>
    );
  }
}

export default App;
