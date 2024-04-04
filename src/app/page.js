"use client";

import Link from "next/link";
import WbSunnyRoundedIcon from "@mui/icons-material/WbSunnyRounded";
import MonitorRoundedIcon from "@mui/icons-material/MonitorRounded";
import DarkModeIcon from "@mui/icons-material/DarkMode";
import { useState } from "react";
import Label from "@/components/label";
import ThemeRadio from "@/components/theme-radio";
import ReactFlagsSelect from "react-flags-select";

const links = [
  {
    href: "#about",
    title: "About",
  },
  {
    href: "#education",
    title: "Education",
  },
  {
    href: "#skills",
    title: "Skills",
  },
  {
    href: "#projects",
    title: "Projects",
  },
  {
    href: "#contact",
    title: "Contact",
  },
];

export default function Home() {
  const [currentTheme, setCurrentTheme] = useState("system");
  const [selected, setSelected] = useState("AZ");

  return (
    <>
      <header className="flex justify-between items-center p-4 border-b-2 border-blue-800 relative">
        <Link href="/" className="font-bold text-xl text-blue-800 uppercase">
          Next Demo
        </Link>

        <nav className="absolute left-1/2 -translate-x-1/2">
          <ul className="flex justify-between items-center">
            {links.map((link, index) => (
              <li key={index}>
                <Link
                  href={link.href}
                  className="py-2 px-4 rounded font-medium text-blue-800 border-2 border-transparent hover:border-blue-800 transition-colors"
                >
                  {link.title}
                </Link>
              </li>
            ))}
          </ul>
        </nav>

        <div className="flex justify-center items-center gap-x-4">
          <div className="flex justify-center items-center gap-x-1">
            <Label value="light" currentTheme={currentTheme}>
              <WbSunnyRoundedIcon className="text-blue-800" />
              <ThemeRadio
                value="light"
                currentTheme={currentTheme}
                onRadioChange={(e) => setCurrentTheme(e.target.value)}
              />
            </Label>
            <Label value="system" currentTheme={currentTheme}>
              <MonitorRoundedIcon className="text-blue-800" />
              <ThemeRadio
                value="system"
                currentTheme={currentTheme}
                onRadioChange={(e) => setCurrentTheme(e.target.value)}
              />
            </Label>
            <Label value="dark" currentTheme={currentTheme}>
              <DarkModeIcon className="text-blue-800" />
              <ThemeRadio
                value="dark"
                currentTheme={currentTheme}
                onRadioChange={(e) => setCurrentTheme(e.target.value)}
              />
            </Label>
          </div>

          <ReactFlagsSelect
            countries={["AZ", "TR", "GB"]}
            customLabels={{
              AZ: "Azərbaycan Dili",
              TR: "Türkçe",
              GB: "English",
            }}
            selected={selected}
            onSelect={(language) => setSelected(language)}
            className="w-[200px] !pb-0"
          />
        </div>
      </header>

      <div>
        <pre>Current Theme: {currentTheme}</pre>
      </div>
    </>
  );
}
