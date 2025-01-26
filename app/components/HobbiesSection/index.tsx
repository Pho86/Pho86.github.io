"use client";
import Section from "../Section";
import { useState } from "react";

import { motion } from "motion/react";
import Image from "next/image";
import { twMerge } from "tailwind-merge";

function Hobby({
  hobby,
  onMouseEnter,
  active,
}: {
  hobby: React.ReactNode;
  onMouseEnter: () => void;
  active: string;
}) {
  return (
    <li
      className={twMerge(
        `flex gap-2 py-3 px-3 hover:bg-bg-light cursor-pointer rounded-xl transition-all ${
          active === hobby ? "bg-bg-light" : "text-primary-600 font-light"
        }`
      )}
      onClick={onMouseEnter}
    >
      {hobby}
    </li>
  );
}

export default function HobbiesSection() {
  const [activeImage, setActiveImage] = useState("/hobbies/music.jpg");
  const [activeHobby, setActiveHobby] = useState("Listening to music");
  return (
    <Section title="Hobbies" id="hobbies" grid="md:grid-cols-2">
      <motion.div
        className="flex flex-col gap-2"
        initial={{ opacity: 0, filter: "blur(4px)" }}
        whileInView={{ opacity: 1, filter: "blur(0px)" }}
        transition={{ duration: 0.5 }}
      >
        <p>
          Outside of developing software and creating applications, you can find
          me often doing some of these activities in my free time.
        </p>
        <ul className="flex flex-col font-medium list-disc mt-2 gap-1">
          <Hobby
            active={activeHobby}
            hobby="Listening to music"
            onMouseEnter={() => {
              setActiveImage("/hobbies/music.jpg");
              setActiveHobby("Listening to music");
            }}
          />
          <Hobby
            active={activeHobby}
            hobby="Playing video games"
            onMouseEnter={() => {
              setActiveImage("/hobbies/gaming.jpg");
              setActiveHobby("Playing video games");
            }}
          />
          <Hobby
            active={activeHobby}
            hobby="Going to the gym"
            onMouseEnter={() => {
              setActiveImage("/hobbies/gym.jpg");
              setActiveHobby("Going to the gym");
            }}
          />
          <Hobby
            active={activeHobby}
            hobby="Reading books"
            onMouseEnter={() => {
              setActiveImage("/hobbies/books.jpg");
              setActiveHobby("Reading books");
            }}
          />
        </ul>
      </motion.div>
      <motion.div
        key={activeImage}
        initial={{ filter: "blur(1px)", opacity: .7 }}
        whileInView={{ filter: "blur(0px)", opacity: 1 }}
        animate={{ filter: "blur(0px)", opacity: 1 }}
        exit={{ filter: "blur(1px)", opacity: .7 }}
        transition={{ 
          filter: { duration: 0.2 },
          opacity: { duration: 0.6, delay: 0.2 }
        }}
      >
        <Image
          src={activeImage}
          alt="Philip Ho's Hobbies"
          width={1080}
          height={720}
          className="rounded-lg h-[250px] md:h-[400px] object-cover"
        />
      </motion.div>
    </Section>
  );
}
