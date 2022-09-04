const burger = () => {
   const trigger = document.querySelector('.burger__icon'),
         content = document.querySelector('.burger-content'),
         bg = document.querySelector('.wrapper');

   const changer = () => {
      content.classList.toggle('_active');
      trigger.classList.toggle('_active');
      bg.classList.toggle('wrapper-background');
   }

   trigger.addEventListener('click', () => {
      changer();

   });

   document.addEventListener('keyup', (event) => {
      if (event.code === 'Escape' && !content.classList.contains('_active')) {
         changer();
      }
   });

   document.addEventListener('click', (event) => {
      if (event.target === bg && bg.classList.contains('wrapper-background')) {
         changer();
      }
   });
}

export default burger;