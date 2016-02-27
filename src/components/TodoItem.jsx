import React from 'react';
import PureRenderMixin from 'react-addons-pure-render-mixin'
import TextInput from './TextInput';

export default React.createClass({
  mixins: [PureRenderMixin],
  render: function () {
    return <li className="todo">
      <div className="view">
        <input type="checkbox"
               className="toggle" />
        <label htmlFor="todo">
          {this.props.text}
        </label>
        <button className="destroy"></button>
      </div>
      <TextInput />
    </li>
  }
});
