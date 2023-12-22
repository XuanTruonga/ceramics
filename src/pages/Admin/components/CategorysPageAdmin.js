import { Link } from 'react-router-dom';

const CategorysPageAdmin = ({ Admins, active, setActive }) => {
  return (
    <div className='bg-white min-h-[100vh] shadow'>
      <h1 className='border-b border-b-slate-200 p-6 text-primaryLight font-bold text-18 text-center'>MENU</h1>
      <div className=''>
        {Admins.map((item, index) => {
          const Icon = item.icon;
          return (
            <Link
              to={item.link}
              key={index}
              className='flex items-center gap-2 font-semibold p-[8px_12px]'
              style={item.name === active ? { color: '#ca6f04' } : {}}
              onClick={() => {
                setActive(item.name);
                localStorage.setItem('CateAdmin', JSON.stringify(item.name));
              }}>
              <span className=''>
                <Icon />
              </span>
              <span>{item.name}</span>
            </Link>
          );
        })}
      </div>
    </div>
  );
};
export default CategorysPageAdmin;
