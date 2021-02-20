// Start writing JavaScript here!
const carousel = document.querySelector('.carousel')
const previousButton = carousel.querySelector('.previous-button')
const nextButton = carousel.querySelector('.next-button')
const contents = carousel.querySelector('.carousel__contents')

nextButton.addEventListener('click',e=>{
  const currentSlide = contents.querySelector('.is-selected')
  // console.log(currentSlide)
  const nextSlide = currentSlide.nextElementSibling
  // console.log(nextSlide)
  const destination = getComputedStyle(nextSlide).left
  console.log(destination)
  contents.style.left = `-${destination}`
  currentSlide.classList.remove('is-selected')
  nextSlide.classList.add('is-selected')
})
