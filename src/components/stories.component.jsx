import React from 'react';
import Story from './story.component';
import styled from 'styled-components';

const Stories = () => {
    return (
        <StoriesWrapper>
            <Story image='https://scontent.flfw1-1.fna.fbcdn.net/v/t15.5256-10/287189180_742120273648647_202088183821541957_n.jpg?stp=dst-jpg_s851x315&_nc_cat=109&ccb=1-7&_nc_sid=ad6a45&_nc_eui2=AeHivyfB09wcpJMW4giV8EG2Fr9OtV3IuPYWv061Xci49s7_UdiMSv-7SGh2w_MRO8s&_nc_ohc=iPKT93djOh4AX96WWu3&_nc_oc=AQl2IDI1qNt9pgnPgLexAqyEhlr-ops9-k2K3mQxVFOFNMqYgvILhzNAmkGBonVwefw&_nc_ht=scontent.flfw1-1.fna&oh=00_AT-doHuqeS5429FEfR9pFA3_jM6Ht4sPEM4H0kQuoNXl9A&oe=62AF23D9'
                profileSrc='https://scontent.flfw1-1.fna.fbcdn.net/v/t1.6435-1/161543963_113884607426485_4676214269453974781_n.jpg?stp=cp0_dst-jpg_p80x80&_nc_cat=105&ccb=1-7&_nc_sid=7206a8&_nc_eui2=AeHJtneKRHvvmvokBGgj8xso1eu4GT4avEHV67gZPhq8QQ5gLDH4wMjlJDUP0R3a8rI&_nc_ohc=jawpMlmaz-cAX_wCuxu&tn=0hgDg-_gQkzd6-Cy&_nc_ht=scontent.flfw1-1.fna&oh=00_AT8YSzuUX_B4lMbTIU1fhVKHvtg5hGtW8exAcH2pMLFCBA&oe=62CF3038' title='Reine Adjossi' />
            <Story image='https://scontent.flfw1-1.fna.fbcdn.net/v/t15.5256-10/281844635_586510459471187_484171399992915919_n.jpg?stp=dst-jpg_p320x320&_nc_cat=110&ccb=1-7&_nc_sid=ad6a45&_nc_eui2=AeEB3nil6mwLOWr8whtzejX2KXH0kdqjrKYpcfSR2qOspqJbM9k4joCqkYbuYaVF2A4&_nc_ohc=xmyRWPg-qOEAX9QVRU_&_nc_ht=scontent.flfw1-1.fna&oh=00_AT-M-Z-NOQxwG4ss9RjbJx1xxOTvTNm0HAORsC-tR798Zg&oe=62AEE689' profileSrc='https://scontent.flfw1-1.fna.fbcdn.net/v/t39.30808-1/255585236_724030805223732_8324546988724657929_n.jpg?stp=cp0_dst-jpg_p80x80&_nc_cat=109&ccb=1-7&_nc_sid=7206a8&_nc_eui2=AeGksfUwzuYTwYrLTBkyxjeRLKf_nMmXtx4sp_-cyZe3Hta7F55rk3ovFWVHNtlZYfg&_nc_ohc=cWe_EDLaRFYAX9ZNdaE&_nc_ht=scontent.flfw1-1.fna&oh=00_AT-9FvfTXp0SxRouqxjaYhCqfnJTtJvxLCXK0jrG5cAd2g&oe=62AE2EF7'
                title='Vigea Bgr' />
            <Story image='https://scontent.flfw1-1.fna.fbcdn.net/v/t39.30808-6/286491545_1217478709078300_2251888814423963291_n.jpg?stp=dst-jpg_p320x320&_nc_cat=102&ccb=1-7&_nc_sid=365331&_nc_eui2=AeEikFIfozPix155smwpSg3UOluatTKAp-k6W5q1MoCn6RMLWb7LNOKI8Dbojw6cuIo&_nc_ohc=FNRSPlsi9JoAX9lbKeM&tn=0hgDg-_gQkzd6-Cy&_nc_ht=scontent.flfw1-1.fna&oh=00_AT9YMfgEvGKWkgDgWe3-Qg41yBW9JaLFSiAQNqOQfQpJAA&oe=62AED781' profileSrc='https://scontent.flfw1-1.fna.fbcdn.net/v/t39.30808-1/280443485_1192343751591796_1573416970694361143_n.jpg?stp=cp0_dst-jpg_p80x80&_nc_cat=106&ccb=1-7&_nc_sid=7206a8&_nc_eui2=AeFIq_TfpIGH1xv_dXuiGuDjq_7JBLx8T1Or_skEvHxPU0zJCSEi24nSk8WRTt1zcPI&_nc_ohc=BgdFFVfhklEAX-bvMJU&_nc_ht=scontent.flfw1-1.fna&oh=00_AT8atj2LsbsC1eieZfDrgKTFQByxOlEN47oJXSemAfkI2g&oe=62AE4612' title='Andrea Andy Paraiso' />
            <Story image='https://scontent.flfw1-1.fna.fbcdn.net/v/t39.30808-6/286444034_2815778388730012_3800985458069468319_n.jpg?stp=dst-jpg_p320x320&_nc_cat=100&ccb=1-7&_nc_sid=365331&_nc_eui2=AeFiCoOSGdHOrqEElN4dQVtUyl5gAhlAXOPKXmACGUBc44JY7iXKPbYfxk6rWpfRZW4&_nc_ohc=-KetBpyzyt8AX9HQMV1&tn=0hgDg-_gQkzd6-Cy&_nc_ht=scontent.flfw1-1.fna&oh=00_AT92jp7P6_E4gDnNQEWFxKICUosTmucEkIiIPxZnf1N0pA&oe=62AE70B0' profileSrc='https://scontent.flfw1-1.fna.fbcdn.net/v/t39.30808-1/275437903_2747630862211432_6821052539614608501_n.jpg?stp=cp0_dst-jpg_p80x80&_nc_cat=108&ccb=1-7&_nc_sid=7206a8&_nc_eui2=AeGwFJfzdg22V1SzOIkFQfTbqAhTTD5dWk6oCFNMPl1aTkknLetIdIC3uLYWhoU-fSU&_nc_ohc=C7Jzi8onyBoAX9pVGOV&_nc_ht=scontent.flfw1-1.fna&oh=00_AT8wHoNChjrEIcHanMHEl25kmgZPdMKnMk3pHdT0IK4NZg&oe=62AEA16F' title='Lauriane Djagoue' />
        </StoriesWrapper>
    )
}

const StoriesWrapper = styled.div`
    display: flex;
`;

export default Stories;