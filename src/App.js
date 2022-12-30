import './App.css';
import PropTypes from "prop-types"
// import Potato from "./potato";


// props : 부모 컴포넌트에서 자식 컴포넌트로 데이터를 전달하는 매개변수
// props는 읽기 전용
// 사용법 : 컴포넌트명(props){
//                          props.부모가 전달한 키 이름
//                          }
//컴포넌트명({부모가전달한 키 이름, ...}){
//      {키 이름1}, {키 이름2}, ...
//         console.log({키이름1});
//}
//
//컴포넌트명 (props){
//      const {키이름,...} = props;
//         console.log({키이름});
// }
function Food({name, pic, rating}){
    console.log({name});
    return (
    <div>
    <h3>I Luv {name}</h3>
    <img src ={pic}/>
    <h4>평점 : {rating}/5.0</h4>
    </div>
        );
}

const foodList = [{
    id: 1,
    name: '도지',
    rating: 5.0,
    image: "data:image/jpeg;base64,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"
},{
    id: 2,
    name: '도지아빠',
    rating: 0.5,
    image: 'http://m.asiaherald.co.kr/app/newsimage.php?actmode=LARGE&attimgno=11433&seqno=2&p=%2Fdata%2Fnews%2Fimages%2F2017%2F04&f=115_L_1493020221.jpg&rd=20170424165021'
}

];

function renderFood(dish){
    return <Food key={dish.id} name = {dish.name} pic={dish.image} rating={dish.rating}/>;
}


//return 다음이 화면 렌더링 부분.
function App() {
  //  이 곳은 일반적인 js 소스코드 부분
    foodList.map(function (dish){
        <Food key={dish.id} name = {dish.name} pic = {dish.pic} rating={dish.rating}/>
    });


  //  return 화면을 생성하는 가상 DOM 부분
  //  렌더링 되는 부분에선 부모 태그가 하나만 있어야 한다.(자식 태그는 상관없다)
  // jsx 문법에서 class라는 키워드는 자바스크립트의 클래스 키워드와 겹치기 떄문에 자바스크립트의 클래스와 css 선택자의 class를 구분하기 위해
  //  css 선택자인 class를 className으로 사용함
  return (
      <div className="App">
          {/* SPA : Single Page Application의 줄임말. index.html과 같은 하나의 화면 구성 파일로 모든 화면을 구성하는 웹 페이지 */}
          {/* SPA는 프론트엔드 프레임워크를 사용하여 하나의 화면에서 필요한 부분을 실시간으로 변경하여 웹을 표시함. 해당 화면을 구성하는 요소를 컴포넌트라고 함*/}
          {/* 컴포넌트 : 리액트에서 화면을 구성하는 요소 */}
          {/* {} : jsx 문법에서 {}데이터를 표현하는데 사용함, 간단한 자바스크립트 연산식도 사용이 가능*/}
          <h1>리액트 사용하기</h1>
          {/*Food라는 컴포넌트에 변수명이 fav이고, 값이 'kimchi'인 데이터를 전달*/}
          {/*{foodList.map(dish => (<Food name={dish.name} pic={dish.image}/>))}*/}
          {foodList.map(dish => renderFood(dish))}
      </div>
  ); // 괄호() 제거해도 해도 되긴함. 괄호 쓰는 이유는 렌더링 부분 시작과 끝을 쉽게 확인하기 위해서
}

// 매개변수로 사용되는 데이터를 체크
// 매개변수의 이름까지 체크할 수 있음
// isRequired : 해당 부분이 반드시 필요하다는 의미, 없으면 오류 발생
Food.propType = {
    name: PropTypes.string.isRequired,
    pic: PropTypes.string.isRequired,
    rating: PropTypes.number.isRequired,
};

export default App;
