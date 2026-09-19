// ================================================================
//  CONFIGURACIÓN Y DATOS DE PRODUCTOS (PRECIOS FIJOS EN BOLIVIANOS)
// ================================================================
const LOGO_URL = 'img/sunote.png';
const PUMA_FAVICON_DATA_URI = 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAgCAYAAABzenr0AAAEvklEQVR4nO1WTWxUVRT+zn1vpjNDIdBhet99xY5KbaE0LAwhMWjAKLioC2OAyIKgLIwaIwkLdgoSTdhIFKJucOcCIZiYkAhKhMREAgFDoPRnHCtCYDpTWqSdKZ2fd4+5nXk4qUWeBnXTL3l5f/ec853vnPPuA2Yxi38ABgj/FxgQ04jck4x5b9YfAiyuHg+GeDaRaEy1tTU8CF8UdKFhfwqwWpqdvSGL3EkP31QYl7kU6l1+++qt6Wt3AfRSPD4H4XB7yKP5bLHNxeLp9tHRsfq1ImBwiwBepNTLENh8i/n1JbnMAYvLg5FoSV1sbpb18p4H7HcB7VmhV2Ogc57gEwJ0LBqODqaku9UkbnwGJuBDMz8rIE49PjQ0fBigzps3M+1DQ70Tlcqd/ni80dT7HBBaAZR7E2pdVIjdk8y6UQiUmccm4W3nsjhezQna+LT/DgFmniwTLzHXGwyfWtY0OjpmAl8G7BVA6SfXfYI0HwQhxoxiwdNfTNkTCrrBc/ri8TEaGRk3poEUOOUHIuppAJb1JBJO7bllDkPEZN0FlNLNapPQ/LUmLOBqpun2bGZLiL0dmmkdab3Yk7JYI8+BmtBIS4BOS9kVFdal2xpvdmZvfFy/pj+hVgkb28OgF0vMqABlAQgNFKKEgxXNj2jw2x3Z7Jl/NAU7AWE6e8BRPwgmOUdw5wRgyvGcZu4m0KoIEfLMprY6SmSbLrOIcEfrsbL2nlyay11iwCYYflXYARWg89VJKA+w3t0grKPjGudAeKyRyC4SochcyWutmSi0QAj7tud9LxjHQxa9MEHYvDyX669N093ggQjsrMkPoJxyWtYT6x2ms21BSytVqREGECGytRAw8o+zPjIfvEXlsoVDwJ6NgFfz4033b98n86ngF6Sc00i0B9CJCriLIKjErI3DIuOwBT3CTLc0vGEbONuRzZ419icB+2mgYhSsJYHABLgqlzfoOMkyaD8RvlqcyXx2Waqfo4SHNUPHSITynj7bkRv6aHrJzNnIXbd3mIn4E8RMDw1zE/xXKZeBaK8H/sAEH5ByZVTQozEiYYFfmdT604dC1oc9jrPe2P2STEZqqpnx8gNyLpGI3Wsjopk63QQ3Y2XbeG2hZW3LVSobYyTWjmuOzBXUWtDelx3Z7E6zIYl8/tuIEE/95nnPdGWz303r8qlZ73XdOBWLpaXVj8/9kVZqU8px951MJiO9jrN6wHE+v9bSsuaClM2ra2UzW6w5n5nrxgcd9eM15eqLUnb75avftlNNTfP64m5HfXl82D7LVFvbPCoU2jTTRrDOtw9l3roqF60sEb2RZ7214/r1gm9Uk9mbOo/fGDkDd21zIx9Rln00rdQ2ymT2+SQTAE2EQl6YuRXAQF1p/nAGAFeUWpV23P19Uq4x9wNNTS1pxzlwpbVV1WVF0zPw7Q8B4UGpPrnpLuK04x7rcZzOuz2VTEb6pNoVSH6/F8z3vl+phf49/gL173ul7L7iuH1pR+mUo04MOu47aUed7lfqPfPe34Z9kH9hMjsMiA3VDr47s7UZnnGE6uH/nvm2KSmfZ4huG4hp4htFz3u/a3g4H9QfZpI7CPzmDArCvwBfTdOA5n5N7QckUOazmAX+Y/wOhDEORN9lwD0AAAAASUVORK5CYII=';

