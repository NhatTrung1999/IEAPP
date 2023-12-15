import React from "react";
import { Route, Routes } from "react-router-dom";
import MeasureScreen from "../screens/MeasureScreen";
import OfflineDataScreen from "../screens/OfflineDataScreen";

const ConfigRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<MeasureScreen />} />
      <Route path="/offline-data" element={<OfflineDataScreen />} />
    </Routes>
  );
};

export default ConfigRoutes;
