import { useEffect, useState } from "react";

const PaginationAdmin = ({ apiUser, setFilters, filters, setCallApiUser }) => {

  const handleFilterPage = (index) => {
    setCallApiUser(index);
    setFilters({ ...filters, page: index + 1 });
  };

  const handleNextPage = () => {
    if (filters.page !== 1) {
      setFilters({ ...filters, page: filters.page - 1 });
      setCallApiUser(filters);
    }
  };

  const handlePrevPage = () => {
    if (apiUser.pageSize !== filters.page) {
      setFilters({ ...filters, page: filters.page + 1 });
      setCallApiUser(filters);
    }
  };

  const renderPage = () => {
    const listPage = [];
    for (let index = 0; index < apiUser.pageSize; index++) {
      listPage.push(
        <li
          key={index}
          onClick={() => handleFilterPage(index)}
          style={index + 1 === filters.page ? { color: 'white', backgroundColor: 'blue' } : {}}
          className='h-7 w-7 font-semibold cursor-pointer hover:bg-blue hover:text-white rounded flex_center relative transition'>
          {index + 1}
        </li>
      );
    }
    return listPage;
  };

  return (
    <div className='w-full text-center'>
      <ul className='flex_center gap-6 my-11'>
        <li
          className='text-sm font-semibold border rounded p-[1px_4px] cursor-pointer hover:bg-slate-300'
          style={filters.page === 1 ? { pointerEvents: 'none', opacity: '0.5' } : null}
          onClick={handleNextPage}>
          Prev
        </li>
        <div className='flex gap-3'>{renderPage()}</div>
        <li
          className='text-sm font-semibold border rounded p-[1px_4px] cursor-pointer hover:bg-slate-300'
          style={apiUser.pageSize === filters.page ? { pointerEvents: 'none', opacity: '0.5' } : null}
          onClick={handlePrevPage}>
          Next
        </li>
      </ul>
    </div>
  );
};

export default PaginationAdmin;
