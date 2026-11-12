const infractionsData = [
    {
        id: "art76",
        art: "Art. 76",
        title: "Ausência de Projeto e/ou Alvará no Local da Obra",
        desc: "Pela ausência, no local da obra, do projeto arquitetônico e do projeto simplificado aprovado e/ou do alvará.",
        autoText: "não manter no local da obra o projeto arquitetônico, o projeto simplificado aprovado e/ou o alvará de licença",
        type: "Multa",
        calcType: "fixed",
        vprtm: 500,
        descValue: "500 VPRTM"
    },
    {
        id: "art74_res",
        art: "Art. 74, I, 'a'",
        title: "Construção Sem Licença - Residencial",
        desc: "Construir edificação residencial sem aprovação do projeto simplificado e sem a devida licença de construção.",
        autoText: "executar construção de edificação residencial sem a aprovação do projeto simplificado e sem o devido Alvará de Licença para Construção",
        type: "Multa / Embargo",
        calcType: "area",
        vprtm: 3.5,
        unit: "m²",
        descValue: "3,5 VPRTM / metro quadrado"
    },
    {
        id: "art74_inst",
        art: "Art. 74, I, 'b'",
        title: "Construção Sem Licença - Institucional",
        desc: "Construir edificação institucional sem aprovação do projeto simplificado e sem a devida licença de construção.",
        autoText: "executar construção de edificação institucional sem a aprovação do projeto simplificado e sem o devido Alvará de Licença para Construção",
        type: "Multa / Embargo",
        calcType: "area",
        vprtm: 3.5,
        unit: "m²",
        descValue: "3,5 VPRTM / metro quadrado"
    },
    {
        id: "art74_mix",
        art: "Art. 74, I, 'c'",
        title: "Construção Sem Licença - Mista, Comercial e/ou de Serviço",
        desc: "Construir edificação mista, comercial e/ou de serviço sem aprovação do projeto simplificado e sem licença.",
        autoText: "executar construção de edificação mista, comercial e/ou de serviço sem a aprovação do projeto simplificado e sem o devido Alvará de Licença para Construção",
        type: "Multa / Embargo",
        calcType: "area",
        vprtm: 4.0,
        unit: "m²",
        descValue: "4,0 VPRTM / metro quadrado"
    },
    {
        id: "art74_ind",
        art: "Art. 74, I, 'd'",
        title: "Construção Sem Licença - Industrial",
        desc: "Construir edificação industrial sem aprovação do projeto simplificado e sem a devida licença de construção.",
        autoText: "executar construção de edificação industrial sem a aprovação do projeto simplificado e sem o devido Alvará de Licença para Construção",
        type: "Multa / Embargo",
        calcType: "area",
        vprtm: 5.0,
        unit: "m²",
        descValue: "5,0 VPRTM / metro quadrado"
    },
    {
        id: "art74_muro",
        art: "Art. 74, I, 'e'",
        title: "Construção de Muros Sem Licença",
        desc: "Executar construção de muros sem a devida licença municipal.",
        autoText: "executar construção de muro sem a devida licença municipal",
        type: "Multa / Embargo",
        calcType: "linear",
        vprtm: 3.0,
        unit: "m linear",
        descValue: "3,0 VPRTM / metro linear"
    },
    {
        id: "art75",
        art: "Art. 75",
        title: "Obra em Desacordo com o Projeto Aprovado",
        desc: "Execução de obras em desacordo com as especificações do projeto aprovado.",
        autoText: "executar obra em desacordo com o projeto aprovado pelo Município",
        type: "Multa / Embargo",
        calcType: "fixed",
        vprtm: 1000,
        descValue: "1.000 VPRTM"
    },
    {
        id: "art77_res",
        art: "Art. 77, I, 'a'",
        title: "Ocupação Sem Habite-se - Residencial",
        desc: "Ocupação de imóvel residencial sem a emissão prévia do Certificado de Conclusão da Obra.",
        autoText: "ocupar imóvel residencial sem a emissão prévia do Certificado de Conclusão de Obra (Habite-se)",
        type: "Multa",
        calcType: "area",
        vprtm: 3.5,
        unit: "m²",
        descValue: "3,5 VPRTM / metro quadrado"
    },
    {
        id: "art77_inst",
        art: "Art. 77, I, 'b'",
        title: "Ocupação Sem Habite-se - Institucional",
        desc: "Ocupação de imóvel institucional sem a emissão prévia do Certificado de Conclusão da Obra.",
        autoText: "ocupar imóvel institucional sem a emissão prévia do Certificado de Conclusão de Obra (Habite-se)",
        type: "Multa",
        calcType: "area",
        vprtm: 3.5,
        unit: "m²",
        descValue: "3,5 VPRTM / metro quadrado"
    },
    {
        id: "art77_mix",
        art: "Art. 77, I, 'c'",
        title: "Ocupação Sem Habite-se - Mista, Comercial e/ou de Serviço",
        desc: "Ocupação de edificação mista, comercial e/ou de serviço sem a emissão prévia do Certificado de Conclusão.",
        autoText: "ocupar edificação mista, comercial e/ou de serviço sem a emissão prévia do Certificado de Conclusão de Obra (Habite-se)",
        type: "Multa",
        calcType: "area",
        vprtm: 4.0,
        unit: "m²",
        descValue: "4,0 VPRTM / metro quadrado"
    },
    {
        id: "art77_ind",
        art: "Art. 77, I, 'd'",
        title: "Ocupação Sem Habite-se - Industrial",
        desc: "Ocupação de edificação industrial sem a emissão prévia do Certificado de Conclusão da Obra.",
        autoText: "ocupar edificação industrial sem a emissão prévia do Certificado de Conclusão de Obra (Habite-se)",
        type: "Multa",
        calcType: "area",
        vprtm: 5.0,
        unit: "m²",
        descValue: "5,0 VPRTM / metro quadrado"
    },
    {
        id: "art78",
        art: "Art. 78",
        title: "Inobservância sobre Tapumes e Andaimes",
        desc: "Inobservância das prescrições legais sobre instalação, conservação e recuo de tapumes e andaimes.",
        autoText: "inobservar as prescrições legais referentes à instalação e manutenção de tapumes e andaimes",
        type: "Multa",
        calcType: "fixed",
        vprtm: 500,
        descValue: "500 VPRTM"
    },
    {
        id: "art79",
        art: "Art. 79, Caput",
        title: "Desobediência ao Embargo ou Interdição",
        desc: "Desobedecer ordem administrativa de embargo ou interdição da obra.",
        autoText: "desobedecer ao Termo de Embargo e/ou Interdição da obra",
        type: "Multa / Interdição",
        calcType: "fixed",
        vprtm: 1000,
        descValue: "1.000 VPRTM"
    },
    {
        id: "art79_par",
        art: "Art. 79, Parágrafo Único",
        title: "Desrespeito à Interdição (Multa Diária Adicional)",
        desc: "Nos casos de desrespeito à interdição, além do valor do caput (1.000 VPRTM), cobra-se adicional de 250 VPRTM por dia.",
        autoText: "desrespeitar a ordem de Interdição da obra (incidência de multa diária adicional)",
        type: "Multa / Interdição",
        calcType: "daily_only",
        vprtm: 0,
        dailyRate: 250,
        unit: "dias",
        descValue: "250 VPRTM por dia de desrespeito"
    },
    {
        id: "art80",
        art: "Art. 80",
        title: "Demolição Sem Licença Municipal",
        desc: "Execução de demolições totais ou parciais sem a prévia licença municipal.",
        autoText: "executar demolição de obra/edificação sem o devido Alvará de Licença para Demolição",
        type: "Multa",
        calcType: "area_or_fixed",
        vprtm: 5,
        unit: "m²",
        descValue: "5 VPRTM / m² (ou 500 VPRTM se inviável aferir a área)"
    },
    {
        id: "art81",
        art: "Art. 81",
        title: "Falta de Plataformas de Segurança e Telas de Proteção",
        desc: "Desatendimento à instalação obrigatória de plataformas de segurança e telas de proteção.",
        autoText: "deixar de instalar plataformas de segurança e/ou telas de proteção obrigatórias na obra",
        type: "Multa",
        calcType: "fixed",
        vprtm: 300,
        descValue: "300 VPRTM"
    },
    {
        id: "art82",
        art: "Art. 82 (LC 116/2024)",
        title: "Abertura/Escavação de Área Pública Sem Licença ou Falha na Recomposição",
        desc: "Abertura ou escavação de áreas públicas para obras de infraestrutura sem licença ou sem recomposição adequada em 48h.",
        autoText: "executar abertura/escavação de área pública sem a devida licença e/ou deixar de recompor a pavimentação no prazo e qualidade exigidos",
        type: "Multa / Interdição",
        calcType: "area_daily",
        vprtm: 1000,
        dailyRate: 250,
        unit: "m²",
        descValue: "1.000 VPRTM / m² + 250 VPRTM/dia de descumprimento"
    },
    {
        id: "art83",
        art: "Art. 83",
        title: "Montagem de Elevadores sem Licença",
        desc: "Montar equipamento de elevação (elevadores) sem a devida licença municipal.",
        autoText: "efetuar a montagem de elevadores sem a devida licença municipal",
        type: "Multa",
        calcType: "fixed",
        vprtm: 150,
        descValue: "150 VPRTM"
    },
    {
        id: "art84",
        art: "Art. 84",
        title: "Funcionamento de Elevadores sem Licença",
        desc: "Colocar em funcionamento elevadores sem licença, sujeito a interdição do equipamento e multa diária.",
        autoText: "manter em funcionamento elevador sem a devida licença municipal",
        type: "Multa / Interdição",
        calcType: "daily_fixed",
        vprtm: 200,
        dailyRate: 50,
        unit: "dias",
        descValue: "200 VPRTM + 50 VPRTM por dia de desrespeito à interdição"
    },
    {
        id: "art85",
        art: "Art. 85 a 90",
        title: "Embargo Administrativo da Obra",
        desc: "As obras em execução, paralisadas ou concluídas serão embargadas mediante Auto de Infração quando executadas sem licença do Município ou em desacordo com o projeto aprovado.",
        autoText: "executar obra sem licença ou em desacordo com o projeto aprovado (Sanção de Embargo)",
        type: "Embargo",
        calcType: "none",
        vprtm: 0,
        descValue: "Paralisação imediata da obra e afixação de aviso informativo"
    },
    {
        id: "art91",
        art: "Art. 91 e 92",
        title: "Interdição da Obra ou Edificação",
        desc: "Emitida imediatamente quando verificada situação de risco ou ameaça à segurança de pessoas ou bens (públicos ou privados), bem como nos casos de descumprimento de embargo.",
        autoText: "apresentar situação de risco à segurança ou descumprimento de embargo (Sanção de Interdição)",
        type: "Interdição",
        calcType: "none",
        vprtm: 0,
        descValue: "Proibição de acesso ao local e desocupação compulsória se houver risco"
    },
    {
        id: "art93",
        art: "Art. 93 a 95",
        title: "Demolição de Construção Não Passível de Regularização",
        desc: "Construções edificadas, paralisadas ou em construção sem licenciamento e que comprovadamente não atendam às exigências de regularização serão demolidas (prazo de até 60 dias ou recurso em 15 dias).",
        autoText: "manter construção sem licenciamento não passível de regularização",
        type: "Demolição",
        calcType: "none",
        vprtm: 0,
        descValue: "Demolição em até 60 dias (Recurso em 15 dias ao Secretário)"
    },
    {
        id: "art96",
        art: "Art. 96",
        title: "Demolição Sumária em Terreno Público (União, Estado ou Município)",
        desc: "Construções não licenciadas sobre terreno de domínio público serão sumariamente demolidas, bastando ação fiscal caracterizada por Auto de Infração, imputando-se os custos ao infrator.",
        autoText: "edificar construção não licenciada sobre terreno de domínio público",
        type: "Demolição",
        calcType: "none",
        vprtm: 0,
        descValue: "Demolição sumária + cobrança das despesas e multas ao invasor"
    }
];

