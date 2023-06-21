
import "./App.css"
import MuiButton from "./components/MuiButton";
import MuiRadioButton from "./components/MuiRadioButton";

import MuiTextField from './components/MuiTextField';
import { MuiTypography } from "./components/MuiTypography";

export default function MyApp() {
  return (
    <div className='App'>
      <MuiButton />
      <MuiTextField />
      <MuiRadioButton />
      <MuiTypography />
    </div>
  );
}
