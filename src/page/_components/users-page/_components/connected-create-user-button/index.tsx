import React, { PureComponent } from 'react';
import { connect } from 'react-redux';
import { Button } from '@material-ui/core';
import { openActionModalAction } from '../../_redux';

type PropsType = {
  openModal: () => void;
};

export class WrappedCreateButton extends PureComponent<PropsType> {
  handleCreateButtonClick = () => this.props.openModal();

  render() {
    return (
      <Button
        children="Добавить"
        color="secondary"
        onClick={this.handleCreateButtonClick}
        variant="contained"
      />
    );
  }
}

export const ConnectedCreateButton = connect(null, {
  openModal: openActionModalAction,
})(WrappedCreateButton);
