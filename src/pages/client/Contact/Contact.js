import CategorySlide from 'components/Category/CategorySlide';
import InfoContact from './InfoContact';
import FormContact from 'components/Form/FormContact/FormContact';
import { MapBoxHoChiMinh } from 'components/Mapbox/Mapbox';

function Contact() {
   return (
      <div className=''>
         <CategorySlide title='Liên Hệ'/>
         <div className='w-1180 mb-8'>
            <div className='grid grid-cols-2 gap-5'>
               <div className='col-span-1'>
                  <div className='mb-8'>
                     <h1 className='mb-5 font-bold text-[20px] underlined-40 relative inline-block'>
                        Cửa hàng Sudes Gốm Sứ
                     </h1>
                     <InfoContact />
                  </div>

                  <div className=''>
                     <h1 className='mb-3 font-bold text-[20px] underlined-40 relative inline-block'>
                        Liên hệ với chúng tôi
                     </h1>
                     <span className='p-2 block text-sm font-medium'>
                        Nếu bạn có thắc mắc gì, có thể gửi yêu cầu cho chúng tôi, và chúng tôi sẽ liên lạc lại với
                        bạn sớm nhất có thể .
                     </span>
                     <div className='p-2'>
                        <FormContact/>
                     </div>
                  </div>
               </div>

               <div className='col-span-1'>
                  <MapBoxHoChiMinh/>
               </div>
            </div>
         </div>
      </div>
   );
}

export default Contact;
