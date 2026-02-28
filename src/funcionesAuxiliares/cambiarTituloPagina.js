export const cambiarTituloPagina = (idPagina) => {
    const titulos = {
        "Pagina Principal": "Pagina Principal",
        "Nuestra Labor": "Nuestra Labor",
        "Sitios de Interes": "Sitios de Interes",
        "Nuestros Casos": "Nuestros Casos",
        "Contacto": "Contacto",
        "Programar Charla": "Programar Charla",
        "Error404": "Error404"
    };

    document.title = titulos[idPagina] || "Adep-Cu";
}