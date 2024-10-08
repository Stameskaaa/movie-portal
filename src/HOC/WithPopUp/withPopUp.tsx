import styles from './withPopUp.module.scss';
import React from 'react';

interface WithProps {
  title: string;
  year: number | null;
  type: string | null;
}

export const withPopUp = <P extends object>(
  Component: React.ComponentType<P>,
): React.FC<Omit<P, keyof WithProps> & WithProps> => {
  return ({ year, title, type, ...props }: WithProps & Omit<P, keyof WithProps>) => {
    return (
      <div className={styles.container}>
        <Component {...(props as P)} />
        <div className={styles.inner_info_left}>
          <span className={styles.name}>{title}</span>

          {year && (
            <div className={styles.year}>
              <div className={styles.hd}>HD</div>
              <span>{year}</span>
            </div>
          )}
          {type && <span>{type}</span>}
        </div>
      </div>
    );
  };
};
