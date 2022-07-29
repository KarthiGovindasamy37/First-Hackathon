let ul=document.createElement("ul")
ul.classList.add("ul")
document.body.append(ul)
let l1=document.createElement("li")
let img=document.createElement("img")
img.setAttribute("src","https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT96wGV9d5BYgBEcStj_90fwpDrn_PVIYKMHA&usqp=CAU")
img.setAttribute("alt","Diva")
l1.appendChild(img)
ul.appendChild(l1)
let l2=document.createElement("li")
let a1=document.createElement("a")
a1.setAttribute("href","#")
a1.innerText="Products"
l2.appendChild(a1)
ul.appendChild(l2)
let l3=document.createElement("li")
let a2=document.createElement("a")
a2.setAttribute("href","#")
a2.innerText="Brands"
l3.appendChild(a2)
ul.appendChild(l3)
let l4=document.createElement("li")
let a3=document.createElement("a")
a3.setAttribute("href","#")
a3.innerText="Diva Fashion"
l4.appendChild(a3)
ul.appendChild(l4)
let l5=document.createElement("li")
let tbox=document.createElement("INPUT")
tbox.setAttribute("type","text")
tbox.setAttribute("id","text")
tbox.setAttribute("placeholder","your product type")
tbox.setAttribute("class","tm")
l5.appendChild(tbox)
ul.appendChild(l5)
let l6=document.createElement("li")
let sbtn=document.createElement("BUTTON")
sbtn.classList.add("sbtn")
sbtn.innerText="Search"
l6.appendChild(sbtn)
ul.appendChild(l6)
let l7=document.createElement("li")
let abtn=document.createElement("BUTTON")
abtn.classList.add("abtn")
abtn.innerText="Account"
l7.appendChild(abtn)
ul.appendChild(l7)
let l8=document.createElement("li")
let cbtn=document.createElement("BUTTON")
cbtn.classList.add("cbtn")
cbtn.innerText="YourCart"
l8.appendChild(cbtn)
ul.appendChild(l8)

document.querySelector(".sbtn").addEventListener("click",getProduct);

async function getProduct(){
    let name=document.getElementById("text").value
    document.getElementById("text").value=""
    let res = await fetch(`http://makeup-api.herokuapp.com/api/v1/products.json?product_type=${name}`)
    let data = await res.json()
    console.log(data);
    let bgdiv=document.createElement("div")
    bgdiv.classList.add("flex")
    document.body.append(bgdiv)
for(ele of data){
    let divbox=document.createElement("div")
    divbox.classList.add("fd1")
    let dimg=document.createElement("div")
    dimg.classList.add("dimg")
    let imgt=document.createElement("img")
    imgt.setAttribute("src",`${ele.image_link}`)
    imgt.classList.add("imgt")
    dimg.append(imgt)
    divbox.append(dimg)
    let pnm=document.createElement("div")
    pnm.classList.add("pnm")
    pnm.innerText=`Name : ${ele.name}`
    divbox.append(pnm)
    let bnm=document.createElement("div")
    bnm.classList.add("bnm")
    bnm.innerText=`Brand : ${ele.brand}`
    divbox.append(bnm)
    let price=document.createElement("div")
    price.classList.add("price")
    price.innerText=`${ele.currency} ${ele.price_sign}${ele.price}`
    divbox.append(price)
    let des=document.createElement("div")
    des.classList.add("des")
    des.innerText=`${ele.description}`
    divbox.append(des)
    let prod=document.createElement("div")
    prod.classList.add("prod")
    let prodbtn=document.createElement("BUTTON")
    prodbtn.classList.add("prodbtn")
    let prodlink=document.createElement("a")
    prodlink.classList.add("prodlink")
    prodlink.innerText="Product Link"
    prodlink.setAttribute("href",`${ele.product_link}`)
    prodlink.setAttribute("target","blank")
    prodbtn.append(prodlink)
    divbox.append(prodbtn)
     
    
    bgdiv.append(divbox)   
}
}