let calculationList = [];

document.addEventListener('DOMContentLoaded', () => {
    renderInfractions(infractionsData);
    populateSelect();
    onArticleChange();
    renderCalcTable();
});

function switchTab(tabId, evt) {
    document.querySelectorAll('.tab-content').forEach(el => el.classList.remove('active'));
    document.querySelectorAll('.tab-btn').forEach(el => el.classList.remove('active'));
    
    document.getElementById(`${tabId}-tab`).classList.add('active');
    if (evt && evt.currentTarget) {
        evt.currentTarget.classList.add('active');
    }
}

function renderInfractions(data) {
    const grid = document.getElementById('infractionsGrid');
    grid.innerHTML = '';

    if (data.length === 0) {
        grid.innerHTML = `<p style="color: var(--text-muted); grid-column: 1/-1;">Nenhum dispositivo encontrado para este filtro.</p>`;
        return;
    }

    data.forEach(item => {
        let badgeClass = 'multa';
        const lowerType = item.type.toLowerCase();
        if (lowerType === 'embargo') badgeClass = 'embargo';
        else if (lowerType.includes('interdição')) badgeClass = 'interdicao';
        else if (lowerType.includes('demolição')) badgeClass = 'demolicao';

        const card = document.createElement('div');
        card.className = 'infraction-card';
        card.innerHTML = `
            <div>
                <div class="card-header">
                    <span class="art-badge">${item.art}</span>
                    <span class="sanction-badge ${badgeClass}">${item.type}</span>
                </div>
                <div class="card-body">
                    <h3>${item.title}</h3>
                    <p>${item.desc}</p>
                </div>
            </div>
            <div class="fine-value">
                <i class="fas fa-gavel"></i> ${item.descValue}
            </div>
        `;
        grid.appendChild(card);
    });
}

