import React from 'react';
import { Controller } from 'react-hook-form';

const TextareaField = (props) => {
  const { placeholder, name, control, className, rows } = props;
  return (
    <div>
      <Controller
        render={({ field,fieldState:{error} }) => {
          return (
            <div>
              <textarea placeholder={placeholder} className={className} rows={rows} {...field} />
              <p className='error-message'>{error?.message}</p>
            </div>
          );
        }}
        name={name}
        defaultValue=''
        control={control}></Controller>
    </div>
  );
};

export default TextareaField;
