// src/App.js
import React, { useState } from 'react';
import axios from 'axios';
import './App.css';

function App() {
  const [name, setName] = useState('');
  const [symptom1, setSymptom1] = useState('');
  const [symptom2, setSymptom2] = useState('');
  const [symptom3, setSymptom3] = useState('');
  const [symptom4, setSymptom4] = useState('');
  const [symptom5, setSymptom5] = useState('');
  const [model, setModel] = useState('decision_tree');
  const [prediction, setPrediction] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post('http://127.0.0.1:5000/predict', {
        name,
        symptom1,
        symptom2,
        symptom3,
        symptom4,
        symptom5,
        model
      });
      setPrediction(response.data.predicted_disease);
    } catch (error) {
      console.error("There was an error!", error);
    }
  };

  return (
    <div className="App">
      <h1>MediAI: Smart Disease Predictor</h1>
      <form className="form-container" onSubmit={handleSubmit}>
        <input
         className="form-input"
          type="text"
          value={name}
          onChange={(e) => setName(e.target.value)}
          placeholder="Name"
          required
        />
       <label className="label">Select Symptoms</label>
        <select
          value={symptom1}
          onChange={(e) => setSymptom1(e.target.value)}
          className="form-input"
        >
          <option value="">Select Symptom</option>
          {l1.map((symptom, index) => (
            <option key={index} value={symptom}>{symptom}</option>
          ))}
        </select>
        <select
          value={symptom2}
          onChange={(e) => setSymptom2(e.target.value)}
          className="form-input"
        >
          <option value="">Select Symptom</option>
          {l1.map((symptom, index) => (
            <option key={index} value={symptom}>{symptom}</option>
          ))}
        </select>
        <select
          value={symptom3}
          onChange={(e) => setSymptom3(e.target.value)}
          className="form-input"
        >
          <option value="">Select Symptom</option>
          {l1.map((symptom, index) => (
            <option key={index} value={symptom}>{symptom}</option>
          ))}
        </select>
        <select
          value={symptom4}
          onChange={(e) => setSymptom4(e.target.value)}
          className="form-input"
        >
          <option value="">Select Symptom</option>
          {l1.map((symptom, index) => (
            <option key={index} value={symptom}>{symptom}</option>
          ))}
        </select>
        <select
          value={symptom5}
          onChange={(e) => setSymptom5(e.target.value)}
          className="form-input"
        >
          <option value="">Select Symptoms</option>
          {l1.map((symptom, index) => (
            <option key={index} value={symptom}>{symptom}</option>
          ))}
        </select>
        <div className="select-algorithm">
          <label className="label">Select Algorithm</label>
          <select
            value={model}
            onChange={(e) => setModel(e.target.value)}
            className="form-input"
          >
            <option value="decision_tree">Decision Tree</option>
            <option value="random_forest">Random Forest</option>
            <option value="knn">K-Nearest Neighbors</option>
            <option value="naive_bayes">Naive Bayes</option>
          </select>
        </div>
        <button className="submit-button" type="submit">Predict Disease</button>
      </form>
      {prediction && <div className="prediction">Predicted Disease: {prediction}</div>}
    </div>
  );
}

const l1 = ['back_pain', 'constipation', 'abdominal_pain', 'diarrhoea', 'mild_fever', 'yellow_urine',
  'yellowing_of_eyes', 'acute_liver_failure', 'fluid_overload', 'swelling_of_stomach',
  'swelled_lymph_nodes', 'malaise', 'blurred_and_distorted_vision', 'phlegm', 'throat_irritation',
  'redness_of_eyes', 'sinus_pressure', 'runny_nose', 'congestion', 'chest_pain', 'weakness_in_limbs',
  'fast_heart_rate', 'pain_during_bowel_movements', 'pain_in_anal_region', 'bloody_stool',
  'irritation_in_anus', 'neck_pain', 'dizziness', 'cramps', 'bruising', 'obesity', 'swollen_legs',
  'swollen_blood_vessels', 'puffy_face_and_eyes', 'enlarged_thyroid', 'brittle_nails',
  'swollen_extremeties', 'excessive_hunger', 'extra_marital_contacts', 'drying_and_tingling_lips',
  'slurred_speech', 'knee_pain', 'hip_joint_pain', 'muscle_weakness', 'stiff_neck', 'swelling_joints',
  'movement_stiffness', 'spinning_movements', 'loss_of_balance', 'unsteadiness',
  'weakness_of_one_body_side', 'loss_of_smell', 'bladder_discomfort', 'foul_smell_of_urine',
  'continuous_feel_of_urine', 'passage_of_gases', 'internal_itching', 'toxic_look_(typhos)',
  'depression', 'irritability', 'muscle_pain', 'altered_sensorium', 'red_spots_over_body', 'belly_pain',
  'abnormal_menstruation', 'dischromic_patches', 'watering_from_eyes', 'increased_appetite', 'polyuria', 'family_history', 'mucoid_sputum',
  'rusty_sputum', 'lack_of_concentration', 'visual_disturbances', 'receiving_blood_transfusion',
  'receiving_unsterile_injections', 'coma', 'stomach_bleeding', 'distention_of_abdomen',
  'history_of_alcohol_consumption', 'fluid_overload', 'blood_in_sputum', 'prominent_veins_on_calf',
  'palpitations', 'painful_walking', 'pus_filled_pimples', 'blackheads', 'scurring', 'skin_peeling',
  'silver_like_dusting', 'small_dents_in_nails', 'inflammatory_nails', 'blister', 'red_sore_around_nose',
  'yellow_crust_ooze'];

export default App;