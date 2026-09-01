/* ==============================
   Google Apps Script URL
   나중에 배포 후 여기에 넣는다
================================ */

const GOOGLE_SCRIPT_URL =
  "여기에_구글앱스스크립트_URL_입력";


/* ==============================
   문제 데이터
================================ */

const questions = [

  {
    number: 1,

    category: "성취지위",

    question:
      "다음 중 성취지위에 해당하는 것은?",

    choices: [
      "부모의 자녀",
      "여성",
      "학생",
      "막내"
    ],

    answer: 2
  },


  {
    number: 2,

    category: "귀속지위",

    question:
      "다음 중 귀속지위에 해당하는 것은?",

    choices: [
      "의사",
      "교사",
      "학생회장",
      "부모의 첫째 자녀"
    ],

    answer: 3
  },


  {
    number: 3,

    category: "귀속지위",

    question:
      "다음 중 개인의 노력이나 선택과 관계없이 주어질 가능성이 가장 큰 지위는?",

    choices: [
      "축구선수",
      "회사원",
      "형제 중 둘째",
      "학생"
    ],

    answer: 2
  },


  {
    number: 4,

    category: "성취지위",

    question:
      "다음 중 성취지위로만 묶인 것은?",

    choices: [
      "학생, 의사",
      "딸, 장남",
      "여성, 막내",
      "아들, 둘째"
    ],

    answer: 0
  },


  {
    number: 5,

    category: "사회적 역할",

    question:
      "어떤 사회적 지위에 있는 사람에게 사회적으로 기대되는 행동을 무엇이라고 할까?",

    choices: [
      "사회적 역할",
      "귀속지위",
      "성취지위",
      "역할 갈등"
    ],

    answer: 0
  },


  {
    number: 6,

    category: "역할 행동",

    question:
      "다음 중 학생이라는 지위에 따른 역할 행동으로 가장 적절한 것은?",

    choices: [
      "수업 시간에 학습에 참여한다",
      "가족의 생계를 책임진다",
      "회사의 업무를 처리한다",
      "환자를 진료한다"
    ],

    answer: 0
  },


  {
    number: 7,

    category: "지위와 역할",

    question:
      "다음 중 지위와 그에 따른 역할 행동의 연결이 가장 적절한 것은?",

    choices: [
      "의사 - 환자를 진료한다",
      "학생 - 회사를 경영한다",
      "부모 - 학교 수업을 듣는다",
      "교사 - 환자를 진료한다"
    ],

    answer: 0
  },


  {
    number: 8,

    category: "여러 사회적 지위",

    question:
      "민수는 학교에서는 학생이고, 집에서는 부모님의 아들이며, 학급에서는 반장이다. 이 상황을 통해 알 수 있는 것은?",

    choices: [
      "한 사람은 하나의 지위만 가진다",
      "한 사람은 여러 지위를 동시에 가질 수 있다",
      "모든 지위는 귀속지위이다",
      "모든 지위는 성취지위이다"
    ],

    answer: 1
  },


  {
    number: 9,

    category: "역할 갈등",

    question:
      "시험 공부를 해야 하는 학생이 집에서는 어린 동생을 돌봐야 해서 공부할 시간이 부족하다. 이 상황에 해당하는 것은?",

    choices: [
      "역할 갈등",
      "성취지위",
      "귀속지위",
      "역할 행동"
    ],

    answer: 0
  },


  {
    number: 10,

    category: "역할 갈등",

    question:
      "다음 중 역할 갈등의 사례로 가장 적절한 것은?",

    choices: [
      "학생이 수업 시간에 공부한다",
      "의사가 환자를 진료한다",
      "반장 회의와 가족 행사가 같은 시간에 열려 고민한다",
      "학생이 학교에 다닌다"
    ],

    answer: 2
  },


  {
    number: 11,

    category: "역할 행동",

    question:
      "다음 중 역할 갈등이 아닌 것은?",

    choices: [
      "시험공부와 동생 돌보기 시간이 겹친다",
      "회사 업무와 자녀 돌봄이 동시에 필요하다",
      "학생이 수업에 참여한다",
      "친구와의 약속과 가족 행사가 겹친다"
    ],

    answer: 2
  },


  {
    number: 12,

    category: "귀속지위와 성취지위",

    question:
      "다음 중 귀속지위와 성취지위가 바르게 연결된 것은?",

    choices: [
      "귀속지위: 학생 / 성취지위: 막내",
      "귀속지위: 첫째 자녀 / 성취지위: 교사",
      "귀속지위: 의사 / 성취지위: 여성",
      "귀속지위: 반장 / 성취지위: 아들"
    ],

    answer: 1
  },


  {
    number: 13,

    category: "역할 갈등 해결",

    question:
      "역할 갈등이 발생했을 때 가장 바람직한 태도는?",

    choices: [
      "모든 일을 포기한다",
      "상황을 고려하여 역할의 우선순위를 정한다",
      "다른 사람에게 책임을 떠넘긴다",
      "갈등을 무조건 무시한다"
    ],

    answer: 1
  },


  {
    number: 14,

    category: "여러 사회적 지위",

    question:
      "지우는 학교에서는 학생이며, 집에서는 언니이고, 축구부에서는 주장이다. 가장 적절한 설명은?",

    choices: [
      "지우는 하나의 역할만 수행한다",
      "지우는 여러 지위에 따라 다양한 역할을 수행할 수 있다",
      "지우의 지위는 모두 귀속지위이다",
      "지우의 지위는 모두 성취지위이다"
    ],

    answer: 1
  },


  {
    number: 15,

    category: "종합",

    question:
      "다음 중 사회적 지위와 역할에 대한 설명으로 옳은 것은?",

    choices: [
      "사회적 지위가 달라도 역할은 항상 같다",
      "한 사람이 여러 지위를 가지면 역할 갈등이 발생할 수도 있다",
      "귀속지위는 개인의 노력으로 반드시 얻는다",
      "성취지위는 태어날 때 이미 결정된다"
    ],

    answer: 1
  }

];


