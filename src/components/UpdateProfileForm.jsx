"use client";

import { updateGuest } from "@/app/_lib/action";
import SubmitButton from "./SubmitButton";


function UpdateProfileForm({ user, children }) {
  const {fullName,email,nationality,nationalID,countryFlag} = user
  

  return (
    <form className="bg-base-200 rounded-xl shadow-xl py-8 px-12 text-lg flex gap-6 flex-col  " action={updateGuest}>
      <div className="space-y-2 text-primary">
        <label>Full name</label>
        <input
          defaultValue={fullName}
          name="fullName"
          disabled
          className="px-5 py-3 bg-primary-200 text-primary-800 w-full shadow-sm rounded-sm disabled:cursor-not-allowed disabled:bg-gray-600 disabled:text-gray-400"
        />
      </div>

      <div className="space-y-2 text-primary">
        <label>Email address</label>
        <input
          defaultValue={email}
          name="email"
          disabled
          className="px-5 py-3 bg-primary-200 text-primary-800 w-full shadow-sm rounded-sm disabled:cursor-not-allowed disabled:bg-gray-600 disabled:text-gray-400"
        />
      </div>

      <div className="space-y-2 text-primary">
        <div className="flex items-center justify-between">
          <label htmlFor="nationality">Where are you from?</label>
          <img
            src={countryFlag}
            alt="Country flag"
            className="h-5 rounded-sm"
          />
        </div>

        {children}
      </div>

      <div className="space-y-2 text-primary">
        <label htmlFor="nationalID">National ID number</label>
        <input
        defaultValue={nationalID}
          name="nationalID"
          className="px-5 py-3 bg-primary-200 text-primary-800 w-full shadow-sm rounded-sm"
        />
      </div>

      <div className="flex justify-end items-center gap-6">
        <SubmitButton pendingLabel="updating...">Update Profile</SubmitButton>
       
      </div>
    </form>
  );
}


export default UpdateProfileForm;
