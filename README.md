# Nxt Watch - YouTube Clone

Nxt Watch is a fully functional video streaming platform where users can explore trending and gaming videos, save their favorite videos, and view detailed information for each video.

## Live Link:

https://nxtwatch412.ccbp.tech

## Features

• JWT Authentication:
Secure login system using JSON Web Tokens (JWT), allowing users to access personalized routes after authentication. <br/><br/>
• Home Route:
Displays a collection of videos that users can explore, with easy navigation through categories like trending and gaming. <br/><br/>
• Trending Videos:
A dedicated route showcasing trending videos across various genres. <br/><br/>
• Gaming Videos:
A separate route focused on gaming content for gaming enthusiasts. <br/><br/>
• Saved Videos:
Users can save their favorite videos and access them later on a dedicated “Saved Videos” route. <br/><br/>
• Video Details Page:
A detailed view for individual videos, displaying the title, description, view count, likes, and dislikes. <br/><br/>
• Responsive UI:
The website is optimized for both desktop and mobile devices, offering a smooth browsing experience. <br/><br/>

## Credentials:

```json
{
  "username": "rahul",
  "password": "rahul@2021"
}
```

## Backend:

<details>

<summary>API Requests & Responses</summary>
<br/>

**Login API**

#### URL: `https://apis.ccbp.in/login`

#### Method: `POST`

#### Description:

Returns a response based on the credentials provided

#### Request

```json
{
  "username": "rahul",
  "password": "rahul@2021"
}
```

#### Sample Success Response

```json
{
  "jwt_token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VybmFtZSI6InJhaHVsIiwicm9sZSI6IlBSSU1FX1VTRVIiLCJpYXQiOjE2MTk2Mjg2MTN9.nZDlFsnSWArLKKeF0QbmdVfLgzUbx1BGJsqa2kc_21Y"
}
```

#### Sample Failure Response

```json
{
  "status_code": 404,
  "error_msg": "Username is not found"
}
```

**Home Videos API**

#### URL: `https://apis.ccbp.in/videos/all?search=`

#### Method: `GET`

#### Description:

Returns a response containing the list of all videos

#### Response

```json
{
  "total": 60,
  "videos": [
    {
      "id": "30b642bd-7591-49f4-ac30-5c538f975b15",
      "title": "Sehwag shares his batting experience in iB Cricket | iB Cricket Super Over League",
      "thumbnail_url": "https://assets.ccbp.in/frontend/react-js/nxt-watch/ibc-sol-1-img.png",
      "channel": {
        "name": "iB Cricket",
        "profile_image_url": "https://assets.ccbp.in/frontend/react-js/nxt-watch/ib-cricket-img.png"
      },
      "view_count": "1.4K",
      "published_at": "Apr 19, 2019"
    },
    ...
  ],
}
```

**Trending Videos API**

#### URL: `https://apis.ccbp.in/videos/trending`

#### Method: `GET`

#### Description:

Returns a response containing the list of trending videos

#### Response

```json
{
  "total": 30,
  "videos": [
    {
      "id": "ad9822d2-5763-41d9-adaf-baf9da3fd490",
      "title": "iB Hubs Announcement Event",
      "thumbnail_url": "https://assets.ccbp.in/frontend/react-js/nxt-watch/ibhubs-img.png",
      "channel": {
        "name": "iB Hubs",
        "profile_image_url": "https://assets.ccbp.in/frontend/react-js/nxt-watch/ib-hubs-img.png"
      },
      "view_count": "26K",
      "published_at": "Nov 29, 2016"
    },
    ...
  ]
}
```

**Gaming Videos API**

#### URL: `https://apis.ccbp.in/videos/gaming`

#### Method: `GET`

#### Description:

Returns a response containing the list of gaming videos

#### Response

```json
{
  "total": 30,
  "videos": [
    {
      "id": "b214dc8a-b126-4d15-8523-d37404318347",
      "title": "Drop Stack Ball",
      "thumbnail_url": "https://assets.ccbp.in/frontend/react-js/nxt-watch/drop-stack-ball-img.png",
      "view_count": "44K"
    },
    ...
  ]
}
```

**Video Details API**

#### URL: `https://apis.ccbp.in/videos/:id`

#### Example: `https://apis.ccbp.in/videos/802fcd20-1490-43c5-9e66-ce6dfefb40d1`

#### Method: `GET`

#### Description:

Returns a response containing the details of a specific video

#### Response

```json
{
  "video_details": {
    "id": "ad9822d2-5763-41d9-adaf-baf9da3fd490",
    "title": "iB Hubs Announcement Event",
    "video_url": "https://www.youtube.com/watch?v=pT2ojWWjum8",
    "thumbnail_url": "https://assets.ccbp.in/frontend/react-js/nxt-watch/ibhubs-img.png",
    "channel": {
      "name": "iB Hubs",
      "profile_image_url": "https://assets.ccbp.in/frontend/react-js/nxt-watch/ib-hubs-img.png",
      "subscriber_count": "1M"
    },
    "view_count": "26K",
    "published_at": "Nov 29, 2016",
    "description": "iB Hubs grandly celebrated its Announcement Event in November 13, 2016, in the presence of many eminent personalities from the Government, Industry, and Academia with Shri Amitabh Kant, CEO, NITI Aayog as the Chief Guest."
  }
}
```

</details>

## Set Up Instructions

<details>
<summary>Click to view</summary>

- Download dependencies by running `npm install`
- Start up the app using `npm start`
</details>
