 let fanimg = document.querySelector("img");
    function fanOn() {
      fanimg.style.animationDuration = 4 + "s";
    }
    function fanOff() {
      fanimg.style.animationDuration = 0 + "s";
    }
    function fanSpeed1() {
      fanimg.style.animationDuration = 2 + "s";
    }
    function fanSpeed2() {
      fanimg.style.animationDuration = 0.9 + "s";
    }
    function fanSpeed3() {
      fanimg.style.animationDuration = 0.1 + "s";
    }
    fanOn();
    fanOff();
    fanSpeed1();
    fanSpeed2();
    fanSpeed3();
