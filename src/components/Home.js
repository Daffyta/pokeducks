import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux'

import { Creators as PokedexCreators } from '../store/ducks/pokedex';

import PokemonList from './pokemon/PokemonList';

class Home extends Component {

  componentDidMount(){
    this.props.fetchPokedex();
  }

  render() {
    const { pokedex } = this.props;
    return (
      <div>
        <div className="container">
          <div className="section">
            <div className="row">
              <PokemonList pokemons={pokedex} />
            </div>
          </div>
        </div>
      </div>
    )
  }
}

const mapStateToProps = state => ({ ...state });

const mapDispatchToProps = dispatch => bindActionCreators({
  fetchPokedex: PokedexCreators.fetchPokedex
}, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(Home);