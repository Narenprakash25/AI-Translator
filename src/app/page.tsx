import Image from "next/image";
import TextArea from '@/app/components/Inputs/TextArea';
import React, { useState, ChangeEvent } from "react";


export default function Home() {
  const [sourceText, setSourceText]= useState<string>("");
  return (
    <div>
      <div className="h-[50rem] w-full dark:bg-black bg-white  dark:bg-grid-white/[0.2] bg-grid-black/[0.2] relative flex items-center justify-center">
      {/* Radial gradient for the container to give a faded look */}
      <div className="absolute pointer-events-none inset-0 flex items-center justify-center dark:bg-black bg-white [mask-image:radial-gradient(ellipse_at_center,transparent_20%,black)]"></div>
     <div className="relative overflow-hidden h-screen">
      <div className="max-w-[85rem] mx-auto px-4 sm:px-6 py-10 sm:py-24">
        <div className="text-center">
          <h1 className="text-4xl sm:text-6xl font-bold">
            Language <span className="text-[#f87315]">Speak</span>
          </h1>
          <p className="mt-3 text-neutral-400 font-bold">
            LinguaSpeak: Bridging Voices ,Connecting Worlds
          </p>

          <div className="mt-7 sm:mt-12 mx-auto max-w--3xl relative">
            <div className="grid gap-4 md:grid-cols-2 grid-cols-1">
              <div className="relative z-10 flex flex-col space-x-3 border rounded-lg shadow-lg bg-neutral-900 border-neutral-700 shadow-gray-900/20"> 
                <TextArea
                id='source-language'
                placeholder={'Source Language'}
                value={sourceText}
                onChange={(e:ChangeEvent<HTMLTextAreaElement>)=>{
                  setSourceText(e.target.value)
                }}
                 
                >

      
              </div>

            </div>

          </div>
        </div>
      </div>

     </div>
    </div>
    </div>
  );
}
