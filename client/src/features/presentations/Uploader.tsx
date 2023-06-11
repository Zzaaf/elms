import React, { useRef } from 'react';
import { useAppDispatch } from '../../store';
import { addPresentation } from './presentationsSlice';

const Uploader = () => {
  const fileInput = useRef<HTMLInputElement>(null);
  const typeDepartmentInput = useRef<HTMLInputElement>(null);
  const phaseNumberInput = useRef<HTMLInputElement>(null);
  const dispatch = useAppDispatch();

  const handleSubmit = async (event: React.FormEvent) => {
    event.preventDefault();

    if (
      fileInput.current?.files?.length &&
      typeDepartmentInput.current?.value &&
      phaseNumberInput.current?.value
    ) {
      const file = fileInput.current.files[0];
      const type = typeDepartmentInput.current.value;
      const phase = phaseNumberInput.current.value;

      const formData = new FormData();
      formData.append('file', file);
      formData.append('type', type);
      formData.append('phase', phase);

      dispatch(addPresentation(formData));
    }
  };

  return (
    <form className="uploader__container" onSubmit={handleSubmit}>
      <label>
        Type department
        <input min={1} max={5} type="number" ref={typeDepartmentInput} />
      </label>
      <label>
        Phase number
        <input min={1} max={3} type="number" ref={phaseNumberInput} />
      </label>
      <input type="file" ref={fileInput} />
      <button type="submit">Upload</button>
    </form>
  );
};

export default Uploader;
