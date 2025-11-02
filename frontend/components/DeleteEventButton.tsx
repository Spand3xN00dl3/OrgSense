'use client'

import { useState } from "react";
import { CiTrash, CiWarning } from "react-icons/ci";

export default function DeleteEventButton() {
  const [showPopup, setShowPopup] = useState(false);

  return (
    <>
      <button
        className="
          w-26 h-10 border border-red-500 rounded-lg flex flex-row items-center justify-center gap-1 cursor-pointer
          hover:bg-red-500 text-red-500 hover:text-white
          transitions-color duration-200"
        onClick={() => setShowPopup(true)}
      >
        <CiTrash size={20} className="text-current" />
        <p className="font-sans">Delete</p>
      </button>
      {showPopup && <DeletePopup closePopup={() => setShowPopup(false)} />}
    </>
  );
}

function DeletePopup({ closePopup }: { closePopup: () => void }) {
  return (
    <div className="fixed top-0 left-0 z-10 w-screen h-screen backdrop-blur-sm flex items-center justify-center">
      <div className="w-72 border rounded-lg bg-white flex flex-col py-4">
        <div className="h-16 flex items-center justify-center">
          <div className="size-12 bg-red-500/20 rounded-full flex items-center justify-center">
            <CiWarning size={32} color="red" />
          </div>
        </div>
        <div className="h-8 flex items-center">
          <p className="w-full text-center text-black text-xl font-bold">Are you sure?</p>
        </div>
        <div className="px-4 py-2">
          <p className="text-[#262626] text-center">This action will delete the event with no option of recovery.</p>
        </div>
        <div className="h-12 flex flex-row items-center justify-center gap-6">
          <button
            className="
              w-24 h-10 border border-[#262626] rounded-md cursor-pointer
              hover:bg-[#262626] hover:text-white transition-color duration-200
            "
            onClick={closePopup}
          >
            <p className="font-sans">Close</p>
          </button>
          <button
            className="
              w-24 h-10 border border-red-500 rounded-md cursor-pointer
              hover:bg-red-500 text-red-500 hover:text-white transition-color duration-200
            "
            onClick={closePopup}
          >
            Delete
          </button>
        </div>
      </div>
    </div>
  );
}
