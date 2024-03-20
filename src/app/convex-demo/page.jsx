"use client";
import { useMutation, useQuery } from "convex/react";
import { api } from "../../../convex/_generated/api";

export default function Home() {
  const tasks = useQuery(api.tasks.get);
  const mutateSomething = useMutation(api.myFunctions.createTask);
  const handleClick = () => {
    mutateSomething({ text: "new task", isCompleted:false });
  };
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      {tasks?.map(({ _id, text }) => (
        <div key={_id}>{text}</div>
      ))}
      <p className="text-center text-2xl">
        <button onClick={handleClick}>Entry into db</button>
        </p>
    </main>
  );
}