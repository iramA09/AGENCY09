import React, { useRef } from 'react';
import { Link } from 'react-router-dom';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import { LightgalleryItem, LightgalleryProvider } from 'react-lightgallery';
import "lightgallery.js/dist/css/lightgallery.css";

// Images
import A09TURNS09_1 from '../Assets/Images/gallery/#09TURNS09/1.jpg';
import A09TURNS09_2 from '../Assets/Images/gallery/#09TURNS09/2.jpg';
import A09TURNS09_3 from '../Assets/Images/gallery/#09TURNS09/3.jpg';
import A09TURNS09_4 from '../Assets/Images/gallery/#09TURNS09/4.jpg';
import A09TURNS09_5 from '../Assets/Images/gallery/#09TURNS09/5.jpg';
import A09TURNS09_6 from '../Assets/Images/gallery/#09TURNS09/6.jpg';
import A09TURNS09_7 from '../Assets/Images/gallery/#09TURNS09/7.jpg';
import A09TURNS09_8 from '../Assets/Images/gallery/#09TURNS09/8.jpg';
import A09TURNS09_9 from '../Assets/Images/gallery/#09TURNS09/9.jpg';
import A09TURNS09_10 from '../Assets/Images/gallery/#09TURNS09/10.jpg';
import A09TURNS09_11 from '../Assets/Images/gallery/#09TURNS09/11.jpg';
import A09TURNS09_12 from '../Assets/Images/gallery/#09TURNS09/12.jpg';
import A09TURNS09_13 from '../Assets/Images/gallery/#09TURNS09/13.jpg';
import A09TURNS09_14 from '../Assets/Images/gallery/#09TURNS09/14.jpg';
import A09TURNS09_15 from '../Assets/Images/gallery/#09TURNS09/15.jpg';
import A09TURNS09_16 from '../Assets/Images/gallery/#09TURNS09/16.jpg';
import A09TURNS09_17 from '../Assets/Images/gallery/#09TURNS09/17.jpg';
import A09TURNS09_18 from '../Assets/Images/gallery/#09TURNS09/18.jpg';
import A09TURNS09_19 from '../Assets/Images/gallery/#09TURNS09/19.jpg';
import A09TURNS09_20 from '../Assets/Images/gallery/#09TURNS09/20.jpg';
import A09TURNS09_21 from '../Assets/Images/gallery/#09TURNS09/21.jpg';
import A09TURNS09_22 from '../Assets/Images/gallery/#09TURNS09/22.jpg';
import A09TURNS09_23 from '../Assets/Images/gallery/#09TURNS09/23.jpg';
import A09TURNS09_24 from '../Assets/Images/gallery/#09TURNS09/24.jpg';

import A096thYearAnniversary_1 from '../Assets/Images/gallery/6thYearAnniversary/1.jpg';
import A096thYearAnniversary_2 from '../Assets/Images/gallery/6thYearAnniversary/2.jpg';
import A096thYearAnniversary_3 from '../Assets/Images/gallery/6thYearAnniversary/3.jpg';
import A096thYearAnniversary_4 from '../Assets/Images/gallery/6thYearAnniversary/4.jpg';
import A096thYearAnniversary_5 from '../Assets/Images/gallery/6thYearAnniversary/5.jpg';
import A096thYearAnniversary_6 from '../Assets/Images/gallery/6thYearAnniversary/6.jpg';
import A096thYearAnniversary_7 from '../Assets/Images/gallery/6thYearAnniversary/7.jpg';
import A096thYearAnniversary_8 from '../Assets/Images/gallery/6thYearAnniversary/8.jpg';
import A096thYearAnniversary_9 from '../Assets/Images/gallery/6thYearAnniversary/9.jpg';
import A096thYearAnniversary_10 from '../Assets/Images/gallery/6thYearAnniversary/10.jpg';
import A096thYearAnniversary_11 from '../Assets/Images/gallery/6thYearAnniversary/11.jpg';
import A096thYearAnniversary_12 from '../Assets/Images/gallery/6thYearAnniversary/12.jpg';
import A096thYearAnniversary_13 from '../Assets/Images/gallery/6thYearAnniversary/13.jpg';
import A096thYearAnniversary_14 from '../Assets/Images/gallery/6thYearAnniversary/14.jpg';
import A096thYearAnniversary_15 from '../Assets/Images/gallery/6thYearAnniversary/15.jpg';


