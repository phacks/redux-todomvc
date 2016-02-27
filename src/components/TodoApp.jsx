import React from 'react';
import TodoList from './TodoList'
import TodoHeader from './TodoHeader'
import TodoTools from './TodoTools'
import Footer from './Footer'

export default React.createClass({
  getNbActiveItems: function () {
    if (this.props.todos) {
      const activeItems = this.props.todos.filter(
        (item) => item.get('status') === 'active'
      );
      return activeItems.size;
    }
    return 0;
  },
  render: function () {
    return <div>
      <section className="todoapp">
        <TodoHeader />
        <TodoList todos={this.props.todos} filter={this.props.filter} />
        <TodoTools filter={this.props.filter}
                   nbActiveItems={this.getNbActiveItems()} />
      </section>
      <Footer />
    </div>
  }
});