/* ==============================
   게임 변수
================================ */

let currentQuestion = 0;

let score = 0;

let nickname = "";

let answers = [];


/* ==============================
   게임 시작
================================ */

function startGame() {

  const input =
    document
      .getElementById("nickname")
      .value
      .trim();


  if (!input) {

    alert(
      "이름 또는 닉네임을 입력해주세요!"
    );

    return;

  }


  nickname = input;


  document
    .getElementById("startScreen")
    .classList
    .remove("active");


  document
    .getElementById("gameScreen")
    .classList
    .add("active");


  showQuestion();

}



/* ==============================
   문제 표시
================================ */

function showQuestion() {

  const q =
    questions[currentQuestion];


  document
    .getElementById("progressText")
    .textContent =
    `문제 ${currentQuestion + 1} / ${questions.length}`;


  document
    .getElementById("scoreText")
    .textContent =
    `정답 ${score}`;


  document
    .getElementById("category")
    .textContent =
    q.category;


  document
    .getElementById("question")
    .textContent =
    q.question;


  const choicesBox =
    document
      .getElementById("choices");


  choicesBox.innerHTML = "";


  q.choices.forEach(
    (choice, index) => {

      const button =
        document.createElement("button");


      button.className =
        "choice";


      button.textContent =
        `${index + 1}. ${choice}`;


      button.onclick =
        () => answerQuestion(index);


      choicesBox
        .appendChild(button);

    }
  );

}



/* ==============================
   정답 처리
================================ */

function answerQuestion(selected) {

  const q =
    questions[currentQuestion];


  const buttons =
    document
      .querySelectorAll(".choice");


  buttons.forEach(
    button =>
      button.disabled = true
  );


  const correct =
    selected === q.answer;


  answers.push({

    questionNumber:
      q.number,

    selected:
      selected + 1,

    correct:
      correct

  });


  if (correct) {

    score++;

    buttons[selected]
      .classList
      .add("correct");


    moveChaserAway();

  }

  else {

    buttons[selected]
      .classList
      .add("wrong");


    buttons[q.answer]
      .classList
      .add("correct");


    moveChaserCloser();

  }


  setTimeout(
    () => {

      currentQuestion++;


      if (
        currentQuestion
        <
        questions.length
      ) {

        showQuestion();

      }

      else {

        showResult();

      }

    },

    1200
  );

}



