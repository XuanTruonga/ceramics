function AddressCard({ data, cityName, setCityName }) {
  const style = {
    backgroundColor: '#ca6f04',
    color: '#fff'
  };
  return (
    <div
      className='p-[5px_10px] rounded-[10px] border-[2px] border-primary font-medium leading-6 text-sm cursor-pointer
    hover:bg-primary hover:!text-white group transition'
      style={data.provinces === cityName ? style : {}}
      onClick={() => setCityName(data.provinces)}>
      <span
        className='text-primary font-bold block group-hover:text-white'
        style={data.provinces === cityName ? style : {}}>
        {data.provinces}
      </span>
      <span className='block'>
        <b className='mr-1'>Địa chỉ:</b>
        {data.address}
      </span>
      <b>Hotline:</b>
      <span style={data.provinces === cityName ? style : {}} className='ml-1 text-primary group-hover:text-white'>
        1900 6750
      </span>
    </div>
  );
}

export default AddressCard;
