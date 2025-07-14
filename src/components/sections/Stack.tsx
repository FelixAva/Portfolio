import { StackShield } from "../";

const Stack = () => {
  return (
    <div id="stack" className="snap-start min-h-[calc(100vh-96px)]">
      <StackShield name="JavaScript" icon="java-script" />
      <StackShield name="GitHub" icon="github" />
    </div>
  );
};

export default Stack;
