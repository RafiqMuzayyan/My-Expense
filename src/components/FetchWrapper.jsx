"use client";
import { clientFetch } from "@/libs/clientFetch";
import React, { useEffect, useState } from "react";

const FetchWrapper = ({ 
  children,
  api = "/api/transactions" 
}) => {

  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const getData = async () => {
      try {
        setLoading(true);
        setError(null);

        const res = await clientFetch(api);
        const result = await res.json();

        if (!res.ok) {
          throw new Error(result.message || "Request failed");
        }

        setData(result);

      } catch (err) {
        setError(err.message || "Something went wrong");
      } finally {
        setLoading(false);
      }
    };

    getData();
  }, [api]);

  if (loading) return <p>Loading...</p>;

  if (error) return <p style={{ color: "red" }}>{error}</p>;

  return React.cloneElement(children, { data });
};

export default FetchWrapper;
