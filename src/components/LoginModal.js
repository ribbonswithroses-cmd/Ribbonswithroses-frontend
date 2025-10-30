// src/components/LoginModal.js
import React, { useState } from "react";
import toast from "react-hot-toast";
import axios from "../api/axios";

const LoginModal = ({ onClose, onLogin }) => {
  const [email, setEmail] = useState("");
  const [otp, setOtp] = useState("");
  const [step, setStep] = useState("email"); // email -> otp
  const [loading, setLoading] = useState(false);

  // Request OTP
  const handleRequestOtp = async (e) => {
    e.preventDefault();
    if (!email) {
      toast.error("Please enter a valid email!");
      return;
    }
    try {
      setLoading(true);
      await axios.post("/users/request-otp", { email }, { withCredentials: true });
      toast.success("OTP sent to your email!");
      setStep("otp");
    } catch (err) {
      toast.error(err.response?.data?.message || "Failed to send OTP");
    } finally {
      setLoading(false);
    }
  };

 // Verify OTP
const handleVerifyOtp = async (e) => {
  e.preventDefault();
  if (!otp) {
    toast.error("Please enter the OTP!");
    return;
  }
  try {
    setLoading(true);
    const res = await axios.post(
      "/users/verify-otp",
      { email, otp },
      { withCredentials: true }
    );

    toast.success("Login successful!");

    // ✅ Save token in storage so we can use it later (checkout, orders, etc.)
    if (res.data.token) {
      sessionStorage.setItem("token", res.data.token); 
      // Or localStorage.setItem("token", res.data.token) if you want persistent login
    }

    onLogin(res.data.user); // pass user to parent (Header)
    onClose();
  } catch (err) {
    toast.error(err.response?.data?.message || "Invalid OTP");
  } finally {
    setLoading(false);
  }
};


  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-[100]">
      <div className="bg-white rounded-xl shadow-lg p-6 w-80 relative">
        <button
          onClick={onClose}
          className="absolute top-2 right-2 text-gray-500 hover:text-black"
        >
          ✕
        </button>

        <h2 className="text-xl font-bold mb-4 text-center">
          {step === "email" ? "Login with Email" : "Enter OTP"}
        </h2>

        {step === "email" ? (
          <form onSubmit={handleRequestOtp} className="space-y-4">
            <input
              type="email"
              placeholder="Enter your email"
              className="w-full border rounded-lg px-3 py-2"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />

            <button
              type="submit"
              disabled={loading}
              className="w-full bg-pink-500 text-white py-2 rounded-lg hover:bg-pink-600 transition disabled:opacity-50"
            >
              {loading ? "Sending..." : "Send OTP"}
            </button>
          </form>
        ) : (
          <form onSubmit={handleVerifyOtp} className="space-y-4">
            <input
              type="text"
              placeholder="Enter OTP"
              className="w-full border rounded-lg px-3 py-2"
              value={otp}
              onChange={(e) => setOtp(e.target.value)}
            />

            <button
              type="submit"
              disabled={loading}
              className="w-full bg-green-500 text-white py-2 rounded-lg hover:bg-green-600 transition disabled:opacity-50"
            >
              {loading ? "Verifying..." : "Verify OTP"}
            </button>
          </form>
        )}
      </div>
    </div>
  );
};

export default LoginModal;
