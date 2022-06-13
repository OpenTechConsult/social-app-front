import styled from "styled-components";
import SearchIcon from '@mui/icons-material/Search';
import HomeIcon from '@mui/icons-material/Home';
import FlagIcon from '@mui/icons-material/Flag';
import SubscriptionsOutlinedIcon from '@mui/icons-material/SubscriptionsOutlined';
import StorefrontOutlinedIcon from '@mui/icons-material/StorefrontOutlined';
import SupervisedUserCircleIcon from '@mui/icons-material/SupervisedUserCircle';
import Avatar from '@mui/material/Avatar';
import IconButton from '@mui/material/IconButton';
import AddIcon from '@mui/icons-material/Add';
import ForumIcon from '@mui/icons-material/Forum';
import NotificationsActiveIcon from '@mui/icons-material/NotificationsActive';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';


const Header = () => {
    return (
        <HeaderWrapper>
            <HeaderLeft>
                <img src="logo192.png" alt="Popular" />
            </HeaderLeft>
            <HeaderInput>
                <SearchIcon />
                <input placeholder="Search Popular" type="text" />
            </HeaderInput>
            <HeaderCenter>
                <div className="header__option header__option--active">
                    <HomeIcon fontSize="large" />
                </div>
                <div className="header__option">
                    <FlagIcon fontSize="large" />
                </div>
                <div className="header__option">
                    <SubscriptionsOutlinedIcon fontSize="large" />
                </div>
                <div className="header__option">
                    <StorefrontOutlinedIcon fontSize="large" />
                </div>
                <div className="header__option">
                    <SupervisedUserCircleIcon fontSize="large" />
                </div>
            </HeaderCenter>
            <HeaderRight>
                <div className="header__info">
                    <Avatar src="https://scontent.facc6-1.fna.fbcdn.net/v/t39.30808-1/252856377_10223771526934221_4553746555895712662_n.jpg?stp=cp0_dst-jpg_p50x50&_nc_cat=110&ccb=1-7&_nc_sid=7206a8&_nc_eui2=AeEeDB3FFGfF01Xz7M6f9vwUmnSqHEpQtpKadKocSlC2ktJwONCF3sJp0yTy49nCJfM&_nc_ohc=q9ajddJMVTkAX-omxk0&_nc_ht=scontent.facc6-1.fna&oh=00_AT9Rx_roDq7Hp7BCNRioewvfV8Ah7Qy6PGMO0ivfykuFkQ&oe=62A85132" />
                    <h4>Sandro</h4>
                    <IconButton aria-label="add">
                        <AddIcon />
                    </IconButton>
                    <IconButton aria-label="forum">
                        <ForumIcon />
                    </IconButton>
                    <IconButton aria-label="notification">
                        <NotificationsActiveIcon />
                    </IconButton>
                    <IconButton aria-label="more">
                        <ExpandMoreIcon />
                    </IconButton>
                </div>
            </HeaderRight>
        </HeaderWrapper>
    )
}

const HeaderWrapper = styled.div`
    display: flex;
    padding: 15px 20px;
    justify-content: space-between;
    align-items: center;
    position: sticky;
    background-color: #ffffff;
    z-index: 100;
    top: 0;
    box-shadow: 0px 5px 8px -9px rgba(0, 0, 0, 0.75);
`;

const HeaderLeft = styled.div`
    display: flex;
    justify-content: space-evenly;
    img {
        width: 40px;
        height: 40px;
    }
`;

const HeaderInput = styled.div`
    display: flex;
    align-items: center;
    background-color: #eff2f5;
    justify-content: space-evenly;
    padding: 10px;
    margin-left: 10px;
    border-radius: 33px;
    input {
        border: none;
        background-color: transparent;
        outline-width: 0;
    }
`;

const HeaderCenter = styled.div`
    display: flex;
    flex: 1;
    justify-content: center;
    .header__option {
        display: flex;
        align-items: center;
        padding: 10px 30px;
        cursor: pointer;
        .MuiSvgIcon-root {
            color: gray;
        }
        &:hover {
            background-color: #eff2f5;
            border-radius: 10px;
            align-items: center;
            padding: 10px 30px;
            border-bottom: none;
            .MuiSvgIcon-root {
                color: #2e81f4;
            }
        }
    }

    .header__option--active {
        border-bottom: 4px solid #2e81f4;
        .MuiSvgIcon-root {
            color: #2e81f4;
        }
    }
`;

const HeaderRight = styled.div`
    display: flex;
    .header__info {
        display: flex;
        align-items: center;
        h4 {
            margin-left: 10px;
        }
    }
`;



export default Header;