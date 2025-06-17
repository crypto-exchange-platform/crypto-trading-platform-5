import type { FC, ChangeEvent, FormEvent } from "react";
import { useEffect, useState } from "react";

interface SignupModalProps {
  onClose: () => void;
}

export const SignupModal: FC<SignupModalProps> = ({ onClose }) => {
  const [countries, setCountries] = useState([]);
  const [dialCodes, setDialCodes] = useState([]);

  const [form, setForm] = useState({
    firstName: "",
    lastName: "",
    username: "",
    email: "",
    phone: "",
    birthdate: "",
    country: "",
    language: "",
    dialCode: "",
    password: "",
  });

  useEffect(() => {
    fetch("https://api.salesvault.vc/api/countries")
      .then((res) => res.json())
      .then(setCountries);
    fetch("https://api.salesvault.vc/api/countries/dial-codes")
      .then((res) => res.json())
      .then(setDialCodes);
  }, []);

  const handleChange = (e: ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    console.log("Submit form", form);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/60 overflow-auto">
      <div className="bg-blue-950 text-black w-full max-w-xl p-6 rounded-md shadow-lg relative">
        <button onClick={onClose} className="absolute right-4 top-4 text-xl">×</button>
        <h2 className="text-2xl font-bold mb-6 text-center text-white">Sign Up</h2>
        <form
          className="grid grid-cols-1 md:grid-cols-2 gap-4"
          onSubmit={handleSubmit}
        >
          <input name="firstName" type="text" placeholder="First Name" className="border p-2 rounded" onChange={handleChange} />
          <input name="lastName" type="text" placeholder="Last Name" className="border p-2 rounded" onChange={handleChange} />
          <input name="username" type="text" placeholder="Username" className="border p-2 rounded" onChange={handleChange} />
          <input name="email" type="email" placeholder="Email" className="border p-2 rounded" onChange={handleChange} />
          <input name="phone" type="tel" placeholder="Phone Number" className="border p-2 rounded" onChange={handleChange} />
          <input name="birthdate" type="date" className="border p-2 rounded" onChange={handleChange} />
         
                    <input name="password" type="password" placeholder="Password" className="border p-2 rounded col-span-full" onChange={handleChange} />

          <input name="language" type="text" placeholder="Language" className="border p-2 rounded" onChange={handleChange} />
          <select name="dialCode" className="border p-2 rounded" onChange={handleChange}>
            <option value="">Dial Code</option>
            {dialCodes.map((d: any) => (
                 <option key={d.code} value={d.dial_code}>{d.dial_code}</option>
            ))}
          </select>
           <select name="country" className="border p-2 rounded w-full col-span-full" onChange={handleChange}>
            <option value="">Select Country</option>
            {countries.map((c: any) => (
              <option key={c.code} value={c.name}>{c.name}</option>
            ))}
          </select> 
          <button
            type="submit"
            className="w-full bg-black text-white py-2 rounded col-span-full hover:bg-gray-900"
          >
            Sign Up
          </button>
        </form>
      </div>
    </div>
  );
};
   