function filterInfractions() {
    const query = document.getElementById('searchInput').value.toLowerCase();
    const filtered = infractionsData.filter(item => 
        item.art.toLowerCase().includes(query) ||
        item.title.toLowerCase().includes(query) ||
        item.desc.toLowerCase().includes(query)
    );
    renderInfractions(filtered);
}

function filterCategory(category, btn) {
    document.querySelectorAll('.chip').forEach(c => c.classList.remove('active'));
    btn.classList.add('active');

    if(category === 'all') {
        renderInfractions(infractionsData);
    } else {
        const filtered = infractionsData.filter(item => item.type.toLowerCase().includes(category.toLowerCase()));
        renderInfractions(filtered);
    }
}

function populateSelect() {
    const select = document.getElementById('articleSelect');
    select.innerHTML = '';
    
    infractionsData.filter(item => item.calcType !== 'none').forEach(item => {
        const opt = document.createElement('option');
        opt.value = item.id;
        opt.textContent = `${item.art} - ${item.title}`;
        select.appendChild(opt);
    });
}

function onArticleChange() {
    const selectedId = document.getElementById('articleSelect').value;
    const item = infractionsData.find(i => i.id === selectedId);
    const container = document.getElementById('dynamicInputs');
    
    container.innerHTML = '';

    if (!item) return;

    if (item.calcType === 'area') {
        container.innerHTML = `
            <label for="inputParam">Área da Construção (${item.unit}):</label>
            <input type="number" id="inputParam" value="100" min="1" step="0.01">
            <small>Fator: ${item.vprtm} VPRTM por ${item.unit}</small>
        `;
    } else if (item.calcType === 'linear') {
        container.innerHTML = `
            <label for="inputParam">Metragem Linear do Muro (${item.unit}):</label>
            <input type="number" id="inputParam" value="15" min="1" step="0.01">
            <small>Fator: ${item.vprtm} VPRTM por metro linear</small>
        `;
    } else if (item.calcType === 'daily_only') {
        container.innerHTML = `
            <label for="inputParam">Quantidade de Dias de Desrespeito à Interdição:</label>
            <input type="number" id="inputParam" value="1" min="1" step="1">
            <small>Adicional de ${item.dailyRate} VPRTM por dia (Art. 79, Parágrafo Único)</small>
        `;
    } else if (item.calcType === 'area_daily') {
        container.innerHTML = `
            <label for="inputParam">Área Pública Impactada (${item.unit}):</label>
            <input type="number" id="inputParam" value="10" min="0" step="0.01">
            <label for="inputParam2" style="margin-top:10px;">Dias de Desrespeito à Interdição / Atraso na Recomposição:</label>
            <input type="number" id="inputParam2" value="0" min="0" step="1">
            <small>1.000 VPRTM/m² + 250 VPRTM por dia de descumprimento</small>
        `;
    } else if (item.calcType === 'daily_fixed') {
        container.innerHTML = `
            <label for="inputParam">Dias de Desrespeito à Interdição do Elevador (0 se apenas autuação inicial):</label>
            <input type="number" id="inputParam" value="0" min="0" step="1">
            <small>Base de ${item.vprtm} VPRTM + ${item.dailyRate} VPRTM por dia de desrespeito</small>
        `;
    } else if (item.calcType === 'area_or_fixed') {
        container.innerHTML = `
            <label for="inputParam">Área Demolida (${item.unit}) (Digite 0 caso não seja possível aferir):</label>
            <input type="number" id="inputParam" value="80" min="0" step="0.01">
            <small>5 VPRTM/m² ou valor fixo de 500 VPRTM quando inviável aferir a área (Art. 80, Parágrafo Único).</small>
        `;
    } else {
        container.innerHTML = `
            <p>Multa de valor fixo: <strong>${item.vprtm} VPRTM</strong>.</p>
        `;
    }
}

