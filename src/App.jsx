import "./App.scss";
import { BrowserRouter, Route, Routes } from "react-router-dom";
// import Header from "./components/Header/Header";
// import Footer from "./components/Footer/Footer";
import LoginPage from "./pages/LoginPage/LoginPage";
import MainPage from "./pages/MainPage/MainPage";
import GroupsList from "./components/GroupsList/GroupsList";
// import AddGroup from "./components/AddGroup/AddGroup";
// import GroupItem from "./components/GroupItem/GroupItem";
// import EditGroup from "./components/EditGroup/EditGroup";
// import ExpensesList from "./components/ExpensesList/ExpensesList";
// import AddExpense from "./components/AddExpense/AddExpense";
// import ExpensesItem from "./components/ExpensesItem/ExpensesItem";
// import EditExpense from "./components/EditExpense/EditExpense";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        {/* <Header /> */}
        <Routes>
          <Route path="/" element={<LoginPage />} />
          <Route path="/main" element={<MainPage />} />
          <Route path="/groups" element={<GroupsList />} />
          {/*<Route path="/groups/add" element={<AddGroup />} />
          <Route path="/groups/:id" element={<GroupItem />} />
          <Route path="/groups/:id/edit" element={<EditGroup />} />
          <Route path="/expenses" element={<ExpensesList />} />
          <Route path="/expenses/add" element={<AddExpense />} />
          <Route path="/expenses/:id" element={<ExpensesItem />} />
          <Route path="/expenses/:id/edit" element={<EditExpense />} /> */}
        </Routes>
        {/* <Footer /> */}
      </BrowserRouter>
    </div>
  );
}
export default App;
