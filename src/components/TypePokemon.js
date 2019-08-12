import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import { Creators as TypesCreators } from '../store/ducks/types';

import TypesList from '../components/typesOfPokemons/TypesList';

class TypePokemon extends Component {

    componentDidMount(){
        this.props.fetchType();
    }

    render() {
        const { type, isLoading } = this.props.typePokemon;
        return (
        <div>
            <div className="container">
                <div className="section">
                    <div className="row">
                        {!isLoading && <TypesList typePokemon={type} />}
                    </div>
                </div>
            </div>
        </div>
      )
    }
  }

  const mapStateToProps = state => ({ ...state });

  const mapDispatchToProps = dispatch => bindActionCreators({
    fetchType: TypesCreators.fetchType
  }, dispatch);

  export default connect(mapStateToProps, mapDispatchToProps)(TypePokemon);