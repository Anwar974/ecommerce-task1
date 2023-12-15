import axios from "axios";
import React, { useEffect, useState } from "react";
import { useQuery } from "react-query";

export default function Categories() {
  const getCategories = async () => {
    const { data } = await axios.get(
      `${import.meta.env.VITE_API_URL}/categories`
    );
    return data;
  };

  const { data, isLoading } = useQuery("web_categories", getCategories);
  console.log(data?.categories);

  if (isLoading) {
    return <p>...loading</p>;
  }

  return (
    <div className="container">
      <div className="row">
        {data?.categories.length
          ? data?.categories.map((category) => (
              <div className="col-lg-3" key={category._id}>
                <img src={category.image.secure_url} />
                <h2>{category.name}</h2>
              </div>
            ))
          : "<h2>no category found</h2>"}
      </div>
    </div>
  );
}
