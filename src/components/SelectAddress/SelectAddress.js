import { ThemeContext } from 'UseContext/UseContext';
import React, { useContext } from 'react';

const SelectAddress = ({ title, data = [], setValue, type = '', name, children }) => {
  const handleValue = (e) => {
    if (type) {
      setValue(e.target.value);
    }
  };
  const theme = useContext(ThemeContext);
  return (
    <div>
      <select
        {...theme.register(name)}
        className='text-black bg-white  rounded-lg h-[35px] w-full p-1 border-[1px] border-[#ccc]
        outline-none text-sm'
        onChange={handleValue}>
        <option value=''>{title}</option>
        {data?.map((item, index) => {
          return (
            <option
              value={
                type === 'district' ? item.district_id : type === 'provices' ? item.province_id : item.ward_name
              }
              key={index}>
              {item.province_name || item.district_name || item.ward_name}
            </option>
          );
        })}
      </select>
      {children}
    </div>
  );
};

export default SelectAddress;
