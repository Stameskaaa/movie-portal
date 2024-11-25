import styles from './withBackground.module.scss';
import React from 'react';

export const withBackground = <P extends object>(Component: React.ComponentType<P> | null) => {
  return (props: P) => {
    if (!Component) {
      return null;
    }

    return (
      <div className={styles.container}>
        <Component {...props} />
      </div>
    );
  };
};
