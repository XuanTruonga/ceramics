import CategorySlide from 'components/Category/CategorySlide';
import FormRegister from 'components/Form/FormRegister/FormRegister';

function Register() {
   return (
      <div
         style={{
            backgroundImage:
               'url(https://inngochuong.com/uploads/images/mau-san-pham/mau-backgroud-dep-don-gian/background-dep.jpg)'
         }}>
         <CategorySlide title='Đăng ký' />
         <FormRegister />
      </div>
   );
}

export default Register;
