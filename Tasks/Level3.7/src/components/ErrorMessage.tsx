import React from 'react';

interface ErrorMessageProps {
  message: string;
  onRetry?: () => void;
}

const ErrorMessage: React.FC<ErrorMessageProps> = ({ message, onRetry }) => {
  return (
    <div className="error-message">
      <i className="fas fa-exclamation-triangle"></i>
      <h3>Oops! Something went wrong</h3>
      <p>{message}</p>
      {onRetry && (
        <button onClick={onRetry} className="search-btn" style={{ marginTop: '1rem' }}>
          <i className="fas fa-redo"></i>
          Try Again
        </button>
      )}
    </div>
  );
};

export default ErrorMessage;