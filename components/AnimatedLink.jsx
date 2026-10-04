"use client"

import Link from "next/link";
import {useRouter} from "next/navigation";
import {useState} from "react";


export default function AnimatedLink({
href,
children
}){


const router=useRouter();

const [loading,setLoading]=useState(false);



function handleClick(e){

e.preventDefault();

setLoading(true);


setTimeout(()=>{

router.push(href);

},700);


}



return(

<Link

href={href}

onClick={handleClick}

>

{children}

</Link>

)

}