import A097thYearAnniversary_1 from '../Assets/Images/gallery/7thYearAnniversary/1.jpg';
import A097thYearAnniversary_2 from '../Assets/Images/gallery/7thYearAnniversary/2.jpg';
import A097thYearAnniversary_3 from '../Assets/Images/gallery/7thYearAnniversary/3.jpg';
import A097thYearAnniversary_4 from '../Assets/Images/gallery/7thYearAnniversary/4.jpg';
import A097thYearAnniversary_5 from '../Assets/Images/gallery/7thYearAnniversary/5.jpg';
import A097thYearAnniversary_6 from '../Assets/Images/gallery/7thYearAnniversary/6.jpg';
import A097thYearAnniversary_7 from '../Assets/Images/gallery/7thYearAnniversary/7.jpg';
import A097thYearAnniversary_8 from '../Assets/Images/gallery/7thYearAnniversary/8.jpg';
import A097thYearAnniversary_9 from '../Assets/Images/gallery/7thYearAnniversary/9.jpg';
import A097thYearAnniversary_10 from '../Assets/Images/gallery/7thYearAnniversary/10.jpg';
import A097thYearAnniversary_11 from '../Assets/Images/gallery/7thYearAnniversary/11.jpg';
import A097thYearAnniversary_12 from '../Assets/Images/gallery/7thYearAnniversary/12.jpg';
import A097thYearAnniversary_13 from '../Assets/Images/gallery/7thYearAnniversary/13.jpg';
import A097thYearAnniversary_14 from '../Assets/Images/gallery/7thYearAnniversary/14.jpg';
import A097thYearAnniversary_15 from '../Assets/Images/gallery/7thYearAnniversary/15.jpg';


import Christmas2021_1 from '../Assets/Images/gallery/Christmas2021/1.jpg';
import Christmas2021_2 from '../Assets/Images/gallery/Christmas2021/2.jpg';
import Christmas2021_3 from '../Assets/Images/gallery/Christmas2021/3.jpg';
import Christmas2021_4 from '../Assets/Images/gallery/Christmas2021/4.jpg';
import Christmas2021_5 from '../Assets/Images/gallery/Christmas2021/5.jpg';
import Christmas2021_6 from '../Assets/Images/gallery/Christmas2021/6.jpg';
import Christmas2021_7 from '../Assets/Images/gallery/Christmas2021/7.jpg';
import Christmas2021_8 from '../Assets/Images/gallery/Christmas2021/8.jpg';
import Christmas2021_9 from '../Assets/Images/gallery/Christmas2021/9.jpg';
import Christmas2021_10 from '../Assets/Images/gallery/Christmas2021/10.jpg';
import Christmas2021_11 from '../Assets/Images/gallery/Christmas2021/11.jpg';
import Christmas2021_12 from '../Assets/Images/gallery/Christmas2021/12.jpg';


import Christmas2022_1 from '../Assets/Images/gallery/Christmas2022/1.jpg';
import Christmas2022_2 from '../Assets/Images/gallery/Christmas2022/2.jpg';
import Christmas2022_3 from '../Assets/Images/gallery/Christmas2022/3.jpg';
import Christmas2022_4 from '../Assets/Images/gallery/Christmas2022/4.jpg';
import Christmas2022_5 from '../Assets/Images/gallery/Christmas2022/5.jpg';
import Christmas2022_6 from '../Assets/Images/gallery/Christmas2022/6.jpg';


