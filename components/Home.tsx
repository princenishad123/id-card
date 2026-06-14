'use client'
import { httpRequest } from "@/lib/httpRequest";
import { useState } from "react";

export default function Home() {
  const [response,setResponse] = useState<any>(null)
const [name,setName] = useState<string | null>(null)
  const handleRequest = async ()=>{
    try {
     const data =  await httpRequest.post("/create",{name});
     setResponse(data.data)
    } catch (error) {
      console.log(error)
    }
  }
  return (
    <main className="min-h-screen bg-slate-50 flex items-center justify-center px-6">
      <div className="max-w-2xl text-center">
        <span className="inline-block px-4 py-1 rounded-full bg-blue-100 text-blue-600 text-sm font-medium">
          AWS CI/CD Demo
        </span>

        <h1 className="mt-6 text-5xl font-bold text-slate-900">
          Deploy Faster with
          <span className="text-blue-600"> CI/CD</span>
        </h1>

        <p className="mt-6 text-lg text-slate-600">
          A simple full-stack application built with Next.js, Node.js,
          Docker, GitHub Actions, and AWS deployment pipelines.
        </p>

        <input type="text" placeholder="Enter your name" onChange={(e)=>setName(e.target.value)} className="p-2 outline-none border border-green-700" />

        {
          response && JSON.stringify(response)
        }

        <div className="mt-8 flex justify-center gap-4">
          <button onClick={handleRequest} className="px-6 py-3 rounded-lg bg-blue-600 text-white font-medium hover:bg-blue-700 transition">
            Create request
          </button>

          <button className="px-6 py-3 rounded-lg border border-slate-300 text-slate-700 font-medium hover:bg-slate-100 transition">
            Learn More
          </button>
        </div>

        <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-4">
          <div className="rounded-xl bg-white p-6 shadow-sm border border-slate-200">
            <h3 className="font-semibold text-slate-900">Next.js</h3>
            <p className="mt-2 text-sm text-slate-600">
              Modern frontend framework.
            </p>
          </div>

          <div className="rounded-xl bg-white p-6 shadow-sm border border-slate-200">
            <h3 className="font-semibold text-slate-900">Docker</h3>
            <p className="mt-2 text-sm text-slate-600">
              Containerized deployments.
            </p>
          </div>

          <div className="rounded-xl bg-white p-6 shadow-sm border border-slate-200">
            <h3 className="font-semibold text-slate-900">AWS</h3>
            <p className="mt-2 text-sm text-slate-600">
              Production-ready hosting.
            </p>
          </div>
        </div>
      </div>
    </main>
  );
}