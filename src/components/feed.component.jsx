import React from 'react'
import Stories from './stories.component'
import Messenger from './messenger.component';
import Post from './post.component';
import styled from 'styled-components';

const Feed = () => {
    return (
        <FeedWrapper>
            <Stories />
            <Messenger />
            <Post profilePic="https://scontent.facc6-1.fna.fbcdn.net/v/t39.30808-1/252856377_10223771526934221_4553746555895712662_n.jpg?stp=cp0_dst-jpg_p50x50&_nc_cat=110&ccb=1-7&_nc_sid=7206a8&_nc_eui2=AeEeDB3FFGfF01Xz7M6f9vwUmnSqHEpQtpKadKocSlC2ktJwONCF3sJp0yTy49nCJfM&_nc_ohc=q9ajddJMVTkAX-omxk0&_nc_ht=scontent.facc6-1.fna&oh=00_AT9Rx_roDq7Hp7BCNRioewvfV8Ah7Qy6PGMO0ivfykuFkQ&oe=62A85132"
                message="Awesome post on CSS animation. Loved it"
                timestamp="1609512232424"
                imgName="https://res.cloudinary.com/dxkxvfo2o/image/upload/v1598295332/CSS_Animation_xrvhai.png"
                username="Sandro Agboka"
            />
            <Post profilePic="https://scontent.facc6-1.fna.fbcdn.net/v/t39.30808-1/252856377_10223771526934221_4553746555895712662_n.jpg?stp=cp0_dst-jpg_p50x50&_nc_cat=110&ccb=1-7&_nc_sid=7206a8&_nc_eui2=AeEeDB3FFGfF01Xz7M6f9vwUmnSqHEpQtpKadKocSlC2ktJwONCF3sJp0yTy49nCJfM&_nc_ohc=q9ajddJMVTkAX-omxk0&_nc_ht=scontent.facc6-1.fna&oh=00_AT9Rx_roDq7Hp7BCNRioewvfV8Ah7Qy6PGMO0ivfykuFkQ&oe=62A85132"
                message="Le boomerang - Finessess Somassou en concert"
                timestamp="1609512232424"
                imgName="https://scontent.flfw1-1.fna.fbcdn.net/v/t39.30808-6/287636212_386627436822018_2995186996265968796_n.jpg?_nc_cat=105&ccb=1-7&_nc_sid=730e14&_nc_eui2=AeEJiMDed6f2YMs_Uoo_ykEVBZO0AVhH5NkFk7QBWEfk2Uencrvy7kPrlbhjWiWVRjQ&_nc_ohc=Oxk7vOIgWpEAX_N_wEi&_nc_ht=scontent.flfw1-1.fna&oh=00_AT-oRCVML6tbP7FiTpE1oKHMmR_s1tNOiNJwv8fZnr5IuA&oe=62B003DE"
                username="Sandro Agboka"
            />
            <Post profilePic="https://scontent.facc6-1.fna.fbcdn.net/v/t39.30808-1/252856377_10223771526934221_4553746555895712662_n.jpg?stp=cp0_dst-jpg_p50x50&_nc_cat=110&ccb=1-7&_nc_sid=7206a8&_nc_eui2=AeEeDB3FFGfF01Xz7M6f9vwUmnSqHEpQtpKadKocSlC2ktJwONCF3sJp0yTy49nCJfM&_nc_ohc=q9ajddJMVTkAX-omxk0&_nc_ht=scontent.facc6-1.fna&oh=00_AT9Rx_roDq7Hp7BCNRioewvfV8Ah7Qy6PGMO0ivfykuFkQ&oe=62A85132"
                message="Remind me of my village"
                timestamp="1654647074000"
                imgName="https://scontent.flfw1-1.fna.fbcdn.net/v/t1.6435-9/123097874_157078896119425_7272252544019003059_n.jpg?_nc_cat=102&ccb=1-7&_nc_sid=8bfeb9&_nc_eui2=AeED5n_01R-x6c34IfQjlch3dRmFG6JBh3d1GYUbokGHd79PRjJS_hWAewhhqmPC00c&_nc_ohc=twLnLsiAf2AAX967NZE&_nc_ht=scontent.flfw1-1.fna&oh=00_AT-9fg8ODSfRoTByUL4lznRAumlb3anqoHFvOxqj0-ea-Q&oe=62D22971"
                username="Sandro Agboka"
            />
        </FeedWrapper>
    )
}

const FeedWrapper = styled.div`
    flex: 1;
    padding: 30 150px;
    display: flex;
    flex-direction: column;
    align-items: center;
`;

export default Feed;