import Christmas2023_1 from '../Assets/Images/gallery/Christmas2023/1.jpg';
import Christmas2023_2 from '../Assets/Images/gallery/Christmas2023/2.jpg';
import Christmas2023_3 from '../Assets/Images/gallery/Christmas2023/3.jpg';
import Christmas2023_4 from '../Assets/Images/gallery/Christmas2023/4.jpg';
import Christmas2023_5 from '../Assets/Images/gallery/Christmas2023/5.jpg';
import Christmas2023_6 from '../Assets/Images/gallery/Christmas2023/6.jpg';
import Christmas2023_7 from '../Assets/Images/gallery/Christmas2023/7.jpg';
import Christmas2023_8 from '../Assets/Images/gallery/Christmas2023/8.jpg';
import Christmas2023_9 from '../Assets/Images/gallery/Christmas2023/9.jpg';
import Christmas2023_10 from '../Assets/Images/gallery/Christmas2023/10.jpg';
import Christmas2023_11 from '../Assets/Images/gallery/Christmas2023/11.jpg';
import Christmas2023_12 from '../Assets/Images/gallery/Christmas2023/12.jpg';
import Christmas2023_13 from '../Assets/Images/gallery/Christmas2023/13.jpg';
import Christmas2023_14 from '../Assets/Images/gallery/Christmas2023/14.jpg';
import Christmas2023_15 from '../Assets/Images/gallery/Christmas2023/15.jpg';



import Diwali2020_1 from '../Assets/Images/gallery/Diwali2020/1.jpg';
import Diwali2020_2 from '../Assets/Images/gallery/Diwali2020/2.jpg';
import Diwali2020_3 from '../Assets/Images/gallery/Diwali2020/3.jpg';
import Diwali2020_4 from '../Assets/Images/gallery/Diwali2020/4.jpg';
import Diwali2020_5 from '../Assets/Images/gallery/Diwali2020/5.jpg';
import Diwali2020_6 from '../Assets/Images/gallery/Diwali2020/6.jpg';
import Diwali2020_7 from '../Assets/Images/gallery/Diwali2020/7.jpg';
import Diwali2020_8 from '../Assets/Images/gallery/Diwali2020/8.jpg';
import Diwali2020_9 from '../Assets/Images/gallery/Diwali2020/9.jpg';
import Diwali2020_10 from '../Assets/Images/gallery/Diwali2020/10.jpg';
import Diwali2020_11 from '../Assets/Images/gallery/Diwali2020/11.jpg';
import Diwali2020_12 from '../Assets/Images/gallery/Diwali2020/12.jpg';
import Diwali2020_13 from '../Assets/Images/gallery/Diwali2020/13.jpg';
import Diwali2020_14 from '../Assets/Images/gallery/Diwali2020/14.jpg';
import Diwali2020_15 from '../Assets/Images/gallery/Diwali2020/15.jpg';



import Diwali2021_1 from '../Assets/Images/gallery/Diwali2021/1.jpg';
import Diwali2021_2 from '../Assets/Images/gallery/Diwali2021/2.jpg';
import Diwali2021_3 from '../Assets/Images/gallery/Diwali2021/3.jpg';
import Diwali2021_4 from '../Assets/Images/gallery/Diwali2021/4.jpg';
import Diwali2021_5 from '../Assets/Images/gallery/Diwali2021/5.jpg';
import Diwali2021_6 from '../Assets/Images/gallery/Diwali2021/6.jpg';
import Diwali2021_7 from '../Assets/Images/gallery/Diwali2021/7.jpg';
import Diwali2021_8 from '../Assets/Images/gallery/Diwali2021/8.jpg';
import Diwali2021_9 from '../Assets/Images/gallery/Diwali2021/9.jpg';
import Diwali2021_10 from '../Assets/Images/gallery/Diwali2021/10.jpg';
import Diwali2021_11 from '../Assets/Images/gallery/Diwali2021/11.jpg';
import Diwali2021_12 from '../Assets/Images/gallery/Diwali2021/12.jpg';
import Diwali2021_13 from '../Assets/Images/gallery/Diwali2021/13.jpg';
import Diwali2021_14 from '../Assets/Images/gallery/Diwali2021/14.jpg';
import Diwali2021_15 from '../Assets/Images/gallery/Diwali2021/15.jpg';


