import './App.css';
import { NextUIProvider } from "@nextui-org/react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Layout from "./Layout/Layout";
import Auth from "./pages/Auth";
import ProtectedRoute from "./context/ProtectedRoute";
import {QueryClientProvider} from "react-query";
import queryClient from "./queryClient";

function App() {
    return (
        <QueryClientProvider client={queryClient}>
            <NextUIProvider>
                <Router>
                    <Routes>
                        <Route element={<ProtectedRoute />}>
                            <Route path="/" element={<Layout />}>
                                <Route index element={<div>Home</div>} />
                                <Route path="/items" element={<div>See Items</div>} />
                                <Route path="/add-item" element={<div>Add Item</div>} />
                                <Route path="/support" element={<div>Support</div>} />
                            </Route>
                        </Route>

                        <Route path="/login" element={<Auth />} />
                        <Route path="/register" element={<Auth/>}/>
                    </Routes>
                </Router>
            </NextUIProvider>
        </QueryClientProvider>
    );
}

export default App;
