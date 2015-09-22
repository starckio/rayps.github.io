document.getElementsByClassName('email')[0].onclick = function() {
  var range, selection;
  if (document.body.createTextRange) {
    range = document.body.createTextRange();
    range.moveToElementText(this);
    return range.select();
  } else if (window.getSelection) {
    selection = window.getSelection();
    range = document.createRange();
    range.selectNodeContents(this);
    selection.removeAllRanges();
    return selection.addRange(range);
  }
};

if (navigator.language.toLowerCase().indexOf('zh') === -1) {
  document.getElementsByClassName('weibo')[0].style.display = 'none';
}
