const Pagination = ({ api = {}, setFilters, filters = {} }) => {
  const handleFilterPage = (index) => {
    setFilters({ ...filters, page: index + 1 });
    window.scroll({
      top:'0px'
    });
  };

  const handleNextPage = () => {
    if (filters?.page !== 1) {
      setFilters({ ...filters, page: filters?.page - 1 });
      window.scroll({
        top:'0px'
      });
    }
  };

  const handlePrevPage = () => {
    if (api.pageSize !== filters?.page) {
      setFilters({ ...filters, page: filters?.page + 1 });
      window.scroll({
        top:'0px'
      });
    }
  };

  const renderPage = () => {
    const listPage = [];
    for (let index = 0; index < api.pageSize; index++) {
      listPage.push(
        <li
          key={index}
          onClick={() => handleFilterPage(index)}
          style={index + 1 === filters?.page ? { color: 'white', backgroundColor: '#ca6f04' } : {}}
          className='h-8 w-8 font-semibold cursor-pointer hover:bg-primaryLight hover:text-white rounded flex_center relative transition'>
          {index + 1}
        </li>
      );
    }
    return listPage;
  };

  return (
    <div className='w-full text-center'>
      <ul className='flex_center gap-6 my-11'>
        {api?.data && (
          <>
            <li
              className='text-sm font-semibold border rounded p-[1px_4px] cursor-pointer hover:bg-slate-300'
              style={filters?.page === 1 ? { pointerEvents: 'none', opacity: '0.5' } : null}
              onClick={handleNextPage}>
              Prev
            </li>
            <div className='flex gap-4'>{renderPage()}</div>
            <li
              className='text-sm font-semibold border rounded p-[1px_4px] cursor-pointer hover:bg-slate-300'
              style={api.pageSize === filters?.page ? { pointerEvents: 'none', opacity: '0.5' } : null}
              onClick={handlePrevPage}>
              Next
            </li>
          </>
        )}
      </ul>
    </div>
  );
};

export default Pagination;
