import React from "react";
import "./App.css";
import { Route, Routes } from "react-router-dom";
import { HOME, UPLOAD } from "./routes/Routes";
import UploadPage from "./pages/Upload";
import Home from "./pages/Home";
import { QueryClientProvider, QueryClient } from "@tanstack/react-query";

const queryClient = new QueryClient();

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <div className="App h-screen">
        <Routes>
          <Route path={HOME} element={<Home />} />
          <Route path={UPLOAD} element={<UploadPage />} />
        </Routes>
      </div>
    </QueryClientProvider>
  );
}

export default App;

