"use client"
import {useState} from "react";
import {ThemeContext} from "@/app/http/theme-context";
export default function Home() {
  const [theme, setTheme] = useState("light")
  return (
    <div>
      SomeThing useful
    </div>
  )
}
