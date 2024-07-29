import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const SignUp = () => {
  const [step, setStep] = useState(1);
  const [codeSent, setCodeSent] = useState(false);
  const [resendEnabled, setResendEnabled] = useState(false);

  const [firstName, setFirstName] = useState('');
  const [birthYear, setBirthYear] = useState('');
  const [gender, setGender] = useState('');
  const [email, setEmail] = useState('');
  const [code, setCode] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');

  const handleSendCode = () => {
    setCodeSent(true);
    setResendEnabled(false);
    // Here you would typically send the code via email
    setTimeout(() => setResendEnabled(true), 60000); // Enable resend after 1 minute
  };

  const handleNextStep = () => {
    if (firstName && birthYear && gender && password && confirmPassword) {
      if (password !== confirmPassword) {
        alert("Parollar mos kelmaydi.");
      } else {
        setStep(2);
      }
    } else {
      alert("Iltimos, barcha maydonlarni to'ldiring.");
    }
  };

  const handlePrevStep = () => {
    setStep(1);
  };

  const handleSignUp = () => {
    // Here you would handle the sign-up logic
    alert("Ro'yhatdan o'tish muvaffaqiyatli!");
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100">
      <div className="bg-white p-8 rounded shadow-md w-full max-w-md">
        <h2 className="text-2xl font-bold mb-1 text-center">Ro'yhatdan o'tish</h2>
        <p className="text-center mb-6">
          Akkautingiz bormi? <Link to="/signin" className="text-blue-500">Kirish</Link>
        </p>
        {step === 1 ? (
          <div>
            <div className="mb-4">
              <label className="block text-gray-700">Ism</label>
              <input
                type="text"
                className="w-full p-2 border rounded"
                value={firstName}
                onChange={(e) => setFirstName(e.target.value)}
              />
            </div>
            <div className="mb-4">
              <label className="block text-gray-700">Tug'ilgan yil</label>
              <input
                type="date"
                className="w-full p-2 border rounded"
                value={birthYear}
                onChange={(e) => setBirthYear(e.target.value)}
              />
            </div>
            <div className="mb-4">
              <label className="block text-gray-700">Jins</label>
              <select
                className="w-full p-2 border rounded"
                value={gender}
                onChange={(e) => setGender(e.target.value)}
              >
                <option value="">Tanlang</option>
                <option value="Erkak">Erkak</option>
                <option value="Ayol">Ayol</option>
              </select>
            </div>
            <div className="mb-4">
              <label className="block text-gray-700">Parol</label>
              <input
                type="password"
                className="w-full p-2 border rounded"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
            </div>
            <div className="mb-4">
              <label className="block text-gray-700">Parolni tasdiqlang</label>
              <input
                type="password"
                className="w-full p-2 border rounded"
                value={confirmPassword}
                onChange={(e) => setConfirmPassword(e.target.value)}
              />
            </div>
            <button onClick={handleNextStep} className="w-full bg-blue-500 text-white p-2 rounded mb-2">Keyingi</button>
          </div>
        ) : (
          <div>
            <div className="mb-4">
              <label className="block text-gray-700">Email</label>
              <input
                type="email"
                className="w-full p-2 border rounded"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
            </div>
            <div className="mb-4">
              <label className="block text-gray-700">Kod</label>
              <input
                type="text"
                className="w-full p-2 border rounded"
                value={code}
                onChange={(e) => setCode(e.target.value)}
                disabled={!codeSent}
              />
            </div>
            {!codeSent ? (
              <button onClick={handleSendCode} className="w-full bg-blue-500 text-white p-2 rounded">Kod jo'natish</button>
            ) : (
              <p className="text-green-500 mb-4">Biz bu emailga habar yubordik. Iltimos, tekshiring va kodni kiriting!</p>
            )}
            {resendEnabled && (
              <button onClick={handleSendCode} className="w-full bg-blue-500 text-white p-2 rounded">Kodini qayta yuboring</button>
            )}
            <button onClick={handlePrevStep} className="w-full bg-gray-500 text-white p-2 rounded mt-2">Orqaga</button>
          </div>
        )}
      </div>
    </div>
  );
};

export default SignUp;