function addArticleToCalc() {
    const selectedId = document.getElementById('articleSelect').value;
    const item = infractionsData.find(i => i.id === selectedId);
    
    let paramVal = 0;
    let paramVal2 = 0;
    const inputElem = document.getElementById('inputParam');
    if (inputElem) paramVal = parseFloat(inputElem.value) || 0;
    
    const inputElem2 = document.getElementById('inputParam2');
    if (inputElem2) paramVal2 = parseFloat(inputElem2.value) || 0;

    let calculatedVprtm = 0;
    let detailText = "";
    let areaM2 = 0;
    let linearM = 0;

    if (item.calcType === 'fixed') {
        calculatedVprtm = item.vprtm;
        detailText = `Valor Fixo (${item.vprtm} VPRTM)`;
    } else if (item.calcType === 'area') {
        calculatedVprtm = item.vprtm * paramVal;
        areaM2 = paramVal;
        detailText = `Área: ${paramVal.toLocaleString('pt-BR')} m² x ${item.vprtm} VPRTM`;
    } else if (item.calcType === 'linear') {
        calculatedVprtm = item.vprtm * paramVal;
        linearM = paramVal;
        detailText = `Extensão: ${paramVal.toLocaleString('pt-BR')} m lineares x ${item.vprtm} VPRTM`;
    } else if (item.calcType === 'daily_only') {
        calculatedVprtm = item.dailyRate * paramVal;
        detailText = `${paramVal} dia(s) de desrespeito x ${item.dailyRate} VPRTM`;
    } else if (item.calcType === 'area_daily') {
        calculatedVprtm = (item.vprtm * paramVal) + (item.dailyRate * paramVal2);
        areaM2 = paramVal;
        detailText = `Área: ${paramVal.toLocaleString('pt-BR')} m² + ${paramVal2} dia(s) de desrespeito`;
    } else if (item.calcType === 'daily_fixed') {
        calculatedVprtm = item.vprtm + (item.dailyRate * paramVal);
        detailText = paramVal > 0 ? `Base ${item.vprtm} VPRTM + ${paramVal} dia(s) x ${item.dailyRate} VPRTM` : `Valor Base (${item.vprtm} VPRTM)`;
    } else if (item.calcType === 'area_or_fixed') {
        if (paramVal > 0) {
            calculatedVprtm = item.vprtm * paramVal;
            areaM2 = paramVal;
            detailText = `Área demolida: ${paramVal.toLocaleString('pt-BR')} m² x ${item.vprtm} VPRTM`;
        } else {
            calculatedVprtm = 500;
            detailText = `Área não aferida - Art. 80, Parágrafo Único (500 VPRTM)`;
        }
    }

    calculationList.push({
        uniqueId: Date.now() + Math.random(),
        art: item.art,
        title: item.title,
        autoText: item.autoText,
        detail: detailText,
        vprtm: calculatedVprtm,
        areaM2: areaM2,
        linearM: linearM
    });

    renderCalcTable();
}

