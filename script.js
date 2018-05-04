var books = [];

 
    var titles = document.getElementsByClassName("titles")
    var imgs = document.getElementsByClassName("imgs")
    var authors = document.getElementsByClassName("authors")
    var dates = document.getElementsByClassName("dates")
    var reviews = document.getElementsByClassName("reviews")
    var rates = document.getElementsByClassName("rates")
      
    for (var i = 0; i < titles.length; i++) {
        books.push({
        title: titles[i].innerHTML,
            img: imgs[i].src,
          date: dates[i].innerHTML,
      author: authors[i].innerHTML,
     reviews: reviews[i].innerHTML,
          rate: rates[i].innerHTML,
    })
    }





sortByRating()
upDateDOM()


function createBookItem(bookObj) {
  var liElem = document.createElement('li')
  var a = document.createElement('a')
  var aText = document.createTextNode(bookObj.title)
  a.appendChild(aText)
  a.title = bookObj.title

  liElem.appendChild(a)




  var ulElem = document.createElement('ul')
  var liElem0 = document.createElement('li')
  var liElem1 = document.createElement('li')
  var liElem2 = document.createElement('li')
  var liElem3 = document.createElement('li')
  var liElem4 = document.createElement('li')
  var img = document.createElement('img')
  var date = document.createElement('p')
  var auther = document.createElement('p')
  var reviews = document.createElement('p')
  var stars = document.createElement('p')
  img.setAttribute('width','125')
  img.setAttribute('height','150')
  img.src = bookObj.img
  var pDate = document.createTextNode("Date: "+bookObj.date)
  var pAuther = document.createTextNode("Author: "+bookObj.author)
  var pReviews = document.createTextNode("Reviews: "+bookObj.reviews)
  var pStars = document.createTextNode("Rate: "+bookObj.rate)
  date.appendChild(pDate)
  auther.appendChild(pAuther)
  reviews.appendChild(pReviews)
  stars.appendChild(pStars)
  liElem0.appendChild(img)
  liElem1.appendChild(date)
  liElem2.appendChild(auther)
  liElem3.appendChild(reviews)
  liElem4.appendChild(stars)
  ulElem.appendChild(liElem0)
  ulElem.appendChild(liElem1)
  ulElem.appendChild(liElem2)
  ulElem.appendChild(liElem3)
  ulElem.appendChild(liElem4)
  liElem.appendChild(ulElem)

  return liElem
}

function sortByReviews (){
  books.sort(function (a, b) {
    return b.reviews - a.reviews
  })
}
function sortByPriceHigh (){
  books.sort(function (a, b) {
    return b.price > a.price
  })
}
function sortByPriceLow (){
  books.sort(function (a, b) {
    return b.price < a.price
  })
}
function sortByRating (){
  books.sort(function (a, b) {
    return b.rate - a.rate
  })
}

function upDateDOM() {
  var ulBooks = document.getElementById('books-list')
  ulBooks.innerHTML = ''
  for (var item of books) {
    ulBooks.appendChild(createBookItem(item))
  }
}

// Sort by, select event
var select = document.getElementById("sort-books")
select.onchange = function () {
  if (select.value === 'reviews') {
    sortByReviews()
    upDateDOM()
  }
  else if (select.value === 'rating') {
    sortByRating()
    upDateDOM()
  }

}