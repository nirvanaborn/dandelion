import PhotosPage from "./pages/Photos";
import MorePage from "./pages/More";
import photoIcon from "./assets/images/icon/photo.png";
import moreIcon from "./assets/images/icon/点.png";
//eslint-disable-next-line
export default [
  {
    name: "photos",
    title: "Photos",
    icon: <img src={photoIcon} width="15px" height="15px" />,
    path: "/photos",
    exact: true,
    component: PhotosPage,
  },
  {
    name: "more",
    title: "More",
    icon: <img src={moreIcon} width="15px" height="15px" />,
    path: "/more",
    exact: true,
    component: MorePage,
  },
];
