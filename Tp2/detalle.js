/**
 * Detalle de Materiales de Construcción
 * Control de Stock e Inventario
 */

// Lista completa de materiales según "materiales-iniciales.txt"
const MATERIALES = [
  {
    id: 1,
    codigo: "MAT-EPS-12020",
    nombre: "EPS X 120-20",
    categoria: "Aislaciones Térmicas",
    unidadPresentacion: "Placa (120 x 20 mm - Espesor 20 mm)",
    stockFisico: 350,
    stockComprometido: 120,
    fechaConteo: "25/09/2026",
    ubicacion: "Pasillo A - Estantería 01",
    unidadCorta: "placas",
    imagen: "img/EPS X 120-20.jpg",
    descripcion: "Placa de Poliestireno Expandido (EPS) de alta densidad para aislación térmica y acústica. Brinda máxima eficiencia energética en muros perimetrales y techos livianos, con absorción nula de humedad.",
    proyectosAsignados: "Proyecto A (70 u) · Proyecto C (50 u)"
  },
  {
    id: 2,
    codigo: "MAT-EPS-09220",
    nombre: "EPS X 92-20",
    categoria: "Aislaciones Térmicas",
    unidadPresentacion: "Placa (92 x 20 mm - Espesor 20 mm)",
    stockFisico: 420,
    stockComprometido: 150,
    fechaConteo: "25/09/2026",
    ubicacion: "Pasillo A - Estantería 02",
    unidadCorta: "placas",
    imagen: "img/EPS X 92-20.webp",
    descripcion: "Placa de EPS dimensionada para tabiquería interior en steel framing y dry-wall. Optimiza los tiempos de montaje sin requerir cortes adicionales entre perfiles galvanizados.",
    proyectosAsignados: "Proyecto B (90 u) · Proyecto C (60 u)"
  },
  {
    id: 3,
    codigo: "MAT-OSB-0950U",
    nombre: "OSB 9,5 X U",
    categoria: "Paneles Estructurales",
    unidadPresentacion: "Placa / Unidad (1.22 m x 2.44 m x 9.5 mm)",
    stockFisico: 180,
    stockComprometido: 65,
    fechaConteo: "26/09/2026",
    ubicacion: "Sector B - Racks de Placas 01",
    unidadCorta: "unidades",
    imagen: "img/OSB 9,5 X U.webp",
    descripcion: "Tablero estructural de virutas de madera orientadas (OSB) de 9.5 mm. Ideal para rigidización y arriostramiento en diafragmas verticales, cerramientos perimetrales y cielorrasos.",
    proyectosAsignados: "Proyecto A (40 u) · Proyecto B (25 u)"
  },
  {
    id: 4,
    codigo: "MAT-OSB-1810U",
    nombre: "OSB 18,1 X U",
    categoria: "Paneles Estructurales",
    unidadPresentacion: "Placa / Unidad (1.22 m x 2.44 m x 18.1 mm)",
    stockFisico: 95,
    stockComprometido: 40,
    fechaConteo: "26/09/2026",
    ubicacion: "Sector B - Racks de Placas 02",
    unidadCorta: "unidades",
    imagen: "img/OSB 18,1 X U.webp",
    descripcion: "Tablero estructural de gran espesor y resistencia mecánica superior. Diseñado específicamente para soporte de cargas pesadas en entrepisos transitables y bases de techo estructural.",
    proyectosAsignados: "Proyecto B (30 u) · Proyecto C (10 u)"
  },
  {
    id: 5,
    codigo: "MAT-ADH-VIN20",
    nombre: "ADHESIVO VINÍLICO X 20 KG",
    categoria: "Adhesivos y Selladores",
    unidadPresentacion: "Balde x 20 kg",
    stockFisico: 50,
    stockComprometido: 18,
    fechaConteo: "27/09/2026",
    ubicacion: "Sector C - Químicos y Pastas",
    unidadCorta: "baldes",
    imagen: "img/ADHESIVO VINÍLICO X 20 KG.webp",
    descripcion: "Adhesivo vinílico concentrado base acuosa de alta viscosidad y rápido agarre inicial, formulado para encolado estructural de paneles de madera, machimbre y tableros OSB.",
    proyectosAsignados: "Proyecto A (10 baldes) · Proyecto C (8 baldes)"
  },
  {
    id: 6,
    codigo: "MAT-ADH-POLIK",
    nombre: "Adhesivo poliuretánico POLIKAL",
    categoria: "Adhesivos y Selladores",
    unidadPresentacion: "Envase / Pote x 1 kg",
    stockFisico: 85,
    stockComprometido: 30,
    fechaConteo: "27/09/2026",
    ubicacion: "Sector C - Estantería 03",
    unidadCorta: "envases",
    imagen: "img/Adhesivo poliuretánico POLIKAL.jpg",
    descripcion: "Adhesivo monocomponente a base de poliuretano reactivo POLIKAL de altísimo poder ligante. Clasificación D4 resistente al agua, intemperie y vibraciones mecánicas continuas.",
    proyectosAsignados: "Proyecto A (15 u) · Proyecto B (15 u)"
  },
  {
    id: 7,
    codigo: "MAT-FIJ-SHS35",
    nombre: "SHS 3,5-40 x 50U",
    categoria: "Fijaciones y Tornillería",
    unidadPresentacion: "Caja x 50 unidades",
    stockFisico: 600,
    stockComprometido: 220,
    fechaConteo: "28/09/2026",
    ubicacion: "Pasillo D - Gaveta 12",
    unidadCorta: "cajas",
    imagen: "img/SHS 3,5-40 x 50U.avif",
    descripcion: "Tornillos autoperforantes y autorroscantes fosfatizados punta aguja de 3,5 mm x 40 mm con cabeza trompeta, diseñados para fijación precisa de placas a perfilería de chapa liviana.",
    proyectosAsignados: "Proyecto A (100 cj) · Proyecto B (70 cj) · Proyecto C (50 cj)"
  },
  {
    id: 8,
    codigo: "MAT-FIJ-SNK61",
    nombre: "SNK/HBS 6-100 x 100U",
    categoria: "Fijaciones y Tornillería",
    unidadPresentacion: "Caja x 100 unidades",
    stockFisico: 310,
    stockComprometido: 90,
    fechaConteo: "28/09/2026",
    ubicacion: "Pasillo D - Gaveta 18",
    unidadCorta: "cajas",
    imagen: "img/SNK-HBS 6-100 x 100U.webp",
    descripcion: "Tornillos estructurales de fijación pesada SNK/HBS 6 x 100 mm cincados amarillos con tratamiento anticorrosión y fresado bajo cabeza para embutido perfecto en madera maciza.",
    proyectosAsignados: "Proyecto B (50 cj) · Proyecto C (40 cj)"
  },
  {
    id: 9,
    codigo: "MAT-ESP-FIS75",
    nombre: "TUBO POLIURETANO 750 FISCHER",
    categoria: "Adhesivos y Selladores",
    unidadPresentacion: "Tubo aerosol 750 ml (Pack 12x6 + 9u = 81u)",
    stockFisico: 140,
    stockComprometido: 45,
    fechaConteo: "28/09/2026",
    ubicacion: "Sector C - Estantería 05",
    unidadCorta: "tubos",
    imagen: "img/TUBO POLIURETANO 750 FISCHER.webp",
    descripcion: "Espuma expansiva monocomponente de poliuretano Fischer 750 ml para sellado térmico y acústico, aislamiento y relleno de cavidades en vanos de carpinterías de puertas y ventanas.",
    proyectosAsignados: "Proyecto A (25 u) · Proyecto B (20 u)"
  },
  {
    id: 10,
    codigo: "MAT-AIS-ACU50",
    nombre: "MEMBRANA ACÚSTICA, rollo 50 m²",
    categoria: "Aislaciones Acústicas",
    unidadPresentacion: "Rollo continuo de 50 m²",
    stockFisico: 65,
    stockComprometido: 20,
    fechaConteo: "29/09/2026",
    ubicacion: "Pasillo E - Racks de Rollos",
    unidadCorta: "rollos",
    imagen: "img/MEMBRANA ACÚSTICA, rollo 50 m².webp",
    descripcion: "Membrana fonoabsorbente viscoelástica bicapa para atenuación de ruidos de impacto en entrepisos y disminución de transmisión aérea en tabiquería liviana.",
    proyectosAsignados: "Proyecto A (12 rollos) · Proyecto C (8 rollos)"
  }
];

