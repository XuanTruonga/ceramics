import CategorySlide from 'components/Category/CategorySlide';
import FormLogin from 'components/Form/FormLogin/FormLogin';

function Login() {
   return (
      <div
         style={{
            backgroundImage:
               'url(https://inngochuong.com/uploads/images/mau-san-pham/mau-backgroud-dep-don-gian/background-dep.jpg)'
         }}>
         <CategorySlide title='Đăng nhập' />
         <div className=''>
            <FormLogin />
         </div>
      </div>
   );
}

export default Login;