function renderCalcTable() {
    const tbody = document.getElementById('calcTableBody');
    const vprtmRate = parseFloat(document.getElementById('vprtmValue').value) || 4.50;
    tbody.innerHTML = '';

    let totalVprtmSum = 0;

    if (calculationList.length === 0) {
        tbody.innerHTML = `<tr><td colspan="5" style="text-align:center; color: var(--text-muted);">Nenhum artigo adicionado à autuação.</td></tr>`;
    }

    calculationList.forEach((row) => {
        totalVprtmSum += row.vprtm;
        const totalReaisItem = row.vprtm * vprtmRate;

        const tr = document.createElement('tr');
        tr.innerHTML = `
            <td><strong>${row.art}</strong></td>
            <td>${row.title}<br><small style="color:var(--text-muted);">${row.detail}</small></td>
            <td>${row.vprtm.toFixed(2)}</td>
            <td>R$ ${totalReaisItem.toLocaleString('pt-BR', {minimumFractionDigits: 2, maximumFractionDigits: 2})}</td>
            <td><button class="btn-delete" onclick="removeArticle(${row.uniqueId})"><i class="fas fa-trash-alt"></i></button></td>
        `;
        tbody.appendChild(tr);
    });

    const totalReaisSum = totalVprtmSum * vprtmRate;
    document.getElementById('totalVprtm').textContent = totalVprtmSum.toFixed(2) + ' VPRTM';
    document.getElementById('totalReais').textContent = `R$ ${totalReaisSum.toLocaleString('pt-BR', {minimumFractionDigits: 2, maximumFractionDigits: 2})}`;
}

