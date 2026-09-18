// ================================================================
//  CONFIGURACIÓN Y DATOS DE PRODUCTOS (PRECIOS FIJOS EN BOLIVIANOS)
// ================================================================
const LOGO_URL = 'img/sunote.png';

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

    const filteredProducts = productosData.filter(p => {
        const matchesSearch = p.modelo.toLowerCase().includes(searchTerm.toLowerCase()) ||
            p.descripcion.toLowerCase().includes(searchTerm.toLowerCase());
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

// ========== WHATSAPP ORDER (100% EN BOB) ==========
function enviarPedidoWhatsApp(event) {
    if (event) event.preventDefault();

    const seleccionados = productosData.filter(p => (cantidades[p.id] || 0) > 0);
    if (seleccionados.length === 0) {
        alert('⚠️ No tienes productos seleccionados. Ajusta las cantidades (+ / −) antes de enviar.');
        return;
    }

    const docNumber = document.getElementById('docNumber').innerText;
    let mensaje = `*COTIZACIÓN SUNOTE LLANTAS - ${docNumber}*\n\n`;
    let total = 0;

    seleccionados.forEach(p => {
        const qty = cantidades[p.id];
        const precio = p.precioBase;
        const sub = qty * precio;
        total += sub;
        mensaje += `▪ *${p.modelo}* (${p.tamanos} ${p.pr})\n  ${qty} un. x Bs ${precio.toLocaleString('es-BO', { minimumFractionDigits: 2 })} = *Bs ${sub.toLocaleString('es-BO', { minimumFractionDigits: 2 })}*\n`;
    });

    mensaje += `\n💰 *TOTAL GENERAL: Bs ${total.toLocaleString('es-BO', { minimumFractionDigits: 2 })}*\n`;
    mensaje += `\n_Solicito confirmación de stock y entrega._`;

    const url = `https://wa.me/59170612393?text=${encodeURIComponent(mensaje)}`;
    window.open(url, '_blank');
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
    if (e.key === 'Escape') closeLightbox();
});

// ================================================================
//  VER CATÁLOGO PROFESIONAL (DISEÑO EXACTO AL PDF - 100% EN BOB)
// ================================================================
function viewCatalog() {
    const cotizacionNum = document.getElementById('docNumber').innerText;
    const today = new Date();
    const dateStr = today.toLocaleDateString('es-ES', { day: 'numeric', month: 'long', year: 'numeric' });

    const win = window.open('', '_blank');
    if (!win) {
        alert('⚠️ Por favor permite las ventanas emergentes (popups) en tu navegador para ver el catálogo.');
        return;
    }

    let cardsHtml = '';
    productosData.forEach(p => {
        const precio = p.precioBase;
        const imgSrc = p.imagen;
        const badgePr = p.pr;

        cardsHtml += `
            <div class="cat-card" onclick="openCatLightbox('${imgSrc}', '${p.modelo} · ${p.tamanos}')">
                ${badgePr ? `<span class="badge-cat">${badgePr}</span>` : ''}
                <div class="img-container">
                    <img src="${imgSrc}" alt="${p.modelo}" onerror="this.onerror=null; this.src='data:image/svg+xml;utf8,<svg xmlns=\\'http://www.w3.org/2000/svg\\' width=\\'200\\' height=\\'140\\'><rect fill=\\'%23f8fafc\\' width=\\'200\\' height=\\'140\\'/><text fill=\\'%2394a3b8\\' x=\\'50%\\' y=\\'50%\\' text-anchor=\\'middle\\'>${p.modelo}</text></svg>'">
                </div>
                <div class="model">${p.modelo}</div>
                <div class="spec">${p.tamanos} · ${badgePr}</div>
                <div class="desc">${p.descripcion}</div>
                <div class="price">Bs ${precio.toFixed(2)}</div>
            </div>
        `;
    });

    const html = `
        <!DOCTYPE html>
        <html lang="es">
        <head>
            <meta charset="UTF-8">
            <title>Catálogo de Llantas SUNOTE</title>
            <style>
                @import url('https://fonts.googleapis.com/css2?family=Outfit:wght@300;400;500;600;700;800;900&family=Plus+Jakarta+Sans:wght@400;500;600;700&display=swap');
                * { box-sizing: border-box; }
                body { font-family: 'Plus Jakarta Sans', -apple-system, sans-serif; padding: 40px 20px; background: #f8fafc; margin: 0; color: #0f172a; }
                .catalog-wrapper { max-width: 1200px; margin: 0 auto; background: white; border-radius: 24px; box-shadow: 0 10px 40px rgba(0,0,0,0.06); padding: 45px; border: 1px solid #e2e8f0; }
                
                /* Header Grid */
                .header-grid { display: grid; grid-template-columns: 2fr 1fr; gap: 30px; align-items: start; border-bottom: 2px solid #0f172a; padding-bottom: 26px; margin-bottom: 35px; }
                .company-info .logo { max-height: 58px; margin-bottom: 12px; }
                .company-info h1 { font-family: 'Outfit', sans-serif; font-size: 2.3rem; color: #0f172a; margin: 0; font-weight: 900; letter-spacing: -0.5px; }
                .company-info h1 small { color: #64748b; font-size: 1.05rem; font-weight: 700; letter-spacing: 2px; display: block; margin-top: 4px; }
                .doc-meta { margin-top: 14px; font-size: 0.95rem; color: #334155; line-height: 1.6; }
                .doc-meta strong { color: #0f172a; }
                
                .catalog-contact { display: flex; gap: 10px; margin-top: 10px; flex-wrap: wrap; }
                .catalog-contact a { display: inline-flex; align-items: center; gap: 6px; padding: 6px 14px; background: #ecfdf5; color: #047857; border: 1px solid #a7f3d0; border-radius: 20px; text-decoration: none; font-weight: 700; font-size: 0.85rem; transition: all 0.2s; }
                .catalog-contact a:hover { background: #10b981; color: white; transform: translateY(-1px); }
                
                .qr-card { background: #f8fafc; border: 1px solid #e2e8f0; border-radius: 18px; padding: 18px; text-align: center; display: flex; flex-direction: column; align-items: center; justify-content: center; box-shadow: 0 4px 15px rgba(0,0,0,0.03); }
                .qr-card img { width: 120px; height: 120px; border-radius: 10px; margin-bottom: 10px; border: 1px solid #e2e8f0; }
                .qr-card span { font-size: 0.8rem; font-weight: 800; color: #0f172a; letter-spacing: 1px; text-transform: uppercase; }
                .qr-card a { font-size: 0.82rem; color: #0284c7; text-decoration: none; margin-top: 4px; font-weight: 600; }
                .qr-card a:hover { text-decoration: underline; }
                
                /* Catalog Cards Grid (4 columnas en desktop) */
                .catalog-grid { display: grid; grid-template-columns: repeat(4, 1fr); gap: 24px; }
                
                .cat-card { background: white; border: 1px solid #e2e8f0; border-radius: 18px; padding: 20px; display: flex; flex-direction: column; text-align: center; position: relative; box-shadow: 0 6px 20px rgba(0,0,0,0.04); transition: transform 0.3s cubic-bezier(0.34, 1.56, 0.64, 1), box-shadow 0.3s ease, border-color 0.3s ease; cursor: pointer; }
                .cat-card:hover { transform: translateY(-6px) scale(1.02); box-shadow: 0 15px 35px rgba(2, 132, 199, 0.15); border-color: #0284c7; }
                
                .img-container { background: #f8fafc; border-radius: 14px; padding: 14px; height: 160px; display: flex; align-items: center; justify-content: center; margin-bottom: 16px; border: 1px solid #f1f5f9; transition: transform 0.3s ease; }
                .cat-card:hover .img-container { background: #f0f9ff; }
                .cat-card img { max-width: 100%; max-height: 140px; object-fit: contain; transition: transform 0.3s cubic-bezier(0.34, 1.56, 0.64, 1); filter: drop-shadow(0 4px 8px rgba(0,0,0,0.15)); }
                .cat-card:hover img { transform: scale(1.1); }
                
                .cat-card .model { font-family: 'Outfit', sans-serif; font-size: 1.5rem; font-weight: 800; color: #0f172a; margin-bottom: 4px; }
                .cat-card .spec { color: #64748b; font-size: 0.9rem; margin: 3px 0; font-weight: 600; }
                .cat-card .desc { color: #475569; font-size: 0.84rem; line-height: 1.4; margin-top: 8px; flex-grow: 1; }
                .cat-card .price { font-family: 'Outfit', sans-serif; font-size: 1.35rem; font-weight: 800; color: #d97706; margin-top: 14px; border-top: 1px solid #f1f5f9; padding-top: 12px; }
                
                .badge-cat { position: absolute; top: 12px; left: 12px; background: #0f172a; color: white; padding: 4px 12px; border-radius: 20px; font-size: 0.72rem; font-weight: 800; letter-spacing: 0.5px; }
                
                .footer { margin-top: 40px; text-align: center; color: #64748b; font-size: 0.88rem; border-top: 1px solid #e2e8f0; padding-top: 24px; font-weight: 600; }
                .print-btn { text-align: center; margin-top: 30px; }
                .print-btn button { padding: 14px 40px; background: #0f172a; color: white; border: none; border-radius: 30px; font-family: 'Outfit', sans-serif; font-size: 1.05rem; font-weight: 800; cursor: pointer; transition: all 0.25s ease; box-shadow: 0 6px 18px rgba(15,23,42,0.2); }
                .print-btn button:hover { background: #0284c7; transform: translateY(-2px); box-shadow: 0 8px 24px rgba(2,132,199,0.35); }
                .print-hint { text-align: center; font-size: 0.85rem; color: #64748b; margin-top: 8px; }
                
                /* Lightbox */
                .cat-lightbox { display: none; position: fixed; z-index: 9999; top:0; left:0; width:100%; height:100%; background: rgba(15,23,42,0.9); backdrop-filter: blur(8px); justify-content: center; align-items: center; padding:20px; opacity:0; transition: opacity 0.3s ease; }
                .cat-lightbox.active { display: flex; opacity: 1; }
                .cat-lightbox-content { max-width:90vw; max-height:85vh; background:white; border-radius:20px; padding:20px; box-shadow:0 30px 60px rgba(0,0,0,0.4); position:relative; transform:scale(0.9); transition: transform 0.3s cubic-bezier(0.175, 0.885, 0.32, 1.275); text-align: center; }
                .cat-lightbox.active .cat-lightbox-content { transform:scale(1); }
                .cat-lightbox-content img { max-width:100%; max-height:70vh; display:block; border-radius:12px; object-fit: contain; margin: 0 auto 12px auto; }
                .cat-lightbox-caption { font-family: 'Outfit', sans-serif; font-size: 1.3rem; font-weight: 800; color: #0f172a; }
                .cat-lightbox-close { position:absolute; top:-12px; right:-12px; background:#ef4444; color:white; border:none; width:38px; height:38px; border-radius:50%; font-size:1.3rem; font-weight:bold; cursor:pointer; display:flex; align-items:center; justify-content:center; box-shadow: 0 4px 12px rgba(0,0,0,0.2); }
                .cat-lightbox-close:hover { transform:scale(1.1); background:#dc2626; }
                
                @media print {
                    body { padding: 0; background: white; }
                    .catalog-wrapper { box-shadow: none; padding: 0; border: none; }
                    .print-btn, .print-hint { display: none !important; }
                    .catalog-grid { gap: 18px; grid-template-columns: repeat(2, 1fr); }
                    .cat-card { break-inside: avoid; border: 1px solid #cbd5e1 !important; box-shadow: none !important; border-radius: 14px; page-break-inside: avoid; }
                    .cat-card:hover { transform: none; }
                    .qr-card { background: white !important; border: 1px solid #cbd5e1 !important; }
                }
                @media (max-width: 1024px) {
                    .catalog-grid { grid-template-columns: repeat(3, 1fr); }
                }
                @media (max-width: 768px) {
                    .header-grid { grid-template-columns: 1fr; gap: 20px; }
                    .qr-card { width: 100%; max-width: 260px; margin: 0 auto; }
                    .catalog-grid { grid-template-columns: repeat(2, 1fr); gap: 16px; }
                    .catalog-wrapper { padding: 22px; }
                }
                @media (max-width: 480px) {
                    .catalog-grid { grid-template-columns: 1fr; }
                }
            </style>
        </head>
        <body>
            <div class="catalog-wrapper">
                <div class="header-grid">
                    <div class="company-info">
                        <img class="logo" src="${LOGO_URL}" alt="Logo SUNOTE" onerror="this.style.display='none'">
                        <h1>SUNOTE <small>CATÁLOGO DE LLANTAS</small></h1>
                        <div class="doc-meta">
                            <strong>Documento Comercial N° ${cotizacionNum}</strong><br>
                            Fecha de generación: ${dateStr}<br>
                            Precios de referencia expresados exclusivamente en Bolivianos (BOB)<br>
                            Contacto Comercial:
                            <div class="catalog-contact">
                                <a href="https://wa.me/59170612393?text=Hola%2C%20vi%20su%20catálogo%20SUNOTE" target="_blank">📱 (+591) 70612393</a>
                                <a href="https://wa.me/59165653396?text=Hola%2C%20vi%20su%20catálogo%20SUNOTE" target="_blank">📱 (+591) 65653396</a>
                            </div>
                        </div>
                    </div>
                    <div class="qr-card">
                        <img src="img/qr-ubicacion.png" alt="Código QR Ubicación" onerror="this.src='https://api.qrserver.com/v1/create-qr-code/?size=150x150&data=https%3A%2F%2Fmaps.app.goo.gl%2FtoY3XgeCw8wYBZ199'">
                        <span>Nuestra Ubicación</span>
                        <a href="https://maps.app.goo.gl/toY3XgeCw8wYBZ199" target="_blank">Ver en Google Maps</a>
                    </div>
                </div>

                <div class="catalog-grid">
                    ${cardsHtml}
                </div>
                
                <div class="footer">
                    * Precios en Bolivianos (BOB) · Sujeto a disponibilidad de stock · Ref. Bancaria BCB (www.bcb.gob.bo).
                </div>

                <div class="print-btn">
                    <button onclick="window.print()">🖨️ Imprimir / Guardar PDF</button>
                </div>
                <div class="print-hint">💡 Para guardar como PDF, selecciona 'Guardar como PDF' en el diálogo de impresión.</div>
            </div>

            <!-- Lightbox Modal del Catálogo -->
            <div class="cat-lightbox" id="catLightbox" onclick="closeCatLightbox(event)">
                <div class="cat-lightbox-content" onclick="event.stopPropagation();">
                    <button class="cat-lightbox-close" onclick="closeCatLightbox()">✕</button>
                    <img id="catLightboxImg" src="" alt="Vista ampliada">
                    <div class="cat-lightbox-caption" id="catLightboxCaption"></div>
                </div>
            </div>

            <script>
                function openCatLightbox(src, caption) {
                    const lb = document.getElementById('catLightbox');
                    const img = document.getElementById('catLightboxImg');
                    const cap = document.getElementById('catLightboxCaption');
                    img.src = src;
                    cap.innerText = caption;
                    lb.classList.add('active');
                    document.body.style.overflow = 'hidden';
                }
                function closeCatLightbox() {
                    const lb = document.getElementById('catLightbox');
                    lb.classList.remove('active');
                    document.body.style.overflow = '';
                }
                document.addEventListener('keydown', function (e) {
                    if (e.key === 'Escape') closeCatLightbox();
                });
            <\/script>
        </body>
        </html>
    `;

    win.document.write(html);
    win.document.close();
    win.focus();
}

// ================================================================
//  GENERAR PROFORMA COMERCIAL FORMAL (100% EN BOB)
// ================================================================
function generarProforma() {
    const seleccionados = productosData.filter(p => (cantidades[p.id] || 0) > 0);
    if (seleccionados.length === 0) {
        alert('⚠️ Agrega al menos 1 producto con cantidad mayor a 0 (+ / −) para generar la proforma.');
        return;
    }

    const docNum = document.getElementById('docNumber').innerText;
    const fecha = document.getElementById('currentDate').innerText;
    let total = 0;
    let rowsHtml = '';

    seleccionados.forEach((p, idx) => {
        const qty = cantidades[p.id];
        const precio = p.precioBase;
        const sub = qty * precio;
        total += sub;
        rowsHtml += `
            <tr>
                <td style="text-align:center; font-weight:bold;">${idx + 1}</td>
                <td>
                    <strong style="font-size:1.05rem; color:#0f172a;">${p.modelo}</strong> (${p.tamanos} · ${p.pr})
                    <div style="color:#64748b; font-size:0.85rem; margin-top:2px;">${p.descripcion}</div>
                </td>
                <td style="text-align:center; font-weight:bold; font-size:1rem;">${qty}</td>
                <td style="text-align:right;">Bs ${precio.toLocaleString('es-BO', { minimumFractionDigits: 2 })}</td>
                <td style="text-align:right; font-weight:800; color:#0f172a;">Bs ${sub.toLocaleString('es-BO', { minimumFractionDigits: 2 })}</td>
            </tr>
        `;
    });

    const win = window.open('', '_blank');
    if (!win) {
        alert('⚠️ Por favor permite las ventanas emergentes (popups) en tu navegador para ver la proforma.');
        return;
    }

    win.document.write(`
        <!DOCTYPE html>
        <html lang="es">
        <head>
            <meta charset="UTF-8">
            <title>Proforma Comercial - ${docNum}</title>
            <style>
                @import url('https://fonts.googleapis.com/css2?family=Outfit:wght@400;600;700;800;900&family=Plus+Jakarta+Sans:wght@400;500;600;700&display=swap');
                * { box-sizing: border-box; }
                body { font-family: 'Plus Jakarta Sans', sans-serif; padding: 40px 20px; color: #0f172a; background: #f8fafc; margin: 0; }
                .paper { max-width: 900px; margin: 0 auto; background: white; padding: 45px; border-radius: 20px; box-shadow: 0 10px 40px rgba(0,0,0,0.08); border: 1px solid #e2e8f0; }
                .header { display: flex; justify-content: space-between; align-items: start; border-bottom: 2px solid #0f172a; padding-bottom: 24px; margin-bottom: 28px; }
                .logo-box h1 { font-family: 'Outfit', sans-serif; margin: 0; font-size: 2.2rem; font-weight: 900; }
                .logo-box small { color: #0284c7; letter-spacing: 2px; font-weight: 800; display: block; }
                table { width: 100%; border-collapse: collapse; margin-top: 24px; }
                th, td { padding: 14px 16px; border-bottom: 1px solid #e2e8f0; font-size: 0.95rem; }
                th { background: #f1f5f9; font-weight: 800; text-align: left; color: #0f172a; font-family: 'Outfit', sans-serif; }
                .total-box { text-align: right; margin-top: 28px; font-family: 'Outfit', sans-serif; font-size: 1.45rem; font-weight: 900; color: #0284c7; background: #f0f9ff; padding: 16px 20px; border-radius: 12px; border: 1px solid #bae6fd; }
                .btn-print { background: #0f172a; color: white; border: none; padding: 12px 32px; border-radius: 30px; font-family: 'Outfit', sans-serif; font-weight: 800; cursor: pointer; margin-bottom: 24px; transition: all 0.2s; box-shadow: 0 4px 15px rgba(0,0,0,0.15); }
                .btn-print:hover { background: #0284c7; transform: translateY(-1px); }
                @media print { .btn-print { display: none !important; } body { padding: 0; background: white; } .paper { box-shadow: none; padding: 0; border: none; } }
            </style>
        </head>
        <body>
            <div class="paper">
                <button class="btn-print" onclick="window.print()">🖨️ Imprimir / Guardar Proforma PDF</button>
                <div class="header">
                    <div class="logo-box">
                        <h1>SUNOTE <small>LLANTAS</small></h1>
                        <p style="margin: 6px 0 0 0; color: #64748b; font-size: 0.9rem;">Garantía y Rendimiento Superior · Bolivia</p>
                    </div>
                    <div style="text-align: right;">
                        <h3 style="margin: 0; color: #0284c7; font-family: 'Outfit', sans-serif; font-size: 1.3rem;">PROFORMA COMERCIAL</h3>
                        <p style="margin: 4px 0 0 0; font-size: 0.95rem;"><strong>N°:</strong> ${docNum}</p>
                        <p style="margin: 2px 0 0 0; font-size: 0.95rem;"><strong>Fecha:</strong> ${fecha}</p>
                    </div>
                </div>
                <table>
                    <thead>
                        <tr>
                            <th style="width:50px; text-align:center;">#</th>
                            <th>Detalle de Llanta</th>
                            <th style="text-align:center; width:90px;">Cant.</th>
                            <th style="text-align:right; width:130px;">P. Unit</th>
                            <th style="text-align:right; width:140px;">Subtotal</th>
                        </tr>
                    </thead>
                    <tbody>
                        ${rowsHtml}
                    </tbody>
                </table>
                <div class="total-box">
                    TOTAL GENERAL: Bs ${total.toLocaleString('es-BO', { minimumFractionDigits: 2, maximumFractionDigits: 2 })}
                </div>
                <div style="margin-top: 35px; padding: 18px; background: #f8fafc; border: 1px solid #e2e8f0; border-radius: 12px; font-size: 0.88rem; color: #475569; line-height: 1.6;">
                    ▪ Precios expresados en Bolivianos (BOB) con entrega inmediata.<br>
                    ▪ Proforma válida por 15 días calendario.<br>
                    ▪ Contacto Comercial: (+591) 70612393 / (+591) 65653396.
                </div>
            </div>
        </body>
        </html>
    `);
    win.document.close();
}

// ========== INICIALIZACIÓN INMEDIATA ==========
document.addEventListener('DOMContentLoaded', function () {
    setDateAndNumber();
    renderGrid();
    fetchLiveDollarRate(); // Consulta automática diaria
});
