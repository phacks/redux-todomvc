import React from 'react';
import PureRenderMixin from 'react-addons-pure-render-mixin'
import TodoItem from './TodoItem';

export default React.createClass({
  mixins: [PureRenderMixin],
  getItems: function () {
    if (this.props.todos) {
      return this.props.todos.filter(
        (item) => this.props.filter === 'all' ||
          item.get('status') === this.props.filter
      );
    }
    return [];
  },
  render: function () {
    return <section className="main">
      <ul className="todo-list">
        {this.getItems().map(item =>
          <TodoItem key={item.get('text')}
                    text={item.get('text')} />
        )}
      </ul>
    </section>
  }
});
