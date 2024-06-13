import "./App.scss";
import { BrowserRouter, Route, Routes } from "react-router-dom";
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
        <Header />
        <Routes>
          <Route path="/" element={<LoginPage />} />
          <Route path="/home" element={<MainPage />} />
          <Route path="/expenses" element={<ExpensesList />} />
          <Route path="/expenses/add" element={<AddExpense />} />
          {/* <Route path="/expenses/:id" element={<ExpensesItem />} /> */}
          <Route path="/expenses/:id/edit" element={<EditExpense />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </div>
  );
}
export default App;
