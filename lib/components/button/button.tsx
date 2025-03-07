import styles from './button.module.scss';

export type ButtonProps = {
  onClick: () => void;
  label: string;
};

export function Button(props: ButtonProps) {
  return (
    <button className={styles.button} onClick={props.onClick}>
      {props.label}
    </button>
  );
}
