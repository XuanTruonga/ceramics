/* eslint-disable react-hooks/exhaustive-deps */
import axios from 'axios';
import { useEffect, useState } from 'react';
import { Link, useSearchParams } from 'react-router-dom';
const Payment = () => {
  const [searchParams] = useSearchParams();
  const [status,setStatus] = useState()
  const params = Object.fromEntries([...searchParams]);

  useEffect(()=>{
    const save = async()=>{
     const res = await axios.get('http://localhost:5001/api/payment/save',{
        params:params
      })
      setStatus(res.data.Message)
    }
    save()
  },[])
  return <div className='h-[100vh] text-red font-32 flex_center bg-text'>
    <div>
      <span>{status}!</span>
      <Link className='text-sm text-blue underline p-1 'to='/tinh-trang-don-hang'>Click đi đến đơn mua</Link>
    </div>
  </div>;
};

export default Payment;
