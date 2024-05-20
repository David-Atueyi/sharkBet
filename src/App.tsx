import { Route, Routes } from "react-router-dom";
import { GeneralAuthPageLayout } from "./layout/GeneralAuthPageLayout";
import { GlobalPageLayout } from "./layout/GlobalPageLayout";
import { HomePage } from "./pages/HomePage";
import { SignUpPage } from "./pages/SignUpPage";
import { LogInPage } from "./pages/LogInPage";
import { FullMatchDetailsPage } from "./pages/FullMatchDetailsPage";
import { Games } from "./pages/Games";
import { GeneralUserInfoLayout } from "./layout/GeneralUserInfoLayout";
import { DepositPage } from "./pages/DepositPage";
import { MyBetsPage } from "./pages/MyBetsPage";
import { TransactionHistoryPage } from "./pages/TransactionHistoryPage";
import { MyAccountInfo } from "./pages/MyAccountInfo";

function App() {
  return (
    <div className="bg-zinc-10 text-zinc-1 ">
      <Routes>
        <Route path="/" element={<GlobalPageLayout />}>
          <Route index element={<HomePage />} />
          <Route path="FullMatch/:gameId" element={<FullMatchDetailsPage />} />
          <Route path="Games/:identifier" element={<Games />} />
        </Route>
        <Route path="/me" element={<GeneralUserInfoLayout />}>
          <Route path="my-bets" element={<MyBetsPage />} />
          <Route path="deposit" element={<DepositPage />} />
          <Route path="transaction-history" element={<TransactionHistoryPage />} />
          <Route path="account-info" element={<MyAccountInfo />} />
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
