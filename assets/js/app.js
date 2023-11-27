if (window.innerWidth <= 867){
    setTimeout( () =>{
    Swal.fire({
        title: 'To see the site with all its features, please open the site on a computer',
        icon: 'info',
        timer: 20000,
        showConfirmButton: false 
    })},10000);
}



let more = document.querySelector('.chow-more1');
let serv = document.querySelector('#chow-left');
let hide = document.querySelector('.chow-more2')


more.addEventListener('click', () =>{
    serv.style.display = 'block';
    more.style.display = 'none';
    hide.style.display = 'block'
})

hide.addEventListener('click', () =>{
    serv.style.display = 'none';
    more.style.display = 'block';
    hide.style.display = 'none';
})




const productContainers = [...document.querySelectorAll('.stories')];
const nxtBtn = [...document.querySelectorAll('.icon-nex')];
const preBtn = [...document.querySelectorAll('.icon-previous')];

productContainers.forEach((item, i) => {
    let containerDimensions = item.getBoundingClientRect();
    let containerWidth = containerDimensions.width;

    nxtBtn[i].addEventListener('click', () => {

        item.style.scrollbehavior = "smooth";
        item.scrollLeft += containerWidth;
    });

    preBtn[i].addEventListener('click', () => {
        item.scrollLeft -= containerWidth;
    });
});
