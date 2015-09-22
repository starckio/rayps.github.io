var chinese, email, mobile, ua, weibo;

ua = navigator.userAgent;

mobile = ua.match(/Mobile|Android|iPhone|iPad|iPod/) !== null;

chinese = navigator.language.toLowerCase().indexOf('zh') > -1;

weibo = document.getElementsByClassName('weibo')[0];

email = document.getElementsByClassName('email')[0];

if (!chinese) {
  weibo.style.display = 'none';
}

email.onclick = function() {
  var range, selection;
  if (document.body.createTextRange) {
    range = document.body.createTextRange();
    range.moveToElementText(this);
    range.select();
  } else if (window.getSelection) {
    selection = window.getSelection();
    range = document.createRange();
    range.selectNodeContents(this);
    selection.removeAllRanges();
    selection.addRange(range);
  }
  if (mobile) {
    location.href = "mailto:ray@rayps.com";
  }
};
