export const SET_GAMES = "SET_GAMES";

export const setGames = (games) => {
    return {
        type: SET_GAMES,
        games: games
    }
}

export const fetchGames = () => {
    return (dispatch) => {
        fetch('/api/games')
        .then(res=>res.json())
        .then(data => dispatch(setGames(data.games)));
    }
}
