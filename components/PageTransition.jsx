"use client"

import {motion} from "framer-motion";


export default function PageTransition(){


return(

<motion.div

initial={{
scaleY:1
}}

animate={{
scaleY:0
}}

transition={{
duration:0.8,
ease:"easeInOut"
}}

className="
fixed
inset-0
z-[9999]
bg-black
origin-top
"


>


<div className="
absolute
top-1/2
left-1/2
-translate-x-1/2
-translate-y-1/2
flex
gap-5
">


<div className="
w-4
h-4
rounded-full
bg-blue-400
animate-pulse
blur-sm
">
</div>


<div className="
w-6
h-6
rounded-full
bg-cyan-400
animate-bounce
blur-sm
">
</div>


<div className="
w-3
h-3
rounded-full
bg-purple-500
animate-pulse
blur-sm
">
</div>


</div>


</motion.div>


)

}