import Diwali2023_1 from '../Assets/Images/gallery/Diwali2023/1.jpg';
import Diwali2023_2 from '../Assets/Images/gallery/Diwali2023/2.jpg';
import Diwali2023_3 from '../Assets/Images/gallery/Diwali2023/3.jpg';
import Diwali2023_4 from '../Assets/Images/gallery/Diwali2023/4.jpg';
import Diwali2023_5 from '../Assets/Images/gallery/Diwali2023/5.jpg';
import Diwali2023_6 from '../Assets/Images/gallery/Diwali2023/6.jpg';
import Diwali2023_7 from '../Assets/Images/gallery/Diwali2023/7.jpg';
import Diwali2023_8 from '../Assets/Images/gallery/Diwali2023/8.jpg';
import Diwali2023_9 from '../Assets/Images/gallery/Diwali2023/9.jpg';
import Diwali2023_10 from '../Assets/Images/gallery/Diwali2023/10.jpg';
import Diwali2023_11 from '../Assets/Images/gallery/Diwali2023/11.jpg';
import Diwali2023_12 from '../Assets/Images/gallery/Diwali2023/12.jpg';
import Diwali2023_13 from '../Assets/Images/gallery/Diwali2023/13.jpg';
import Diwali2023_14 from '../Assets/Images/gallery/Diwali2023/14.jpg';
import Diwali2023_15 from '../Assets/Images/gallery/Diwali2023/15.jpg';



import EnteringTheNinth_1 from '../Assets/Images/gallery/EnteringTheNinth/1.jpg';
import EnteringTheNinth_2 from '../Assets/Images/gallery/EnteringTheNinth/2.jpg';
import EnteringTheNinth_3 from '../Assets/Images/gallery/EnteringTheNinth/3.jpg';
import EnteringTheNinth_4 from '../Assets/Images/gallery/EnteringTheNinth/4.jpg';
import EnteringTheNinth_5 from '../Assets/Images/gallery/EnteringTheNinth/5.jpg';
import EnteringTheNinth_6 from '../Assets/Images/gallery/EnteringTheNinth/6.jpg';
import EnteringTheNinth_7 from '../Assets/Images/gallery/EnteringTheNinth/7.jpg';
import EnteringTheNinth_8 from '../Assets/Images/gallery/EnteringTheNinth/8.jpg';
import EnteringTheNinth_9 from '../Assets/Images/gallery/EnteringTheNinth/9.jpg';
import EnteringTheNinth_10 from '../Assets/Images/gallery/EnteringTheNinth/10.jpg';
import EnteringTheNinth_11 from '../Assets/Images/gallery/EnteringTheNinth/11.jpg';
import EnteringTheNinth_12 from '../Assets/Images/gallery/EnteringTheNinth/12.jpg';
import EnteringTheNinth_13 from '../Assets/Images/gallery/EnteringTheNinth/13.jpg';
import EnteringTheNinth_14 from '../Assets/Images/gallery/EnteringTheNinth/14.jpg';
import EnteringTheNinth_15 from '../Assets/Images/gallery/EnteringTheNinth/15.jpg';


import Goa2023_1 from '../Assets/Images/gallery/Goa2023/1.jpg';
import Goa2023_2 from '../Assets/Images/gallery/Goa2023/2.jpg';
import Goa2023_3 from '../Assets/Images/gallery/Goa2023/3.jpg';
import Goa2023_4 from '../Assets/Images/gallery/Goa2023/4.jpg';
import Goa2023_5 from '../Assets/Images/gallery/Goa2023/5.jpg';
import Goa2023_6 from '../Assets/Images/gallery/Goa2023/6.jpg';
import Goa2023_7 from '../Assets/Images/gallery/Goa2023/7.jpg';
import Goa2023_8 from '../Assets/Images/gallery/Goa2023/8.jpg';
import Goa2023_9 from '../Assets/Images/gallery/Goa2023/9.jpg';
import Goa2023_10 from '../Assets/Images/gallery/Goa2023/10.jpg';
import Goa2023_11 from '../Assets/Images/gallery/Goa2023/11.jpg';
import Goa2023_12 from '../Assets/Images/gallery/Goa2023/12.jpg';
import Goa2023_13 from '../Assets/Images/gallery/Goa2023/13.jpg';
import Goa2023_14 from '../Assets/Images/gallery/Goa2023/14.jpg';
import Goa2023_15 from '../Assets/Images/gallery/Goa2023/15.jpg';


