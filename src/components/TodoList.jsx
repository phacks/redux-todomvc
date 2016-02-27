import React from 'react';
import PureRenderMixin from 'react-addons-pure-render-mixin'
import TodoItem from './TodoItem';

export default React.createClass({
  mixins: [PureRenderMixin],
  render: function () {
    return <section className="main">
      <ul className="todo-list">
        {this.props.todos.map(item =>
          <TodoItem key={item.get('text')}
                    text={item.get('text')} />
        )}
      </ul>
    </section>
  }
});
