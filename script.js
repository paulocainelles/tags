// Função para salvar o contato
function salvarContato() {
    const numero = '19999973370'// Substitua pelo número desejado
    const nome = 'Paulo Cainelles';  // Substitua pelo nome desejado
    
    const vCard = `
BEGIN:VCARD
VERSION:3.0
FN:${nome}
TEL:${numero}
END:VCARD
    `;
    
    const blob = new Blob([vCard], { type: 'text/vcard' });
    const link = document.createElement('a');
    link.href = URL.createObjectURL(blob);
    link.download = `${nome}.vcf`;  // Nome do arquivo para download
    link.click();
}

// Função para ligar para o número
function ligar() {
    const numero = '19999973370';  // Substitua pelo número desejado
    window.location.href = `tel:${numero}`;
}
