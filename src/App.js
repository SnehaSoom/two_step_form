import React, { useState } from 'react';
import UserInfoForm from './components/UserInfoForm';
import FamilyInfoForm from './components/FamilyInfoForm';
import './App.css';

const App = () => {
  const [step, setStep] = useState(1);
  const [userData, setUserData] = useState({});
  const [familyData, setFamilyData] = useState([{ name: '' }]);

  const handleNextStep = (data) => {
    if (step === 1) {
      setUserData(data);
    } else if (step === 2) {
      setFamilyData(data.familyMembers);
    }
    setStep(step + 1);
  };

  const handlePrevStep = () => {
    setStep(step - 1);
  };

  const handleAddFamilyMember = () => {
    setFamilyData([...familyData, { name: '' }]);
  };

  const handleRemoveFamilyMember = (index) => {
    if (familyData.length > 1) {
      const updatedFamilyData = [...familyData];
      updatedFamilyData.splice(index, 1);
      setFamilyData(updatedFamilyData);
    }
  };

  return (
    <div className="container">
      {step === 1 && (
        <UserInfoForm onNextStep={handleNextStep} />
      )}
      {step === 2 && (
        <FamilyInfoForm
          onNextStep={handleNextStep}
          onPrevStep={handlePrevStep}
          onAddFamilyMember={handleAddFamilyMember}
          familyMembers={familyData}
          onRemoveFamilyMember={handleRemoveFamilyMember}
        />
      )}
      {step === 3 && (
        <div className="summary">
          <h2>Summary</h2>
          <p>User Information:</p>
          <ul>
            <li data-label="First Name :"> {userData.firstName}</li>
            <li data-label="Last Name :"> {userData.lastName}</li>
            <li data-label="Parent Names :"> {userData.parentNames}</li>
            <li data-label="Phone Number :"> {userData.phoneNumber}</li>
            <li data-label="Email :"> {userData.email}</li>
            <li data-label="Address :"> {userData.address}</li>
          </ul>
          <p>Family Information:</p>
          <ul>
            {familyData.map((member, index) => (
              <li key={index} data-label={`Family Member ${index + 1}:`}>{member.name}</li>
            ))}
          </ul>
          <p>!!! Successfully saved User Information.</p>
        </div>
      )}
    </div>
  );
};

export default App;
