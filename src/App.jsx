import React from "react";
import "./assets/tailwind.css";
import About from './pages/About';
import ProdukUnggulan from './pages/ProdukUnggulan';
import Hero from './pages/Hero';
import {Route, Routes} from "react-router-dom";
import { Suspense } from "react";
import Loading from "./components/Loading";
import Testimonis from "./pages/Testimonis";


const Dashboard = React.lazy(() => import("./pages/Dashboard"))
const Orders = React.lazy(() => import("./pages/Orders"))
const Customers = React.lazy(() => import("./pages/Customers"))
const MainLayout = React.lazy(() => import("./layouts/MainLayout"))
const AuthLayout = React.lazy(() => import("./layouts/AuthLayout"))
const NotFound = React.lazy(() => import("./pages/NotFound"))
const Login = React.lazy(() => import("./pages/auth/Login"))
const Register = React.lazy(() => import("./pages/auth/Register"))
const Forgot = React.lazy(() => import("./pages/auth/Forgot"))
const ErrorPage = React.lazy(() => import("./pages/ErrorPage"));
const User = React.lazy(() => import("./pages/User"));
const CekMember = React.lazy(() => import("./pages/CekMember"));


function App() {

  return (
    
    <Suspense fallback={<Loading />}>
    <Routes>
      <Route element={<MainLayout />}>
      
        <Route path="/cek-member" element={<CekMember />} />
        <Route path="/hero" element={<Hero />} />
        <Route path="/notfound" element={<NotFound />} />
        <Route path="/" element={<Dashboard />} />
        <Route path="/orders" element={<Orders />} />
        <Route path="/customers" element={<Customers />} />
        <Route path="/about" element={<About />} />
        <Route path="/testimonis" element={<Testimonis />} />
        <Route path="/ProdukUnggulan" element={<ProdukUnggulan />} />
        <Route path="/users" element={<User />} />
        <Route path="*" element={<ErrorPage />} />
      </Route>

      <Route element={<AuthLayout/>}>
            <Route path="/login" element={<Login />} />
            <Route path="/register" element={<Register/>} />
            <Route path="/forgot" element={<Forgot/>} />
            <Route path="*" element={<ErrorPage />} />
      </Route>
    </Routes>
    </Suspense>
  )
}

export default App
