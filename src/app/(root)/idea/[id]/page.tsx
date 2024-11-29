import Navbar from "@/components/Navbar";
import React from "react";

const page = async ({ params }: { params: Promise<{ id: string }> }) => {
  const id = (await params).id;

  return (
    <>
      <Navbar />
      <div className="main_section">
        <div className="section_container">
          <h1 className="text-4xl text-center">Idea Page string id={id}</h1>
        </div>
      </div>
    </>
  );
};

export default page;
