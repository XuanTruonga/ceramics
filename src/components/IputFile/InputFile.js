import { useController } from 'react-hook-form';
// export const ACCEPTED_IMAGE_TYPES = ['image/jpeg', 'image/jpg', 'image/png'];
// const MAX_FILE_SIZE = 10485760;
    // img: yup
    //   .mixed()
    //   .nullable()
    //   .test('image_validate', 'ảnh không đúng định dạng', (value) => {
    //     if (value) {
    //       return ACCEPTED_IMAGE_TYPES.includes(value?.type);
    //     }
    //   })
    //   .test('image_validate', 'dung lượng ảnh quá tải', (value) => {  
    //     if (value) {
    //       return value.size <= MAX_FILE_SIZE;
    //     }
    //   })
    //   .default('')

const InputFile = ({ name, control,...props }) => {

  const {
    field: { onChange:handleSetValueForm },
    fieldState: { error }
  } = useController({ name, control });

  const handleChangeFileInput = (e) => {
    if (e.target.files && e.target.files.length) {
      const file = e.target.files[0];
      handleSetValueForm(file);
    }
  };

  return (
    <div>
      <input
        id={name}
        name={name}
        type='file'
        // className='absolute left-0 top-0 h-0 w-0 cursor-pointer opacity-0'
        onChange={handleChangeFileInput}
        {...props}
      />
      <p className='error-message'>{error?.message}</p>
    </div>
  );

};

export default InputFile;
