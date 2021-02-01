import React, {useState, useEffect} from "react";
import styled from "styled-components";
import bgAnimal from "../asset/home/bg-animal.png"
import bgEco from "../asset/home/bg-eco.jpg"


const MainBanner = styled.div`
  width: auto;
  height: 90vh;
  text-align: center;
`;

const FitImage = styled.img`
  max-height: 100%;
  max-width: 100%;
  object-fit: contain;
`;

const content = [
    {
        url: `${bgAnimal}`
    },
    {
        url: `${bgEco}`
    }
]

const useTabs = (initialTab, allTabs) => {
    const [currentIndex, setCurrentIndex] = useState(initialTab);
    if (!allTabs || !Array.isArray(allTabs)) {
        return;
    }
    return {
        currentItem: allTabs[currentIndex],
        changeItem: setCurrentIndex
    }
}

function Home() {
    const {currentItem, changeItem} = useTabs(0, content);
    useEffect(() => {
        setTimeout(() => {
            changeItem(1)
        }, 5000)
    })
    return (
        <>
            <MainBanner onClick={() => changeItem(1)}>
                <FitImage src={currentItem.url} alt="mainBanner"/>
            </MainBanner>


            {/*{content.map((section, index) => (*/}
            {/*    <button onClick={() => changeItem(index)}>{section.tab}</button>*/}
            {/*))}*/}
            {/*<div>{currentItem.content}</div>*/}
        </>
    );
}

export default Home;
