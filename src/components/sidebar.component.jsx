import SidebarRow from './sidebarrow.component';
import LocalHospitalIcon from '@mui/icons-material/LocalHospital';
import EmojiFlagsIcon from '@mui/icons-material/EmojiFlags';
import PeopleIcon from '@mui/icons-material/People';
import ChatIcon from '@mui/icons-material/Chat';
import StorefrontIcon from '@mui/icons-material/Storefront';
import VideoLibraryIcon from '@mui/icons-material/VideoLibrary';
import ExpandMoreOutlinedIcon from '@mui/icons-material/ExpandMoreOutlined';

import styled from 'styled-components';

const Sidebar = () => {
    return (
        <SidebarWrapper>
            <SidebarRow src="https://scontent.facc6-1.fna.fbcdn.net/v/t39.30808-1/252856377_10223771526934221_4553746555895712662_n.jpg?stp=cp0_dst-jpg_p50x50&_nc_cat=110&ccb=1-7&_nc_sid=7206a8&_nc_eui2=AeEeDB3FFGfF01Xz7M6f9vwUmnSqHEpQtpKadKocSlC2ktJwONCF3sJp0yTy49nCJfM&_nc_ohc=q9ajddJMVTkAX-omxk0&_nc_ht=scontent.facc6-1.fna&oh=00_AT9Rx_roDq7Hp7BCNRioewvfV8Ah7Qy6PGMO0ivfykuFkQ&oe=62A85132" title="Sandro" />
            <SidebarRow Icon={LocalHospitalIcon} title="COVID-19 Information Center" />
            <SidebarRow Icon={EmojiFlagsIcon} title="Pages" />
            <SidebarRow Icon={PeopleIcon} title="Friends" />
            <SidebarRow Icon={ChatIcon} title="Messenger" />
            <SidebarRow Icon={StorefrontIcon} title="Marketplace" />
            <SidebarRow Icon={VideoLibraryIcon} title="Videos" />
            <SidebarRow Icon={ExpandMoreOutlinedIcon} title="More" />
        </SidebarWrapper>
    )
}

const SidebarWrapper = styled.div``;

export default Sidebar;