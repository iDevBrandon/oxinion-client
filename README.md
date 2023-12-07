# OXINION

## Run the app

### Install dependencies

```bash
yarn
```

Add "REACT_APP_MAPBOX" to .env file

## Technology Stack

- Redux Toolkit
- React-Query for infinite scrolling

## File structures

<https://curryyou.tistory.com/501>

proxy
for local "proxy": "<http://localhost:8800/v1>"
for prod "proxy": "<https://oxinion.herokuapp.com/v1>"

Problem : I would like to help business owner who want to gather people around thier busienss locations.
recommendations of business listings.

4 functionalities : MyLocal, Go & Deal, Cash(rewards)

explore, Go, Deal, Earn

Hardware : Smart AR Glasses (DIY)

Explore(social) : Megaphone/events/Local deals

Go(Travel) : For RoboTaxi & rent for mobility, Other 3rd party travel apps

Deal : like lost&found game or mission by ad provider

Earn : exchange your rubbish into a reward with smart bin. + Move to Earn. Enjoy the city for free
Toss walk + bring items that business register and then change to rewards

nextdoor/Yelp/AirBnB/icbox.info/Robotaxi/foursquare/oysterable

Top 3 core features :
Engagement/Discovery/transactions

Segments
Ads/Mobility/Service fees/Other services(data)

```bash
# Install dependencies

yarn

# Run the app
Add env file with mapbox secret key
yarn start

```

[BM](https://uniquebusinessmodels.substack.com/p/how-does-foursquare-make-money?s=r)

## User story

MyLocal is a mapping service where users can share thier opions or anything on the map

Travel is for mobility infomant (Booking/Expereince local)

Ride is a RoboTaxi service app

Money is a service werhe users can make money by conducting the missions

mylocal & travel share the same UI but provide different contents
![231905121_4183777671740007_1771131993846781638_n](https://user-images.githubusercontent.com/40842018/128631702-f02c6dc2-9d93-4db3-9908-8062d1affb90.jpg)

## App structure

### Frontend

- Landing page
- Search page router - myLocal

### Backend

```note
├── server # image files
│ ├── models # db schemas
│ ├── routes # express routes
│ ├── package.json
│ ├── yarn.lock
├── index.js # main file
├── package.json
```

### Infrastructure

![Vercel](https://img.shields.io/badge/vercel-%23000000.svg?style=for-the-badge&logo=vercel&logoColor=white)

### Internal vs External APIs

Check oxinion.com/developer

endpoint documentation

<https://api.oxinion.com/places>

<https://api.oxinion.com/finance/stocks>

Internal : Signup/Signin/logout/profile

External : business info/events/catergory/attractions

## BM (Business Model)

Mobility : Moovit, facedrive

Car Sharing: Uber,Lyft

Navigation : Mapbox

Self-driving(RoboTaxi) : Tesla

## Features

<https://publer.io/blog/auto-delete-posts/>

[Airbnb clone](https://www.youtube.com/watch?v=b8gBIphfCqw&ab_channel=SonnySangha)

## Difficulites & improvements

1. I have very lack of knowledge about TypeScript so i had to put a lot of "any" types.
2. How to pass latlng data to locationForm
   state 를 부모에서 관리하고 지도 이동 시 콜백을 통해서 부모가 들고 있는 state값을 변경하도록 핸들러 내려주면 되는 문제일거같은데 by 델

## References

- [Geofirex](https://fireship.io/lessons/geolocation-query-in-firestore-realtime/)
- [Turo](https://turo.com/gb/en)
- [Traview](https://traview.web.app/)
- [GetAround](https://www.getaround.com/search?viewport=36.675786717395184%2C-119.91271801147461%2C36.89026322207232%2C-119.67548198852539&start_time=2022-09-09T20%3A00%3A00.000Z&end_time=2022-09-10T04%3A00%3A00.000Z&zoom=12&use=CARSHARE)
  [Twitter algorithm](https://www.youtube.com/watch?v=zJI4bgEJ8IU&ab_channel=%EC%BD%94%EB%94%A9%EC%95%A0%ED%94%8C)

[큐레이션](https://www.thisiswhyimbroke.com/)

## [Github Repo ref]

- [airbnb-map-search](https://github.com/zaichaopan/airbnb-map-search)

## Design sources

- [city](https://www.freepik.com/free-photo/agra-city-name-collage_27994134.htm?query=london)

- [Deal color](https://localstealsanddeals.com/)

- [profile](https://www.codewithrandom.com/2022/08/21/instagram-clone-code-html-css/)
- [Insta](https://www.behance.net/gallery/73316071/Instagram-Desktop-Redesign?tracking_source=search_projects%7Cinstagram+web+desktop)

## Tasks

- [x] Login/Signup
- [ ] Explore page like social media(<https://www.instagram.com/explore/locations/>)
- [ ] CRUD a post on the map
- [ ] Add a multi step form to add a post on the map
- [ ] Search Travel products
- [ ] Local deal page with Amazon affiliate
- [ ] OXINION Earn product page(<https://www.binance.com/en/earn/>)
- [ ] OXINION Ads for Business <https://cashzone.co.kr/>

## Things i learnt

- 지도를 뛰어주려는데, window is undefined 라는 에러가 발생함.

Next.js의 특성상 서버 렌더링 시 window 전역 객체에 접근할 수 없는 문제로 인해 발생하는 에러가 발생하는데, 이걸 해결하기 위해서
DOM이 생성된 뒤 실행되는 useEffect를 사용하거나 레이지 로딩 기능인 dynamic을 사용할 수 있으며 여기서는 dynamic 기능을 사용하겠습니다.

useEffect 내부 코드는 서버사이드에서 수행되지 않음.

밑의 이소모픽 이펙트는 useLayoutEffect를 해결하기 위한 커스텀훅.

<https://github.com/Andarist/use-isomorphic-layout-effect/blob/main/src/index.ts>
<https://choonse.com/2022/07/28/1321/>

GetServerSideProps => explore page

[Set GA](https://mnxmnz.github.io/nextjs/google-analytics/)

- How to apply Redux-Saga effects operators in RTK