const productosData = [
    { id: 'sn228plus', modelo: 'SN 228+', tamanos: '295/80', pr: '18 PR', descripcion: 'Dirección / Tracción · Uso mixto', precioBase: 3000, imagen: 'img/SN228+.jpg' },
    { id: 'sn257_295_20', modelo: 'SN 257', tamanos: '295/80', pr: '20 PR', descripcion: 'Alta resistencia · Carga pesada', precioBase: 3000, imagen: 'img/SN257.jpg' },
    { id: 'sn257_295_18', modelo: 'SN 257', tamanos: '295/80', pr: '18 PR', descripcion: 'Versatilidad y durabilidad', precioBase: 2900, imagen: 'img/SN257.jpg' },
    { id: 'sn257h_295_20', modelo: 'SN 257H', tamanos: '295/80', pr: '20 PR', descripcion: 'Alta durabilidad · Especial para flotas', precioBase: 2650, imagen: 'img/SN257H.jpg' },
    { id: 'sn228_315', modelo: 'SN 228', tamanos: '315/80', pr: '20 PR', descripcion: 'Rendimiento superior · Todo terreno', precioBase: 3150, imagen: 'img/SN228.jpg' },
    { id: 'sn128_315_22', modelo: 'SN 128', tamanos: '315/80', pr: '22 PR', descripcion: 'Máxima capacidad de carga', precioBase: 3000, imagen: 'img/SN128.jpg' },
    { id: 'sn215_275_18', modelo: 'SN 215', tamanos: '275/70', pr: '18 PR', descripcion: 'Rendimiento urbano · Confort y economía', precioBase: 2200, imagen: 'img/SN215.jpg' },
    { id: 'sn257_275_20', modelo: 'SN 257', tamanos: '275/70', pr: '20 PR', descripcion: 'Estabilidad en carretera', precioBase: 2250, imagen: 'img/SN257.jpg' }
];

// ========== ESTADO GLOBAL ==========
let cantidades = {};
let searchTerm = '';
let sizeFilter = 'All';
let currentBcbRate = parseFloat(localStorage.getItem('sunote_bcb_rate')) || 10.01;
let currentBlueRate = parseFloat(localStorage.getItem('sunote_blue_rate')) || 11.78;
let blueBuyRate = parseFloat(localStorage.getItem('sunote_blue_buy')) || 11.71;
let blueSellRate = parseFloat(localStorage.getItem('sunote_blue_sell')) || 11.78;

function initState() {
    productosData.forEach(p => {
        cantidades[p.id] = 0;
    });
}
initState();

