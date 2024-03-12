/* eslint-disable no-unused-vars */
import React, { useState, useEffect } from "react";
import Card from "./Card";

// const data = [
//   {
//     word: "Chutiya",
//     language: "Hindi",
//     background:
//       "Chutiya is a derogatory slang term in Hindi used to describe someone who is foolish, naive, or easily deceived. It is considered highly offensive and should be used with caution.",
//     definition:
//       "Chutiya refers to a person who lacks intelligence or common sense, often behaving in a foolish or gullible manner. It can be used as an insult or to mock someone's actions or decisions.",
//     example: "Don't be such a chutiya and fall for his lies.",
//     tags: "insult, foolishness, offensive",
//     by: "Anonymous",
//     likes: 50,
//     dislikes: 20,
//   },
//   {
//     word: "Gandu",
//     language: "Hindi",
//     background:
//       "Gandu is a highly offensive slang term in Hindi used to insult someone by calling them a fool or a worthless person. It is considered extremely derogatory and should be avoided in polite conversation.",
//     definition:
//       "Gandu literally means 'asshole' in Hindi. It is used to demean someone and question their intelligence or character.",
//     example: "He's such a gandu for betraying his friends like that.",
//     tags: "insult, offensive, derogatory",
//     by: "Anonymous",
//     likes: 40,
//     dislikes: 30,
//   },
//   {
//     word: "BC",
//     language: "Hindi",
//     background:
//       "BC is a commonly used slang term in Hindi that stands for 'Bhenchod' which translates to 'sisterfucker' in English. It is an extremely vulgar and offensive term and should be used with extreme caution, if at all.",
//     definition:
//       "BC is often used as an expletive to express anger, frustration, or surprise. It can also be used affectionately among close friends, although it is still considered highly disrespectful.",
//     example: "BC! I can't believe he did that.",
//     tags: "vulgar, offensive, expletive",
//     by: "Anonymous",
//     likes: 70,
//     dislikes: 10,
//   },
// ];

const Cards = () => {
  const [slangs, setSlangs] = useState([]);

  useEffect(() => {
    const fetchSlangs = async () => {
      try {
        const response = await fetch(
          "https://desi-lingo-api.vercel.app/api/slangs"
        );
        if (!response.ok) {
          throw new Error("Failed to fetch slangs");
        }
        const data = await response.json();
        setSlangs(data);
      } catch (error) {
        console.error(error);
      }
    };

    fetchSlangs();
  }, []);

  return (
    <div className="w-full flex flex-col gap-5 items-center justify-center px-10 py-10">
      {slangs.map((item, index) => {
        return <Card key={index} item={item} />;
      })}
    </div>
  );
};

export default Cards;
