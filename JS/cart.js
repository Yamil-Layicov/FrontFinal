if(localStorage.getItem('basket') === null){
   localStorage.setItem('basket',JSON.stringify([]));
 }

   let addProduct = document.querySelectorAll('.addProduct');
   let modul = document.getElementById('modul');
   let added_cart = document.getElementById('added-cart');
   let remove = document.getElementById('close');
  
   for(let i=0; i<addProduct.length; i++){
     addProduct[i].onclick = function(e){
       e.preventDefault();
      modul.style.display = 'block';
       function timer(){
        setTimeout(()=>
        {
          modul.style.display = 'none';
        },2000); 
       }
       timer();
       let basket = JSON.parse(localStorage.getItem('basket'));
       let prod_id= e.target.parentElement.parentElement.getAttribute('data-id');
       let prod_img = e.target.parentElement.nextElementSibling.children[0].children[0].getAttribute('src');
       let prod_name = e.target.parentElement.nextElementSibling.children[1].innerText;
       let prod_price =Number(e.target.parentElement.nextElementSibling.children[3].children[1].children[1].innerText);
       let prod_count = basket.find(prod => prod.id == prod_id)
       if(prod_count == undefined){
       basket.push({
           id:prod_id,
           img:prod_img,
           name:prod_name,
           price:prod_price,
           count:1
       })
       }
       else{
         prod_count.count+=1;
       }
       localStorage.setItem('basket',JSON.stringify(basket));
       count();
     }
   }

   $(document).on("click",".increase",function (e) {
     e.preventDefault()
     let basket = JSON.parse(localStorage.getItem('basket'));
     let id=$(this).attr("data-id")
     let prod_count = basket.find(prod => prod.id == id)
     prod_count.count+=1
     localStorage.setItem('basket',JSON.stringify(basket));
     BasketDiv(); 
   })
   $(document).on("click",".discrease",function (e) {
    e.preventDefault()
    let basket = JSON.parse(localStorage.getItem('basket'));
    let id=$(this).attr("data-id")
    let prod_count = basket.find(prod => prod.id == id)
    if(prod_count.count>1){
      prod_count.count--
    }
    localStorage.setItem('basket',JSON.stringify(basket));
    BasketDiv(); 
  })


  $(document).on("click",".remove",function (event) {
    event.preventDefault()
    let basket = JSON.parse(localStorage.getItem('basket'));
    let id=$(this).attr("data-id")
    let removableitem = basket.find(prod => prod.id == id)
    let index= basket.indexOf(removableitem)
    basket.splice(index,1)
    localStorage.setItem('basket',JSON.stringify(basket));
    BasketDiv(); 
  })
  
   function count(){
    let count = document.getElementById('count');
    let basket = JSON.parse(localStorage.getItem('basket'));
    count.innerText = basket.length;
   }
   count();
   
   let list = document.getElementById('list')
   if(list!=null){

    BasketDiv(); 
   }
    function BasketDiv(){
      let basket = JSON.parse(localStorage.getItem('basket'));
      if(basket.length == 0){
        document.getElementById('main-section').classList.remove('d-none');
        document.getElementById('names').style.visibility = 'hidden';
        document.getElementById('right').style.visibility = 'hidden';
        document.getElementById('under-product').style.visibility = 'hidden';
      }else{
       document.getElementById('main-section').classList.add('d-none');
       document.getElementById('names').style.visibility = 'visible';
       document.getElementById('right').style.visibility = 'visible';  
       document.getElementById('under-product').style.visibility = 'visible';
       let box = "";
       for(let product of basket){
         box+=`
         <div class="bordera"></div>
         <div class="d-flex justify-content-between  align-items-center">
         <div class="img-1"> 
         <img src="${product.img}" alt="">
     </div>
     <div class="name-1">
           ${product.name}
     </div>
     <div class="price-1">
         ${product.price}
     </div>
     <div class="quantity-1">
         <span data-id="${product.id}"  class="discrease">-</span><span class="number">${product.count}</span><span data-id="${product.id}" class="increase">+</span>
     </div>
     <div class="subtotal" id = "subtotal">
         ${(product.price * product.price).toFixed(2)}
     </div>
     <div class="close remove" data-id="${product.id}">
     <i class="fa-solid fa-xmark"></i>
     </div>
   </div>
         `
              document.getElementById('list').innerHTML = box;
       }
      }
    }
  
 


   



  