// ================================================================
//  CONSULTA EN TIEMPO REAL: TASA OFICIAL BCB Y DÓLAR PARALELO (BLUE)
// ================================================================
async function fetchLiveDollarRate() {
    const bcbRateEl = document.getElementById('dolarRateText');
    const bcbDateEl = document.getElementById('bcbDateText');
    const bcbBadgeEl = document.getElementById('liveIndicator');
    const blueRateEl = document.getElementById('dolarBlueRateText');
    const blueBadgeEl = document.getElementById('blueLiveIndicator');
    const bcbBox = document.getElementById('dolarBcbBox');
    const blueBox = document.getElementById('dolarBlueBox');

    // 1. Mostrar de inmediato la última tasa válida registrada (sin parpadeos)
    if (bcbRateEl) bcbRateEl.innerText = currentBcbRate.toFixed(2);
    if (blueRateEl) blueRateEl.innerText = currentBlueRate.toFixed(2);

    let bcbUpdated = false;
    let blueUpdated = false;

    // 2. Consulta 1: Datos oficiales directos del BCB (oficial-unificado)
    try {
        const responseBcb = await fetch('https://api.dolarbluebolivia.click/v1/official-unificado', { cache: 'no-store' });
        if (responseBcb.ok) {
            const dataBcb = await responseBcb.json();
            const d = dataBcb && (dataBcb.data || dataBcb);
            const val = parseFloat(d.valor || d.venta || d.buy || d.compra);
            if (val && val > 0) {
                currentBcbRate = val;
                localStorage.setItem('sunote_bcb_rate', currentBcbRate);
                if (bcbRateEl) bcbRateEl.innerText = currentBcbRate.toFixed(2);
                if (bcbBadgeEl) bcbBadgeEl.innerHTML = '<span class="live-dot"></span> BCB Hoy';
                if (bcbBox && d.fecha) {
                    bcbBox.setAttribute('title', `Tipo de cambio oficial BCB: ${currentBcbRate.toFixed(2)} BOB (${d.fecha}) · Fuente: www.bcb.gob.bo`);
                }
                bcbUpdated = true;
            }
        }
    } catch (err) {
        console.warn('Consulta oficial BCB:', err);
    }

    // 3. Consulta 2: Dólar Paralelo (Blue) y respaldo BCB (officialRate)
    try {
        const responseRate = await fetch('https://api.dolarbluebolivia.click/v1/officialRate', { cache: 'no-store' });
        if (responseRate.ok) {
            const dataRate = await responseRate.json();
            const d = dataRate && (dataRate.data || dataRate);

            // Procesar Dólar Paralelo (Blue)
            if (d && d.blue) {
                const sell = parseFloat(d.blue.sell);
                const buy = parseFloat(d.blue.buy);
                if (sell && sell > 0) {
                    blueSellRate = sell;
                    blueBuyRate = buy || sell;
                    currentBlueRate = sell;
                    localStorage.setItem('sunote_blue_rate', currentBlueRate);
                    localStorage.setItem('sunote_blue_sell', blueSellRate);
                    localStorage.setItem('sunote_blue_buy', blueBuyRate);

                    if (blueRateEl) blueRateEl.innerText = currentBlueRate.toFixed(2);
                    if (blueBadgeEl) blueBadgeEl.innerHTML = '<span class="live-dot blue-dot"></span> En Vivo';
                    if (blueBox) {
                        blueBox.setAttribute('title', `Dólar Paralelo (Blue) en Bolivia: Compra ${blueBuyRate.toFixed(2)} BOB / Venta ${blueSellRate.toFixed(2)} BOB · Fuente: dolarbluebolivia.click`);
                    }
                    blueUpdated = true;
                }
            }

            // Respaldo de BCB si el primer intento no hubiera respondido
            if (!bcbUpdated && d && d.official) {
                const bcbVal = parseFloat(d.official.sell || d.official.buy);
                if (bcbVal && bcbVal > 0) {
                    currentBcbRate = bcbVal;
                    localStorage.setItem('sunote_bcb_rate', currentBcbRate);
                    if (bcbRateEl) bcbRateEl.innerText = currentBcbRate.toFixed(2);
                    if (bcbBadgeEl) bcbBadgeEl.innerHTML = '<span class="live-dot"></span> BCB Hoy';
                    bcbUpdated = true;
                }
            }
        }
    } catch (err) {
        console.warn('Consulta Dólar Blue:', err);
    }

    // 4. Si ocurrió un error de red y no hay conexión a internet, preservar los valores establecidos
    if (!bcbUpdated && bcbRateEl) {
        bcbRateEl.innerText = currentBcbRate.toFixed(2);
    }
    if (!blueUpdated && blueRateEl) {
        blueRateEl.innerText = currentBlueRate.toFixed(2);
    }
}

// ========== CONTADOR DE COTIZACIÓN ==========
const COUNTER_KEY = 'cotizacionCounter_sunote';

function getNextCotizacionNumber() {
    const today = new Date();
    const yyyy = today.getFullYear();
    const mm = String(today.getMonth() + 1).padStart(2, '0');
    const dd = String(today.getDate()).padStart(2, '0');
    let count = parseInt(localStorage.getItem(COUNTER_KEY) || '1', 10);
    return `COT-${yyyy}${mm}${dd}-${count.toString().padStart(3, '0')}`;
}

function incrementCotizacionNumber() {
    let count = parseInt(localStorage.getItem(COUNTER_KEY) || '1', 10);
    count++;
    localStorage.setItem(COUNTER_KEY, count.toString());
    return getNextCotizacionNumber();
}

function setDateAndNumber() {
    const today = new Date();
    const dateStr = today.toLocaleDateString('es-ES', { day: 'numeric', month: 'long', year: 'numeric' });
    const dateEl = document.getElementById('currentDate');
    if (dateEl) dateEl.innerText = dateStr;

    const docEl = document.getElementById('docNumber');
    if (docEl) docEl.innerText = getNextCotizacionNumber();
}

