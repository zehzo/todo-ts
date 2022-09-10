interface TaskProps {
  content: string;
}

export function Task({ content }: TaskProps) {
  return (
    <>
      <ul>{content}</ul>
    </>
  );
}
