import { createRoot } from "react-dom/client";
import App from "./App";
import Deferred from "./Deferred";
const root = createRoot(document.getElementById('root'));

root.render(<Deferred />);
// root.render(<App root = {root} />)