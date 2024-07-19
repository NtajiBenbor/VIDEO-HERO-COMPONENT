// slider for the button
const slider = document.querySelector('.btn-slider');
// button
const button = document.querySelector('.btn-container');
// video
const video = document.querySelector('.video-container');
// preloader
const loader = document.querySelector('.loader')


// pause and play functionality using the slider
button.addEventListener('click',()=>{
    // 
    if(!slider.classList.contains('shift-slider')){
        slider.classList.add('shift-slider')
        video.pause();
    }else{
        slider.classList.remove('shift-slider');
        video.play();
    }
  
})

// preloader code
window.addEventListener('load',()=>{
    loader.classList.add('hide-loader')
})

















// controls.forEach(btn => {
//     // console.log(btn)
//     btn.addEventListener('click',(e)=>{
//         // console.log(e.target)
//         slider.classList.toggle('shift-slider');
//         console.log(slider)
//     })
// });