// Estado de la aplicación
let materialSeleccionadoId = 1;
let categoriaActiva = "todas";
let filtroTexto = "";

// Elementos del DOM
const elSelectorDirecto = document.getElementById("selector-directo");
const elBuscarDetalle = document.getElementById("buscar-detalle");
const elContenedorPildoras = document.getElementById("pildoras-categorias");
const elCuerpoTabla = document.getElementById("cuerpo-tabla-materiales");

// Elementos de la Ficha Técnica
const elDetImagen = document.getElementById("det-imagen");
const elDetInsigniaCat = document.getElementById("det-insignia-cat");
const elDetCodigo = document.getElementById("det-codigo");
const elDetCategoria = document.getElementById("det-categoria");
const elDetEstado = document.getElementById("det-estado");
const elDetNombre = document.getElementById("det-nombre");
const elDetDescripcion = document.getElementById("det-descripcion");
const elDetCodigoVal = document.getElementById("det-codigo-val");
const elDetCategoriaVal = document.getElementById("det-categoria-val");
const elDetUnidadVal = document.getElementById("det-unidad-val");
const elDetFechaVal = document.getElementById("det-fecha-val");
const elDetUbicacionVal = document.getElementById("det-ubicacion-val");

// Elementos de las Tarjetas de Stock
const elDetStockFisico = document.getElementById("det-stock-fisico");
const elDetUnidadFisico = document.getElementById("det-unidad-fisico");
const elDetStockComprometido = document.getElementById("det-stock-comprometido");
const elDetUnidadComprometido = document.getElementById("det-unidad-comprometido");
const elDetProyectosComprometidos = document.getElementById("det-proyectos-comprometidos");
const elDetStockDisponible = document.getElementById("det-stock-disponible");
const elDetUnidadDisponible = document.getElementById("det-unidad-disponible");
const elDetPorcentajeDisp = document.getElementById("det-porcentaje-disp");
const elDetBarraDisp = document.getElementById("det-barra-disp");

