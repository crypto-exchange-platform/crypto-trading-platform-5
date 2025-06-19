import { FC, ChangeEvent, FormEvent, useEffect, useState } from "react";
import axios from "axios";

interface SignupModalProps {
  onClose: () => void;
  onSignupSuccess: () => void;
}

export const SignupModal: FC<SignupModalProps> = ({ onClose, onSignupSuccess }) => {
  const [countries, setCountries] = useState<any[]>([]);
  const [dialCodes, setDialCodes] = useState<any[]>([]);
  const [error, setError] = useState("");
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

  const handleChange = (
    e: ChangeEvent<HTMLInputElement | HTMLSelectElement>
  ) => setForm({ ...form, [e.target.name]: e.target.value });

  const isValidEmail = (email: string) =>
    /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
  const isStrongPassword = (pass: string) =>
    /^(?=.*[A-Za-z])(?=.*\d)(?=.*[!@#$%^&*()_+\-=]).{8,}$/.test(pass);

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    setError("");
    const required = ["firstName", "lastName", "username", "email", "password"];
    for (const f of required) {
      if (!form[f as keyof typeof form]) {
        setError("Please fill all required fields.");
        return;
      }
    }
    if (!isValidEmail(form.email)) {
      setError("Invalid email");
      return;
    }
    if (!isStrongPassword(form.password)) {
      setError(
        "Password must be 8+ chars, include number & special char"
      );
      return;
    }
    const isoDOB =
      form.birthdate
        ? new Date(form.birthdate).toISOString().split("T")[0]
        : null;
    try {
      await axios.post(
        "https://api.salesvault.vc/identity/api/clients/create-client-via-web",
        {
          firstName: form.firstName,
          lastName: form.lastName,
          username: form.username,
          email: form.email,
          password: form.password,
          telephone: form.dialCode + form.phone,
          country: form.country || null,
          language: form.language || null,
          dateOfBirth: isoDOB,
          source:
            window.location.hostname === "localhost"
              ? "cryptotrade.salesvault.vc"
              : window.location.hostname,
        }
      );
      onClose();           // hide signup
      onSignupSuccess();   // show login
    } catch (err: any) {
      setError(err.response?.data?.message || "Signup failed.");
    }
  };  
  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/60 overflow-auto">
      <div className="bg-blue-950 text-black w-full max-w-xl p-6 rounded-md shadow-lg relative">
        <button
          onClick={onClose}
          className="absolute right-4 top-4 text-xl cursor-pointer"
        >
          ×
        </button>
        <h2 className="text-2xl font-bold mb-6 text-center text-white">
          Sign Up
        </h2>
        <form
          className="grid grid-cols-1 md:grid-cols-2 gap-4"
          onSubmit={handleSubmit}
        >
          {[
            { name: "firstName", placeholder: "First Name" },
            { name: "lastName", placeholder: "Last Name" },
            { name: "username", placeholder: "Username" },
            { name: "email", placeholder: "Email", type: "email" },
            { name: "phone", placeholder: "Phone Number", type: "tel" },
            { name: "birthdate", placeholder: "", type: "date" },
            {
              name: "password",
              placeholder: "Password",
              type: "password",
              full: true,
            },
            { name: "language", placeholder: "Language" },
          ].map(({ name, placeholder, type = "text", full }) => (
            <input
              key={name}
              name={name}
              type={type}
              placeholder={placeholder}
              className={`border p-2 rounded bg-white text-black ${
                full ? "col-span-full" : ""
              }`}
              onChange={handleChange}
            />
          ))}
          <select
            name="dialCode"
            className="border p-2 rounded cursor-pointer bg-white text-black"
            onChange={handleChange}
          >
            <option value="">Dial Code</option>
            {dialCodes.map((d: any) => (
              <option key={d.code} value={d.dial_code}>
                {d.dial_code}
              </option>
            ))}
          </select>
          <select
            name="country"
            className="border p-2 rounded w-full col-span-full cursor-pointer bg-white text-black"
            onChange={handleChange}
          >
            <option value="">Select Country</option>
            {countries.map((c: any) => (
              <option key={c.code} value={c.name}>
                {c.name}
              </option>
            ))}
          </select>
          {error && (
            <div className="text-red-500 text-sm col-span-full">{error}</div>
          )}
          <button
            type="submit"
            className="w-full bg-black text-white py-2 rounded col-span-full hover:bg-gray-900 cursor-pointer"
          >
            Sign Up
          </button>
        </form>
      </div>
    </div>
  );
};
