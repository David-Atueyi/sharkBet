import { Route, Routes } from "react-router-dom";
import { GeneralAuthPageLayout } from "./layout/GeneralAuthPageLayout";
import { GlobalPageLayout } from "./layout/GlobalPageLayout";
import { HomePage } from "./pages/HomePage";
import { SignUpPage } from "./pages/SignUpPage";
import { LogInPage } from "./pages/LogInPage";
import { FullMatchDetailPage } from "./pages/FullMatchDetailPage";

function App() {
  return (
    <div className="bg-zinc-10 text-zinc-1 ">
      <Routes>
        <Route path="/" element={<GlobalPageLayout />}>
          <Route index element={<HomePage />} />
          <Route path="FullMatch/:gameId" element={<FullMatchDetailPage />} />
        </Route>
        <Route path="/auth" element={<GeneralAuthPageLayout />}>
          <Route path="sign-up" element={<SignUpPage />} />
          <Route path="log-in" element={<LogInPage />} />
        </Route>
      </Routes>
    </div>
  );
}

export default App;
