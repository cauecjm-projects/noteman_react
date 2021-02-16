export default class Notas {
    constructor() {
        this.notas = [];
        this._inscritos = [];
    }

    inscrever(func) {
        this._inscritos.push(func);
    }

    desinscrever(func) {
        this._inscritos = this._inscritos.filter(f => f !== func)
    }

    notificar() {
        this._inscritos.forEach(func => {
            func(this.notas);
        });
    }

    adicionarNota(titulo, descricao, categoria) {
        const novaNota = new Nota(titulo, descricao, categoria);
        this.notas.push(novaNota);
        this.notificar();
    }

    apagarNota(index) {
        this.notas.splice(index, 1);
        this.notificar();
    }
}

class Nota {
    constructor(titulo, descricao, categoria) {
        this.titulo = titulo;
        this.descricao = descricao;
        this.categoria = categoria;
    }
}