// ========== BÚSQUEDA Y FILTRADO ==========
function handleSearch(val) {
    searchTerm = val.trim();
    renderGrid();
}

function filterBySize(size, btnEl) {
    sizeFilter = size;
    const buttons = document.querySelectorAll('.filter-tags .tag');
    buttons.forEach(b => b.classList.remove('active'));
    if (btnEl) btnEl.classList.add('active');
    renderGrid();
}

// ========== RENDERIZADO DE LA GRILLA (PRECIOS FIJOS NO MANIPULABLES) ==========
function renderGrid() {
    const grid = document.getElementById('productGrid');
    if (!grid) return;
    grid.innerHTML = '';

    const stripAccents = str => (str || '').normalize('NFD').replace(/[\u0300-\u036f]/g, '');
    const query = stripAccents(searchTerm.toLowerCase().trim());
    const queryNormalized = query.replace(/[\/\-\s]+/g, '');

    const filteredProducts = productosData.filter(p => {
        // Búsqueda integral: modelo, tamaño/medida, PR y descripción (sin importar acentos, barras o espacios)
        const searchableText = stripAccents(`${p.modelo} ${p.tamanos} ${p.pr} ${p.descripcion}`.toLowerCase());
        const searchableNormalized = searchableText.replace(/[\/\-\s]+/g, '');

        const matchesSearch = !query || 
            searchableText.includes(query) || 
            searchableNormalized.includes(queryNormalized);

        const matchesSize = sizeFilter === 'All' || p.tamanos === sizeFilter;
        return matchesSearch && matchesSize;
    });

    if (filteredProducts.length === 0) {
        grid.innerHTML = `
            <div style="grid-column: 1 / -1; text-align: center; padding: 50px 20px; color: var(--text-muted); font-size: 1.15rem; font-weight: 600;">
                🔍 No se encontraron llantas que coincidan con la búsqueda.
            </div>
        `;
    } else {
        filteredProducts.forEach((p) => {
            const precioActual = p.precioBase;
            const cantidadActual = cantidades[p.id] || 0;
            const totalItem = precioActual * cantidadActual;
            const badgePr = p.pr;
            const imgSrc = p.imagen;

            const card = document.createElement('div');
            card.className = 'card' + (cantidadActual > 0 ? ' selected' : '');
            card.id = 'card_' + p.id;
            card.innerHTML = `
                <div class="card-image" onclick="openLightbox('${imgSrc}', '${p.modelo} · ${p.tamanos}')">
                    ${badgePr ? `<span class="badge">${badgePr}</span>` : ''}
                    <img class="tire-img" src="${imgSrc}" alt="${p.modelo}" 
                         onerror="this.onerror=null; this.src='data:image/svg+xml;utf8,<svg xmlns=\\'http://www.w3.org/2000/svg\\' width=\\'200\\' height=\\'150\\' viewBox=\\'0 0 200 150\\'><rect fill=\\'%23131b2e\\' width=\\'200\\' height=\\'150\\'/><text fill=\\'%2364748b\\' x=\\'50%\\' y=\\'50%\\' text-anchor=\\'middle\\' font-family=\\'sans-serif\\' font-size=\\'14\\'>${p.modelo}</text></svg>'">
                    <span class="zoom-hint">🔍 Ampliar</span>
                </div>
                <div class="card-body">
                    <div class="card-title">${p.modelo}</div>
                    <div class="card-subtitle">${p.tamanos} ${badgePr ? '· ' + badgePr : ''}</div>
                    <div class="specs">
                        <span class="spec-item">📐 ${p.tamanos}</span>
                        ${badgePr ? `<span class="spec-item">🔘 ${badgePr}</span>` : ''}
                        <div class="desc-item">${p.descripcion}</div>
                    </div>
                    <div class="price-area">
                        <div class="price-unit-row">
                            <span class="price-unit-label">Precio Unitario</span>
                            <span class="price-unit-value">Bs ${precioActual.toLocaleString('es-BO', { minimumFractionDigits: 2, maximumFractionDigits: 2 })}</span>
                        </div>
                        <div class="qty-control">
                            <button class="btn-qty" type="button" onclick="adjustQty('${p.id}', -1)" title="Disminuir">−</button>
                            <div class="qty-display" id="qty_display_${p.id}">${cantidadActual}</div>
                            <button class="btn-qty" type="button" onclick="adjustQty('${p.id}', 1)" title="Aumentar">+</button>
                        </div>
                        <div class="item-total">
                            Total item: <span id="item_total_${p.id}">Bs ${totalItem.toLocaleString('es-BO', { minimumFractionDigits: 2, maximumFractionDigits: 2 })}</span>
                        </div>
                    </div>
                </div>
            `;
            grid.appendChild(card);
        });
    }

    recalcTotals();
}

