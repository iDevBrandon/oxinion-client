"use client";

import React from "react";
import { HeroContainer, SearchTabContainer, SubHeader } from "./styles";
import { MdOutlineExplore } from "react-icons/md";
import { TbPlaneDeparture } from "react-icons/tb";
import { AiOutlineDollar } from "react-icons/ai";
import { FaHandshakeSimple } from "react-icons/fa6";
import Link from "next/link";
const Hero = () => {
  return (
    <div>
      <HeroContainer />
      <div>
        {/* <Header /> */}
        <SearchTabContainer>
          {/* <SearchBar /> */}

          <SubHeader>
            <ul>
              <li>
                <MdOutlineExplore />
                <Link href="/discover">Discover</Link>
              </li>
              <li>
                <FaHandshakeSimple />
                <Link href="/rent">Rent</Link>
              </li>
              <li>
                <TbPlaneDeparture />
                <Link href="/travel">Travel</Link>
              </li>
              <li>
                <AiOutlineDollar />
                <Link href="/earn">Earn</Link>
              </li>
            </ul>
          </SubHeader>
        </SearchTabContainer>
      </div>
    </div>
  );
};

export default Hero;
