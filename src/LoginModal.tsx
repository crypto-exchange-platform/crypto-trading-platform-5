import { FC, useState, FormEvent } from "react";
import axios from "axios";

interface LoginModalProps {
  onClose: () => void;
}

export const LoginModal: FC<LoginModalProps> = ({ onClose }) => {
  const [emailOrUsername, setEmailOrUsername] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    setError("");
    if (!emailOrUsername || !password) {
      setError("Please fill all required fields.");
      return;
    }

    try {
      const response = await axios.post(
        "https://api.salesvault.vc/identity/api/auth/login",
        {
          emailOrUsername,
          password,
          twoFactorCode: null,
          rememberMe: null,
        }
      );
      if (response.data.accessToken) {
        window.location.href = "https://salesvault.vc/auth/login?returnUrl=%2F";
      }
    } catch (err: any) {
      setError(err.response?.data?.message || "Login failed.");
    }
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/60">
      <div className="bg-blue-950 text-black w-full max-w-md p-6 rounded-md shadow-lg relative">
        <button onClick={onClose} className="absolute right-4 top-4 text-xl">×</button>
        <h2 className="text-2xl font-bold mb-6 text-center text-white">Log In</h2>
        <form className="space-y-4" onSubmit={handleSubmit}>
          <input
            type="text"
            placeholder="Email or Username"
            className="w-full border p-2 rounded"
            value={emailOrUsername}
            onChange={(e) => setEmailOrUsername(e.target.value)}
          />
          <input
            type="password"
            placeholder="Password"
            className="w-full border p-2 rounded"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          {error && <div className="text-red-500 text-sm">{error}</div>}
          <button type="submit" className="w-full bg-black text-white py-2 rounded hover:bg-gray-900">
            Log In
          </button>
        </form>
      </div>
    </div>
  );
}; 