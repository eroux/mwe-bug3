import React, { FC } from "react"
import { createRoot } from 'react-dom/client';
import { RecoilRoot } from "recoil"
import { BrowserRouter, Route, Routes, useLocation, useParams, Link } from "react-router-dom"
import { RDFResource } from  "mwe-bug2"

const HomeContainer: FC<{  }> = ({
}) => {
  return (
    <React.Fragment>
      test !
    </React.Fragment>
  )
}

function App() {
  return (
    <BrowserRouter>
      <RecoilRoot>
        <Routes>
              <Route path="/" element={<HomeContainer />} />
        </Routes>
      </RecoilRoot>
    </BrowserRouter>
  )
}

const container = document.getElementById("root");
const root = createRoot(container!);
root.render(<App />);
