import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import { Creators } from '../store/ducks/pokemon';
import Card from './Card';

class Pokemon extends Component {
    componentDidMount() {
        const { name } = this.props.match.params
        this.props.fetchPokemon(name);
    }

    render() {
        const {
            isLoading,
            data
        } = this.props.pokemon;

        console.log(isLoading);
        console.log(data);
        
        return (
           <div className="container">
                <div className="section">
                    <div className="row">
                        <div className="col s3">
                        { isLoading && <div className="progress"><div className="indeterminate"></div></div>}
                        {!isLoading && <Card pokemon={data} />}
                        </div>
                    </div>
                </div>
           </div>
        );
    }
}

const mapStateToProps = state => ({ ...state });

const mapDispatchToProps = dispatch => bindActionCreators({
  fetchPokemon: Creators.fetch,
}, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(Pokemon);