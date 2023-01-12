const toggleMode = () =>{
  const html = document.documentElement
  html.classList.toggle('light')

  const img = document.querySelector('main img')
  if (html.classList.contains('light')){
    img.setAttribute('src', './assets/profilee2.jpg')
  }else{
    img.setAttribute('src', './assets/profile.jpg')
  }
}