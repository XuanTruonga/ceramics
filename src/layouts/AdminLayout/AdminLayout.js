import React from 'react';
import { useState } from 'react';
import { AdminIcon, CategoryIcon, ClockIcon, OrderIcon, ProductIcon } from 'components/Icon/Icon';
import NavAdmin from 'pages/Admin/components/NavAdmin';
import CategorysPageAdmin from 'pages/Admin/components/CategorysPageAdmin';
import { localStorageCateAdmin } from 'components/localStorage/localStorage';

const Admins = [
  {
    id: '1',
    name: 'Người dùng',
    icon: AdminIcon,
    link: '/admin/nguoi-dung'
  },
  {
    id: '2',
    name: 'Đơn hàng',
    icon: OrderIcon,
    link: '/admin/don-hang'
  },
  {
    id: '3',
    name: 'Sản phẩm',
    icon: ProductIcon,
    link: '/admin/san-pham'
  },
  {
    id: '4',
    name: 'Danh mục sản phẩm',
    icon: CategoryIcon,
    link: '/admin/danh-muc'
  },
  {
    id: '5',
    name: 'Tin tức',
    icon: ClockIcon,
    link: '/admin/tin-tuc'
  }
];

const AdminLayout = ({ children }) => {
  const localStorCateAdmin = localStorageCateAdmin()
  const [active, setActive] = useState(localStorCateAdmin);
  return (
    <div className='bg-[#f5f5f5]'>
      <div className='w-full min-h-[100vh] px-14'>
        <div className='grid grid-cols-12 gap-4'>
          {/* Category */}
          <div className='col-span-2'>
            <CategorysPageAdmin
              Admins={Admins}
              active={active}
              setActive={setActive}
            />
          </div>
          {/* Content */}
          <div className='col-span-10'>
            <NavAdmin active={active} />
            <div>{children}</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AdminLayout;