// Elementos de Navegación Rápida
const elBtnAnterior = document.getElementById("btn-anterior");
const elBtnSiguiente = document.getElementById("btn-siguiente");

// Elementos del Simulador
const elInputSimulador = document.getElementById("simulador-cantidad");
const elBtnSimular = document.getElementById("btn-simular");
const elBtnResetSimular = document.getElementById("btn-reset-simular");
const elResultadoSimulador = document.getElementById("resultado-simulador");

/**
 * Inicialización al cargar la página
 */
document.addEventListener("DOMContentLoaded", () => {
  poblarSelectorDirecto();
  generarPildorasCategorias();
  renderizarTabla();
  
  // Leer parámetro URL ?id=... o ?codigo=...
  detectarMaterialDesdeURL();

  // Escuchar eventos
  configurarEventos();
});

/**
 * Detectar material inicial desde los parámetros de la URL
 */
function detectarMaterialDesdeURL() {
  const urlParams = new URLSearchParams(window.location.search);
  const idParam = urlParams.get("id");
  const codigoParam = urlParams.get("codigo");

  if (idParam) {
    const idNum = parseInt(idParam, 10);
    const hallado = MATERIALES.find(m => m.id === idNum);
    if (hallado) {
      seleccionarMaterial(hallado.id, false);
      return;
    }
  }

  if (codigoParam) {
    const hallado = MATERIALES.find(m => m.codigo.toLowerCase() === codigoParam.toLowerCase());
    if (hallado) {
      seleccionarMaterial(hallado.id, false);
      return;
    }
  }

  // Por defecto el primer material
  seleccionarMaterial(1, false);
}

/**
 * Rellenar el <select> desplegable
 */
function poblarSelectorDirecto() {
  if (!elSelectorDirecto) return;
  elSelectorDirecto.innerHTML = "";
  
  MATERIALES.forEach(mat => {
    const opcion = document.createElement("option");
    opcion.value = mat.id;
    opcion.textContent = `${mat.codigo} - ${mat.nombre}`;
    elSelectorDirecto.appendChild(opcion);
  });
}

