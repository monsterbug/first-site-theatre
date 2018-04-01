function getId(a) {
	return document.getElementById(a)
}

var img = []
var txt=[]
var i = 0
var j=2
txt[2]='Дон Кіхот'
txt[0]='Лебедине озеро'
txt[1]='Наталка Полтавка'
img[2] = 'donkihot.jpg'
img[0] = 'leboz.jpg'
img[1] = 'natalka.jpg'

getId('next').onclick = function () {

	getId('input').style.background ='url("img/'+img[i]+'") center top / cover no-repeat'
	getId('text').innerHTML =txt[i]

i++
	j=j-1
if(i>2){
	i=0
	j=2
}
	
}

getId('back').onclick = function () {

	getId('input').style.background ='url("img/'+img[j]+'") center top / cover no-repeat'
	getId('text').innerHTML =txt[j]
i++
j=j-1
if(j<0){
	i=0
	j=2
}
	
}