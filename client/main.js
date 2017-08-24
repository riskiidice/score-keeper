import React from 'react';
import ReactDOM from 'react-dom';
import {Meteor} from 'meteor/meteor';
import {Players} from './../imports/api/players'

const players = [{
  _id: '1' ,
  name: 'Tikumporn',
  score: 10
},{
  _id: '2',
  name: 'Amp',
  score: -1
},{
  _id: '3',
  name: 'Dick',
  score: -12
}];

const renderPlayers = function(playersList) {

  return playersList.map(function(player){
     return <p key={player._id}> {player.name} has {player.score} point(s).</p>

  });
};

Meteor.startup(function(){
  let name = 'Tikumporn';
  let title = 'Account Settings';
  let jsx = (
    <div>
    <h1>{ title }</h1>
    <p>Hello { name }</p>
    <p>This is second p.</p>
    { renderPlayers(players) }
    </div>
  );

  ReactDOM.render(jsx, document.getElementById('app'));
});
