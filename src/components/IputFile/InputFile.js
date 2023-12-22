import React from 'react';
import { Controller } from 'react-hook-form';

const InputFile = (props) => {
  const { placeholder, name, control, className, type, onChange } = props;
  return (
    <div>
      <Controller
        render={({ field, fieldState: { error } }) => {
          return (
            <div>
              <input
                placeholder={placeholder}
                className={className}
                type={type}
                {...field}
              />
              <p className='error-message'>{error?.message}</p>
            </div>
          );
        }}
        defaultValue=''
        name={name}
        control={control}></Controller>
    </div>
  );
};

export default InputFile;
