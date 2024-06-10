"use client";
import { deleteBooking } from "@/app/_lib/action";
import { TrashIcon } from "@heroicons/react/24/solid";
import { useTransition } from "react";

function DeleteReservation({ bookingId ,onDelete}) {
  const [isPending, startTransition] = useTransition();

  function handleDelete() {
    if (confirm("Are you sure you want to delete"))
      startTransition(() => onDelete(bookingId));
  }
  return (
    <button onClick={handleDelete} className="btn  btn-sm btn-error">
      {!isPending ? (
        <>
          <TrashIcon className="h-5 w-5 text-white" />
          <span className="mt-1 text-white">Delete</span>
        </>
      ) : (
        <button className="btn btn-sm btn-error btn-square">
          <span className="loading loading-spinner"></span>
        </button>
      )}
    </button>
  );
}

export default DeleteReservation;
