'use client'

import { signIn } from "next-auth/react";
import Image from "next/image";

export default function Home() {
  return (
 <div className="">
  <button type="submit" onClick={()=>signIn('google')}>google sign in</button>
 </div>
  );
}
