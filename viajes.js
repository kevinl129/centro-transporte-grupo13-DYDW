const rutas = [
            {
                origen: "terminal",
                destino: "facultad",
                transporte: "Subte Línea H",
                anden: "Plataforma 2 (Subsuelo)",
                tiempo: "15 minutos",
                costo: "$650"
            },
            {
                origen: "hospitales",
                destino: "terminal",
                transporte: "Subte Línea H",
                anden: "Plataforma 1 (Subsuelo)",
                tiempo: "10 minutos",
                costo: "$650"
            },
            {
                origen: "terminal",
                destino: "terminal",
                transporte: "Ninguno",
                anden: "-",
                tiempo: "Ya estás en este lugar",
                costo: "$0"
            }
        ];

        function buscarViaje(event) {
            event.preventDefault();
            
            const origen = document.getElementById("origen").value;
            const destino = document.getElementById("destino").value;
            const resultadoDiv = document.getElementById("resultado-busqueda");
            
            resultadoDiv.style.display = "block"; // Mostrar la tarjeta de resultado
            
            const viaje = rutas.find(r => r.origen === origen && r.destino === destino);
            
            if (viaje) {
                // Inyectamos los datos dinámicos requeridos por la consigna
                resultadoDiv.innerHTML = `
                    <h2 style="color: var(--primary-color);">Ruta Recomendada</h2>
                    <p><strong>Transporte recomendado:</strong> ${viaje.transporte}</p>
                    <p><strong>Plataforma/Andén:</strong> ${viaje.anden}</p>
                    <p><strong>Tiempo estimado:</strong> ${viaje.tiempo}</p>
                    <p><strong>Costo estimado:</strong> ${viaje.costo}</p>
                `;
            } else {
                resultadoDiv.innerHTML = `
                    <h2 style="color: red;">Sin resultados</h2>
                    <p>No se encontraron rutas directas para esta combinación con los datos simulados actuales.</p>
                `;
            }
        }