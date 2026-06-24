const express = require('express');
const app = express();
const PORT = process.env.PORT || 3000;

// Middleware to serve static files
app.use(express.static('public'));

// Route to get PMBOK summary
app.get('/pmbok-summary', (req, res) => {
    const summary = {
        title: "Resumen de la Guía PMBOK",
        description: "La Guía del Conocimiento en Dirección de Proyectos (PMBOK) es un estándar que proporciona directrices sobre la gestión de proyectos. Se centra en las mejores prácticas y procesos que son comúnmente aceptados en la industria.",
        processes: [
            "Iniciación",
            "Planificación",
            "Ejecución",
            "Monitoreo y Control",
            "Cierre"
        ],
        knowledgeAreas: [
            "Gestión de la Integración",
            "Gestión del Alcance",
            "Gestión del Cronograma",
            "Gestión de los Costos",
            "Gestión de la Calidad",
            "Gestión de los Recursos",
            "Gestión de las Comunicaciones",
            "Gestión de los Riesgos",
            "Gestión de las Adquisiciones",
            "Gestión de los Interesados"
        ]
    };
    res.json(summary);
});

// Start the server
app.listen(PORT, () => {
    console.log(`Servidor corriendo en http://localhost:${PORT}`);
});