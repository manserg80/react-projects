import { useState } from 'react';
import './app.css';

export default function App() {
  const [weight, setWeight] = useState('');
  const [height, setHeight] = useState('');
  const [message, setMessage] = useState('');
  const [bmi, setBMI] = useState('');

  function calculateBMI() {
    const h = height / 100;
    const bmi = weight / (h * h);

    if (bmi < 16) {
      setMessage('Severe Thinness');
      setBMI(bmi.toFixed(2));
    } else if (bmi >= 16 && bmi < 17) {
      setMessage('Moderate Thinness');
      setBMI(bmi.toFixed(2));
    } else if (bmi >= 17 && bmi < 18.5) {
      setMessage('Mild Thinness');
      setBMI(bmi.toFixed(2));
    } else if (bmi >= 18.5 && bmi < 25) {
      setMessage('Healthy weight');
      setBMI(bmi.toFixed(2));
    } else if (bmi >= 25 && bmi < 30) {
      setMessage('Overweight');
      setBMI(bmi.toFixed(2));
    } else if (bmi >= 30 && bmi < 35) {
      setMessage('Obese Class I');
      setBMI(bmi.toFixed(2));
    } else if (bmi >= 35 && bmi < 40) {
      setMessage('Obese Class II');
      setBMI(bmi.toFixed(2));
    } else if (bmi >= 40) {
      setMessage('Obese Class III');
      setBMI(bmi.toFixed(2));
    }
  }

  return (
    <div className="app">
      <h1>BMI Calculator</h1>
      <span>Let's calculate your Body Mass Index. <br /> Enter the values below:</span>

      <div className="input-area">
        <input
          value={weight}
          type="text"
          placeholder="Please provide your weight (in kg)"
          onChange={(e) => setWeight(e.target.value)}
        />

        <input
          value={height}
          type="text"
          placeholder="Please provide your height (in cm)"
          onChange={(e) => setHeight(e.target.value)}
        />
        <button onClick={calculateBMI}>Calculate</button>
      </div>

      {message && (
        <div className="result">
          <h2>Result:</h2>
          <p>{message}</p>
          <p>Your BMI is: {bmi}</p>
        </div>
      )}
    </div>
  );
}