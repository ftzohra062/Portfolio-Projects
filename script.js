// // script.js
// document.addEventListener('DOMContentLoaded', function() {
//     const sections = document.querySelectorAll('section');
//     const navLinks = document.querySelectorAll('nav ul li a');
    
//     window.addEventListener('scroll', function() {
//         let current = '';
        
//         sections.forEach(section => {
//             const sectionTop = section.offsetTop - 150;
//             const sectionHeight = section.clientHeight;
//             if (scrollY >= sectionTop) {
//                 current = section.getAttribute('id');
//             }
//         });
        
//         navLinks.forEach(link => {
//             link.classList.remove('active');
//             if (link.getAttribute('href').substring(1) === current) {
//                 link.classList.add('active');
//             }
//         });
//     });
// });
