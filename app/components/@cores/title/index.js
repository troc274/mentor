import {Component, h} from 'preact';

import './style.scss';

export default class Title extends Component {
    render(props){
        if(props.type == null){
            return h('div', {className: 'title text-light'}, props.content);
        }else{
            return h('div', {className: 'title '+props.type+''}, props.content);
        }
    }
}