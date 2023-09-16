"use client";

import React from "react";
import {
  FormContentLink,
  FormContentcolumn,
  PopularCategories,
  RentForm,
  RentFormContent,
  RentHero,
} from "./styles";
import Link from "next/link";

const Rent = () => {
  return (
    <div>
      <RentHero className="">
        <RentForm>
          <RentFormContent>
            <span>
              live simply by renting locally for less or making money <br />
              Join our community at OXINION.
            </span>
            <FormContentcolumn>
              <span>I want to rent</span>
              <input placeholder="Camera, Bottle Opener" />
            </FormContentcolumn>
            <FormContentcolumn>
              <span>Near</span>
              <input placeholder="Soho, London" />
            </FormContentcolumn>
            <FormContentLink>
              <span>
                <Link href="/rent/new">Or list your items for free</Link>
              </span>
            </FormContentLink>
          </RentFormContent>
        </RentForm>
      </RentHero>
      <PopularCategories>
        <h1>What’s popular on RentItems right now?</h1>
        <div className="top-category-container">
          <ul>
            <li className="card">1</li>
            <li className="card">2</li>
            <li className="card">3</li>
            <li className="card">4</li>
            <li className="card">5</li>
            <li className="card">6</li>
          </ul>
        </div>
      </PopularCategories>
    </div>
  );
};

export default Rent;
