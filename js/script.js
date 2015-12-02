var chinese, email, mobile, owdw, ua, weibo, woah;

ua = navigator.userAgent;

mobile = ua.match(/Mobile|Android|iPhone|iPad|iPod/) !== null;

chinese = navigator.language.toLowerCase().indexOf('zh') > -1;

weibo = document.getElementsByClassName('weibo')[0];

email = document.getElementsByClassName('email')[0];

owdw = window.document.width;

woah = document.getElementsByClassName('woah')[0];

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

window.onresize = function() {
  var nwdw;
  nwdw = window.document.width;
  if (nwdw - owdw > 100 || owdw - nwdw > 100) {
    return woah.style.display = "inline-block";
  }
};
