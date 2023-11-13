// const express = require("express") ;  옛날 즉 commonjs 방식
import express from "express"; // 현대 방식 module 방식
import cors from "cors";
// 도움말 및 기능 테스트 Swagger
import swaggerUi from "swagger-ui-express";
import swaggerJSDoc from "swagger-jsdoc";
import { options } from "./swagger/config.js";

const app = express();
const port = 4000; // 서버에 접속시 포트번호
// cors 처리(웹브라우저로 접속시 보안관련 처리)
app.use(
  cors({
    origin: "*",
  })
);
// json 데이터를 사용하겠다고 설정
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
// swagger 설정

const swaggerSpec = swaggerJSDoc(options);
app.use("/api-docs", swaggerUi.serve, swaggerUi.setup(swaggerSpec));
// REST API 요청 처리
// 첫페이지
app.get("/", function (req, res) {
  res.send("인터파크 API");
});
// 게시판 API (백엔드 호출 함수)
// get 은 프론트에서 자료 요청
// localhost:4000/board : 게시판 자료를 요청.
app.get("/board", (req, res) => {
  console.log("GET", req);
  // DB 에서 조건을 보고 결과를 {} 만들어서 [] 담아서준다.
  // MongoDB, MaraiDB(MySql)
  const result = [
    {
      number: 1,
      writer: "철수",
      title: "제목입니다.",
      contents: "내용입니다.",
    },
    {
      number: 2,
      writer: "영희",
      title: "영희입니다.",
      contents: "내용입니다.",
    },
    {
      number: 3,
      writer: "훈희",
      title: "훈희입니다.",
      contents: "내용입니다.",
    },
  ];
  res.send(result);
});

// post 는 프론트에서 백엔드로 자료 전송
// localhost:4000/board : 게시판 자료를 추가한다.
// axios.post("/board", {자료})
app.post("/board", (req, res) => {
  // console.log("POST", req);
  console.log("BODY 프론트가 보낸 데이터 ", req.body);
  // req.body 를 바탕으로 DB에 내용 추가
  res.send("게시물 추가에 성공하였습니다.");
});

// 인터파크 API (백엔드 호출 함수)
// visual 영역에 출력할 자료 요청
// localhost:4000/visual
app.get("/visual", (req, res) => {
  const result = {
    total: 6,
    visual_1: {
      file: "images/v1.png",
      url: "a.html",
    },
    visual_2: {
      file: "images/v2.jpg",
      url: "b.html",
    },
    visual_3: {
      file: "images/v3.jpg",
      url: "c.html",
    },
    visual_4: {
      file: "images/v4.jpg",
      url: "d.html",
    },
    visual_5: {
      file: "images/v5.jpg",
      url: "e.html",
    },
    visual_6: {
      file: "images/v6.png",
      url: "f.html",
    },
  };
  res.send(result);
});
// recommend 영역에 출력할 자료 요청
// localhost:4000/visual
app.get("/recommend", (req, res) => {
  const result = {
    total: 12,
    good_1: {
      image: "images/r_1.jpg",
      discount: 27,
      price: 49900,
      desc: "[스포츠파크] 노스페이스 겨울 구스다운 패딩슬립온 NS93M50",
      url: "a.html",
    },
    good_2: {
      image: "images/r_2.jpg",
      discount: 7,
      price: 61460,
      desc: "CLARINS 클라랑스 엑스트라 퍼밍 넥 앤 데콜테 케어 75ML / 넥크림/ 여행필수템 (11/7 예약발송)",
      url: "a.html",
    },
    good_3: {
      image: "images/r_3.jpg",
      discount: 17,
      price: 13860,
      desc: "불스원 폴라패밀리 캐릭터 통풍구 방향제 X 3개입",
      url: "a.html",
    },
    good_4: {
      image: "images/r_4.jpg",
      discount: 13,
      price: 6960,
      desc: "[텐바이텐][1+1 한정판매] 2024 스누피 데스크 캘린더 1+1",
      url: "a.html",
    },
    good_5: {
      image: "images/r_5.jpg",
      discount: 20,
      price: 9800,
      desc: "베베토 젤리 3종 택1 (미니베어 980g, 미니믹스 900g, 콜라 980g",
      url: "a.html",
    },
    good_6: {
      image: "images/r_6.jpg",
      discount: 44,
      price: 7190,
      desc: "[11/7 오쎈 다운로드쿠폰가 7,670원] 크리오 쿨 맥스 민트 치약 100g x8개 민트/스트롱 민트 택1_I",
      url: "a.html",
    },
    good_7: {
      image: "images/r_7.jpg",
      discount: 26,
      price: 9900,
      desc: "[쇼핑앱추가쿠폰] 해태 포키 극세4+블루베리2+딸기2 /극세 44g * 8 / 빼빼로데이 / 특별한 날엔 포키",
      url: "a.html",
    },
    good_8: {
      image: "images/r_8.jpg",
      discount: 43,
      price: 30300,
      desc: "[앱다운시15%쿠폰증정] 종근당 락토핏 골드 50포 3통+30포/6통+30포 (유통기한 2025-01)",
      url: "a.html",
    },
    good_9: {
      image: "images/r_9.jpg",
      discount: 12,
      price: 24900,
      desc: "베베잇츠 동결건조 과일칩 10봉",
      url: "a.html",
    },
    good_10: {
      image: "images/r_10.jpg",
      discount: 4,
      price: 22080,
      desc: "[현대청할 20,750원] Dior Addict 디올 어딕트 립 글로우 립 밤 3.2g",
      url: "a.html",
    },
    good_11: {
      image: "images/r_11.jpg",
      discount: 10,
      price: 19880,
      desc: "온더바디 플로럴 가든 바디워시 950g X 3개 (프리지아/자스민/체리블라썸 택 1)",
      url: "a.html",
    },
    good_12: {
      url: "go.html",
    },
  };
  res.send(result);
});

// 서버에서 Request 요청대기
app.listen(port, () => {
  console.log(`현재 웹서버가 ${port} 로 접속하였습니다.`);
});
