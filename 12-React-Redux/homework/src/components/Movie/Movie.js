import React from 'react';
import { connect } from 'react-redux';
import { getMovieDetail } from '../../actions/index';

import './Movie.css';

class Movie extends React.Component {

    componentDidMount(){
        const id = this.props.match.params.id 
        //despachar la accion que busca, pasandole el id
      this.props.getMovieDetail(id);// despacho la accion con el id que saque del params  en la URL

    }

    render() {
        return (
            <div className="movie-detail">
                <h2>{this.props.detail.Title}</h2>
                <img src={this.props.detail.Poster} alt="img" /> 
                <p>{this.props.detail.Plot}</p>
            </div>
        );
    }
}



function mapDispatchToProps(dispatch){
    return {
        getMovieDetail: (id) => dispatch(getMovieDetail(id)),
    };
}


function mapStateToProps(state){
    return {
        detail: state.detail,
    };
}

export default connect( mapStateToProps, mapDispatchToProps )( Movie );