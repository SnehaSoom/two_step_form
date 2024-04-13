import React from 'react';
import { useForm } from 'react-hook-form';
import './UserInfoForm.css'

const FamilyInfoForm = ({ onNextStep, onAddFamilyMember, familyMembers, onRemoveFamilyMember, previousPageData }) => {
  const {
    register,
    handleSubmit,
    formState: { errors }
  } = useForm();

  const onSubmit = (data) => {
    onNextStep({ ...previousPageData, familyMembers: data.familyMembers });
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="form">
      <h2>Family Information</h2>
      {familyMembers.map((member, index) => (
        <div key={index} className="form-group">
          <div className='input-box'>
            <input type="text" placeholder="Name" {...register(`familyMembers[${index}].name`, { required: true, pattern: /^[A-Za-z]+$/i })} />
            {index > 0 && <button className="remove-button" type="button" onClick={() => onRemoveFamilyMember(index)}>X</button>}
          </div>
          {errors.familyMembers && errors.familyMembers[index] && errors.familyMembers[index].name && <span className="error">Name is required and must contain only alphabets</span>}
          {/* Add other input fields for family members */}



        </div>


      ))}
      <button type="button" className="add-button" onClick={onAddFamilyMember}>+ Add More Family Member</button>
      <button type="submit" className="next-button">Next</button>
    </form>
  );
};

export default FamilyInfoForm;
