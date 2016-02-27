import React from 'react';
import TestUtils from 'react-addons-test-utils';
import TodoItem from '../../src/components/TodoItem';
import {expect} from 'chai';

const {renderIntoDocument,
       scryRenderedDOMComponentsWithTag,
       Simulate} = TestUtils;

describe('TodoItem', () => {
  it('renders an item', () => {
    const text = 'React';
    const component = renderIntoDocument(
      <TodoItem text={text} />
    );
    const todo = scryRenderedDOMComponentsWithTag(component, 'li');

    expect(todo.length).to.equal(1);
    expect(todo[0].textContent).to.contain('React');
  });

  it('strikes through the item if it is completed', () => {
    const text = 'React';
    const component = renderIntoDocument(
      <TodoItem text={text} isCompleted={true}/>
    );
    const todo = scryRenderedDOMComponentsWithTag(component, 'li');

    expect(todo[0].classList.contains('completed')).to.equal(true);
  });

  it('should look different when editing', () => {
    const text = 'React';
    const component = renderIntoDocument(
      <TodoItem text={text} isEditing={true}/>
    );
    const todo = scryRenderedDOMComponentsWithTag(component, 'li');

    expect(todo[0].classList.contains('editing')).to.equal(true);
  });

  it('should be checked if the item is completed', () => {
    const text = 'React';
    const text2 = 'Redux';
    const component = renderIntoDocument(
      <TodoItem text={text} isCompleted={true}/>,
      <TodoItem text={text2} isCompleted={false}/>
    );
    const input = scryRenderedDOMComponentsWithTag(component, 'input');
    expect(input[0].checked).to.equal(true);
    expect(input[1].checked).to.equal(false);
  });

  it('invokes callback when the delete button is clicked', () => {
    const text = 'React';
    var deleted = false;
    const deleteItem = () => deleted = true;
    const component = renderIntoDocument(
      <TodoItem text={text} deleteItem={deleteItem}/>
    );
    const buttons = scryRenderedDOMComponentsWithTag(component, 'button');
    Simulate.click(buttons[0]);

    expect(deleted).to.equal(true);
  });

  it('invokes callback when checkbox is clicked', () => {
    const text = 'React';
    var isChecked = false;
    const toggleComplete = () => isChecked = true;
    const component = renderIntoDocument(
      <TodoItem text={text} toggleComplete={toggleComplete}/>
    );
    const checkboxes = scryRenderedDOMComponentsWithTag(component, 'input');
    Simulate.click(checkboxes[0]);

    expect(isChecked).to.equal(true);
  });

  it('calls a callback when text is double clicked', () => {
    var text = 'React';
    const editItem = () => text = 'Redux';
    const component = renderIntoDocument(
      <TodoItem text={text} editItem={editItem}/>
    );
    const label = component.refs.text
    Simulate.doubleClick(label);

    expect(text).to.equal('Redux');
  });
});
