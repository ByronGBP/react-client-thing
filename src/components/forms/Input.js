// @flow
import React, { Component, type ComponentType } from 'react';
import { CSSTransition } from 'react-transition-group';
import { type FieldProps } from 'redux-form';

type Props = {
  label: string,
  type: string
} & FieldProps

type State = {
  focus: boolean,
  isValidClass: string
}

class Input extends Component<Props, State> {
  state = {
    focus: false,
    isValidClass: ''
  }

  //TODO:- Fix -> Bind on constructor give flow-typed errors
  onFocus = () => {
    const newState: any = {
      focus: true
    };

    this.setState(newState);
  }

  onBlur = () => {
    const { meta: { error, touched } } = this.props;

    const newState: any = { };

    if (error) {
      newState.focus = false;
      newState.isValidClass = 'no-valid';
    } else {
      newState.isValidClass = 'nvx-placeholder-focus-enter-done';
    }

    this.setState(newState);
  }

  render() {
    const { input, label, type, meta: { submitFailed } } = this.props;
    const { focus, isValidClass } = this.state;

    return (
      <div className="position-relative d-flex nvx-space">
        <input {...input} type={type} className="nvx-input-field" autoComplete="off" 
          onFocus={this.onFocus} 
          onBlur={this.onBlur} />

        <CSSTransition
          in={focus}
          timeout={500}
          classNames="nvx-placeholder-focus"
        >
          <label className={`nvx-placeholder ${submitFailed ? (isValidClass ? isValidClass : 'no-valid') : ''}`}>{label}</label>
        </CSSTransition>

        <CSSTransition
          in={focus}
          timeout={500}
          classNames="nvx-border-focus"
        >
          <span className="nvx-border"></span>
        </CSSTransition>
      </div>
    );
  }
}

export default Input;