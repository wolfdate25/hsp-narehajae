import React from "react";
import styled from "styled-components";
import {CartesianGrid, Tooltip, XAxis, ResponsiveContainer, YAxis, AreaChart, Area} from "recharts";
import bgImage from "../asset/home/bg-leaves.jpg"

const MainBanner = styled.div`
  width: 100%;
  height: 400px;
  background-image: url(${bgImage});
`;
const MainSloganDiv = styled.div`
  width: 50%;
  height: 300px;
  position: relative;
  left: 100px;
  top: 50px;
  background: white;
  background-color: rgba(255,255,255,0.3);
`;

const MainSlogan = styled.p`
  color: black;
  font-size: xx-large;
`;

const CharDsc = styled.div`
  width: 100%;
  font-size: xx-large;
  text-align: center;
`;

function Home() {
    return (
        <>
            <MainBanner>
                <MainSloganDiv>
                    <MainSlogan>
                        <b>지구를 위해<br/> 친환경 일회용품 사용을 권장합니다<br/>
                            친환경 제품 사용에 동참해주세요</b>
                    </MainSlogan>
                </MainSloganDiv>

            </MainBanner>
            <CharDsc>
                일회용품 사용량
            </CharDsc>
            <ResponsiveContainer width='100%' aspect='5'>
                <AreaChart
                    height={200}
                    data={data}
                    margin={{top: 5, right: 50, left: 40, bottom: 5}}
                >
                    <XAxis dataKey="name"/>
                    <YAxis type="number" domain={['0', 'auto']} allowDataOverflow={true}/>
                    <Tooltip/>
                    <CartesianGrid strokeDasharray="3 3"/>
                    <Area type="monotone" dataKey="trash" stroke="#ff7300" yAxisId={0}/>
                    {/*<Line type="monotone" dataKey="green" stroke="#387908" yAxisId={1}/>*/}
                </AreaChart>
            </ResponsiveContainer>
        </>
    );
}

const data = [
    {
        name: '2015', trash: 61.97, green: 2400, amt: 2400,
    },
    {
        name: '2016', trash: 63.01, green: 1398, amt: 2210,
    },
    {
        name: '2017', trash: 64.12, green: 9800, amt: 2290,
    },
    {
        name: '2018', trash: 65.28, green: 3908, amt: 2000,
    },
    {
        name: '2019', trash: 66.49, green: 4800, amt: 2181,
    },
    {
        name: '2020', trash: 67.41, green: 3800, amt: 2500,
    },
];

export default Home;
