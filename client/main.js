import React from 'react';
import ReactDOM from 'react-dom';
import {Meteor} from 'meteor/meteor';

let name = "Tikumporn"
let jsx = <div><p>Hello { name }</p><p>This is second p</p></div>

Meteor.startup(function(){
  ReactDOM.render(jsx, document.getElementById('app'));
});
