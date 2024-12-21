import React, { useEffect, useState } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import MainLayout from './layouts/mainLayout';
import Home from './pages/Home';
import routesData from './data/routes.json'; // فایل JSON را ایمپورت کنید

interface RouteConfig {
  path: string;
  element: string;
  index?: boolean;
  children?: RouteConfig[];
}

const renderRoutes = (routeConfig: RouteConfig[]) => {
  return routeConfig.map((route, index) => {
    const Element = route.element === "Home" ? Home : route.element === "MainLayout" ? MainLayout : null;

    if (!Element) {
      return <Route key={index} path={route.path} element={<div>Page Not Found</div>} />;
    }

    return (
      <Route key={index} path={route.path} element={<Element />}>
        {route.children && renderRoutes(route.children)}
      </Route>
    );
  });
};

const App: React.FC = () => {
  const [routes, setRoutes] = useState<RouteConfig[]>([]);

  useEffect(() => {
    setRoutes(routesData.routes);
  }, []);

  return (
    <Router>
      <Routes>
        {renderRoutes(routes)}
      </Routes>
    </Router>
  );
};

export default App;
