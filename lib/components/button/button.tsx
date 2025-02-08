export type ButtonProps = {
  onClick: () => void;
  label: string;
};

export function Button(props: ButtonProps) {
  return <button onClick={props.onClick}>{props.label}</button>;
}
