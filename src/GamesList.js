import React from 'react';

const GamesList = ({list}) => {
    const empty = (
        <p>You don't have any games yet!</p>
    );
    return (
        <div className="games-list">
            {list.length === 0 ? empty : <List list={list}/>}
        </div>
    );
}

const List = ({list}) => {
    return (
        <ul>
            {
                list.map((elem, _, index)=>{
                    return <li key={index}>{elem.title}</li>
                })
            }
        </ul>
    )
}

export default GamesList;