import React from "react";
import * as AiIcons from "react-icons/ai";
import * as IoIcons from "react-icons/io";
import * as Io2Icons from "react-icons/io5";
import * as RiIcons from "react-icons/ri";

export const LeftPanelData = [
  {
    title: "홈",
    path: "/home",
    icon: <AiIcons.AiFillHome />,
    iconClosed: <RiIcons.RiArrowDownSFill />,
    iconOpened: <RiIcons.RiArrowUpSFill />,
  },
  {
    title: "카페",
    path: "/category/cafe",
    icon: <IoIcons.IoIosCafe />,
    iconClosed: <RiIcons.RiArrowDownSFill />,
    iconOpened: <RiIcons.RiArrowUpSFill />,
  },
  {
    title: "배달",
    path: "/category/delivery",
    icon: <RiIcons.RiEBike2Fill />,
    iconClosed: <RiIcons.RiArrowDownSFill />,
    iconOpened: <RiIcons.RiArrowUpSFill />,
  },
  {
    title: "생활용품",
    path: "/category/others",
    icon: <Io2Icons.IoBasket />,
    iconClosed: <RiIcons.RiArrowDownSFill />,
    iconOpened: <RiIcons.RiArrowUpSFill />,
  },
  // {
  //   title: "카테고리",
  //   path: "/category",
  //   icon: <IoIcons.IoIosPaper />,
  //   iconClosed: <RiIcons.RiArrowDownSFill />,
  //   iconOpened: <RiIcons.RiArrowUpSFill />,
  //
  //   subNav: [
  //     {
  //       title: "카페",
  //       path: "/category/cafe",
  //       icon: <IoIcons.IoIosPaper />,
  //       cName: "sub-nav",
  //     },
  //     {
  //       title: "배달",
  //       path: "/category/delivery",
  //       icon: <IoIcons.IoIosPaper />,
  //       cName: "sub-nav",
  //     },
  //     {
  //       title: "기타",
  //       path: "/category/others",
  //       icon: <IoIcons.IoIosPaper />,
  //       cName: "sub-nav",
  //     },
  //   ],
  // },
];
