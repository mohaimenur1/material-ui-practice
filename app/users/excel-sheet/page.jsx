import ExcelSheet from "@/component/ExcelSheet";
import React from "react";

const ExcelSheetPage = async () => {
  const res = await fetch(`https://jsonplaceholder.typicode.com/posts`);
  const data = await res.json();

  console.log("data", data);

  return (
    <div>
      <ExcelSheet data={data} />
    </div>
  );
};

export default ExcelSheetPage;
