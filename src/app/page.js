import { Footer } from "@/Components/Footer";
import { Header } from "@/Components/Header";
import { Task } from "@/Components/Task";
import { TaskInput } from "@/Components/TaskInput";

export default function Home() {
  return (
    // Main container
    <div className="container mx-auto">
      {/* header section */}
      <Header />

      {/* tasks container */}
      <div style={{ maxWidth: "400px" }} className="mx-auto">
        {/* task input */}
        <TaskInput />
        {/* task */}
        <Task title="Read a book" />
        {/* task */}
        <Task title="Take a shower" />
        {/* task */}
        <Task title="Sleep" />
      </div>

      {/* //footer section */}
      <Footer year="2023" fullName="Pinnaree Prommitr" studentId="650610785" />
    </div>
  );
}
