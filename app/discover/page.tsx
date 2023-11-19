"use client";

import React, { useEffect } from "react";
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
import { fetchNearbyPostsAPI, loadPostsAPI } from "@/apis/posts";
import MapBox from "@/components/Common/PostForm/MapBox";
import { usePathname, useRouter, useSearchParams } from "next/navigation";
import useGeoLocation from "@/hooks/useGeoLocation";
import { MdDownloading } from "react-icons/md";
import { DEFAULT_LATITUDE, DEFAULT_LONGITUDE } from "@/constants/location";

const Discover = () => {
  
  const pathname = usePathname();
  const searchParams = useSearchParams();

  const userlocation = useGeoLocation();
  const router = useRouter();

  const location = searchParams.get("location");
  const term = searchParams.get("term");

  const userLat = Number(userlocation?.coordinates?.lat) || DEFAULT_LATITUDE;
  const userLng = Number(userlocation?.coordinates?.lng) || DEFAULT_LONGITUDE;

  console.log(userLat, userLng);

  // const { data } = useInfiniteQuery(
  //   ["posts"],
  //   ({ pageParam = "" }) => loadPostsAPI(pageParam),
  //   {
  //     getNextPageParam: (lastPage) => {
  //       return lastPage;
  //     },
  //   }
  // );

  // if (!data) return <></>;

  // const posts = data?.pages[0].posts;

  const { data, refetch } = useInfiniteQuery(
    ["posts"],
    ({ pageParam = { lat: userLat, lng: userLng } }) =>
      fetchNearbyPostsAPI(pageParam),
    {
      getNextPageParam: (lastPage) => null,
      enabled: userLat !== undefined && userLng !== undefined,
    }
  );

  useEffect(() => {
    if (userlocation.loaded && userlocation.coordinates) {
      const userLat = userlocation.coordinates.lat;
      const userLng = userlocation.coordinates.lng;

      // Refetch the data with the updated user location
      refetch({
        lat: userLat,
        lng: userLng,
      } as any);
    }
  }, [
    userlocation.loaded,
    userlocation.coordinates?.lat,
    userlocation.coordinates?.lng,
    refetch,
  ]);

  console.log(data?.pages[0]);

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
            <h3>in {location || "somewhere"}</h3>
          </div>
        </LocationHeader>

        <MainContainer>
          <MainMap>
            {userlocation.loaded ? (
              <MapController>
                <MapBox userlocation={userlocation} />
              </MapController>
            ) : (
              <p>Loading map...</p>
            )}
          </MainMap>

          <MainPosts>
            {<PostForm />}
            <FeaturedContainer>
              <h2>Featured stories</h2>
              <Featured />
            </FeaturedContainer>
            <LatestFeedContainer>
              <h2>Latest Feed</h2>
              <FeedContainer>
                {/* {posts?.pages?.map((page) =>
                  page.data.map((post: any) => (
                    <Post key={post.id} post={post} />
                  ))
                )} */}

                {data?.pages[0].map((post: any) => (
                  <Post key={post._id} post={post} />
                ))}
              </FeedContainer>
              <MdDownloading />
            </LatestFeedContainer>
          </MainPosts>
        </MainContainer>
      </ContentsContainer>
    </DiscoverContainer>
  );
};

export default Discover;