import Holi2022_1 from '../Assets/Images/gallery/Holi2022/1.jpg';
import Holi2022_2 from '../Assets/Images/gallery/Holi2022/2.jpg';
import Holi2022_3 from '../Assets/Images/gallery/Holi2022/3.jpg';
import Holi2022_4 from '../Assets/Images/gallery/Holi2022/4.jpg';
import Holi2022_5 from '../Assets/Images/gallery/Holi2022/5.jpg';
import Holi2022_6 from '../Assets/Images/gallery/Holi2022/6.jpg';
import Holi2022_7 from '../Assets/Images/gallery/Holi2022/7.jpg';
import Holi2022_8 from '../Assets/Images/gallery/Holi2022/8.jpg';
import Holi2022_9 from '../Assets/Images/gallery/Holi2022/9.jpg';
import Holi2022_10 from '../Assets/Images/gallery/Holi2022/10.jpg';


import LastDayOldOffice_1 from '../Assets/Images/gallery/LastDayOldOffice/1.jpg';
import LastDayOldOffice_2 from '../Assets/Images/gallery/LastDayOldOffice/2.jpg';
import LastDayOldOffice_3 from '../Assets/Images/gallery/LastDayOldOffice/3.jpg';
import LastDayOldOffice_4 from '../Assets/Images/gallery/LastDayOldOffice/4.jpg';
import LastDayOldOffice_5 from '../Assets/Images/gallery/LastDayOldOffice/5.jpg';
import LastDayOldOffice_6 from '../Assets/Images/gallery/LastDayOldOffice/6.jpg';
import LastDayOldOffice_7 from '../Assets/Images/gallery/LastDayOldOffice/7.jpg';
import LastDayOldOffice_8 from '../Assets/Images/gallery/LastDayOldOffice/8.jpg';
import LastDayOldOffice_9 from '../Assets/Images/gallery/LastDayOldOffice/9.jpg';
import LastDayOldOffice_10 from '../Assets/Images/gallery/LastDayOldOffice/10.jpg';
import LastDayOldOffice_11 from '../Assets/Images/gallery/LastDayOldOffice/11.jpg';
import LastDayOldOffice_12 from '../Assets/Images/gallery/LastDayOldOffice/12.jpg';
import LastDayOldOffice_13 from '../Assets/Images/gallery/LastDayOldOffice/13.jpg';


import NineMinusFour_1 from '../Assets/Images/gallery/NineMinusFour/1.jpg';
import NineMinusFour_2 from '../Assets/Images/gallery/NineMinusFour/2.jpg';
import NineMinusFour_3 from '../Assets/Images/gallery/NineMinusFour/3.jpg';
import NineMinusFour_4 from '../Assets/Images/gallery/NineMinusFour/4.jpg';
import NineMinusFour_5 from '../Assets/Images/gallery/NineMinusFour/5.jpg';
import NineMinusFour_6 from '../Assets/Images/gallery/NineMinusFour/6.jpg';
import NineMinusFour_7 from '../Assets/Images/gallery/NineMinusFour/7.jpg';
import NineMinusFour_8 from '../Assets/Images/gallery/NineMinusFour/8.jpg';
import NineMinusFour_9 from '../Assets/Images/gallery/NineMinusFour/9.jpg';
import NineMinusFour_10 from '../Assets/Images/gallery/NineMinusFour/10.jpg';
import NineMinusFour_11 from '../Assets/Images/gallery/NineMinusFour/11.jpg';
import NineMinusFour_12 from '../Assets/Images/gallery/NineMinusFour/12.jpg';
import NineMinusFour_13 from '../Assets/Images/gallery/NineMinusFour/13.jpg';
import NineMinusFour_14 from '../Assets/Images/gallery/NineMinusFour/14.jpg';
import NineMinusFour_15 from '../Assets/Images/gallery/NineMinusFour/15.jpg';

