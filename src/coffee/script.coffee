document.getElementsByClassName('email')[0].onclick = ->
    if document.body.createTextRange
        range = document.body.createTextRange()
        range.moveToElementText this
        range.select()
    else if window.getSelection
        selection = window.getSelection()
        range = document.createRange()
        range.selectNodeContents this
        selection.removeAllRanges()
        selection.addRange range

if navigator.language.toLowerCase().indexOf('zh') is -1
    document.getElementsByClassName('weibo')[0].style.display = 'none'
