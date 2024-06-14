import "./App.scss";
import { BrowserRouter, Route, Routes, useLocation } from "react-router-dom";
import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";
import LoginPage from "./pages/LoginPage/LoginPage";
import MainPage from "./pages/MainPage/MainPage";
import ExpensesList from "./components/ExpensesList/ExpensesList";
import AddExpense from "./components/AddExpense/AddExpense";
// import ExpensesItem from "./components/ExpensesItem/ExpensesItem";
import EditExpense from "./components/EditExpense/EditExpense";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <AppContent />
      </BrowserRouter>
    </div>
  );
}

function AppContent() {
  const location = useLocation();
  const noHeaderFooterPath = ["/"]; //paths to not include header and footer

  return (
    <>
      {!noHeaderFooterPath.includes(location.pathname) && <Header />}
      <Routes>
        <Route path="/" element={<LoginPage />} />
        <Route path="/home" element={<MainPage />} />
        <Route path="/expenses" element={<ExpensesList />} />
        <Route path="/expenses/add" element={<AddExpense />} />
        {/* <Route path="/expenses/:id" element={<ExpensesItem />} /> */}
        <Route path="/expenses/:id/edit" element={<EditExpense />} />
      </Routes>
      {!noHeaderFooterPath.includes(location.pathname) && <Footer />}
    </>
  );
}

export default App;
