type PlaygroundProps = {
  editor: React.ReactNode;
  console: React.ReactNode;
}

export function Playground({ editor, console }: PlaygroundProps) {
  return (
    <div>
      This is the playground layout
      {editor}
      {console}
    </div>
  )
}