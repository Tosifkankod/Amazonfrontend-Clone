
// MAIN SLIDER ===== MAIN SLIDER  ==== MAIN SLIDER  === MAIN SLIDER === MAIN SLIDER
const arr = ['./images/mainslider/slider1.jpg', './images/mainslider/slider2.jpg', './images/mainslider/slider3.jpg','./images/mainslider/slider4.jpg','./images/mainslider/slider5.jpg'];

const left_slider = document.getElementsByClassName('left_slider');
const right_slider = document.getElementsByClassName('right_slider');
const main_slider_image = document.getElementsByClassName('inside_content');
main_slider_image[0].style.backgroundImage = `url(${arr[0]})`;

let count = 0; 
left_slider[0].addEventListener('click', () => {    
    if(count > 0 && count != -1){              
        count --;    
        main_slider_image[0].style.backgroundImage = `url(${arr[count]})`;
    }else if(count == 0){
        count = 4; 
        main_slider_image[0].style.backgroundImage = `url(${arr[count]})`;
    }
    console.log(count);
})

right_slider[0].addEventListener('click', () => {
    if(count < 5 && count != 4 ){
        count++;    
        main_slider_image[0].style.backgroundImage = `url(${arr[count]})`;
    }else{
        count = 0; 
        main_slider_image[0].style.backgroundImage = `url(${arr[count]})`;
    }
    console.log(count);
});

// =========---------====================-----------===========---==-------====\
// sliders

left_scroll = document.getElementsByClassName('left_scroll');
right_scroll = document.getElementsByClassName('right_scroll');
real_scroll = Array.from(document.getElementsByClassName('real_scroll'));

function Scrolling(e){   
    
    real_scroll.forEach((values) => {
        if(e.target.classList[0] == "right_scroll" ){
            values.scrollLeft += 500;     
        }
        else{
            values.scrollLeft -= 500;     
        }          
    })    
}   

// left_scroll[0].addEventListener('click', Scrolling)
// left_scroll.array.forEach(element => {
    
// });

const right_scroll_arr = Array.from(right_scroll);
const left_scroll_arr = Array.from(left_scroll);

right_scroll_arr.forEach((values) => {
    values.addEventListener('click', Scrolling);
})
left_scroll_arr.forEach((values) => {
    values.addEventListener('click', Scrolling);
})


// right_scroll[0].addEventListener('click', Scrolling)
// left_scroll[0].addEventListener('click', Scrolling)



