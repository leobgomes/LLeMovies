// Evento de scroll da página
window.addEventListener('scroll', function () {
    const navbar = document.querySelector('.navbar');
    if (window.scrollY > 50)
        navbar.classList.add('scrolled')
    else
        navbar.classList.remove('scrolled');
})

 // opções de acesso da API
const options = {
    method: 'GET',
    headers: {
        accept: 'application/json',
        Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJiZjljZDQ4Yzg0NjZkYmFmMWI5OWIyMzc2OTNmYjZmNSIsIm5iZiI6MTczMjU1MzU0Mi45MzgzNzM2LCJzdWIiOiI2NzQ0YTkzZDQ2MjYwZTE0ZmJlYjQ0NzMiLCJzY29wZXMiOlsiYXBpX3JlYWQiXSwidmVyc2lvbiI6MX0.02850ILXz3FdoSgSFFJdh-0R7foWAS2jByLyqRH-zJY'
    }
};
