/* eslint-disable no-unused-vars */
import DefaultLayout from 'layouts/DefaultLayout/DefaultLayout';
import { Route, Routes } from 'react-router-dom';
import { privateRoutes, publicRoutes } from 'routers/routers';
import OnlyLayout from 'layouts/OnlyLayout/OnlyLayout';
import AutoSrcollToTop from 'components/AutoSrcollToTop/AutoSrcollToTop';
import { createContext, useEffect, useState } from 'react';
import { ToastContainer } from 'react-toastify';
import AdminLayout from 'layouts/AdminLayout/AdminLayout';
import { AuthProvider } from 'UseContext/AuthContext';
import { ProductProvider } from 'UseContext/ProductContext';
import CategoryProvider from 'UseContext/CategoryContext';
import PrivateRouter from 'routers/PrivateRouter';
import { NewsProvices } from 'UseContext/NewsContext';
import EditorComponent from 'ultis/Editor';

export const ThemeContext = createContext({});
function App() {
  const [renderApp, setRenderApp] = useState();

  return (
    <NewsProvices>
      <CategoryProvider>
        <ProductProvider>
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

                  {privateRoutes.map((item, index) => {
                    const Page = item.component;
                    let Layout = AdminLayout;
                    return (
                      <Route
                        key={index}
                        path={item.path}
                        element={
                          <PrivateRouter>
                            <Page />
                          </PrivateRouter>
                        }></Route>
                    );
                  })}
                </Routes>
                <AutoSrcollToTop />
                <ToastContainer autoClose={2000} />
              </div>
            </ThemeContext.Provider>
          </AuthProvider>
        </ProductProvider>
      </CategoryProvider>
    </NewsProvices>
  );
}

export default App;
