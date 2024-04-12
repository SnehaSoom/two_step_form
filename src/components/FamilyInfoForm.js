import React from 'react';
import { useForm } from 'react-hook-form';

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
        <div key={index}>
          <input type="text" placeholder="Name" {...register(`familyMembers[${index}].name`, { required: true, pattern: /^[A-Za-z]+$/i })} />
          {errors.familyMembers && errors.familyMembers[index] && errors.familyMembers[index].name && <span className="error">Name is required and must contain only alphabets</span>}
          {/* Add other input fields for family members */}

          
          {index > 0 && <button type="button" onClick={() => onRemoveFamilyMember(index)}>Remove</button>}
        </div>

        
      ))}
      <button type="button" onClick={onAddFamilyMember}>Add More Family Member</button>
      <button type="submit" className="next-button">Next</button>
    </form>
  );
};

export default FamilyInfoForm;
