import React, { useState } from "react";
import { MenuWrapper, Item } from "./Menu.styles";
import { RiHomeSmile2Line } from "react-icons/ri";
import { BsFiles, BsBook } from "react-icons/bs";
import { TbCertificate } from "react-icons/tb";
import {
  AiOutlineMessage,
  AiFillSetting,
  AiOutlineSchedule,
} from "react-icons/ai";
import styled from "styled-components";
import { TABS } from "../../contants";
import { motion } from "framer-motion";

interface IMenuItemProps {
  title: string;
  icon: React.ReactNode;
  enabled: boolean;
  dataId: string;
  onClick: () => void;
}

const ItemWrapper = styled.li`
  position: relative;
  width: 100%;
  height: 3.5rem;

  & > span {
    position: absolute;
    top: 50%;
    right: 0;
    width: 0.3rem;
    height: 80%;
    background: white;
    border-radius: 0.2rem 0 0 0.2rem;
    transform: translateY(-50%);
    cursor: pointer;
  }
`;

const MenuItem = (props: IMenuItemProps) => {
  return (
    <ItemWrapper onClick={props.onClick} data-testid={props.dataId}>
      <Item enabled={props.enabled}>
        {props.icon}
        <p>{props.title}</p>
      </Item>
      {props.enabled ? <span></span> : null}
    </ItemWrapper>
  );
};

const Menu = (props: { onChangeTab: (tab: string) => void }) => {
  const [tabActive, setTabActive] = useState<string>(TABS.COURSES);

  const handleClick = (tab) => {
    setTabActive(tab);
    props.onChangeTab(tab);
  };

  return (
    <MenuWrapper>
      <div
        style={{
          width: "100%",
          height: "auto",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <motion.span
          whileHover={{ scale: 1.2 }}
          style={{ cursor: "pointer" }}
        ></motion.span>
      </div>
      <ul>
        <MenuItem
          dataId="menu-main"
          enabled={tabActive === TABS.MAIN}
          title="Main"
          icon={
            <RiHomeSmile2Line
              size="2em"
              color={tabActive === TABS.MAIN ? "#bbb9ba" : "#50413a"}
            />
          }
          onClick={() => handleClick(TABS.MAIN)}
        />
        <MenuItem
          dataId="menu-courses"
          enabled={tabActive === TABS.COURSES}
          title="Courses"
          icon={
            <BsFiles
              size="1.5em"
              color={tabActive === TABS.COURSES ? "#bbb9ba" : "#50413a"}
            />
          }
          onClick={() => handleClick(TABS.COURSES)}
        />
        <MenuItem
          dataId="menu-schedule"
          enabled={tabActive === TABS.SCHEDULE}
          title="Schedule"
          icon={
            <AiOutlineSchedule
              size="1.5em"
              color={tabActive === TABS.SCHEDULE ? "#bbb9ba" : "#50413a"}
            />
          }
          onClick={() => handleClick(TABS.SCHEDULE)}
        />
        <MenuItem
          dataId="menu-materials"
          enabled={tabActive === TABS.MATERIALS}
          title="Materials"
          icon={
            <BsBook
              size="1.5em"
              color={tabActive === TABS.MATERIALS ? "#bbb9ba" : "#50413a"}
            />
          }
          onClick={() => handleClick(TABS.MATERIALS)}
        />
        <MenuItem
          dataId="menu-certificates"
          enabled={tabActive === TABS.CERTIFICATES}
          title="Certificates"
          icon={
            <TbCertificate
              size="1.5em"
              color={tabActive === TABS.CERTIFICATES ? "#bbb9ba" : "#50413a"}
            />
          }
          onClick={() => handleClick(TABS.CERTIFICATES)}
        />
        <MenuItem
          dataId="menu-messages"
          enabled={tabActive === TABS.MESSAGES}
          title="Messages"
          icon={
            <AiOutlineMessage
              size="1.5em"
              color={tabActive === TABS.MESSAGES ? "#bbb9ba" : "#50413a"}
            />
          }
          onClick={() => handleClick(TABS.MESSAGES)}
        />
        <MenuItem
          dataId="menu-settings"
          enabled={tabActive === TABS.SETTINGS}
          title="Settings"
          icon={
            <AiFillSetting
              size="1.5em"
              color={tabActive === TABS.SETTINGS ? "#bbb9ba" : "#50413a"}
            />
          }
          onClick={() => handleClick(TABS.SETTINGS)}
        />
      </ul>
    </MenuWrapper>
  );
};

export default Menu;
