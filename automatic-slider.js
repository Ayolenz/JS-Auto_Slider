// get DOM elements for the image

const wrapper = document.querySelector('.wrapper'),
  carousel = document.querySelector('.images'),
  image = document.querySelectorAll('.show'),
  buttons = document.querySelectorAll('.button');

let imageIndex = 1,
  intervalId;

  const autoSlide = () => {
    // start the slide show by calling slideImage() every 2 seconds
    intervalId = setInterval(() => slideImage(++imageIndex), 2000)
  };

  // call a autoslide function on page load
  autoSlide();

  // A function that update the carousel display to show the specified image

  const slideImage = () => {
    // calculate the updated image index
    imageIndex = imageIndex === image.length ? 0 : 
    imageIndex < 0 ? image.length -1 : imageIndex;
    // update the carousel display to show the specified image
    carousel.style.transform = `translate(-${imageIndex * 100}%)`; 
  };
// A function that update click
const updateClick = (e) => {
  // stps the automatic slideshow
  clearInterval(intervalId);
  // calculate the updated image based on the button click
  imageIndex += e.target.id === 'next' ? 1 : -1;  
  slideImage(imageIndex)
  autoSlide();
}
  // add event listener to each of the navigation button
  buttons.forEach((button) => button.addEventListener('click', updateClick));

  // add mouse event listner to wrapper element to stop the autosliding
wrapper.addEventListener('mouseover', () => clearInterval(intervalId));
 // add mouse event listner to wrapper element to start the autosliding again
wrapper.addEventListener('mouseover', autoSlide);

