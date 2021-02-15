import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import bgAnimal from "../asset/home/bg-animal.png";
import bgEco from "../asset/home/bg-eco.jpg";
import "./home.css";

const MainBanner = styled.div`
  max-height: 100%;
  max-width: 100%;
  text-align: center;
`;

const FitImage = styled.img`
  max-height: 100%;
  max-width: 100%;
  object-fit: contain;
`;

const FloatingCon = styled.div`
  position: absolute;
  height: 80px;
  bottom: 50%;
  right: 10%;
  background-color: rgba(255, 255, 255, 0.8);
  color: black;
  border-radius: 10px;
  text-align: center;
  display: inline-block;
  transition: 0.3s;
  font-size: 30px;
  box-shadow: 3px 3px 3px 0px #515151;
`;

const FloatingBtn = styled.button`
  position: absolute;
  width: 300px;
  height: 80px;
  bottom: 77%;
  right: 10%;
  background-color: rgba(255, 255, 255, 0.8);
  color: black;
  border-radius: 10px;
  text-align: center;
  display: inline-block;
  transition: 0.3s;
  font-size: 30px;
  box-shadow: 3px 3px 3px 0px #515151;
  font-family: "Do Hyeon", sans-serif;

  &:hover {
    opacity: 1;
    background-color: rgba(255, 255, 255);
  }
`;

const content = [
  {
    url: `${bgAnimal}`,
    btn: "친환경 제품 왜 써야할까?",
    path: "/description",
    message: "코로나로 인한 무분별한 일회용품 사용으로 인한 결과입니다.",
  },
  {
    url: `${bgEco}`,
    btn: "제품을 사고 싶다면?",
    path: "/category",
    message: "코로나로 인한 무분별한 일회용품 사용으로 인한 결과입니다.",
  },
];

const useTabs = (initialTab, allTabs) => {
  const [currentIndex, setCurrentIndex] = useState(initialTab);
  if (!allTabs || !Array.isArray(allTabs)) {
    return;
  }
  return {
    currentIndex,
    currentItem: allTabs[currentIndex],
    changeItem: setCurrentIndex,
  };
};

function Home() {
  const { currentIndex, currentItem, changeItem } = useTabs(0, content);
  useEffect(() => {
    const interval = setInterval(() => {
      changeItem((currentIndex + 1) % 2);
    }, 10000);
    return () => clearInterval(interval);
  });
  useEffect(() => {
    document.body.classList.add("preventScroll");
    return () => {
      document.body.classList.remove("preventScroll");
    };
  });
  return (
    <>
      <MainBanner>
        <FitImage src={currentItem.url} alt="mainBanner" />
        <Link to={currentItem.path}>
          <FloatingBtn>{currentItem.btn}</FloatingBtn>
        </Link>
        <FloatingCon>{currentItem.message}</FloatingCon>
      </MainBanner>

      {/*{content.map((section, index) => (*/}
      {/*    <button onClick={() => changeItem(index)}>{section.tab}</button>*/}
      {/*))}*/}
      {/*<div>{currentItem.content}</div>*/}
    </>
  );
}

export default Home;