function removeArticle(uniqueId) {
    calculationList = calculationList.filter(item => item.uniqueId !== uniqueId);
    renderCalcTable();
}

function clearCalculator() {
    calculationList = [];
    renderCalcTable();
}

function updateCalculations() {
    renderCalcTable();
}

function finalizeAutos() {
    if (calculationList.length === 0) {
        alert("Adicione pelo menos um artigo à lista antes de concluir.");
        return;
    }

    const vprtmRate = parseFloat(document.getElementById('vprtmValue').value) || 4.50;
    let totalVprtm = 0;
    let motivosTexto = [];
    let artigosList = [];
    let detalhamentoItens = [];
    let areasList = [];

    calculationList.forEach(item => {
        totalVprtm += item.vprtm;
        
        if (!artigosList.includes(item.art)) {
            artigosList.push(item.art);
        }
        
        let motivoItem = item.autoText;
        if (item.areaM2 > 0) {
            motivoItem += ` (área de ${item.areaM2.toLocaleString('pt-BR')} m²)`;
            areasList.push(`${item.areaM2.toLocaleString('pt-BR')} m² (${item.art})`);
        } else if (item.linearM > 0) {
            motivoItem += ` (extensão de ${item.linearM.toLocaleString('pt-BR')} metros lineares)`;
            areasList.push(`${item.linearM.toLocaleString('pt-BR')} m lineares (${item.art})`);
        }
        motivosTexto.push(motivoItem);

        const valorReaisItem = item.vprtm * vprtmRate;
        detalhamentoItens.push(`• ${item.art}: ${item.detail} = ${item.vprtm.toFixed(2)} VPRTM (R$ ${valorReaisItem.toLocaleString('pt-BR', {minimumFractionDigits: 2, maximumFractionDigits: 2})})`);
    });

    const totalReais = totalVprtm * vprtmRate;
    const artigosString = artigosList.join("; ");
    const textoCondutas = motivosTexto.join("; e por ");

    let blocoArea = "";
    if (areasList.length > 0) {
        blocoArea = `\nÁREA / METRAGEM AFERIDA: ${areasList.join(" | ")}`;
    }

    const textoGerado = `DESCRIÇÃO DA INFRAÇÃO (PARA O AUTO DE INFRAÇÃO):

Fica autuado por ${textoCondutas}, infringindo o disposto no(s) ${artigosString}, todos da Lei Complementar Municipal nº 46/2016 (Código de Edificações Gerais do Município de Vila Velha/ES).
${blocoArea}
DISPOSITIVOS LEGAIS INFRINGIDOS:
${artigosString} da LC nº 46/2016.

MEMÓRIA DE CÁLCULO:
${detalhamentoItens.join('\n')}

VALOR TOTAL DO AUTO DE INFRAÇÃO:
• Total em VPRTM: ${totalVprtm.toFixed(2)} VPRTM (Cotação VPRTM: R$ ${vprtmRate.toLocaleString('pt-BR', {minimumFractionDigits: 2, maximumFractionDigits: 2})})
• VALOR TOTAL DA MULTA: R$ ${totalReais.toLocaleString('pt-BR', {minimumFractionDigits: 2, maximumFractionDigits: 2})}

PRAZO LEGAL:
O autuado terá o prazo de 30 (trinta) dias, contados a partir da ciência deste Auto de Infração, para efetuar a quitação da multa ou apresentar Impugnação junto à Comissão de Julgamento de Infrações Urbanísticas (COJIU), conforme Art. 67 e Art. 99 da LC nº 46/2016.`;

    document.getElementById('modalReportText').textContent = textoGerado;
    document.getElementById('modalReport').style.display = 'flex';
}

function closeModal() {
    document.getElementById('modalReport').style.display = 'none';
}

function copyReportText() {
    const text = document.getElementById('modalReportText').textContent;
    navigator.clipboard.writeText(text).then(() => {
        alert("Texto do Auto de Infração copiado com sucesso!");
    });
}