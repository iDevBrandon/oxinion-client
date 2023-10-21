"use client";

import React from "react";
import {
  DiscoverContainer,
  FeaturedContainer,
  FeedContainer,
  LatestFeedContainer,
  LocationHeader,
  MapSection,
  ContentsContainer,
  MainContainer,
  MainMap,
  MainPosts,
  MapController,
} from "./styles";
import { RiMapPin2Line } from "react-icons/ri";
import ShowMap from "@/components/Common/ShowMap";
import { TrendingItem, TrendingList } from "@/components/Home/Trending/styles";
import Post from "@/components/Common/Post";
import Featured from "@/components/Common/Featured";
import { useInfiniteQuery, useQuery } from "@tanstack/react-query";
import useMyInfoQuery from "@/hooks/queries/useMyInfoQuery";
import PostForm from "@/components/Common/PostForm";
import { loadPostsAPI } from "@/apis/posts";
import MapBox from "@/components/Common/PostForm/MapBox";
import { usePathname, useRouter,useSearchParams} from "next/navigation";

const Discover = () => {
  const pathname = usePathname();
  const searchParams = useSearchParams()

  const router = useRouter();
  const location = searchParams.get('location');
  const term = searchParams.get('term')


  console.log(location, term);
  const { data: me, error } = useMyInfoQuery();
  const { data } = useInfiniteQuery(
    ["posts"],
    ({ pageParam = "" }) => loadPostsAPI(pageParam),
    {
      getNextPageParam: (lastPage) => {
        return lastPage;
      },
    }
  );

  if (!data) return <></>;

  const posts = data?.pages[0].posts;

  return (
    <DiscoverContainer>
      <ContentsContainer>
        <LocationHeader>
          <div className="icon-container">
            <div className="header-icon">
              <RiMapPin2Line />
            </div>
          </div>
          <div className="header-text">
            <h4>Looking for {term || "ideas"}</h4>
            <h3>in {location}</h3>
          </div>
        </LocationHeader>

        <MainContainer>
          <MainMap>
            {pathname === "discover" ? (
              <MapController>
                <MapBox />
              </MapController>
            ) : (
              <MapSection>
                <ShowMap />
              </MapSection>
            )}
          </MainMap>

          <MainPosts>
            {me && <PostForm />}
            <FeaturedContainer>
              <h2>Featured stories</h2>
              <Featured />
            </FeaturedContainer>
            <LatestFeedContainer>
              <h2>Latest Feed</h2>
              <FeedContainer>
                {posts.map((post: any) => (
                  <Post key={post.id} post={post} />
                ))}
              </FeedContainer>
              Add infinite scrolling
            </LatestFeedContainer>
          </MainPosts>
        </MainContainer>
      </ContentsContainer>
    </DiscoverContainer>
  );
};

export default Discover;
