import React from 'react';
import { useForm } from 'react-hook-form';
import './UserInfoForm.css'

const UserInfoForm = ({ onNextStep }) => {
  const {
    register,
    handleSubmit,
    formState: { errors }
  } = useForm();

  const onSubmit = (data) => {
    onNextStep(data);
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="form">
  <h2>User Information</h2>
  <div className="form-group">
    <label htmlFor="firstName">First Name</label>
    <input
      type="text"
      id="firstName"
      placeholder="First Name"
      {...register("firstName", {
        required: "First name is required",
        pattern: {
          value: /^[A-Za-z]+$/i,
          message: "First name must contain only alphabets"
        }
      })}
    />
    {errors.firstName && <span className="error">{errors.firstName.message}</span>}
  </div>

  <div className="form-group">
    <label htmlFor="lastName">Last Name</label>
    <input
      type="text"
      id="lastName"
      placeholder="Last Name"
      {...register("lastName", {
        required: "Last name is required",
        pattern: {
          value: /^[A-Za-z]+$/i,
          message: "Last name must contain only alphabets"
        }
      })}
    />
    {errors.lastName && <span className="error">{errors.lastName.message}</span>}
  </div>

  <div className="form-group">
    <label htmlFor="parentNames">Parent Name</label>
    <input
      type="text"
      id="parentNames"
      placeholder="Parent Names"
      {...register("parentNames", { required: "Parent names are required" })}
    />
    {errors.parentNames && <span className="error">{errors.parentNames.message}</span>}
  </div>

  <div className="form-group">
    <label htmlFor="phoneNumber">Phone Number</label>
    <input
      type="tel"
      id="phoneNumber"
      placeholder="Phone Number"
      {...register("phoneNumber", {
        required: "Phone number is required",
        pattern: {
          value: /^[0-9]{10}$/,
          message: "Phone number must be 10 digits without any alphabets or special characters"
        }
      })}
    />
    {errors.phoneNumber && <span className="error">{errors.phoneNumber.message}</span>}
  </div>

  <div className="form-group">
    <label htmlFor="email">Email</label>
    <input
      type="email"
      id="email"
      placeholder="Email"
      {...register("email", {
        required: "Email is required",
        pattern: {
          value: /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/,
          message: "Invalid email format"
        }
      })}
    />
    {errors.email && <span className="error">{errors.email.message}</span>}
  </div>

  <div className="form-group">
    <label htmlFor="address">Address</label>
    <input
      type="text"
      id="address"
      placeholder="Address"
      {...register("address", { required: "Address is required" })}
    />
    {errors.address && <span className="error">{errors.address.message}</span>}
  </div>

  <button type="submit" className="next-button">Next Step</button>
</form>

  );
};

export default UserInfoForm;
