import React from 'react';
import TodoList from './TodoList'

export default React.createClass({
  render: function () {
    return <div>
      <section className="todoapp">
        <TodoList todos={this.props.todos} />
      </section>
    </div>
  }
});
