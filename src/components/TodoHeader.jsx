import React from 'react';
import PureRenderMixin from 'react-addons-pure-render-mixin';

export default class TodoHeader extends React.PureComponent {
  _handleKeyPress(e) {
    if (e.key === 'Enter' && this.addTodoInput.value !== '') {
      const itemText = this.addTodoInput.value;
      this.addTodoInput.value = '';
      return this.props.addItem(itemText);
    }
  }
  render() {
    return <header className="header">
      <h1>todos</h1>
      <input className="new-todo"
             ref={(el) => this.addTodoInput = el}
             autofocus
             autoComplete="off"
             placeholder="What needs to be done?"
             onKeyPress = {this._handleKeyPress.bind(this)} />
    </header>
  }
};
