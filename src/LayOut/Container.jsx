/* eslint-disable react/prop-types */
import { cn } from "@/lib/utils";



const Container = ({children, className}) => {
    return (
        <div className={cn('w-full mx-auto max-w-[1240px]', className)}>
            {children}
            
        </div>
    );
};

export default Container;