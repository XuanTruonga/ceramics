import Cart from 'pages/client/Cart/Cart';
import Contact from 'pages/client/Contact/Contact';
import FavoriteProduct from 'pages/client/FavoriteProduct/FavoriteProduct';
import Home from 'pages/client/Home/Home';
import Introduction from 'pages/client/Introduction/Introduction';
import News from 'pages/client/News/News';
import Product from 'pages/client/Product/Product';
import Register from 'pages/client/Register/Register';
import Shop from 'pages/client/Shop/Shop';
import NewsDetail from 'pages/client/NewsDetail/NewsDetail';
import Login from 'pages/client/Login/Login';
import Pay from 'pages/client/Pay/Pay';
import DetailProduct from 'pages/client/DetailProduct/DetailProduct';
import AdminUsers from 'pages/Admin/components/AdminUsers/AdminUsers';
import AdminOrders from 'pages/Admin/components/AdminOrders/AdminOrders';
import AdminProducts from 'pages/Admin/components/AdminProducts/AdminProducts';
import AdminCategorys from 'pages/Admin/components/AdminCategorys/AdminCategorys';
import AdminNews from 'pages/Admin/components/AdminNews/AdminNews';
import Payment from 'pages/client/Payment/Payment';
import PurchaseOrder from 'pages/client/PurchaseOrder/PurchaseOrder';

export const publicRoutes = [
  { path: '/', component: Home, layout: 'home' },
  { path: '/gio-hang', component: Cart },
  { path: '/lien-he', component: Contact },
  { path: '/san-pham-yeu-thich', component: FavoriteProduct },
  { path: '/gioi-thieu', component: Introduction },
  { path: '/dang-nhap', component: Login, layout: 'account' },
  { path: '/dang-ky', component: Register, layout: 'account' },
  { path: '/tin-tuc', component: News },
  { path: '/san-pham', component: Product },
  //  { path: '/san-pham/:category_name', component: Product},
  { path: '/san-pham/:name', component: DetailProduct },
  { path: '/cua-hang', component: Shop },
  { path: '/tin-tuc-detail/:id', component: NewsDetail },
  { path: '/thanh-toan', component: Pay, layout: 'only' },
  { path: '/payment', component: Payment, layout: 'only' },
  { path: '/tinh-trang-don-hang', component: PurchaseOrder }
];

export const privateRoutes = [
  // <PrivateRouter path={'/admin/nguoi-dung'} element={AdminUsers}/>,
  // <PrivateRouter>
  //   <AdminUsers/>
  // </PrivateRouter>,
  { path: '/admin/nguoi-dung', component: AdminUsers, layout: 'admin' },
  { path: '/admin/don-hang', component: AdminOrders, layout: 'admin' },
  { path: '/admin/danh-muc', component: AdminCategorys, layout: 'admin' },
  { path: '/admin/san-pham', component: AdminProducts, layout: 'admin' },
  { path: '/admin/tin-tuc', component: AdminNews, layout: 'admin' }
];
