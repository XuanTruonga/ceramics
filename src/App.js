/* eslint-disable no-unused-vars */
import DefaultLayout from 'layouts/DefaultLayout/DefaultLayout';
import { Route, Routes } from 'react-router-dom';
import { publicRoutes } from 'routers/routers';
import './App.css';
import OnlyLayout from 'layouts/OnlyLayout/OnlyLayout';
import AutoSrcollToTop from 'components/AutoSrcollToTop/AutoSrcollToTop';
import { createContext, useState } from 'react';
import { ToastContainer } from 'react-toastify';
import AdminLayout from 'layouts/AdminLayout/AdminLayout';
import { AuthProvider } from 'UseContext/AuthContext';

export const ThemeContext = createContext({});
function App() {
  const [renderApp, setRenderApp] = useState();

  return (
    <AuthProvider>
      <ThemeContext.Provider value={{ setRenderApp: setRenderApp }}>
        <div>
          <Routes>
            {publicRoutes.map((item, index) => {
              const Page = item.component;
              let Layout = DefaultLayout;
              if (item.layout === 'only') {
                Layout = OnlyLayout;
              } else if (item.layout === 'admin') {
                Layout = AdminLayout;
              }
              return (
                <Route
                  key={index}
                  path={item.path}
                  element={
                    <Layout>
                      <Page />
                    </Layout>
                  }
                />
              );
            })}
          </Routes>
          <AutoSrcollToTop/>
          <ToastContainer autoClose={2000} />
        </div>
      </ThemeContext.Provider>
    </AuthProvider>
  );
}

export default App;
