import React from 'react';
import TodoItem from './TodoItem';

export default React.createClass({
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
