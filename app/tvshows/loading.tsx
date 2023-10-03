import { Skeleton } from "@/components/ui/skeleton";
import React from "react";

type Props = {};

const loading = (props: Props) => {
  return (
    <section className="flex flex-col container items-center gap-3 justify-center">
      <Skeleton className="container h-[65vh] rounded-md" />
      <div className="flex flex-wrap gap-3 w-full ">
        {[...Array(12)].map((i) => (
          <Skeleton key={i} className="w-40 h-52" />
        ))}
      </div>
    </section>
  );
};

export default loading;
