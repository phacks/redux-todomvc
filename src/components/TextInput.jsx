import React from 'react';
import ReactDOM from 'react-dom';
import PureRenderMixin from 'react-addons-pure-render-mixin';
import classNames from 'classnames';

export default class TextInput extends React.Component {
  constructor(props) {
    super(props);
    this.state = {value: props.text};
    this.shouldComponentUpdate = PureRenderMixin.shouldComponentUpdate.bind(this);
  }

  cancelEditing() {
    this.setState({'value': this.props.text});
    return this.props.cancelEditing(this.props.itemId);
  }
  _handleKeyDown(e) {
    switch (e.key) {
      case 'Enter':
        return this.props.doneEditing(this.props.itemId, this.state.value);
      case 'Escape':
        return this.cancelEditing();
    }
  }
  _handleOnBlur(e) {
    return this.cancelEditing();
  }
  _handleOnChange(e) {
    this.setState({value: e.target.value});
  }
  render() {
    return <input className="edit"
                  autoFocus={true}
                  value={this.state.value}
                  onChange={this._handleOnChange.bind(this)}
                  type="text"
                  ref="itemInput"
                  onKeyDown={this._handleKeyDown.bind(this)}
                  onBlur={this._handleOnBlur.bind(this)}
                  />
  }
};
