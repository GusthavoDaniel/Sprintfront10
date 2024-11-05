import React from 'react';

interface FormFieldProps {
  label: string;
  type: string;
  id: string;
  placeholder?: string;
}

const FormField: React.FC<FormFieldProps> = ({ label, type, id, placeholder }) => {
  return (
    <div className="mb-5">
      <label htmlFor={id} className="block text-blue-400 font-luckiest-guy mb-2">
        {label}
      </label>
      <input
        type={type}
        id={id}
        name={id}
        placeholder={placeholder}
        className="w-full p-2 border border-white rounded-md text-white bg-blue-500 bg-opacity-40 placeholder-white focus:outline-none focus:ring-2 focus:ring-blue-300"
      />
    </div>
  );
};

export default FormField;
