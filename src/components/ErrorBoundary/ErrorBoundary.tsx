import React, { Component, ReactNode } from 'react';
import { ErrorComponent } from '../ErrorComponent/ErrorComponent';

interface ErrorBoundaryProps {
  children: ReactNode;
}

interface ErrorBoundaryState {
  hasError: boolean;
}

export class ErrorBoundary extends Component<ErrorBoundaryProps, ErrorBoundaryState> {
  constructor(props: ErrorBoundaryProps) {
    super(props);
    this.state = {
      hasError: false,
    };
  }

  static getDerivedStateFromError(_: Error): ErrorBoundaryState {
    return { hasError: true };
  }

  componentDidCatch(error: Error, errorInfo: React.ErrorInfo) {
    console.error('Error', error, errorInfo);
  }

  render() {
    if (this.state.hasError) {
      return <ErrorComponent text="Something went wrong" />;
    }

    return this.props.children;
  }
}

export default ErrorBoundary;