/**
 * Generar píldoras de categorías dinámicas
 */
function generarPildorasCategorias() {
  if (!elContenedorPildoras) return;
  const categorias = ["todas", ...new Set(MATERIALES.map(m => m.categoria))];

  elContenedorPildoras.innerHTML = "";
  categorias.forEach(cat => {
    const boton = document.createElement("button");
    boton.type = "button";
    boton.className = `boton-pildora ${cat === categoriaActiva ? "activa" : ""}`;
    boton.textContent = cat === "todas" ? "Todas las categorías" : cat;
    boton.dataset.categoria = cat;
    
    boton.addEventListener("click", () => {
      categoriaActiva = cat;
      document.querySelectorAll(".boton-pildora").forEach(b => b.classList.remove("activa"));
      boton.classList.add("activa");
      renderizarTabla();
    });

    elContenedorPildoras.appendChild(boton);
  });
}

/**
 * Configurar manejadores de eventos
 */
function configurarEventos() {
  // Cambio en select desplegable
  elSelectorDirecto.addEventListener("change", (e) => {
    const nuevoId = parseInt(e.target.value, 10);
    seleccionarMaterial(nuevoId, true);
  });

  // Búsqueda en tiempo real
  elBuscarDetalle.addEventListener("input", (e) => {
    filtroTexto = e.target.value.trim().toLowerCase();
    renderizarTabla();
  });

  // Botones anterior / siguiente
  if (elBtnAnterior) {
    elBtnAnterior.addEventListener("click", () => {
      const idx = MATERIALES.findIndex(m => m.id === materialSeleccionadoId);
      const prevIdx = (idx - 1 + MATERIALES.length) % MATERIALES.length;
      seleccionarMaterial(MATERIALES[prevIdx].id, true);
    });
  }

  if (elBtnSiguiente) {
    elBtnSiguiente.addEventListener("click", () => {
      const idx = MATERIALES.findIndex(m => m.id === materialSeleccionadoId);
      const nextIdx = (idx + 1) % MATERIALES.length;
      seleccionarMaterial(MATERIALES[nextIdx].id, true);
    });
  }

  // Navegación con flechas del teclado (izquierda / derecha)
  window.addEventListener("keydown", (e) => {
    if (document.activeElement.tagName === "INPUT" || document.activeElement.tagName === "SELECT") {
      return;
    }
    if (e.key === "ArrowLeft") {
      elBtnAnterior.click();
    } else if (e.key === "ArrowRight") {
      elBtnSiguiente.click();
    }
  });

  // Simulador de Reserva
  if (elBtnSimular && elInputSimulador) {
    elBtnSimular.addEventListener("click", ejecutarSimulacion);
    elInputSimulador.addEventListener("keydown", (e) => {
      if (e.key === "Enter") {
        e.preventDefault();
        ejecutarSimulacion();
      }
    });
  }

  if (elBtnResetSimular) {
    elBtnResetSimular.addEventListener("click", () => {
      if (elInputSimulador) elInputSimulador.value = "";
      if (elResultadoSimulador) {
        elResultadoSimulador.innerHTML = "";
        elResultadoSimulador.classList.remove("alerta-exceso");
      }
    });
  }
}

/**
 * Selecciona un material y actualiza toda la vista
 */