import PawnaLakeCampingTripMarch21_1 from '../Assets/Images/gallery/PawnaLakeCampingTripMarch21/1.jpg';
import PawnaLakeCampingTripMarch21_2 from '../Assets/Images/gallery/PawnaLakeCampingTripMarch21/2.jpg';
import PawnaLakeCampingTripMarch21_3 from '../Assets/Images/gallery/PawnaLakeCampingTripMarch21/3.jpg';
import PawnaLakeCampingTripMarch21_4 from '../Assets/Images/gallery/PawnaLakeCampingTripMarch21/4.jpg';
import PawnaLakeCampingTripMarch21_5 from '../Assets/Images/gallery/PawnaLakeCampingTripMarch21/5.jpg';
import PawnaLakeCampingTripMarch21_6 from '../Assets/Images/gallery/PawnaLakeCampingTripMarch21/6.jpg';
import PawnaLakeCampingTripMarch21_7 from '../Assets/Images/gallery/PawnaLakeCampingTripMarch21/7.jpg';
import PawnaLakeCampingTripMarch21_8 from '../Assets/Images/gallery/PawnaLakeCampingTripMarch21/8.jpg';
import PawnaLakeCampingTripMarch21_9 from '../Assets/Images/gallery/PawnaLakeCampingTripMarch21/9.jpg';
import PawnaLakeCampingTripMarch21_10 from '../Assets/Images/gallery/PawnaLakeCampingTripMarch21/10.jpg';
import PawnaLakeCampingTripMarch21_11 from '../Assets/Images/gallery/PawnaLakeCampingTripMarch21/11.jpg';
import PawnaLakeCampingTripMarch21_12 from '../Assets/Images/gallery/PawnaLakeCampingTripMarch21/12.jpg';
import PawnaLakeCampingTripMarch21_13 from '../Assets/Images/gallery/PawnaLakeCampingTripMarch21/13.jpg';
import PawnaLakeCampingTripMarch21_14 from '../Assets/Images/gallery/PawnaLakeCampingTripMarch21/14.jpg';
import PawnaLakeCampingTripMarch21_15 from '../Assets/Images/gallery/PawnaLakeCampingTripMarch21/16.jpg';


import SportsDay2024_1 from '../Assets/Images/gallery/SportsDay2024/1.jpg';
import SportsDay2024_2 from '../Assets/Images/gallery/SportsDay2024/2.jpg';
import SportsDay2024_3 from '../Assets/Images/gallery/SportsDay2024/3.jpg';
import SportsDay2024_4 from '../Assets/Images/gallery/SportsDay2024/4.jpg';
import SportsDay2024_5 from '../Assets/Images/gallery/SportsDay2024/5.jpg';
import SportsDay2024_6 from '../Assets/Images/gallery/SportsDay2024/6.jpg';
import SportsDay2024_7 from '../Assets/Images/gallery/SportsDay2024/7.jpg';


import WomensDay2022_1 from '../Assets/Images/gallery/WomensDay2022/1.jpg';
import WomensDay2022_2 from '../Assets/Images/gallery/WomensDay2022/2.jpg';
import WomensDay2022_3 from '../Assets/Images/gallery/WomensDay2022/3.jpg';
import WomensDay2022_4 from '../Assets/Images/gallery/WomensDay2022/4.jpg';
import WomensDay2022_5 from '../Assets/Images/gallery/WomensDay2022/5.jpg';
import WomensDay2022_6 from '../Assets/Images/gallery/WomensDay2022/6.jpg';
import WomensDay2022_7 from '../Assets/Images/gallery/WomensDay2022/7.jpg';
import WomensDay2022_8 from '../Assets/Images/gallery/WomensDay2022/8.jpg';
import WomensDay2022_9 from '../Assets/Images/gallery/WomensDay2022/9.jpg';
import WomensDay2022_10 from '../Assets/Images/gallery/WomensDay2022/10.jpg';
// Images End





