// App.jsx / App.tsx
import React, { Fragment } from 'react';
import { useController } from 'react-hook-form';
import { CKEditor } from '@ckeditor/ckeditor5-react';
import ClassicEditor from '@ckeditor/ckeditor5-build-classic';

function InputEditor({ name, control, ...props }) {
  const {
    field: { onChange, value },
    fieldState: { error }
  } = useController({ name, control });

  // function uploadAdapter(loader) {
  //   return {
  //     upload: () => {
  //       return new Promise(async (resolve, reject) => {
  //         const file = await loader.file;

  //         const storageRef = ref(storage, name + '/' + file.name);

  //         const snapshot = await uploadBytes(storageRef, file);

  //         const src = await getDownloadURL(snapshot.ref);

  //         resolve({ default: src });
  //       });
  //     }
  //   };
  // }

  // function uploadPlugin(editor) {
  //   editor.plugins.get('FileRepository').createUploadAdapter = (loader) => {
  //     return uploadAdapter(loader);
  //   };
  // }

  return (
    <Fragment>
      <CKEditor
        editor={ClassicEditor}
        data={value}
        // config={{
        //   extraPlugins: [uploadPlugin]
        // }}
        onChange={(event, editor) => {
          const data = editor?.getData();
          console.log(data);
          onChange(data);
        }}
      />
      <p className='error-message'>{error?.message}</p>
    </Fragment>
  );
}

export default InputEditor;

