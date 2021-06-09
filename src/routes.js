import PhotosPage from "./pages/Photos";
import MorePage from "./pages/More";
import CSSPage from "./pages/CSS";
import photoIcon from "./assets/images/icon/photo.png";
import moreIcon from "./assets/images/icon/点.png";
import cssIcon from "./assets/images/icon/CSS.png";
import { Image } from "antd";
//eslint-disable-next-line
export default [
  {
    name: "photos",
    title: "Photos",
    icon: (
      <Image
        src={photoIcon}
        preview={false}
        placeholder={
          <Image preview={false} src={photoIcon} width={15} height={15} />
        }
        width={15}
        height={15}
      />
    ),
    path: "/photos",
    exact: true,
    component: PhotosPage,
  },
  {
    name: "css",
    title: "CSS",
    icon: (
      <Image
        src={cssIcon}
        preview={false}
        placeholder={
          <Image preview={false} src={cssIcon} width={15} height={15} />
        }
        width={15}
        height={15}
      />
    ),
    path: "/css",
    exact: true,
    component: CSSPage,
  },
  {
    name: "more",
    title: "More",
    icon: (
      <Image
        src={moreIcon}
        preview={false}
        placeholder={
          <Image preview={false} src={moreIcon} width={15} height={15} />
        }
        width={15}
        height={15}
      />
    ),
    path: "/more",
    exact: true,
    component: MorePage,
  },
];
