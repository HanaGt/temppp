import { StrictMode } from "react"
import * as ReactDOM from "react-dom/client"
import { RecoilRoot } from "recoil"
import { BrowserRouter } from "react-router-dom"

import App from "./app/page"

const root = ReactDOM.createRoot(document.getElementById("root") as HTMLElement)
root.render(
  <StrictMode>
    <RecoilRoot>
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </RecoilRoot>
  </StrictMode>,
)
