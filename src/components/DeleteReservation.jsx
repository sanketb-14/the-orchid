"use client";
import { deleteBooking } from "@/app/_lib/action";
import { TrashIcon } from "@heroicons/react/24/solid";
import { useTransition } from "react";
import { motion } from "framer-motion";
import { Trash2, Loader2 } from "lucide-react";

function DeleteReservation({ bookingId ,onDelete}) {
  const [isPending, startTransition] = useTransition();

  function handleDelete() {
    if (confirm("Are you sure you want to delete this reservation?"))
      startTransition(() => onDelete(bookingId));
  }

  return (
    <motion.button
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
      className="btn btn-error gap-2"
      onClick={handleDelete}
      disabled={isPending}
    >
      {!isPending ? (
        <>
          <Trash2 className="h-5 w-5" />
          Delete
        </>
      ) : (
        <>
          <Loader2 className="h-5 w-5 animate-spin" />
          Deleting...
        </>
      )}
    </motion.button>
  );
}

export default DeleteReservation;