import * as React from "react";
import { useAddToHomescreenPrompt } from "../hooks/useAddTOHomescreenPrompt";

export default function InstallPwa() {
  const [prompt, promptToInstall] = useAddToHomescreenPrompt();
  const [isVisible, setVisibleState] = React.useState(false);

  const hide = () => setVisibleState(false);

  React.useEffect(
    () => {
      if (prompt) {
        setVisibleState(true);
      }
    },
    [prompt]
  );

  if (!isVisible) {
    return <div />;
  }

  return (
    <div style={{backgroundColor:"linear-gradient(45deg,#99034D,#AE0730)" }} onClick={hide} >
      {/* <button onClick={hide}>Close</button>
      Hello! Wanna add to homescreen? */}
      <button onClick={promptToInstall}>Install free app</button>
    </div>
  );
}