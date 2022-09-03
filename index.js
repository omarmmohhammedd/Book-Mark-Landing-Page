let spans = document.querySelectorAll(".section-header");
let sections = document.querySelectorAll(".section");
let span1 = document.querySelector(".one");
let section1 = document.querySelector(".section1");
let span2 = document.querySelector(".two");
let section2 = document.querySelector(".section2");
let span3 = document.querySelector(".three");
let section3 = document.querySelector(".section3");
let answer = document.querySelectorAll(".Ans");
let answer1 = document.querySelector(".Ans1");
let answer2 = document.querySelector(".Ans2");
let answer3 = document.querySelector(".Ans3");
let answer4 = document.querySelector(".Ans4");
let form = document.querySelector("form");
let toggle = document.querySelector("#toggle")
let toggle_links = document.querySelector(".toggle-links")
let close_links = document.querySelector("#close")
let logo = document.querySelector("#logo")



form.addEventListener(("click"), (e) => {
    e.preventDefault()
})
spans.forEach((e) => {
  e.addEventListener("click", (e) => {
    spans.forEach((ele) => {
      ele.classList.remove("active");
    });
    sections.forEach((ele) => {
      ele.classList.remove("activesection");
    });
    e.target.classList.add("active");
    if (e.target.classList.contains("one")) {
      section1.classList.add("activesection");
    }
    if (e.target.classList.contains("two")) {
      section2.classList.add("activesection");
    }
    if (e.target.classList.contains("three")) {
      section3.classList.add("activesection");
    }
  });
});
let icons = document.querySelectorAll(".icon");
icons.forEach((icon) => {
  icon.addEventListener("click", () => {
    if (icon.classList.contains("show")) {
      icon.classList.remove("show");
      if (icon.classList.contains("show-one")) {
        answer1.classList.remove("showanswer");
      }
      if (icon.classList.contains("show-two")) {
        answer2.classList.remove("showanswer");
      }
      if (icon.classList.contains("show-three")) {
        answer3.classList.remove("showanswer");
      }
      if (icon.classList.contains("show-four")) {
        answer4.classList.remove("showanswer");
      }
    } else {
      answer.forEach((ele) => {
        ele.classList.remove("showanswer");
      });
      icons.forEach((ele) => {
        ele.classList.remove("show");
      });
      icon.classList.add("show");
      if (icon.classList.contains("show-one")) {
        answer1.classList.add("showanswer");
      }
      if (icon.classList.contains("show-two")) {
        answer2.classList.add("showanswer");
      }
      if (icon.classList.contains("show-three")) {
        answer3.classList.add("showanswer");
      }
      if (icon.classList.contains("show-four")) {
        answer4.classList.add("showanswer");
      }
    }
  });
});
toggle.addEventListener("click", e => {
  toggle_links.classList.toggle("active")
  toggle.classList.toggle("hidden")
  logo.classList.toggle("hidden")
})

close_links.addEventListener("click", e => {
  toggle_links.classList.remove("active")
  toggle.classList.toggle("hidden")
  logo.classList.toggle("hidden")
})