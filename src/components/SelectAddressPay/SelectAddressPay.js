import { ThemeContext } from 'UseContext/UseContext';
import SelectAddress from 'components/SelectAddress/SelectAddress';
import { apiGetDistrict, apiGetProvices, apiGetWard } from 'Services/address';
import React, { useContext, useEffect, useState } from 'react';

const SelectAddressPay = () => {
  const [provices, setProvices] = useState([]);
  const [proviceId, setProviceId] = useState();
  const [district, setDistrict] = useState([]);
  const [districtId, setDistrictId] = useState();
  const [ward, setWard] = useState([]);

  const theme = useContext(ThemeContext);

  useEffect(() => {
    const apiProvices = async () => {
      const result = await apiGetProvices();
      setProvices(result);
    };
    apiProvices();
  }, []);

  useEffect(() => {
    const apiDistrict = async () => {
      setDistrict([]);
      setWard([]);
      const result = await apiGetDistrict(proviceId);
      setDistrict(result);
    };
    apiDistrict();
  }, [proviceId]);

  useEffect(() => {
    setWard([]);
    const apiWard = async () => {
      const result = await apiGetWard(districtId);
      setWard(result);
    };
    apiWard();
  }, [districtId]);
  return (
    <div>
      <div className='mb-3'>
        <SelectAddress
          theme={theme}
          title='Chọn tỉnh/Thành phố'
          data={provices}
          setIdProvice={setProviceId}
          type='provices'
          name='provices'
        />
        <p className='text-red text-[13px]'>{theme.errors.provices?.message}</p>
      </div>

      <div className='font-medium rounded-lg overflow-hidden mb-3'>
        <SelectAddress
          theme={theme}
          title='Chọn quận/huyện'
          data={district}
          setIdDistrict={setDistrictId}
          type='district'
          name='district'
        />
        <p className='text-red text-[13px]'>{theme.errors.district?.message}</p>
      </div>
      <div className='font-medium rounded-lg overflow-hidden mb-3'>
        <SelectAddress title='Chọn xã/phường' data={ward} name='ward' theme={theme} />
        <p className='text-red text-[13px]'>{theme.errors.ward?.message}</p>
      </div>
    </div>
  );
};

export default SelectAddressPay;
