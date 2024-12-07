import Navbar from "@/components/Navbar";
import IdeaForm from "@/components/IdeaForm";
import { auth } from "@/auth";
import { redirect } from "next/navigation";

const page = async () => {
  const session = await auth();

  if (!session) redirect("/");

  return (
    <>
      <Navbar search={false} />
      <div className="px-5 pt-8 w-full flex flex-col items-center min-h-screen">
        <h1 className="text-2xl font-bold text-white">Create Your Idea!</h1>
        <section className="section_container flex justify-center">
          <IdeaForm />
        </section>
      </div>
    </>
  );
};

export default page;
