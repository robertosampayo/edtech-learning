import styled from "styled-components";
import Menu from "../components/Menu";
import { useState } from "react";
import CoursesTab from "../tabs/CoursesTab";
import MainTab from "../tabs/MainTab";
import ScheduleTab from "../tabs/ShceduleTab";
import MaterialsTab from "../tabs/MaterialsTab";
import CertificatesTab from "../tabs/CertificatesTab";
import MessagesTab from "../tabs/MessagesTab";
import SettingsTab from "../tabs/SettingsTab";
import { TABS } from "../contants";
import Head from "next/head";
import * as CONTANTS from "../contants";
import React from "react";

const Main = styled.main`
  display: grid;
  grid-template-columns: 120px 1fr;
  height: auto;
  min-width: 100%;
`;

const Board = styled.section`
  height: 95vh;
  min-width: 100%;
  background: ${(props) => props.theme.colors.board};
  border-radius: ${(props) => props.theme.utils.borderRadius};

  @media screen and (max-width: ${CONTANTS.DEVICE.TABLET}) {
    height: auto;
    min-width: 100%;
  }

  @media screen and (max-width: ${(props) => props.theme.device.mobile}) {
    min-width: 100vw;
  }
`;

function Home(props) {
  const [tab, setTab] = useState(TABS.COURSES);
  const changeTab = (tab: string) => {
    setTab(tab);
  };

  const loadTab = (tab: string) => {
    switch (tab) {
      case TABS.MAIN:
        return <MainTab />;
      case TABS.COURSES:
        return (
          <CoursesTab courses={props.courses} categories={props.categories} />
        );
      case TABS.MATERIALS:
        return <MaterialsTab />;
      case TABS.CERTIFICATES:
        return <CertificatesTab />;
      case TABS.SCHEDULE:
        return <ScheduleTab />;
      case TABS.MESSAGES:
        return <MessagesTab />;
      case TABS.SETTINGS:
        return <SettingsTab />;
      default:
        return (
          <CoursesTab courses={props.courses} categories={props.categories} />
        );
    }
  };

  return (
    <Main>
      <Head>
        <title>Henry</title>
        <meta
          name="description"
          content="Somos la primera academia de tecnología que invierte en la educación de las personas en Latinoamérica. Estudiar en Edtech tiene cero costo inicial, los estudiantes pagan solo cuando consiguen un empleo bien remunerado. Puedes convertirte en un Full Stack Developer o Data Scientist a cero costo inicial."
        ></meta>
        <link rel="shortcut icon" href="/favicon.ico" />
      </Head>
      <Menu onChangeTab={changeTab} mainTab={tab} />
      <Board>{loadTab(tab)}</Board>
    </Main>
  );
}

export default React.memo(Home);

export async function getStaticProps() {
  const data = await import("../db.json");
  return {
    props: {
      courses: JSON.parse(JSON.stringify(data.courses)),
      categories: JSON.parse(JSON.stringify(data.categories)),
    },
  };
}
