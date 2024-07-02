const galleryImage = document.querySelectorAll('.gallery-img');

galleryImage.forEach((img, i) => {
  img.dataset.aos = 'zoom-in-up';
  img.dataset.aosDelay = i * 100;
  img.dataset.aosDuration = 1000;
});
AOS.init({
  duration: 2000,
});

gsap.registerPlugin(TextPlugin);
gsap.to('.lead', { duration: 2, delay: 1.5, text: 'Mahasiswa | Pengangguran Sukses <i class="bi bi-check-lg">' });
gsap.from('.jumbotron img', { duration: 1, rotateY: 360, opacity: 0 });
gsap.from('.navbar', { duration: 1.5, y: '-100%', opacity: 0, ease: 'bounce' });
gsap.from('.display-4', { duration: 1, x: -50, opacity: 0, delay: 0.5, ease: 'back' });

const scriptURL = 'https://script.google.com/macros/s/AKfycbyHfIM28nczZigPhh4QnbW7ln_3vTCXikkxk5MiS4CJYWz5C4gt1LSUgUFVmj3XMypOJg/exec';
const form = document.forms['sahlan-contact-form'];
const btnKirim = document.querySelector('.btn-kirim');
const btnLoading = document.querySelector('.btn-loading');
const myAlert = document.querySelector('.my-alert');

form.addEventListener('submit', (e) => {
  e.preventDefault();
  // ketika tombol submit di click
  // tampilkan tombol loading, hilangkan tombol kirim
  btnLoading.classList.toggle('d-none');
  btnKirim.classList.toggle('d-none');
  fetch(scriptURL, { method: 'POST', body: new FormData(form) })
    .then((response) => {
      // tampilkan tombol Kirim, hilangkan tombol loading
      btnLoading.classList.toggle('d-none');
      btnKirim.classList.toggle('d-none');
      // tampilkan Alert
      myAlert.classList.toggle('d-none');
      // reset isi formnya
      form.reset();
      console.log('Success!', response);
    })
    .catch((error) => console.error('Error!', error.message));
});
