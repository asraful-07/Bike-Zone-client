"use client";

const Page = async ({ params }) => {
  const id = await params.id;

  return (
    <div>
      <h1>Bike Details {id}</h1>
    </div>
  );
};

export default Page;
