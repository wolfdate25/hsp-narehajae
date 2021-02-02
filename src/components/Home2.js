import React,{ Component } from "react";
import styled from "styled-components";
import {CartesianGrid, Tooltip, XAxis, ResponsiveContainer, YAxis, AreaChart, Area, Line} from "recharts";
import bgImage from "../asset/home/ocean.jpg"
import eco from "../asset/home/eco-Icon.jpg"
import bio from "../asset/home/Bio.jpg"
import turtle from "../asset/home/turtle.jpg"
import bird from "../asset/home/animal.jpg"
import { FaAlignRight } from "react-icons/fa";

const MainBanner = styled.div`
  width: auto;
  height: 100%;
  background-image: url(${bgImage});
`;

const MainSloganDiv = styled.div`
  width: auto;
  height: 100%;
  text-align: right;
  padding: 1% 0 1% 0;
  margin: 0;
`;

const MainSlogan = styled.p`
  color: white;
  font-size: x-large;
  padding-right: 3%;
`;

const CharDsc = styled.div`
  width: 100%;
  font-size: xx-large;
  text-align: center;
  font-size: 30px;
`;

const CharDsc2 = styled.div`
  width: 100%;
  font-size: x-large;
`;

const StyledButton = styled.button`
  background: transparent;
  border-radius: 3px;
  border-width: 3px;
  border-style: solid;
  border-color: green;
  color: green;
  padding: 0.25em 1em;
  font-size: 25px;
  cursor: pointer;
  
`;

const StyledButton2 = styled.button`
  background: transparent;
  border-radius: 3px;
  border-width: 3px;
  border-style: solid;
  border-color: red;
  color: red;
  padding: 0.25em 1em;
  font-size: 25px;
  cursor: pointer;
  
`;

function Home2() {
    return (
        <>
            <MainBanner>
                <MainSloganDiv>
                    <MainSlogan>
                        <b>코로나가 만든 플라스틱 산더미들..<br/>
                        버려진 쓰레기들은 바다로 떠밀려 해양동물들이 해파리로 착각을 해 먹게됩니다<br/>
                        세계자연기금(WWF)에 따르면 연간 800만t의 플라스틱들이 바다로 유출되고 있습니다.<br/>
                        플라스틱 폐기물로 고통받는 동물들을 위해 친환경 일회용품 사용을 권장합니다<br/>
                        친환경 제품 사용에 동참해주세요</b>
                    </MainSlogan>
                </MainSloganDiv>
            </MainBanner>
            <br></br>   
            <br></br>
            <CharDsc style={{margin: "0 0 3% 0"}}>
                일회용품 사용량
            
            </CharDsc>
            <br></br>   
            <ResponsiveContainer width='100%' aspect='5'>
                <AreaChart
                    height={300}
                    data={data}
                    margin={{top: 1, right: 200, left: 200, bottom: 1}}
                >
                    <XAxis dataKey="name"/>
                    <YAxis type="number" domain={['0', 'auto']} allowDataOverflow={true}/>
                    <Tooltip/>
                    <CartesianGrid strokeDasharray="3 3"/>
                    <Area type="monotone" dataKey="trash" stroke="#497649" yAxisId={0} fill="#54BD54" />
                    {/*<Line type="monotone" dataKey="green" stroke="#387908" yAxisId={1}/>*/}
                </AreaChart>
            </ResponsiveContainer>
            <br></br>
            <br></br>
            <Last></Last>
            <br></br>
            <Positive></Positive>
            <Positive2></Positive2>
            <Last2></Last2>
            <Negative></Negative>
        </>
    );
}

class Last extends Component {
    render(){
        return(
            <CharDsc style={{padding: "2% 0 0 0"}}>
                <StyledButton>친환경 제품의 긍정적인 면</StyledButton>
            </CharDsc>

        );
    }
}

class Positive extends Component {
    render(){
        return(
            <CharDsc2>
                <img src={eco} style={{float: "right"}}width="150px" height="auto"></img>
                <p style={{padding:"0 2% 0 2%"}}>
                1.좋은 이미지로 사장님들은 매출 up❗ 소비자들은 안심❗<br></br><br></br>
                친환경 제품에 붙어있는 환경부 마크로 소비자들에게 안심을 사장님들은 매출 향상을 기대하셔도 좋습니다!
                실제로 관련 신문기사 중 친환경 인증 기업은 <a style={{color: "red"}}>매출이 평균 20% 에서 89%까지</a> 상승했다고
                합니다! 친환경 제품으로 건강도 챙기고 환경도 챙기고 경제적 이익도 챙겨봅시다~!</p>
                <br></br>
            </CharDsc2>

        );
    }
}
class Positive2 extends Component {
    render(){
        return(
            <CharDsc2 >
                <p style={{padding:"0 2% 0 2%"}}>
                <img src={bio} style={{float: "left"}}width="300px" height="auto"></img>
                <p style={{padding:"0 0 0 350px"}}>
                2. 한 번 사용한 일회용품이 일상생활의 에너지로<a style={{color:"green"}}>♻</a> <br></br><br></br>
                생체 호르몬에 혼란을 주는 난연제들이 사용되지 않아 분해를 하더라도 해로운 성분이 아예 없습니다!<br></br>
                <a style={{color:"#497649"}}>걱정 없이 사용하는 일회용품❗ 맑은 환경을 미래의 아이들에게 선물하세요❗</a></p>
                </p>
            </CharDsc2>

        );
    }
}


class Last2 extends Component {
    render(){
        return(
            <CharDsc style={{padding: "5% 0 0 0"}}>
                <StyledButton2>일회용품으로 고통받는 생명</StyledButton2>
            </CharDsc>
        );
    }
}

class Negative extends Component {
    render(){
        return(
            <CharDsc2>
                <p style={{padding:"0 2% 0 2%"}}>
                <img src={turtle} style={{float: "left"}}width="400px" height="auto"></img>
                <div style={{padding:"0 0 0 430px"}}> 옆에 피를 흘리는 거북이가 보이십니까? <br></br> 그리고 비닐 장갑을 해파리인지 알고 물고가는 새가 보이십니까?</div>
                <br></br><br></br>
                <p padding="0 2% 0 2% "></p>
                <img src={bird} style={{float: "right"}}width="300px" height="auto"></img>
                <div style={{padding: " 0 330px 0 430px"}}> 이 아이들은 사람들이 버린 일회용품으로 인해 몸에 상처를 입은 아이들입니다.
                새는 상처를 아직 안 입었을 수도 있습니다. 그러다 입에 물고있는 비닐장갑을 먹게 되어 몸에 쌓이면 속에서 플라스틱이 분해 되지 않아
                다른 음식물과 함께 뒤섞여 곧 생명을 다 할 수도 있는 상황입니다. 비록 사진 두 장에 나타난 아이들이지만 실제로는 많은
                아이들이 고통 받고 있습니다. 여러 분이 제공하는, 사용하는 많은 일회용품들이 많은 아이들을 다치게 합니다. 조금이라도 많은 사람들이
                친환경 제품을 사용하여 더 이상 고통 받지 않게 도와주세요.
                </div>
                <br></br>
                </p>
            </CharDsc2>

        );
    }
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