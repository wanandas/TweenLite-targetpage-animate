const btn1 = document.querySelector(".js-btn1");
const btn2 = document.querySelector(".js-btn2");
const btn3 = document.querySelector(".js-btn3");

const pt1 = document.querySelector(".Pt-page--1");
const pt2 = document.querySelector(".Pt-page--2");
const pt3 = document.querySelector(".Pt-page--3");

var duration = 1;
var isAnimating = false;

btn1.addEventListener("click", function(e) {
  if (!isAnimating) {
    page1(e.currentTarget.dataset.out, e.currentTarget.dataset.in);
  }
});

btn2.addEventListener("click", function(e) {
  if (!isAnimating) {
    page2(e.currentTarget.dataset.out, e.currentTarget.dataset.in);
  }
});

btn3.addEventListener("click", function(e) {
  if (!isAnimating) {
    page3(e.currentTarget.dataset.out, e.currentTarget.dataset.in);
  }
});

const page1 = (outFn, inFn) => {
  if (pt1.className === "Pt-page Pt-page--1 js-page is-current") {
    isAnimating = false;
  } else if (pt2.className === "Pt-page Pt-page--2 js-page is-current") {
    isAnimating = true;
    window[outFn](pt2);
    window[inFn](pt1);
  } else if (pt3.className === "Pt-page Pt-page--3 js-page is-current") {
    isAnimating = true;
    window[outFn](pt3);
    window[inFn](pt1);
  }
};

const page2 = (outFn, inFn) => {
  if (pt2.className === "Pt-page Pt-page--2 js-page is-current") {
    isAnimating = false;
  } else if (pt1.className === "Pt-page Pt-page--1 js-page is-current") {
    isAnimating = true;
    window[outFn](pt1);
    window[inFn](pt2);
  } else if (pt3.className === "Pt-page Pt-page--3 js-page is-current") {
    isAnimating = true;
    window[outFn](pt3);
    window[inFn](pt2);
  }
};

const page3 = (outFn, inFn) => {
  if (pt3.className === "Pt-page Pt-page--3 js-page is-current") {
    isAnimating = false;
  } else if (pt1.className === "Pt-page Pt-page--1 js-page is-current") {
    isAnimating = true;
    window[outFn](pt1);
    window[inFn](pt3);
  } else if (pt2.className === "Pt-page Pt-page--2 js-page is-current") {
    isAnimating = true;
    window[outFn](pt2);
    window[inFn](pt3);
  }
};

function scaleUp(el) {
  addClass(el, "is-current");
  TweenLite.fromTo(
    el,
    duration,
    {
      opacity: 0,
      scale: 0.8
    },
    {
      opacity: 1,
      scale: 1,
      clearProps: "opacity, scale"
    }
  );
}

function scaleDown(el) {
  addClass(el, "is-current");
  TweenLite.fromTo(
    el,
    duration,
    {
      opacity: 1,
      scale: 1
    },
    {
      opacity: 0,
      scale: 0.8,
      clearProps: "opacity, scale",
      onComplete: function() {
        removeClass(el, ["is-onTop", "is-current"]);
      }
    }
  );
}

function moveToRight(el) {
  addClass(el, ["is-onTop", "is-current"]);
  TweenLite.fromTo(
    el,
    duration,
    {
      xPercent: 0
    },
    {
      xPercent: -100,
      clearProps: "xPercent",
      onComplete: function() {
        removeClass(el, ["is-onTop", "is-current"]);
        isAnimating = false;
      }
    }
  );
}

function moveFromRight(el) {
  addClass(el, ["is-onTop", "is-current"]);
  TweenLite.fromTo(
    el,
    duration,
    {
      xPercent: 100
    },
    {
      xPercent: 0,
      clearProps: "xPercent",
      onComplete: function() {
        removeClass(el, "is-onTop");
        isAnimating = false;
      }
    }
  );
}

// utils
function addClass(el, className) {
  [].concat(className).forEach(function(n) {
    el.classList.add(n);
  });
}

function removeClass(el, className) {
  [].concat(className).forEach(function(n) {
    el.classList.remove(n);
  });
}
