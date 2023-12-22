import CategorySlide from 'components/Category/CategorySlide';
import AddressCard from './AddressCard';
import { useEffect, useState } from 'react';
import {
  MapBoxCanTho,
  MapBoxDaNang,
  MapBoxHaNoi,
  MapBoxHoChiMinh,
  MapboxBinhDuong
} from 'components/Mapbox/Mapbox';

const listAddress = [
  {
    id: 1,
    provinces: 'Sudes Hà Nội',
    address: 'Tầng 6 - 266 Đội Cấn, Phường Liễu Giai, Quận Ba Đình, Hà Nội',
    district: 'Quận Ba Đình',
    map: MapBoxHaNoi
  },
  {
    id: 2,
    provinces: 'Sudes Bình Dương',
    address: '169 / 34 Nguyễn Hữu Cảnh, Phường Phú Thọ, TP.Thủ Dầu Một, Tỉnh Bình Dương',
    district: 'Phường Phú Thọ',
    map: MapboxBinhDuong
  },
  {
    id: 3,
    provinces: 'Sudes Cần Thơ',
    address: '81 đường Phan Huy Chú, KDC Thới Nhựt I, Phường An Khánh, Quận Ninh Kiều, Tp Cần Thơ',
    district: 'Quận Ninh Kiều',
    map: MapBoxCanTho
  },
  {
    id: 4,
    provinces: 'Sudes Đà Nẵng',
    address: '181 đường Huỳnh Tấn Phát, Phường Hoà Cường Nam, Quận Hải Châu, TP Đà Nẵng',
    district: 'Quận Hải Châu',
    map: MapBoxDaNang
  },
  {
    id: 5,
    provinces: 'Sudes Sài Gòn',
    address: 'Tầng 3, 70 Lữ Gia, Phường 15, Quận 11, Thành phố Hồ Chí Minh',
    district: 'Quận 11',
    map: MapBoxHoChiMinh
  }
];
function Shop() {
  const [valueProvince, setValueProvince] = useState();
  const [address, setAddress] = useState(listAddress);
  const [cityName, setCityName] = useState('Sudes Hà Nội');

  useEffect(() => {
    setAddress([{ ...listAddress[valueProvince - 1] }]);
    if (!valueProvince) {
      setAddress(listAddress);
    }
  }, [valueProvince]);

  const handleSetAddress = (e) => {
    setValueProvince(e.target.value);
  };
  return (
    <div className=''>
      <CategorySlide title='Cửa Hàng' />
      <div className='w-1180 mb-8'>
        <div>
          <div className='grid grid-cols-3 gap-9'>
            {/* địa chỉ */}
            <div className='col-span-1'>
              {address.map((item, index) => {
                return (
                  <div className='mb-4' key={index}>
                    <AddressCard data={item} cityName={cityName} setCityName={setCityName} />
                  </div>
                );
              })}
            </div>
            {/* google map */}
            <div className='col-span-2 '>
              {/* control */}
              <div className='flex gap-5'>
                <div className='text-[16px] font-medium rounded-lg overflow-hidden'>
                  <select
                    className='text-black bg-white outline-none rounded-lg h-[35px] w-[265px] p-1 border'
                    onChange={handleSetAddress}>
                    <option value=''>Chọn tỉnh/thành phố</option>
                    {listAddress.map((item) => {
                      return (
                        <option value={item.id} key={item.id}>
                          {item.provinces}
                        </option>
                      );
                    })}
                  </select>
                </div>
                <div className='text-[16px] font-medium rounded-lg overflow-hidden'>
                  <select className='text-black bg-white outline-none rounded-lg h-[35px] w-[265px] p-1 border'>
                    <option>chọn quận/huyện</option>
                    {valueProvince && <option>{listAddress[valueProvince - 1].district}</option>}
                  </select>
                </div>
              </div>
              {/* map img*/}
              <div className='w-full h-full mt-5'>
                {listAddress.map((item,index)=>{
                  const MapBox = item.map
                  return(
                    <div key={index}>
                      {item.provinces === cityName ? <MapBox/> : null}
                    </div>
                  )
                })}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Shop;
