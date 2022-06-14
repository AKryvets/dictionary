import React, { Component } from 'react';

import { colors } from '../../theme';

import { ErrorWrapper, WarningIcon, WarningMessage } from './styled';

export class ErrorBoundary extends Component {
  constructor(props) {
    super(props);

    this.state = {
      hasError: false,
    };
  }

  componentDidCatch() {
    this.setState({ hasError: true });
  }

  render() {
    const { hasError } = this.state;
    const { children } = this.props;

    if (hasError) {
      return (
        <ErrorWrapper>
          <WarningIcon size={130} color={colors.warning} />
          <WarningMessage>
            Oops! Something went wrong.Contact your administrator.
          </WarningMessage>
        </ErrorWrapper>
      );
    }

    return children;
  }
}
