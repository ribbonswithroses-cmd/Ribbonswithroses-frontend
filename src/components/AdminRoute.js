import React, { useEffect, useState } from "react";
import { Navigate } from "react-router-dom";
import axios from "../api/axios";

const AdminRoute = ({ children }) => {
  const [loading, setLoading] = useState(true);
  const [isAdmin, setIsAdmin] = useState(false);

  useEffect(() => {
    let cancelled = false;

  const checkAdmin = async () => {
  try {
    await axios.get("/auth/admin/me"); // 🔥 uses session cookie
    if (!cancelled) {
      setIsAdmin(true);
    }
  } catch (err) {
    if (!cancelled) {
      setIsAdmin(false);
    }
  } finally {
    if (!cancelled) {
      setLoading(false);
    }
  }
};


    checkAdmin();
    return () => {
      cancelled = true;
    };
  }, []);

  if (loading) return <div>Checking admin...</div>;

  if (!isAdmin) {
    return <Navigate to="/admin/login" replace />;
  }

  return children;
};

export default AdminRoute;
