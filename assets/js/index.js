const navbar = document.querySelector('#navbar');
const theO = document.querySelector('#theO');
const navlist = document.querySelector('#navlist');
const burger1 = document.querySelector('.burger1')
const burger2 = document.querySelector('.burger2')
const burger3 = document.querySelector('.burger3')

setInterval(()=>{
    if(document.documentElement.scrollTop>50){
        navbar.classList.remove('px-24')
        navbar.classList.add('fixed')
        navbar.classList.add('animate-navsmouth')
    }else{
        navbar.classList.add('px-24')
        navbar.classList.remove('fixed')
        navbar.classList.remove('animate-navsmouth')
    }
},400);

theO.addEventListener('click',()=>{
    navlist.classList.toggle('hidden')
    navlist.classList.toggle('flex')
    navlist.classList.toggle('h-screen')

    burger1.classList.toggle('absolute')
    burger1.classList.toggle('top-1')
    burger1.classList.toggle('bottom-1')
    burger1.classList.toggle('rotate-[-45deg]')
    
    
    burger2.classList.toggle('absolute')
    burger2.classList.toggle('top-1')
    burger2.classList.toggle('bottom-1')
    burger2.classList.toggle('rotate-45')
    
    burger3.classList.toggle('opacity-0')
})


