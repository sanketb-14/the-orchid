"use client";

import { updateGuest } from "@/app/_lib/action";
import SubmitButton from "./SubmitButton";

function UpdateProfileForm({ user, children }) {
  const {fullName, email, nationality, nationalID, countryFlag} = user

  return (
    <form className="bg-base-100 rounded-2xl shadow-lg p-8 space-y-6" action={updateGuest}>
      <div className="space-y-2">
        <label className="text-sm font-semibold text-base-content/70">Full name</label>
        <input
          defaultValue={fullName}
          name="fullName"
          disabled
          className="input input-bordered w-full bg-base-200 disabled:opacity-50 disabled:cursor-not-allowed"
        />
      </div>

      <div className="space-y-2">
        <label className="text-sm font-semibold text-base-content/70">Email address</label>
        <input
          defaultValue={email}
          name="email"
          disabled
          className="input input-bordered w-full bg-base-200 disabled:opacity-50 disabled:cursor-not-allowed"
        />
      </div>

      <div className="space-y-2">
        <div className="flex items-center justify-between">
          <label htmlFor="nationality" className="text-sm font-semibold text-base-content/70">
            Where are you from?
          </label>
          {countryFlag && (
            <img
              src={countryFlag}
              alt="Country flag"
              className="h-6 rounded shadow-sm"
            />
          )}
        </div>
        {children}
      </div>

      <div className="space-y-2">
        <label htmlFor="nationalID" className="text-sm font-semibold text-base-content/70">
          National ID number
        </label>
        <input
          defaultValue={nationalID}
          name="nationalID"
          className="input input-bordered w-full focus:input-primary"
        />
      </div>

      <div className="flex justify-end pt-4">
        <SubmitButton pendingLabel="Updating...">
          Update Profile
        </SubmitButton>
      </div>
    </form>
  );
}

export default UpdateProfileForm;