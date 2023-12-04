// Lista de heróis
const herois = [
    { nome: "Batman", xp: 5000 },
    { nome: "Superman", xp: 8000 },
    { nome: "Mulher Maravilha", xp: 12000 },
    // Adicione mais heróis conforme necessário
];

// Função para determinar o nível com base na experiência
function determinarNivel(xp) {
    if (xp < 1000) {
        return "Ferro";
    } else if (xp <= 2000) {
        return "Bronze";
    } else if (xp <= 5000) {
        return "Prata";
    } else if (xp <= 7000) {
        return "Ouro";
    } else if (xp <= 8000) {
        return "Platina";
    } else if (xp <= 9000) {
        return "Ascendente";
    } else if (xp <= 10000) {
        return "Imortal";
    } else {
        return "Radiante";
    }
}

// Loop para processar cada herói
herois.forEach(heroi => {
    const nomeHeroi = heroi.nome;
    const xpHeroi = heroi.xp;

    // Determinar o nível para cada herói
    const nivel = determinarNivel(xpHeroi);

    // Exibição do resultado para cada herói
    console.log(`O Herói de nome ${nomeHeroi} está no nível de ${nivel}`);
});
