function getFirstSelector(selector) {

    return document.getElementById('app').querySelector(selector)

}

function nestedTarget() {

    return document.getElementById('nested').querySelector('.target') //why does this work?

}

function increaseRankBy(n) {

    var list = document.getElementById('app').querySelectorAll('ul.ranked-list li')

    for (let i = 0, l = list.length; i < l; i++) {

        list[i].innerHTML = parseInt(list[i].innerHTML, 10) + n

    }

}

function deepestChild() {

   return document.querySelector('#grand-node div div div')

  }
