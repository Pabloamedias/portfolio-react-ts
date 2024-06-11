const baseUrl = import.meta.env.VITE_BASE_URL
export default [
    {
        id: 1,
        title: 'Agendapp',
        urlImage: `${baseUrl}/images/agendapp.png`,
        description: 'Una aplicación tipo agenda que almacena tareas de formal local en el navegador.',
        body: 'Agendapp es una aplicación tipo agenda que almacena tareas de forma local en el navegador, es decir, las tareas que registres quedaran almacenadas en el navegador aunque lo cierres. Podrás agregar tareas con fecha, marcarlas como completadas o eliminarlas.',
        urlDeployed: 'https://pabloamedias.github.io/Agendapp/',
        urlGitHub: 'https://github.com/Pabloamedias/Agendapp',
        slug: 'agendapp'
        
    },
    {
        id: 2,
        title: 'Barbería Alura',
        urlImage: `${baseUrl}/images/barberia.png`,
        description: 'Una pagina sencilla sobre una barbería, se muestra datos como ubicación, servicios, precio, contacto, etc.',
        body: 'En el sitio web de la barbería de Alura podrás ver todo lo importante en cuanto a este negocio: ubicación, servicios y sus precios, lo que destaca de la barbería, e incluso podrás llenar un formulario par agendar una cita con la barbería.',
        urlDeployed: 'https://pabloamedias.github.io/barberia/',
        urlGitHub: 'https://github.com/Pabloamedias/barberia',
        slug: 'barberia-alura'
    },
    {
        id: 3,
        title: 'Formulario PetShop',
        urlImage: `${baseUrl}/images/formulario_petshop.png`,
        description: 'Un formulario sencillo pero con distintas validaciones hechas con Regex y JS.',
        body: 'En Petshop podrás registrarte mediante un formulario para acceder a sus servicios. Recuerda llenar todos los campos correctamente para poder enviar el formulario.',
        urlDeployed: 'https://pabloamedias.github.io/PetShop_validacion-de-formulario/',
        urlGitHub: 'https://github.com/Pabloamedias/PetShop_validacion-de-formulario/',
        slug: 'petshop'
    },
    {
        id: 4,
        title: 'Fruta & fruto',
        urlImage: `${baseUrl}/images/fruta&fruto.png`,
        description: 'Una pagina sobre recetas saludables, elaborada con Bootstrap 5.',
        body: 'En el sitio web de Fruta & Fruto podrás encontrar distintas recetas saludables, además de un formulario de contacto para obtener más servicios.',
        urlDeployed: 'https://pabloamedias.github.io/Fruta-fruto/',
        urlGitHub: 'https://github.com/Pabloamedias/Fruta-fruto/',
        slug: 'fruta-y-fruto'
    },
    {
        id: 5,
        title: 'Web Scraping',
        urlImage: `${baseUrl}/images/web_scraping.png`,
        description: 'Un proyecto que obtiene data de empresas mediante web scraping con cheerio.',
        body: 'Proyecto sin un nombre particular ni rimbombante. Este scraper se encarga de scrapear un directorio de empresas. La aplicacíon extraera la data dependiendo del rubro que ingresemos, una ves extraída la data, la formateara y almacenará en archivos JSON y XML. Esta aplicación requiere que se ejecute localmente',
        urlGitHub: 'https://github.com/Pabloamedias/web-scraping-ts',
        slug: 'web-srcraping'

    },
]