// ========== ACTUALIZACIONES DE CANTIDAD ==========
function adjustQty(id, delta) {
    let actual = cantidades[id] || 0;
    let nuevo = Math.max(0, actual + delta);
    cantidades[id] = nuevo;

    const qtyEl = document.getElementById('qty_display_' + id);
    if (qtyEl) qtyEl.innerText = nuevo;

    const cardEl = document.getElementById('card_' + id);
    if (cardEl) {
        if (nuevo > 0) cardEl.classList.add('selected');
        else cardEl.classList.remove('selected');
    }

    recalcItem(id);
    recalcTotals();
}

function recalcItem(id) {
    const prod = productosData.find(p => p.id === id);
    const precio = prod ? prod.precioBase : 0;
    const qty = cantidades[id] || 0;
    const total = precio * qty;
    const el = document.getElementById('item_total_' + id);
    if (el) el.innerText = 'Bs ' + total.toLocaleString('es-BO', { minimumFractionDigits: 2, maximumFractionDigits: 2 });
}

function recalcTotals() {
    let totalUnidades = 0;
    let totalGeneral = 0;

    productosData.forEach(p => {
        const qty = cantidades[p.id] || 0;
        totalUnidades += qty;
        totalGeneral += (qty * p.precioBase);
    });

    document.getElementById('totalUnits').innerText = totalUnidades;
    document.getElementById('subtotal').innerText = 'Bs ' + totalGeneral.toLocaleString('es-BO', { minimumFractionDigits: 2, maximumFractionDigits: 2 });
    document.getElementById('grandTotal').innerText = 'Bs ' + totalGeneral.toLocaleString('es-BO', { minimumFractionDigits: 2, maximumFractionDigits: 2 });
}

function nuevaCotizacion() {
    initState();
    incrementCotizacionNumber();
    setDateAndNumber();
    renderGrid();
}

// ================================================================
//  CONSULTA DE STOCK Y PROFORMA POR WHATSAPP (100% EN BOB)
// ================================================================
// ================================================================
//  CONSULTA DE STOCK Y PROFORMA POR WHATSAPP (100% EN BOB)
// ================================================================
function abrirModalWhatsApp(event) {
    if (event) event.preventDefault();

    const seleccionados = productosData.filter(p => (cantidades[p.id] || 0) > 0);
    if (seleccionados.length === 0) {
        alert('⚠️ Selecciona al menos 1 producto con cantidad mayor a 0 (+ / −) para consultar disponibilidad de stock.');
        return;
    }

    // Prellenar datos si ya se guardaron previamente
    const savedEmpresa = localStorage.getItem('sunote_cliente_empresa') || '';
    const savedCelular = localStorage.getItem('sunote_cliente_celular') || '';
    const inputEmpresa = document.getElementById('waQuickEmpresa');
    const inputCelular = document.getElementById('waQuickCelular');
    if (inputEmpresa && !inputEmpresa.value) inputEmpresa.value = savedEmpresa;
    if (inputCelular && !inputCelular.value) inputCelular.value = savedCelular;

    const modal = document.getElementById('waModal');
    if (modal) {
        modal.classList.add('active');
        document.body.style.overflow = 'hidden';
    } else {
        enviarAWhatsApp('59170612393');
    }
}

function cerrarWaModal(event) {
    if (event && event.target && event.target.closest('.wa-modal-card') && !event.target.classList.contains('wa-modal-close')) {
        return;
    }
    const modal = document.getElementById('waModal');
    if (modal) {
        modal.classList.remove('active');
        document.body.style.overflow = '';
    }
}

