import { cn } from '@/lib/utils';


const ContainerWithOutSideBar = ({children, className}) => {
    return (
        <div className={cn('w-full mx-auto max-w-[1200px]', className)}>
            {children}
        </div>
    );
};

export default ContainerWithOutSideBar;