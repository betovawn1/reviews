interface Props {
  text: string;
}

/**
 * @title Text Teste Section
 */
export default function Section(props: Props) {
  return (
    <div>
      <h1>Your text here: {props.text}</h1>
    </div>
  );
}
