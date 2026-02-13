// src/App.jsx

import { useState, Suspense, lazy, useEffect } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import FullScreenLoader from "./Loader/FullScreenLoader";

// Lazy load ALL pages
const HomePage = lazy(() => import("./Pages/HomePage"));
const SkiPage = lazy(() => import("./Pages/SkiPage"));
const BagsPage = lazy(() => import("./Pages/BagsPage"));
const MagstrapsPage = lazy(() => import("./Pages/MagstrapsPage"));
const ExtrasPage = lazy(() => import("./Pages/ExtrasPage"));
const CoatPage = lazy(() => import("./Pages/TheSportCoatPage"));
const BaselayersPage = lazy(() => import("./Pages/BaselayersPage"));
const SweatersPage = lazy(() => import("./Pages/SweatersPage"));
const AccessoriesPage = lazy(() => import("./Pages/AccessoriesPage"));

export default function App() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const alreadyLoaded = sessionStorage.getItem("appLoaded");

    if (alreadyLoaded) {
      setLoading(false);
    }
  }, []);

  const handleLoaderComplete = () => {
    sessionStorage.setItem("appLoaded", "true");
    setLoading(false);
  };

  return (
    <>
      {loading && <FullScreenLoader onComplete={handleLoaderComplete} />}

      {!loading && (
        <BrowserRouter>
          <Suspense fallback={null}>
            <Routes>
              <Route path="/" element={<HomePage />} />
              <Route path="/ski-poles" element={<SkiPage />} />
              <Route path="/backpacks" element={<BagsPage />} />
              <Route path="/magstraps" element={<MagstrapsPage />} />
              <Route path="/extras" element={<ExtrasPage />} />
              <Route path="/the-sport-coat" element={<CoatPage />} />
              <Route path="/baselayers" element={<BaselayersPage />} />
              <Route path="/sweaters" element={<SweatersPage />} />
              <Route path="/accessories" element={<AccessoriesPage />} />
            </Routes>
          </Suspense>
        </BrowserRouter>
      )}
    </>
  );
}