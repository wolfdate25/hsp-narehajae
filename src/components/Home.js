import React, {useEffect, useState} from "react";
import {Link} from "react-router-dom";
import styled from "styled-components";
import bgAnimal from "../asset/home/bg-animal.png"
import bgEco from "../asset/home/bg-eco.jpg"
import "../home.css"

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

const FloatingBtn = styled.button`

  position: absolute;
  height: 60px;
  bottom: 10%;
  right: 10%;
  background-color: #FDE047;
  color: #FFF;
  border-radius: 50px;
  text-align: center;
  display: inline-block;
  transition: 0.3s;
  font-size: 2em;

  &:hover {
    opacity: 1;
    background-color: cadetblue;
  }
`;

const content = [
    {
        url: `${bgAnimal}`,
        btn: "버튼1",
        path: "/description"
    },
    {
        url: `${bgEco}`,
        btn: "버튼2",
        path: "/description"
    }
]

const useTabs = (initialTab, allTabs) => {
    const [currentIndex, setCurrentIndex] = useState(initialTab);
    if (!allTabs || !Array.isArray(allTabs)) {
        return;
    }
    return {
        currentIndex,
        currentItem: allTabs[currentIndex],
        changeItem: setCurrentIndex
    }
}

function Home() {
    const {currentIndex, currentItem, changeItem} = useTabs(0, content);
    useEffect(() => {
        const interval = setInterval(() => {
            changeItem((currentIndex + 1) % 2)
        }, 10000)
        return () => clearInterval(interval);
    })
    return (
        <>
            <MainBanner>
                <FitImage src={currentItem.url} alt="mainBanner"/>
                <Link to={currentItem.path}>
                    <FloatingBtn>{currentItem.btn}</FloatingBtn></Link>
            </MainBanner>

            {/*{content.map((section, index) => (*/}
            {/*    <button onClick={() => changeItem(index)}>{section.tab}</button>*/}
            {/*))}*/}
            {/*<div>{currentItem.content}</div>*/}
        </>
    );
}

export default Home;
