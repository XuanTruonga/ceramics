import CategorySlide from 'components/Category/CategorySlide';
import FormLoginAdmin from 'components/Form/FormLoginAdmin/FormLoginAdmin';


function LoginAdmin() {
  return (
    <div
      style={{
        backgroundImage:
          'url(https://inngochuong.com/uploads/images/mau-san-pham/mau-backgroud-dep-don-gian/background-dep.jpg)'
      }}>
      <CategorySlide title='Quản trị' />
      <div className=''>
        <FormLoginAdmin />
      </div>
      
    </div>
  );
}

export default LoginAdmin;
