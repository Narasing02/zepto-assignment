import React from "react";
import "./index.css";
import { useDispatch, useSelector } from "react-redux";
import { clickDark,clickLight } from "./themeSlice";
import { MdLightMode } from "react-icons/md";
import { CiLight } from "react-icons/ci";
const Theme = () => {
const Theme=useSelector((state)=>state.theme.isDark)
 const dispatch =useDispatch()


 const themeOfDarkModeContainer=()=>{
  dispatch(clickLight())

 }
 const themeOfLightModeContainer=()=>{
  dispatch(clickDark())


 }

 

  return (
    <div className={Theme ? "dark-theme" : "light-theme"}>
      <nav>
        <div>Logo</div>
        <ul>
          <li>Home</li>
          <li>About</li>
          <li>Features</li>
          <li >{Theme ? < CiLight onClick={themeOfDarkModeContainer}/> :<MdLightMode onClick={themeOfLightModeContainer} />
}</li>
        </ul>
      </nav>
      <section>
        <div className="section1">
          <img
            src="https://cdn.pixabay.com/photo/2024/01/04/14/27/write-8487618_1280.jpg"
            alt="education"
          />
          <div className="section1-mini-container">
            <p>
              First of all, Education teaches the ability to read and write.
              Reading and writing is the first step in Education. Most
              information is done by writing. Hence, the lack of writing
              skillmeans missing out on a lot of information. Consequently,
              Education makes people literate. Above all, Education is extremely
              important for employment
            </p>
            <p>
              Education is an important element in an individual's life to go
              ahead and find success. Parents, schools, and universities play a
              vital role in educating an individual. Education instils
              confidence, self-acceptance, and self-worth and makes a person
              more aware of their surroundings and issues faced by the world. In
              this competitive world, it is a must for an individual to be
              educated. Self-confidence is found more in an educated individual
              than in one who is uneducated. It helps people to improve their
              skills and work on better opportunities to make a living. Educated
              individuals are an asset to the nation and help a nation to grow.
            </p>
            <p>
              Education is an important element in an individual's life to go
              ahead and find success. Parents, schools, and universities play a
              vital role in educating an individual. Education instils
              confidence, self-acceptance, and self-worth and makes a person
              more aware of their surroundings and issues faced by the world. In
              this competitive world, it is a must for an individual to be
              educated. Self-confidence is found more in an educated individual
              than in one who is uneducated. It helps people to improve their
              skills and work on better opportunities to make a living. Educated
              individuals are an asset to the nation and help a nation to grow.
            </p>
          </div>
        </div>

        <div className="section2">
          <img
            src="https://cdn.pixabay.com/photo/2016/11/14/03/16/book-1822474_1280.jpg"
            alt="education"
          />
          <div className="section1-mini-container">
            <p>
              First of all, Education teaches the ability to read and write.
              Reading and writing is the first step in Education. Most
              information is done by writing. Hence, the lack of writing
              skillmeans missing out on a lot of information. Consequently,
              Education makes people literate. Above all, Education is extremely
              important for employment
            </p>
            <p>
              Education is an important element in an individual's life to go
              ahead and find success. Parents, schools, and universities play a
              vital role in educating an individual. Education instils
              confidence, self-acceptance, and self-worth and makes a person
              more aware of their surroundings and issues faced by the world. In
              this competitive world, it is a must for an individual to be
              educated. Self-confidence is found more in an educated individual
              than in one who is uneducated. It helps people to improve their
              skills and work on better opportunities to make a living. Educated
              individuals are an asset to the nation and help a nation to grow.
            </p>
            <p>
              Education is an important element in an individual's life to go
              ahead and find success. Parents, schools, and universities play a
              vital role in educating an individual. Education instils
              confidence, self-acceptance, and self-worth and makes a person
              more aware of their surroundings and issues faced by the world. In
              this competitive world, it is a must for an individual to be
              educated. Self-confidence is found more in an educated individual
              than in one who is uneducated. It helps people to improve their
              skills and work on better opportunities to make a living. Educated
              individuals are an asset to the nation and help a nation to grow.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Theme;
