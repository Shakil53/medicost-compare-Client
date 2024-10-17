/* eslint-disable react/prop-types */
import { cn } from "@/lib/utils"

const SpreadingCircleLoader = ({ className }) => {
    return (
        <div className={cn("relative w-10 h-10", className)} role="status" aria-label="Loading">
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="w-full h-full rounded-full animate-ping bg-teal-100/20" />
        </div>
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="w-3/4 h-3/4 rounded-full animate-ping animation-delay-150 bg-teal-200/40" />
        </div>
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="w-1/2 h-1/2 rounded-full animate-ping animation-delay-300 bg-teal-300/60" />
        </div>
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="w-1/4 h-1/4 rounded-full animate-ping animation-delay-500 bg-teal-400" />
        </div>
        <span className="sr-only">Loading...</span>
      </div>
      
    );
};

export default SpreadingCircleLoader;


