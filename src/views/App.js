import logo from './logo.svg';
import './App.scss';
import ListTodo from './Todos/ListTodo';
import { ToastContainer, toast } from 'react-toastify';

import 'react-toastify/dist/ReactToastify.css';
import Nav from './Nav/nav';
import Home from './Example/Home';
import MyComponent from './Example/MyComponent';

//ReactDom
import ReactDOM from "react-dom/client";
import {
  BrowserRouter,
  Routes,
  Route, useParams, Outlet, Link
} from "react-router-dom";
import ListUser from './Users/ListUser';
import DetailUser from './Users/DetailUser';

/**
 * 2 components: class component / fucntion component (function, arrow)
 */

function Invoices() {
  return (
    <>
      <div>
        <h1>Welcome to the app!</h1>
        <nav>
          <Link to="invoice">Invoices</Link> |{" "}
          <Link to="newinvoice">Dashboard</Link>
        </nav>
        <div className="content">
          <Outlet />
        </div>
      </div>
    </>
  )

}

function Invoice() {
  return (
    <h2>Hello this is Invoice detail</h2>

  )
}

function InvoiceNew() {
  return <h3>This is Invoice new</h3>;
}

function NotFound() {
  return <h1>NOT FOUND!!!</h1>;
}

const App = () => {
  const notify = () => toast("Wow so easy !");
  return (
    <BrowserRouter>
      <div className="App">
        <header className="App-header">
          <Nav />
          <img src={logo} className="App-logo" alt="logo" />
          <Routes>
            <Route path="/" exact element={<Home />} />
            <Route path="todo" element={<ListTodo />} />
            <Route path="about" element={<MyComponent />} />
            <Route path="invoices" element={<Invoices />}>
              <Route path='invoice' element={<Invoice />} />
              <Route path='newinvoice' element={<InvoiceNew />} />
            </Route>
            <Route path="user" element={<ListUser />}>
            </Route>
            <Route path="user/:id" element={<DetailUser />} />

            <Route path="*" element={<NotFound />} />
          </Routes>
        </header>

        <ToastContainer
          position="top-right"
          autoClose={2000}
          hideProgressBar={false}
          newestOnTop={false}
          closeOnClick
          rtl={false}
          pauseOnFocusLoss
          draggable
          pauseOnHover
        />
        {/* Same as */}
        <ToastContainer />
      </div>
    </BrowserRouter>
  );
}

export default App;
