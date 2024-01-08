import { ThemeContext } from 'UseContext/UseContext';
import React, { useContext } from 'react';

const SelectAddress = ({ title, data = [], setIdDistrict, setIdProvice, type = '', name, children }) => {
  const handleValue = (e) => {
    const dataProvice = data.filter((item) => item.province_name === e.target.value);
    const dataDistrict = data.filter((item) => item.district_name === e.target.value);
    if (type === 'provices') {
      setIdProvice(dataProvice[0].province_id);
    }
    if (type === 'district') {
      setIdDistrict(dataDistrict[0].district_id);
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
                type === 'district'
                  ? item.district_name
                  : type === 'provices'
                    ? item.province_name
                    : item.ward_name
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