function generarEnlaceProformaDigital(proformaData) {
    try {
        const compact = {
            d: proformaData.docNum,
            f: proformaData.fecha,
            t: proformaData.total,
            e: proformaData.clienteEmpresa || '',
            c: proformaData.clienteCelular || '',
            ci: proformaData.clienteCiudad || '',
            i: proformaData.items.map(it => ({
                m: it.modelo,
                s: it.tamanos,
                p: it.pr,
                d: it.descripcion || '',
                q: it.cantidad,
                u: it.precioUnitario,
                t: it.subtotal
            }))
        };
        const jsonStr = JSON.stringify(compact);
        const b64 = btoa(unescape(encodeURIComponent(jsonStr)));
        let base = 'https://sunote.vercel.app/proforma.html';
        if (window.location.protocol === 'http:' || window.location.protocol === 'https:') {
            const loc = window.location.href.split('?')[0];
            base = loc.replace(/\/[^\/]*$/, '/proforma.html');
        }
        return `${base}?d=${encodeURIComponent(b64)}`;
    } catch (e) {
        console.error('Error generando link proforma:', e);
        return 'https://sunote.vercel.app/proforma.html';
    }
}

function enviarAWhatsApp(telefono) {
    const seleccionados = productosData.filter(p => (cantidades[p.id] || 0) > 0);
    if (seleccionados.length === 0) {
        alert('⚠️ Selecciona al menos 1 producto con cantidad mayor a 0 (+ / −) antes de enviar.');
        cerrarWaModal();
        return;
    }

    // Obtener datos de empresa y celular
    const inputEmpresa = document.getElementById('waQuickEmpresa');
    const inputCelular = document.getElementById('waQuickCelular');
    let empresa = (inputEmpresa?.value || '').trim() || localStorage.getItem('sunote_cliente_empresa') || '';
    let celular = (inputCelular?.value || '').trim() || localStorage.getItem('sunote_cliente_celular') || '';

    if (!empresa || !celular) {
        alert('⚠️ Por favor escribe el nombre de tu empresa o nombre personal y tu número de celular para que el asesor pueda comunicarse contigo.');
        if (!empresa && inputEmpresa) inputEmpresa.focus();
        else if (!celular && inputCelular) inputCelular.focus();
        return;
    }

    localStorage.setItem('sunote_cliente_empresa', empresa);
    localStorage.setItem('sunote_cliente_celular', celular);
    const ciudad = localStorage.getItem('sunote_cliente_ciudad') || '';

    const docNum = document.getElementById('docNumber')?.innerText || 'COT-2026-001';
    const fecha = document.getElementById('currentDate')?.innerText || new Date().toLocaleDateString('es-ES');
    let total = 0;

    const items = seleccionados.map((p) => {
        const qty = cantidades[p.id];
        const precio = p.precioBase;
        const sub = qty * precio;
        total += sub;
        return {
            modelo: p.modelo,
            tamanos: p.tamanos,
            pr: p.pr,
            descripcion: p.descripcion,
            cantidad: qty,
            precioUnitario: precio,
            subtotal: sub
        };
    });

    const proformaData = {
        docNum: docNum,
        fecha: fecha,
        clienteEmpresa: empresa,
        clienteCelular: celular,
        clienteCiudad: ciudad,
        total: total,
        items: items,
        createdAt: Date.now()
    };

    localStorage.setItem('sunote_current_proforma', JSON.stringify(proformaData));
    const proformaUrl = generarEnlaceProformaDigital(proformaData);

    const validezTexto = calcularTextoValidezSabado(proformaData.createdAt);

    let mensaje = `*¡Hola! Quisiera consultar la disponibilidad de stock de la siguiente Proforma SUNOTE:*\n\n`;
    mensaje += `🏢 *EMPRESA / CLIENTE:* ${empresa}\n`;
    mensaje += `📱 *CELULAR DE CONTACTO:* ${celular}\n`;
    mensaje += `📋 *PROFORMA:* ${docNum}\n`;
    mensaje += `📅 *FECHA:* ${fecha}\n`;
    mensaje += `⏳ *VALIDEZ:* ${validezTexto} (retiro en tienda)\n\n`;
    mensaje += `📦 *DETALLE DE PRODUCTOS:*\n`;

    items.forEach((item) => {
        mensaje += `▪ *${item.cantidad}x ${item.modelo}* (${item.tamanos} · ${item.pr})\n`;
        mensaje += `   P. Unit: Bs ${Number(item.precioUnitario).toLocaleString('es-BO', { minimumFractionDigits: 2 })} | Subtotal: *Bs ${Number(item.subtotal).toLocaleString('es-BO', { minimumFractionDigits: 2 })}*\n`;
    });

    mensaje += `\n💰 *TOTAL ESTIMADO: Bs ${Number(total).toLocaleString('es-BO', { minimumFractionDigits: 2, maximumFractionDigits: 2 })}*\n\n`;
    mensaje += `📄 *Ver Proforma Oficial Membretada Online:*\n${proformaUrl}\n\n`;
    mensaje += `¿Tienen stock disponible? Quedo atento a su respuesta o llamada. ¡Muchas gracias!`;

    cerrarWaModal();
    const url = `https://wa.me/${telefono}?text=${encodeURIComponent(mensaje)}`;
    window.open(url, '_blank');
}

