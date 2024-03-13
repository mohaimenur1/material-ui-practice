import MultiForm from "@/component/MultiForm";
import React from "react";

const photoFetch = async () => {
  const userPhotoResponse = await fetch(
    "https://jsonplaceholder.typicode.com/photos",
    {
      next: { revalidate: 3600 },
    }
  );

  const userPhotoData = await userPhotoResponse.json();

  return userPhotoData;
};

const MultiStepForm = async () => {
  const photos = await photoFetch();
  console.log("photo", photos);
  return (
    <div>
      <MultiForm />
    </div>
  );
};

export default MultiStepForm;
