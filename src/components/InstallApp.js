import * as React from "react";
import { useAddToHomescreenPrompt } from "../hooks/useAddToHomescreenPrompt";
import './skeleton.css';
import GetAppIcon from '@material-ui/icons/GetApp';
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
    <div  onClick={hide} className="installAppBtn">
      {/* <button onClick={hide}>Close</button>
      Hello! Wanna add to homescreen? */}
      <button onClick={promptToInstall}>Install<GetAppIcon /></button>
    </div>
  );
}