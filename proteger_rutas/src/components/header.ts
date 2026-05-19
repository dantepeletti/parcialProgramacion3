export const renderHeader = (
    tituloPagina: string
): string => {

    return `
    
    <header class="main-header">
        <div class="logo-container">
            <img 
                src="../../../../public/icons/logo.png" 
                alt="Logo"
                class="logo"
            >
            <h1>FoodStore</h1>
        </div>
        <h2 class="page-title">
            ${tituloPagina}
        </h2>
    </header>
    `;
}