function seleccionarMaterial(id, actualizarURL = true) {
  const mat = MATERIALES.find(m => m.id === id);
  if (!mat) return;

  materialSeleccionadoId = id;

  // Actualizar selector desplegable
  if (elSelectorDirecto) {
    elSelectorDirecto.value = id;
  }

  // Calcular stock disponible
  const stockDisponible = mat.stockFisico - mat.stockComprometido;
  const porcentajeDisponible = mat.stockFisico > 0 
    ? Math.round((stockDisponible / mat.stockFisico) * 100) 
    : 0;

  // Actualizar Ficha Visual e Info
  if (elDetImagen) {
    elDetImagen.src = mat.imagen;
    elDetImagen.alt = `Fotografía de ${mat.nombre}`;
  }
  if (elDetInsigniaCat) elDetInsigniaCat.textContent = mat.categoria;
  if (elDetCodigo) elDetCodigo.textContent = mat.codigo;
  if (elDetCategoria) elDetCategoria.textContent = mat.categoria;
  if (elDetNombre) elDetNombre.textContent = mat.nombre;
  if (elDetDescripcion) elDetDescripcion.textContent = mat.descripcion;

  // Actualizar estado
  if (elDetEstado) {
    if (porcentajeDisponible > 30) {
      elDetEstado.textContent = "● Disponible para despacho";
      elDetEstado.className = "badge-estado-stock estado-optimo";
    } else {
      elDetEstado.textContent = "▲ Stock de reserva bajo";
      elDetEstado.className = "badge-estado-stock estado-alerta";
    }
  }

  // Actualizar Grilla de Datos Técnicos Requeridos
  if (elDetCodigoVal) elDetCodigoVal.textContent = mat.codigo;
  if (elDetCategoriaVal) elDetCategoriaVal.textContent = mat.categoria;
  if (elDetUnidadVal) elDetUnidadVal.textContent = mat.unidadPresentacion;
  if (elDetFechaVal) elDetFechaVal.textContent = mat.fechaConteo;
  if (elDetUbicacionVal) elDetUbicacionVal.textContent = mat.ubicacion;

  // Actualizar Tarjetas de Stock
  if (elDetStockFisico) elDetStockFisico.textContent = mat.stockFisico.toLocaleString("es-AR");
  if (elDetUnidadFisico) elDetUnidadFisico.textContent = mat.unidadCorta;

  if (elDetStockComprometido) elDetStockComprometido.textContent = mat.stockComprometido.toLocaleString("es-AR");
  if (elDetUnidadComprometido) elDetUnidadComprometido.textContent = mat.unidadCorta;
  if (elDetProyectosComprometidos) elDetProyectosComprometidos.textContent = mat.proyectosAsignados;

  if (elDetStockDisponible) elDetStockDisponible.textContent = stockDisponible.toLocaleString("es-AR");
  if (elDetUnidadDisponible) elDetUnidadDisponible.textContent = mat.unidadCorta;

  if (elDetPorcentajeDisp) elDetPorcentajeDisp.textContent = `${porcentajeDisponible}% disponible`;
  if (elDetBarraDisp) elDetBarraDisp.style.width = `${porcentajeDisponible}%`;

  // Resetear simulador al cambiar de material
  if (elInputSimulador) elInputSimulador.value = "";
  if (elResultadoSimulador) {
    elResultadoSimulador.innerHTML = "";
    elResultadoSimulador.classList.remove("alerta-exceso");
  }

  // Resaltar fila en la tabla
  resaltarFilaSeleccionada(id);

  // Actualizar parámetro en la URL sin recargar
  if (actualizarURL) {
    const url = new URL(window.location);
    url.searchParams.set("id", id);
    window.history.replaceState({}, "", url);
  }
}

/**
 * Renderizar la tabla de materiales con filtros aplicados
 */
