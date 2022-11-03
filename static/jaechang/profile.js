function card1() {
  const address = "http://banghwa.shop/card1";
  const name = "scrollbars";
  const popupX = document.body.offsetWidth / 2 - 500 / 2;
  // 만들 팝업창 좌우 크기의 1/2 만큼 보정값으로 빼주었음
  const popupY = window.screen.height / 2 - 300 / 2;
  // 만들 팝업창 상하 크기의 1/2 만큼 보정값으로 빼주었음
  console.log(document.body.offsetWidth, popupX);
  console.log(document.body.offsetWidth, popupY);
  window.open(
    address,
    name,
    "toolbar=no, status=no, menubar=no, resizable=no, location=no, height=300, width=500, left=" +
      popupX +
      ", top=" +
      popupY
  );
}

function card2() {
  const address = "http://banghwa.shop/card2";
  const name = "scrollbars";
  const popupX = document.body.offsetWidth / 2 - 500 / 2;
  const popupY = window.screen.height / 2 - 300 / 2;

  window.open(
    address,
    name,
    "toolbar=no, status=no, menubar=no, resizable=no, location=no, height=300, width=500, left=" +
      popupX +
      ", top=" +
      popupY
  );
}

function card3() {
  const address = "http://banghwa.shop/card3";
  const name = "scrollbars";
  const popupX = document.body.offsetWidth / 2 - 500 / 2;
  const popupY = window.screen.height / 2 - 300 / 2;

  window.open(
    address,
    name,
    "toolbar=no, status=no, menubar=no, resizable=no, location=no, height=300, width=500, left=" +
      popupX +
      ", top=" +
      popupY
  );
}

function win_close() {
  window.close();
}
