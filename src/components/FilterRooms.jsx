"use client";
import { usePathname, useRouter, useSearchParams } from "next/navigation";
import { motion } from "framer-motion";
import { Users, Home, Check } from "lucide-react";

export default function Filter() {
  const filters = [
    { value: 'all', label: 'All Rooms', icon: Home },
    { value: 'small', label: '1-2 Guest', icon: Users },
    { value: 'medium', label: '2-4 Guest', icon: Users },
    { value: 'large', label: 'More than 4 Guest', icon: Users }
  ];

  return (
    <motion.div 
      className="flex gap-3 flex-wrap justify-center"
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
    >
      {filters.map((filter, index) => (
        <Button key={filter.value} filter={filter.value} index={index}>
          <filter.icon className="w-5 h-5" />
          {filter.label}
        </Button>
      ))}
    </motion.div>
  );
}

function Button({filter, children, index}){
  const searchParams = useSearchParams();
  const router = useRouter();
  const pathname = usePathname();

  const activeFilter = searchParams.get("capacity") ?? "all";
  const isActive = activeFilter === filter;

  function handleFilter(val){
    const params = new URLSearchParams(searchParams);
    params.set("capacity", val);
    router.replace(`${pathname}?${params.toString()}`, {scroll: false});
  }

  return (
    <motion.button
      initial={{ opacity: 0, y: -10 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: index * 0.1 }}
      whileHover={{ scale: 1.05, y: -3 }}
      whileTap={{ scale: 0.95 }}
      className={`btn gap-2 ${isActive ? 'btn-primary' : 'btn-outline'}`}
      onClick={() => handleFilter(filter)}
    >
      {children}
      {isActive && (
        <motion.div
          initial={{ scale: 0, rotate: -180 }}
          animate={{ scale: 1, rotate: 0 }}
          transition={{ type: "spring", stiffness: 500 }}
        >
          <Check className="w-5 h-5" />
        </motion.div>
      )}
    </motion.button>
  );
}