function renderizarTabla() {
  if (!elCuerpoTabla) return;
  elCuerpoTabla.innerHTML = "";

  const filtrados = MATERIALES.filter(mat => {
    // Filtro por categoría
    const pasaCategoria = categoriaActiva === "todas" || mat.categoria === categoriaActiva;

    // Filtro por texto
    const texto = `${mat.nombre} ${mat.codigo} ${mat.categoria} ${mat.unidadPresentacion} ${mat.ubicacion}`.toLowerCase();
    const pasaTexto = !filtroTexto || texto.includes(filtroTexto);

    return pasaCategoria && pasaTexto;
  });

  if (filtrados.length === 0) {
    const filaVacia = document.createElement("tr");
    filaVacia.innerHTML = `
      <td colspan="9" style="text-align: center; padding: 2rem; color: #666;">
        No se encontraron materiales que coincidan con la búsqueda.
      </td>
    `;
    elCuerpoTabla.appendChild(filaVacia);
    return;
  }

  filtrados.forEach(mat => {
    const stockDisponible = mat.stockFisico - mat.stockComprometido;
    const esSeleccionado = mat.id === materialSeleccionadoId;

    const tr = document.createElement("tr");
    tr.id = `fila-mat-${mat.id}`;
    if (esSeleccionado) tr.classList.add("fila-seleccionada");

    tr.innerHTML = `
      <td><span class="badge-codigo-tabla">${mat.codigo}</span></td>
      <th scope="row">${mat.nombre}</th>
      <td>${mat.categoria}</td>
      <td>${mat.unidadPresentacion}</td>
      <td style="text-align: right; font-weight: 600;">${mat.stockFisico.toLocaleString("es-AR")}</td>
      <td style="text-align: right; color: #b45309; font-weight: 600;">${mat.stockComprometido.toLocaleString("es-AR")}</td>
      <td style="text-align: right;" class="destacado-stock-disponible">${stockDisponible.toLocaleString("es-AR")}</td>
      <td>${mat.fechaConteo}</td>
      <td style="text-align: center;">
        <button type="button" class="boton-accion-ver" data-id="${mat.id}" title="Ver ficha técnica completa">
          ${esSeleccionado ? "✓ En vista" : "Ver detalle"}
        </button>
      </td>
    `;

    // Click en la fila completa para seleccionar
    tr.addEventListener("click", (e) => {
      seleccionarMaterial(mat.id, true);
      // Desplazar suavemente a la ficha si el usuario está abajo
      const ficha = document.getElementById("ficha-material");
      if (ficha && window.scrollY > ficha.offsetTop + 200) {
        ficha.scrollIntoView({ behavior: "smooth", block: "start" });
      }
    });

    elCuerpoTabla.appendChild(tr);
  });
}

/**
 * Resaltar fila seleccionada en la tabla
 */
function resaltarFilaSeleccionada(id) {
  document.querySelectorAll(".tabla-detalle-materiales tbody tr").forEach(row => {
    row.classList.remove("fila-seleccionada");
    const btn = row.querySelector(".boton-accion-ver");
    if (btn) btn.textContent = "Ver detalle";
  });

  const fila = document.getElementById(`fila-mat-${id}`);
  if (fila) {
    fila.classList.add("fila-seleccionada");
    const btn = fila.querySelector(".boton-accion-ver");
    if (btn) btn.textContent = "✓ En vista";
  }
}

/**
 * Ejecutar la simulación de reserva de stock
 */
function ejecutarSimulacion() {
  if (!elInputSimulador || !elResultadoSimulador) return;

  const cantidad = parseInt(elInputSimulador.value, 10);
  const mat = MATERIALES.find(m => m.id === materialSeleccionadoId);
  if (!mat) return;

  const stockDisponibleActual = mat.stockFisico - mat.stockComprometido;

  if (isNaN(cantidad) || cantidad <= 0) {
    elResultadoSimulador.className = "simulador-resultado-caja alerta-exceso";
    elResultadoSimulador.innerHTML = "⚠️ Por favor, ingrese un número entero positivo para simular la reserva.";
    return;
  }

  if (cantidad > stockDisponibleActual) {
    elResultadoSimulador.className = "simulador-resultado-caja alerta-exceso";
    elResultadoSimulador.innerHTML = `
      ❌ <strong>Stock insuficiente para la reserva:</strong> Solicitó <strong>${cantidad} ${mat.unidadCorta}</strong>, pero el stock disponible actual es de únicamente <strong>${stockDisponibleActual} ${mat.unidadCorta}</strong>.
    `;
    return;
  }

  const nuevoComprometido = mat.stockComprometido + cantidad;
  const nuevoDisponible = stockDisponibleActual - cantidad;

  elResultadoSimulador.className = "simulador-resultado-caja";
  elResultadoSimulador.innerHTML = `
    ✅ <strong>Simulación exitosa:</strong> Si reserva <strong>${cantidad} ${mat.unidadCorta}</strong> para una nueva obra:<br>
    • Nuevo stock comprometido: <strong>${nuevoComprometido} ${mat.unidadCorta}</strong><br>
    • Stock remanente disponible: <strong>${nuevoDisponible} ${mat.unidadCorta}</strong> (${Math.round((nuevoDisponible / mat.stockFisico) * 100)}% de stock físico).
  `;
}
