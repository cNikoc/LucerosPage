// Datos de los videos (puedes agregar más videos aquí)
const videos = [
    {
        id: 'T8trLxET1oc', // Reemplaza con IDs reales de YouTube
        title: 'Año 13',
        description: '',
        thumbnail: 'https://img.youtube.com/vi/T8trLxET1oc/maxresdefault.jpg'
    },
    {
        id: 'bnzdSKwx2nY', // Reemplaza con IDs reales de YouTube
        title: 'Chau Sofía',
        description: '',
        thumbnail: 'https://img.youtube.com/vi/bnzdSKwx2nY/maxresdefault.jpg'
    },
    {
        id: 'XDzGqMJdvh8', // Reemplaza con IDs reales de YouTube
        title: 'El Espíritu Capicúa',
        description: '',
        thumbnail: 'https://img.youtube.com/vi/XDzGqMJdvh8/maxresdefault.jpg'
    },
    {
        id: '8kD3mwJkiKg', // Reemplaza con IDs reales de YouTube
        title: 'Alunizando',
        description: '',
        thumbnail: 'https://img.youtube.com/vi/8kD3mwJkiKg/maxresdefault.jpg'
    },
    {
        id: 'eA92H01F1QU', // Reemplaza con IDs reales de YouTube
        title: 'Nigromante',
        description: '',
        thumbnail: 'https://img.youtube.com/vi/eA92H01F1QU/maxresdefault.jpg'
    }
];

// Función para mostrar una vista específica
function showView(viewName) {
    console.log('Mostrando vista:', viewName);
    
    // Ocultar todas las vistas
    document.querySelectorAll('.view').forEach(view => {
        view.classList.add('d-none');
    });
    
    // Mostrar la vista seleccionada
    const selectedView = document.getElementById(`${viewName}-view`);
    console.log('Vista encontrada:', selectedView);
    if (selectedView) {
        selectedView.classList.remove('d-none');
        console.log('Clases después de remover d-none:', selectedView.className);
        console.log('Display computed:', window.getComputedStyle(selectedView).display);
    } else {
        console.error('No se encontró la vista:', `${viewName}-view`);
    }
    
    // Actualizar navegación activa
    document.querySelectorAll('.nav-link').forEach(link => {
        link.classList.remove('active');
    });
    
    // Scroll al inicio
    window.scrollTo(0, 0);
}

// Función para abrir video de YouTube
function openVideo(videoId) {
    window.open(`https://www.youtube.com/watch?v=${videoId}`, '_blank');
}

// Función para renderizar los videos
function renderVideos() {
    const container = document.getElementById('videos-container');
    
    if (!container) return;
    
    container.innerHTML = videos.map(video => `
        <div class="col-md-6 col-lg-4">
            <div class="card video-card">
                <div class="video-thumbnail" onclick="openVideo('${video.id}')">
                    <img src="${video.thumbnail}" alt="${video.title}" onerror="this.src='https://via.placeholder.com/640x360?text=Video+Preview'">
                    <div class="video-play-button">
                        <i class="bi bi-play-fill"></i>
                    </div>
                </div>
                <div class="video-card-body">
                    <h3 class="video-title">${video.title}</h3>
                    <p class="video-description">${video.description}</p>
                    <a href="https://www.youtube.com/watch?v=${video.id}" target="_blank" class="btn btn-sm btn-outline-secondary mt-1">
                        <i class="bi bi-youtube"></i> Ver en YouTube
                    </a>
                </div>
            </div>
        </div>
    `).join('');
}

// Manejo del formulario de contacto
document.addEventListener('DOMContentLoaded', function() {
    // Renderizar videos al cargar la página
    renderVideos();
    
    // Mostrar vista home por defecto
    showView('home');
});
