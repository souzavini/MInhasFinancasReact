import ApiService from '../apiService'

export default class LancamentoService extends ApiService{
    constructor(){
        super('/api/lancamentos')
    }

    obterListaMeses(){
        return [
            {label: 'Selecione...', valor: ''},
            {label: 'Janeiro', valor: 1},
            {label: 'Fevereiro', valor: 2},
            {label: 'Março', valor: 3},
            {label: 'Abril', valor: 4},
            {label: 'Maio', valor: 5},
            {label: 'Junho', valor: 6},
            {label: 'Julho', valor: 7},
            {label: 'Agosto', valor: 8},
            {label: 'Setembro', valor: 9},
            {label: 'Outubro', valor: 10},
            {label: 'Novembro', valor: 11},
            {label: 'Dezembro', valor: 12},
        ]
    }

    obterListaTipos(){
        return [
            {label: 'Selecione...',value: ''},
            {label: 'Despesa...',value: 'DESPESA'},
            {label: 'Receita...',value: 'RECEITA'},
        ]
    }

    consultar(LancamentoFiltro){
        let params = `?ano=${LancamentoFiltro.ano}`

        if(LancamentoFiltro.mes){
            params=`${params}&mes${LancamentoFiltro.mes}`
        }

        if(LancamentoFiltro.tipo){
            params = `${params}&tipo${LancamentoFiltro.tipo}`
        }

        if(LancamentoFiltro.status){
            params = `${params}&status=${LancamentoFiltro.status}`
        }

        if(LancamentoFiltro.usuario){
            params = `${params}&usuario=${LancamentoFiltro.usuario}`
        }
        if(LancamentoFiltro.descricao){
            params = `${params}&descricao=${LancamentoFiltro.descricao}`
        }

        return this.get(params)
    }
}