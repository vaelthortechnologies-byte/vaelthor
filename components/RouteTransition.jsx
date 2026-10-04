"use client"

import { AnimatePresence, motion } from "framer-motion";
import { usePathname } from "next/navigation";


export default function RouteTransition({children}){


const pathname = usePathname();


return(

<AnimatePresence mode="wait">


<motion.div

key={pathname}

initial={{
opacity:0,
scale:0.98
}}

animate={{
opacity:1,
scale:1
}}

exit={{
opacity:0,
scale:1.05
}}

transition={{
duration:0.5,
ease:"easeInOut"
}}

>

{children}


</motion.div>


</AnimatePresence>

)

}