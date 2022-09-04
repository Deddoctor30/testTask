const modal = () => {
   const trigger = document.querySelectorAll('.modal-btn'),
         envir = document.querySelector('.modal'),
         content = document.querySelector('.modal__inner'),
         close = document.querySelector('.modal__close');

   const changer = () => {
      content.classList.toggle('_active');
      envir.classList.toggle('_active');
      document.body.classList.toggle('_lock');
   }

   trigger.forEach((elem) => {
      elem.addEventListener('click', () => {
         changer();
      });
   })

   close.addEventListener('click', () => {
      changer();
   });

   document.addEventListener('keyup', (event) => {
      if (event.code === 'Escape' && !content.classList.contains('_active')) {
         changer();
      }
   });

   envir.addEventListener('click', (event) => {
      if (event.target === envir) {
         changer();
      }
   });
}

export default modal;