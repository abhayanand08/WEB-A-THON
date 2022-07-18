import React from "react"
import {BsArrowRight} from 'react-icons/bs';
import Title from "../../constants/title/Title";
import "./Hero.css"

const Hero = () => {
  return (
    <div>
        <section className="hero">
          <div className="container">
            <div className="row">
              <Title subtitle='WELCOME TO BIT SINDRI' title='Department of Higher Technical Education & Skill Development' />
              <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry.</p>
              <div className="button">
                <button className="primary-btn">
                  MILESTONES<BsArrowRight />
                </button>
                <button>
                  PHOTO GALLERY <BsArrowRight />
                </button>
              </div>
            </div>
          </div>
        </section>
    </div>
  )
}

export default Hero
