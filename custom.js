const img = document.querySelector("img");

//https://www.apple.com/105/media/us/airpods-pro/2019/1299e2f5_9206_4470_b28e_08307a42f19b/anim/sequence/large/01-hero-lightpass/0001.jpg

const a = 10;
const b = a.toString().padStart(4, "0"); //지정된 숫자에 대해 첫번째 파라미터 길이로 두번째 parameter 문자로 채워줌(4개의 숫자중 const a 로 지정된 숫자 외에 나머지 남는 두개 숫자는 00이렇게 채워져서 0010 이런식으로 됨. 만약 (4, "a")로 하면 aa10 이렇게 된다 이렇게 해서 반복문 let for 로 지정해놓으면 프로그래밍이 되는.

// console.log(b);

// hero 섹션 높이 지정: 헤더 높이를 제외한 높이
const headerHeight = document.querySelector("header").offsetHeight;
const heroSection = document.querySelector(".section-01");

heroSection.style.marginTop = headerHeight + 50 + "px";

const imgObj = document.querySelector("#hero-lightpass");
const mainText = document.querySelector(".main-elem");

let tl0 = gsap.timeline();
tl0
  .add("start0") // 시작 지점 지정
  .fromTo(imgObj, { opacity: 0 }, { opacity: 1, duration: 2 }, "start0")
  .fromTo(mainText, { opacity: 0 }, { opacity: 1, duration: 2 }, "start0");
