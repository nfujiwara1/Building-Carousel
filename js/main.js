// Start writing JavaScript here!
const carousel = document.querySelector('.carousel')
const previousButton = carousel.querySelector('.previous-button')
const nextButton = carousel.querySelector('.next-button')
const contents = carousel.querySelector('.carousel__contents')

const dots = carousel.querySelectorAll('.carousel__dot')
const slides = carousel.querySelectorAll('.carousel__slide')
const dotsContainer = carousel.querySelector('.carousel__dots')

const rect = slides[0].getBoundingClientRect()
// console.log(rect)
const slideWidth = rect.width
// console.log(slideWidth)

slides.forEach(function(slide, index){
  slide.style.left = `${slideWidth * index}px`
  console.log(slide.style.left)
})

nextButton.addEventListener('click',e=>{
  const currentSlide = contents.querySelector('.is-selected')
  // console.log(currentSlide)
  const nextSlide = currentSlide.nextElementSibling
  // console.log(nextSlide)
  const destination = getComputedStyle(nextSlide).left
  // console.log(destination)

  // contents.style.left = `-${destination}`
  contents.style.transform = 'translateX(-' + destination + ')'
  currentSlide.classList.remove('is-selected')
  nextSlide.classList.add('is-selected')

  previousButton.removeAttribute('hidden')

  if(!nextSlide.nextElementSibling){
    nextButton.setAttribute('hidden', true)
  }

  const currentDot = dotsContainer.querySelector('.is-selected')
  const nextDot = currentDot.nextElementSibling
  currentDot.classList.remove('is-selected')
  nextDot.classList.add('is-selected')
})

previousButton.addEventListener('click', function(e){
  const currentSlide = contents.querySelector('.is-selected')
  const previousSlide = currentSlide.previousElementSibling
  // console.log(previousSlide)
  const destination = getComputedStyle(previousSlide).left

  // contents.style.left = `-${destination}`
  contents.style.transform = 'translateX(-' + destination + ')'
  currentSlide.classList.remove('is-selected')
  previousSlide.classList.add('is-selected')

  nextButton.removeAttribute('hidden')

  if(!previousSlide.previousElementSibling){
    previousButton.setAttribute('hidden', true)
  }

  const currentDot = dotsContainer.querySelector('.is-selected')
  const previousDot = currentDot.previousElementSibling
  currentDot.classList.remove('is-selected')
  previousDot.classList.add('is-selected')
})

// dots.forEach(function(dot){
//   dot.addEventListener('click', function(e){
//     console.log(dot)
//     let clickedDotIndex
//     for(let i = 0; i<dots.length; i++ ){
//       if(dots[i] === dot){
//         clickedDotIndex = i
//       }
//     }
//     // console.log(clickedDotIndex)
//     const slideToShow = slides[clickedDotIndex]
//     // console.log(slideToShow)
//     const destination = getComputedStyle(slideToShow).left
//     // console.log(destination)

//     contents.style.left = `-${destination}`
//     slides.forEach(function(slide){
//       slide.classList.remove('is-selected')
//     })
//     slideToShow.classList.add('is-selected')

//     dots.forEach(function(d){
//       d.classList.remove('is-selected')
//     })
//     dot.classList.add('is-selected')

//     if(clickedDotIndex === 0){
//       previousButton.setAttribute('hidden', true)
//       nextButton.removeAttribute('hidden')
//     }else if(clickedDotIndex === dots.length -1){
//       previousButton.removeAttribute('hidden')
//       nextButton.setAttribute('hidden', true)
//     }else {
//       previousButton.removeAttribute('hidden')
//       nextButton.removeAttribute('hidden')
//     }
    
//   })
// })

// Event Delegation
dotsContainer.addEventListener('click', function(e){
  const dot = e.target.closest('button')
  if(dot){
        let clickedDotIndex
    for(let i = 0; i<dots.length; i++ ){
      if(dots[i] === dot){
        clickedDotIndex = i
      }
    }
    // console.log(clickedDotIndex)
    const slideToShow = slides[clickedDotIndex]
    // console.log(slideToShow)
    const destination = getComputedStyle(slideToShow).left
    // console.log(destination)

    // contents.style.left = `-${destination}`
    contents.style.transform = 'translateX(-' + destination + ')'
    slides.forEach(function(slide){
      slide.classList.remove('is-selected')
    })
    slideToShow.classList.add('is-selected')

    dots.forEach(function(d){
      d.classList.remove('is-selected')
    })
    dot.classList.add('is-selected')

    if(clickedDotIndex === 0){
      previousButton.setAttribute('hidden', true)
      nextButton.removeAttribute('hidden')
    }else if(clickedDotIndex === dots.length -1){
      previousButton.removeAttribute('hidden')
      nextButton.setAttribute('hidden', true)
    }else {
      previousButton.removeAttribute('hidden')
      nextButton.removeAttribute('hidden')
    }
  }
})