"use client";

import React from "react";
import {
  ContentsContainer,
  ContentsSection,
  FeaturedContainer,
  FeedContainer,
  LatestFeedContainer,
} from "../discover/styles";
import Post from "@/components/Common/Post";

const Trends = () => {
  const mainPosts: any = [];
  return (
    <div>
      <h1>OXINION Trends</h1>

      <ContentsContainer>
        <ContentsSection>
          <FeaturedContainer>
            <h2>Featured stories</h2>
          </FeaturedContainer>
          <LatestFeedContainer>
            <h2>Latest Feed</h2>
            <FeedContainer>
              {mainPosts.map((post: any) => (
                <Post key={post.id} post={post} />
              ))}
            </FeedContainer>
          </LatestFeedContainer>
        </ContentsSection>
      </ContentsContainer>
    </div>
  );
};

export default Trends;
