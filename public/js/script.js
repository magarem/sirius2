    //alert(localStorage.getItem("aeropage_nuxt_theme_store"))
    const html = document.getElementsByTagName('html')[0]
    if (localStorage.getItem("aeropage_nuxt_theme_store") == 'light') {
      html.classList.remove('dark')
    } else {
      html.classList.add('dark')
    }