// Alias de compatibilidad
function enviarPedidoWhatsApp(event) {
    abrirModalWhatsApp(event);
}

// ========== LIGHTBOX ==========
function openLightbox(src, caption) {
    const lb = document.getElementById('lightbox');
    const img = document.getElementById('lightboxImg');
    const cap = document.getElementById('lightboxCaption');
    img.src = src;
    cap.innerText = caption;
    lb.classList.add('active');
    document.body.style.overflow = 'hidden';
}

function closeLightbox() {
    const lb = document.getElementById('lightbox');
    lb.classList.remove('active');
    document.body.style.overflow = '';
}

document.addEventListener('keydown', function (e) {
    if (e.key === 'Escape') {
        closeLightbox();
        cerrarWaModal();
        cerrarModalDatosProforma();
    }
});

// ================================================================
//  VER CATÁLOGO PROFESIONAL (DISEÑO EXACTO AL PDF - 100% EN BOB)
// ================================================================
function viewCatalog(event) {
    const cotizacionNum = document.getElementById('docNumber')?.innerText || 'COT-2026-001';
    localStorage.setItem('sunote_catalog_doc', cotizacionNum);
    // Si fue llamado sin evento (por ejemplo programáticamente), abrir directamente:
    if (!event) {
        const win = window.open('catalogo.html', '_blank');
        if (!win) {
            window.location.href = 'catalogo.html';
        }
    }
}

// ================================================================
//  MODAL DE CAPTURA DE DATOS DE EMPRESA Y CELULAR PARA PROFORMA
// ================================================================
function abrirModalDatosProforma() {
    const seleccionados = productosData.filter(p => (cantidades[p.id] || 0) > 0);
    if (seleccionados.length === 0) {
        alert('⚠️ Agrega al menos 1 producto con cantidad mayor a 0 (+ / −) para generar tu proforma.');
        return;
    }

    const modal = document.getElementById('proformaClientModal');
    if (!modal) {
        // Fallback si no está el modal en el DOM
        generarProforma();
        return;
    }

    // Prellenar con datos previamente guardados
    const inputEmpresa = document.getElementById('inputClienteEmpresa');
    const inputCelular = document.getElementById('inputClienteCelular');
    const inputCiudad = document.getElementById('inputClienteCiudad');

    if (inputEmpresa) inputEmpresa.value = localStorage.getItem('sunote_cliente_empresa') || '';
    if (inputCelular) inputCelular.value = localStorage.getItem('sunote_cliente_celular') || '';

    modal.classList.add('active');
    document.body.style.overflow = 'hidden';

    // Foco inteligente en el campo que falte
    setTimeout(() => {
        if (inputEmpresa && !inputEmpresa.value) {
            inputEmpresa.focus();
        } else if (inputCelular && !inputCelular.value) {
            inputCelular.focus();
        }
    }, 150);
}

function cerrarModalDatosProforma(event) {
    if (event && event.target && event.target.closest('.proforma-modal-card') && !event.target.classList.contains('proforma-modal-close')) {
        return;
    }
    const modal = document.getElementById('proformaClientModal');
    if (modal) {
        modal.classList.remove('active');
        document.body.style.overflow = '';
    }
}

