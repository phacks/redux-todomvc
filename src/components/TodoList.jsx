import React from 'react';
import PureRenderMixin from 'react-addons-pure-render-mixin'
import TodoItem from './TodoItem';

export default class TodoList extends React.Component {
  constructor(props) {
    super(props);
    this.shouldComponentUpdate = PureRenderMixin.shouldComponentUpdate.bind(this);
  }
  getItems() {
    if (this.props.todos) {
      return this.props.todos.filter(
        (item) => this.props.filter === 'all' ||
          item.get('status') === this.props.filter
      );
    }
    return [];
  }
  isCompleted(item) {
    return item.get('status') === 'completed';
  }
  render() {
    return <section className="main">
      <ul className="todo-list">
        {this.getItems().map(item =>
          <TodoItem key={item.get('text')}
                    text={item.get('text')}
                    id={item.get('id')}
                    isCompleted={this.isCompleted(item)}
                    isEditing={item.get('editing')}
                    doneEditing={this.props.doneEditing}
                    cancelEditing={this.props.cancelEditing}
                    toggleComplete={this.props.toggleComplete}
                    deleteItem={this.props.deleteItem}
                    editItem={this.props.editItem}/>
        )}
      </ul>
    </section>
  }
};
