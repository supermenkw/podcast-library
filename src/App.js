import React from 'react';
import './App.css';
import Header from './components/Header';
import SearchBar from './components/SearchBar';
import Podcast from './components/Podcast';
import AddButton from './components/AddButton';
import NewPodcast from './components/NewPodcast';
import axios from 'axios';

const isSearched = searchTerm => item => item.title.toLowerCase().includes(searchTerm.toLowerCase());

class App extends React.Component {

  constructor() {
    super();
    this.state = {
      podcasts: [],
      input: '',
      ui: {
        formVisibility: false
      }
    }
  }

  async componentDidMount() {
    const results = await axios('https://podspace-server-aeffazgssu.now.sh/podcasts');
    this.setState({
      podcasts: results.data
    })
  }

  handleInput = ({ target: { value } }) => {
    this.setState({
      input: value
    })
  }

  handleNewPodcast = (newPodcast) => {
    this.setState({
      podcasts: [...this.state.podcasts, newPodcast]
    })
  }

  handleNewPodcastForm = () => {
    this.setState({
      ui: {
        formVisibility: !this.state.ui.formVisibility
      }
    })
  }

  render() {
    return (
      <div className="container mt-3">
        <div className="row">
          <Header />
          <NewPodcast
            onHandleNewPodcast={this.handleNewPodcast}
            visible={this.state.ui.formVisibility}
          />
          <SearchBar handleInput={this.handleInput} />
        </div>
        <div className="row mt-4">
          {this.state.podcasts.filter(isSearched(this.state.input)).map(podcast => <Podcast title={podcast.title} thumbnail={podcast.thumbnail} />)}
        </div>
        <AddButton showForm={this.handleNewPodcastForm} formVisibility={this.state.ui.formVisibility} />
      </div>

    );
  }
}

export default App;
