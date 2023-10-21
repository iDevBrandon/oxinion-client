"use client";

import React, { useState } from "react";
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
import { useRouter } from "next/navigation";

const Hero = () => {
  const router = useRouter();
  const [term, setTerm] = useState<string>("");
  const [location, setLocation] = useState<string>("");

  console.log(term, location);

  const search = () => {
    router.push(`/discover?term=${term}&location=${location}`);
  };

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
                value={term}
                onChange={(e) => setTerm(e.target.value)}
              />
              <SearchInput
                type="text"
                placeholder="London, United Kingdom"
                value={location}
                onChange={(e) => setLocation(e.target.value)}
              />
            </SearchTab>
            <SearchButton onClick={search}>
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