function confirmarGenerarProforma(event) {
    if (event) event.preventDefault();

    const empresa = (document.getElementById('inputClienteEmpresa')?.value || '').trim();
    const celular = (document.getElementById('inputClienteCelular')?.value || '').trim();

    if (!empresa) {
        alert('⚠️ Por favor ingresa el nombre de tu empresa o nombre personal.');
        document.getElementById('inputClienteEmpresa')?.focus();
        return;
    }
    if (!celular) {
        alert('⚠️ Por favor ingresa tu número de celular para poder contactarte.');
        document.getElementById('inputClienteCelular')?.focus();
        return;
    }

    // Guardar para futuros usos
    localStorage.setItem('sunote_cliente_empresa', empresa);
    localStorage.setItem('sunote_cliente_celular', celular);

    cerrarModalDatosProforma();
    generarProformaConDatos(empresa, celular);
}

// ================================================================
//  GENERAR PROFORMA COMERCIAL FORMAL CON DATOS DEL CLIENTE
// ================================================================
function generarProformaConDatos(empresa, celular) {
    const seleccionados = productosData.filter(p => (cantidades[p.id] || 0) > 0);
    if (seleccionados.length === 0) {
        alert('⚠️ Agrega al menos 1 producto con cantidad mayor a 0 (+ / −) para generar la proforma.');
        return;
    }

    const docNum = document.getElementById('docNumber')?.innerText || 'COT-2026-001';
    const fecha = document.getElementById('currentDate')?.innerText || new Date().toLocaleDateString('es-ES');
    let total = 0;
    const items = seleccionados.map(p => {
        const qty = cantidades[p.id];
        const precio = p.precioBase;
        const sub = qty * precio;
        total += sub;
        return {
            modelo: p.modelo,
            tamanos: p.tamanos,
            pr: p.pr,
            descripcion: p.descripcion,
            cantidad: qty,
            precioUnitario: precio,
            subtotal: sub
        };
    });

    const proformaData = {
        docNum: docNum,
        fecha: fecha,
        clienteEmpresa: empresa || 'Empresa / Cliente Particular',
        clienteCelular: celular || '',
        total: total,
        items: items,
        createdAt: Date.now()
    };

    localStorage.setItem('sunote_current_proforma', JSON.stringify(proformaData));
    const compactParam = encodeURIComponent(btoa(unescape(encodeURIComponent(JSON.stringify({
        d: proformaData.docNum,
        f: proformaData.fecha,
        t: proformaData.total,
        e: proformaData.clienteEmpresa || '',
        c: proformaData.clienteCelular || '',
        i: (proformaData.items || []).map(it => ({
            m: it.modelo, s: it.tamanos, p: it.pr, d: it.descripcion || '', q: it.cantidad, u: it.precioUnitario, t: it.subtotal
        }))
    })))));
    const openUrl = `proforma.html?d=${compactParam}`;
    const win = window.open(openUrl, '_blank');
    if (!win) {
        window.location.href = openUrl;
    }
}

function calcularTextoValidezSabado(timestamp) {
    const d = timestamp ? new Date(timestamp) : new Date();
    const dia = d.getDay(); // 0 Dom, 1 Lun, ..., 6 Sab
    const diasHastaSabado = (6 - dia + 7) % 7;
    const sab = new Date(d);
    sab.setDate(d.getDate() + diasHastaSabado);
    const meses = ['enero', 'febrero', 'marzo', 'abril', 'mayo', 'junio', 'julio', 'agosto', 'septiembre', 'octubre', 'noviembre', 'diciembre'];
    const textoSab = `${sab.getDate()} de ${meses[sab.getMonth()]}`;
    if (diasHastaSabado === 0) {
        return `Válida únicamente por hoy sábado (${textoSab})`;
    } else {
        return `Válida hasta el sábado (${textoSab})`;
    }
}

// Función legacy/directa
function generarProforma() {
    abrirModalDatosProforma();
}

// ========== INICIALIZACIÓN INMEDIATA ==========
document.addEventListener('DOMContentLoaded', function () {
    setDateAndNumber();
    renderGrid();
    fetchLiveDollarRate(); // Consulta automática diaria
});

