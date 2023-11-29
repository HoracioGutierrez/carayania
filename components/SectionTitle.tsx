import { cn } from '@/lib/utils';


type Props = {
    children?: React.ReactNode,
    className?: string
}
export default function SectionTitle({ children, className }: Props) {
    return (
        <h2 className={cn("scroll-m-20 border-b pb-2 text-xl xs:text-2xl lg:text-3xl font-semibold xs:font-bold tracking-tight first:mt-0", className)}>
            {children}
        </h2>
    )
}