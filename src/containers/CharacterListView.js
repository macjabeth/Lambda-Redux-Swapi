import React from 'react';
import { connect } from 'react-redux';

import { CharacterList } from '../components';
import { fetchSwapi } from '../actions';

class CharacterListView extends React.Component {
  componentDidMount() {
    this.props.fetchSwapi();
  }

  render() {
    if (this.props.fetching) {
      return <h3>Loading...</h3>;
    }
    return (
      <div className="CharactersList_wrapper">
        <CharacterList characters={this.props.characters} />
      </div>
    );
  }
}

const mapStateToProps = state => ({
  characters: state.characters,
  fetching: state.fetching
});

export default connect(
  mapStateToProps,
  { fetchSwapi }
)(CharacterListView);
