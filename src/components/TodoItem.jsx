import React from 'react';
import PureRenderMixin from 'react-addons-pure-render-mixin'
import classNames from 'classnames';
import TextInput from './TextInput';

export default React.createClass({
  mixins: [PureRenderMixin],
  render: function () {
    var itemClass = classNames({
      'todo': true,
      'completed': this.props.isCompleted,
      'editing': this.props.isEditing
    });
    return <li className={itemClass}>
      <div className="view">
        <input type="checkbox"
               className="toggle"
               defaultChecked={this.props.isCompleted} />
        <label htmlFor="todo">
          {this.props.text}
        </label>
        <button className="destroy"></button>
      </div>
      <TextInput />
    </li>
  }
});