const images = [
  {
    src: A09TURNS09_1,
    title: '#09TURNS09',
    group: 'A09TURNS09',
    additionalImages: [ A09TURNS09_2, A09TURNS09_3, A09TURNS09_4, A09TURNS09_5, A09TURNS09_6, A09TURNS09_7, A09TURNS09_8, A09TURNS09_9, A09TURNS09_10, A09TURNS09_11, A09TURNS09_12, A09TURNS09_13, A09TURNS09_14, A09TURNS09_15, A09TURNS09_16, A09TURNS09_17, A09TURNS09_18, A09TURNS09_19, A09TURNS09_20, A09TURNS09_21, A09TURNS09_22, A09TURNS09_23, A09TURNS09_24],
  },
  {
    src: A096thYearAnniversary_1,
    title: '6th Year Anniversary',
    group: 'A096thYearAnniversary',
    additionalImages: [ A096thYearAnniversary_2, A096thYearAnniversary_3, A096thYearAnniversary_4, A096thYearAnniversary_5, A096thYearAnniversary_6, A096thYearAnniversary_7,  A096thYearAnniversary_8, A096thYearAnniversary_9, A096thYearAnniversary_10, A096thYearAnniversary_11,  A096thYearAnniversary_13, A096thYearAnniversary_14, A096thYearAnniversary_15,],
  },
  {
    src: A097thYearAnniversary_1,
    title: '7th Year Anniversary',
    group: 'A097thYearAnniversary',
    additionalImages: [ A097thYearAnniversary_2, A097thYearAnniversary_4, A097thYearAnniversary_5, A097thYearAnniversary_6, A097thYearAnniversary_7,  A097thYearAnniversary_8, A097thYearAnniversary_9, A097thYearAnniversary_10, A097thYearAnniversary_12, A097thYearAnniversary_14, A097thYearAnniversary_15,],
  },
  {
    src: Christmas2021_1,
    title: 'Christmas 2021',
    group: 'Christmas2021',
    additionalImages: [ Christmas2021_2, Christmas2021_3, Christmas2021_4, Christmas2021_5, Christmas2021_6, Christmas2021_7,  Christmas2021_8, Christmas2021_9, Christmas2021_10, Christmas2021_11, Christmas2021_12,],
  },
  {
    src: Christmas2022_1,
    title: 'Christmas 2022',
    group: 'Christmas2022',
    additionalImages: [ Christmas2022_2, Christmas2022_3, Christmas2022_4, Christmas2022_5, Christmas2022_6,],
  },
  {
    src: Christmas2023_1,
    title: 'Christmas 2023',
    group: 'Christmas2023',
    additionalImages: [ Christmas2023_2, Christmas2023_3, Christmas2023_4, Christmas2023_5, Christmas2023_6, Christmas2023_7,  Christmas2023_8, Christmas2023_9, Christmas2023_10, Christmas2023_11, Christmas2023_12, Christmas2023_13, Christmas2023_14, Christmas2023_15,],
  },
  {
    src: Diwali2020_1,
    title: 'Diwali 2020',
    group: 'Diwali2020',
    additionalImages: [ Diwali2020_2, Diwali2020_3, Diwali2020_4, Diwali2020_5, Diwali2020_6, Diwali2020_7,  Diwali2020_8, Diwali2020_9, Diwali2020_10, Diwali2020_11, Diwali2020_12, Diwali2020_13, Diwali2020_14, Diwali2020_15,],
  },
  {
    src: Diwali2021_1,
    title: 'Diwali 2021',
    group: 'Diwali2021',
    additionalImages: [ Diwali2021_2, Diwali2021_3, Diwali2021_4, Diwali2021_5, Diwali2021_6, Diwali2021_7,  Diwali2021_8, Diwali2021_9, Diwali2021_10, Diwali2021_11, Diwali2021_12, Diwali2021_13, Diwali2021_14, Diwali2021_15,],
  },
  {
    src: Diwali2023_1,
    title: 'Diwali 2023',
    group: 'Diwali2023',
    additionalImages: [ Diwali2023_2, Diwali2023_3, Diwali2023_4, Diwali2023_5, Diwali2023_6, Diwali2023_7,  Diwali2023_8, Diwali2023_9, Diwali2023_10, Diwali2023_11, Diwali2023_12, Diwali2023_13, Diwali2023_14, Diwali2023_15,],
  },
  {
    src: EnteringTheNinth_1,
    title: '#EnteringTheNinth ',
    group: 'EnteringTheNinth',
    additionalImages: [ EnteringTheNinth_2, EnteringTheNinth_3, EnteringTheNinth_4, EnteringTheNinth_5, EnteringTheNinth_6, EnteringTheNinth_7,  EnteringTheNinth_8, EnteringTheNinth_9, EnteringTheNinth_10, EnteringTheNinth_11, EnteringTheNinth_12, EnteringTheNinth_13, EnteringTheNinth_14, EnteringTheNinth_15,],
  },
  {
    src: Goa2023_1,
    title: 'Goa 2023',
    group: 'Goa2023',
    additionalImages: [ Goa2023_2, Goa2023_3, Goa2023_4, Goa2023_5, Goa2023_6, Goa2023_7,  Goa2023_8, Goa2023_9, Goa2023_10, Goa2023_11, Goa2023_12, Goa2023_13, ],
  },
  {
    src: Holi2022_1,
    title: 'Holi 2022',
    group: 'Holi2022',
    additionalImages: [ Holi2022_4, Holi2022_8, Holi2022_10,],
  },
  {
    src: LastDayOldOffice_1,
    title: 'Last Day - Old Office',
    group: 'LastDayOldOffice',
    additionalImages: [ LastDayOldOffice_2, LastDayOldOffice_3, LastDayOldOffice_4, LastDayOldOffice_5, LastDayOldOffice_6, LastDayOldOffice_7,  LastDayOldOffice_8, LastDayOldOffice_9, LastDayOldOffice_10, LastDayOldOffice_11, LastDayOldOffice_12, LastDayOldOffice_13,],
  },
  {
    src: NineMinusFour_1,
    title: 'Nine minus Four',
    group: 'NineMinusFour',
    additionalImages: [ NineMinusFour_2, NineMinusFour_3, NineMinusFour_4, NineMinusFour_5, NineMinusFour_6, NineMinusFour_7,  NineMinusFour_8, NineMinusFour_9, NineMinusFour_10, NineMinusFour_11, NineMinusFour_12, NineMinusFour_13, NineMinusFour_14, NineMinusFour_15,],
  },
  {
    src: PawnaLakeCampingTripMarch21_1,
    title: 'Pawna Lake Camping Trip - March 21',
    group: 'PawnaLakeCampingTripMarch21',
    additionalImages: [ PawnaLakeCampingTripMarch21_2, PawnaLakeCampingTripMarch21_3, PawnaLakeCampingTripMarch21_4, PawnaLakeCampingTripMarch21_5, PawnaLakeCampingTripMarch21_6, PawnaLakeCampingTripMarch21_7,  PawnaLakeCampingTripMarch21_8, PawnaLakeCampingTripMarch21_9, PawnaLakeCampingTripMarch21_10, PawnaLakeCampingTripMarch21_11, PawnaLakeCampingTripMarch21_12, PawnaLakeCampingTripMarch21_13, PawnaLakeCampingTripMarch21_14, PawnaLakeCampingTripMarch21_15,],
  },
  {
    src: SportsDay2024_1,
    title: 'Sports Day 2024',
    group: 'SportsDay2024',
    additionalImages: [ SportsDay2024_2, SportsDay2024_3, SportsDay2024_4, SportsDay2024_5, SportsDay2024_6, SportsDay2024_7,],
  },
  {
    src: WomensDay2022_1,
    title: 'Womens Day 2022',
    group: 'WomensDay2022',
    additionalImages: [ WomensDay2022_2, WomensDay2022_3, WomensDay2022_4, WomensDay2022_5, WomensDay2022_6, WomensDay2022_7, WomensDay2022_8, WomensDay2022_9, WomensDay2022_10,],
  },
  
];

const LifeAtA09 = () => {
  const sliderRef = useRef(null);
  const LogosSliders = {
    dots: false,
    arrows: true,
    infinite: false,
    autoplay: true,
    autoplaySpeed: 7000,
    rows: 2,
    speed: 700,
    slidesToShow: 3,
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 968,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          arrows: true,
          infinite: true,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  return (
    <div className="LifeAtA09Row">
      <LightgalleryProvider>
        <Slider {...LogosSliders} className="LogosSlider-slick slick-slider arrowLRC" ref={sliderRef}>
          {images.map((image, index) => (
            <div key={index} className="item">
              <div className="LifeAtA09Col">
                <LightgalleryItem group={image.group} src={image.src}>
                  <img src={image.src} alt={`lifeata09_${index + 1}`} />
                  <div className="LifeAt09Text">
                    <h3>{image.title}</h3>
                  </div>
                </LightgalleryItem>
                {image.additionalImages.map((additionalImage, addIndex) => (
                  <LightgalleryItem key={addIndex} group={image.group} src={additionalImage}></LightgalleryItem>
                ))}
              </div>
            </div>
          ))}
        </Slider>
      </LightgalleryProvider>
    </div>
  );
};

export default LifeAtA09;
