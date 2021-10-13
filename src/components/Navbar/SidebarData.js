import React from 'react';
import * as FaIcons from 'react-icons/fa';
import * as AiIcons from "react-icons/ai";
import * as IoIcons from 'react-icons/io';
import * as RiIcons from 'react-icons/ri';

export const SidebarData = [
    {
        title: "Home",
        path: '/',
        icon: <AiIcons.AiTwotoneHome/>,
        cName: "nav-text",
    },
    {
        title: "Marcas",
        path: '/brands',
        icon: <IoIcons.IoIosCar/>,
        cName: "nav-text",
    },
    {
        title: "Models",
        path: '/models',
        icon: <IoIcons.IoLogoModelS/>,
        cName: "nav-text",
    },
    {
        title: "Combustibles",
        path: '/gas',
        icon: <FaIcons.FaGasPump/>,
        cName: "nav-text",
    },
    {
        title: "Gestion",
        path: '/gestion',
        icon: <RiIcons.RiShieldUserFill/>,
        cName: "nav-text",
    },
]