import React from 'react';
import GamesList from './GamesList';
import {connect} from 'react-redux';
import {fetchGames} from './actions/index.js'
class GamesPage extends React.Component{

    componentDidMount() {
        this.props.fetchGames();
    }

    render() {
        return (
            <div className="games-page">
                <GamesList list={this.props.games}/>
            </div>
        );
    }
    }

const mapStateToProps = (state) => {
    return {
        games:state.games
    };
}

const connectedComponent = connect(mapStateToProps, {fetchGames})(GamesPage);
export default connectedComponent;