import { NextUIProvider } from "@nextui-org/react";
import {BrowserRouter, Route, Routes} from "react-router-dom";
import Layout from "./Layout/Layout";
import Auth from "./pages/Auth";
import ProtectedRoute from "./context/ProtectedRoute";
import {QueryClientProvider} from "react-query";
import queryClient from "./queryClient";
import HomePage from "./pages/HomePage";
import AddItem from "./pages/AddItem";

function App() {
    return (
        <QueryClientProvider client={queryClient}>
            <NextUIProvider>
                <BrowserRouter>
                    <Routes>
                        <Route element={<ProtectedRoute />}>
                            <Route path="/" element={<Layout />}>
                                <Route index element={<HomePage />} />
                                <Route path="/items" element={<div>See Items</div>} />
                                <Route path="/add-item" element={<AddItem />} />
                                <Route path="/support" element={<div>Support</div>} />
                            </Route>
                        </Route>

                        <Route path="/login" element={<Auth />} />
                        <Route path="/register" element={<Auth/>}/>
                    </Routes>
                </BrowserRouter>
            </NextUIProvider>
        </QueryClientProvider>
    );
}

export default App;
