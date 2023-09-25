"use client";

import React from "react";
import {
  HeroContainer,
  SearchButton,
  SearchInput,
  SearchTab,
  SearchTabContainer,
  SearchTabOuter,
  SubHeader,
} from "./styles";
import { MdOutlineExplore } from "react-icons/md";
import { TbPlaneDeparture } from "react-icons/tb";
import { AiOutlineDollar } from "react-icons/ai";
import { FaHandshakeSimple } from "react-icons/fa6";
import { FaSearchLocation } from "react-icons/fa";
import Link from "next/link";
import { RiPriceTag3Line } from "react-icons/ri";
const Hero = () => {
  return (
    <>
      <HeroContainer />
      <div>
        {/* <Header /> */}
        <SearchTabContainer>
          <SearchTabOuter>
            <SearchTab>
              <SearchInput
                type="text"
                placeholder="What are you looking for?"
                style={{
                  borderBottom: `1px solid #C7C7C7`,
                }}
              />
              <SearchInput type="text" placeholder="London, United Kingdom" />
            </SearchTab>
            <SearchButton>
              <FaSearchLocation />
            </SearchButton>
          </SearchTabOuter>
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
    </>
  );
};

export default Hero;

{
  /*  */
}
