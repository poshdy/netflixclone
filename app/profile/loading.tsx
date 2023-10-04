import { Skeleton } from "@/components/ui/skeleton";
import React from "react";

const loading = () => {
  return (
    <section className="flex  container items-center gap-3 justify-center">
      <div className="flex flex-wrap gap-3 w-full justify-center items-center ">
        {[...Array(12)].map((i) => (
          <Skeleton key={i} className="w-40 h-52" />
        ))}
      </div>
    </section>
  );
};

export default loading;