/* ==============================
   추격자 이동
================================ */

function moveChaserAway() {

  const chaser =
    document
      .getElementById("chaser");


  const dangerFill =
    document
      .getElementById("dangerFill");


  let position =
    parseFloat(
      chaser.dataset.position || 75
    );


  position += 6;


  if (position > 88) {

    position = 88;

  }


  chaser.dataset.position =
    position;


  chaser.style.left =
    position + "%";


  const danger =
    Math.max(
      5,
      100 - position
    );


  dangerFill.style.width =
    danger + "%";


  document
    .getElementById("dangerText")
    .textContent =
    "정답! 추격자가 멀어집니다! 😎";

}



/* ==============================
   추격자 접근
================================ */

function moveChaserCloser() {

  const chaser =
    document
      .getElementById("chaser");


  const dangerFill =
    document
      .getElementById("dangerFill");


  let position =
    parseFloat(
      chaser.dataset.position || 75
    );


  position -= 10;


  if (position < 50) {

    position = 50;

  }


  chaser.dataset.position =
    position;


  chaser.style.left =
    position + "%";


  const danger =
    Math.min(
      100,
      100 - position
    );


  dangerFill.style.width =
    danger + "%";


  document
    .getElementById("dangerText")
    .textContent =
    "오답! 추격자가 가까워집니다! 😱";

}



/* ==============================
   결과
================================ */

function showResult() {

  document
    .getElementById("gameScreen")
    .classList
    .remove("active");


  document
    .getElementById("resultScreen")
    .classList
    .add("active");


  const success =
    score >= 10;


  const resultBox =
    document
      .getElementById("resultBox");


  if (success) {

    resultBox.className =
      "result-box success";


    document
      .getElementById("resultTitle")
      .textContent =
      "🎉 탈출 성공!";


    document
      .getElementById("resultCharacter")
      .textContent =
      "🏃💨🚪";


    document
      .getElementById("resultMessage")
      .textContent =
      `${nickname}님! ${score}문제를 맞혀 무사히 교실을 탈출했습니다!`;

  }

  else {

    resultBox.className =
      "result-box fail";


    document
      .getElementById("resultTitle")
      .textContent =
      "😱 탈출 실패!";


    document
      .getElementById("resultCharacter")
      .textContent =
      "🤓🪓";


    document
      .getElementById("resultMessage")
      .textContent =
      `${nickname}님... ${score}문제를 맞혔지만 추격자에게 붙잡혔습니다!`;

  }


  document
    .getElementById("finalScore")
    .textContent =
    `${score} / 15`;


  sendResultToGoogle();

}



/* ==============================
   Google Sheets 전송
================================ */

function sendResultToGoogle() {

  if (
    GOOGLE_SCRIPT_URL.includes(
      "여기에"
    )
  ) {

    console.log(
      "Google Script URL을 아직 입력하지 않았습니다."
    );

    return;

  }


  const payload = {

    nickname:
      nickname,

    score:
      score,

    total:
      questions.length,

    success:
      score >= 10,

    answers:
      answers

  };


  fetch(

    GOOGLE_SCRIPT_URL,

    {

      method:
        "POST",

      mode:
        "no-cors",

      headers: {

        "Content-Type":
          "text/plain"

      },

      body:
        JSON.stringify(payload)

    }

  )

  .catch(
    error =>
      console.log(error)
  );

}



/* ==============================
   다시 시작
================================ */

function restartGame() {

  currentQuestion = 0;

  score = 0;

  answers = [];


  document
    .getElementById("nickname")
    .value = "";


  document
    .getElementById("chaser")
    .style.left = "75%";


  document
    .getElementById("chaser")
    .dataset.position = 75;


  document
    .getElementById("dangerFill")
    .style.width = "30%";


  document
    .getElementById("dangerText")
    .textContent =
    "아직 안전합니다!";


  document
    .getElementById("resultScreen")
    .classList
    .remove("active");


  document
    .getElementById("startScreen")
    .classList
    .add("active");

}
