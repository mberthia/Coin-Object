let coinButton = document.querySelector("#coin-button");
let coinButton2 = document.querySelector("#coin-button-two");
let index = 0;
let coin = {
  state: 0,
  flip: function () {
    if (Math.round(Math.random() * 1) === 0) {
      this.state = 0;
    } else {
      this.state = 1;
    }
  },
  toString: function () {
    if (this.state === 0) {
      return false;
    } else {
      return true;
    }
  },
  toHTML: function () {
    let image = document.createElement("img");
    if (this.state === 0) {
      image.src = "./images/Tails.jpg";
      document.body.append(image);
    } else {
      image.src = "./images/Heads.jpg";
      document.body.append(image);
    }
    return image;
  },
};

function display20Flips() {
  while (20 > index) {
    coin.flip();
    coin.toString();
    if (coin.state === 1) {
      document.body.append("Heads, ");
    } else {
      document.body.append("Tails, ");
    }
    index++;
  }
}

function display20Images() {
  while (20 > index) {
    coin.flip();
    coin.toHTML();
    index++;
  }
}

coinButton.addEventListener("click", function () {
  display20Flips();
});

coinButton2.addEventListener("click", function () {
  display20Images();
});
