import React from 'react'
import{ withRouter} from 'react-router-dom'
import Card from '../../components/card'
import FormGroup from '../../components/form-group'
import SelectMenu from '../../components/selectMenu'
import LancamentosTable from './lancamentosTable'

class ConsultaLancamentos extends React.Component{

    state = {
        ano: '',
        mes: '',
        status: ''
    }

    buscar = () => {
        console.log(this.state)
    }

    render(){
        const meses = [
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

        const tipos= [
            {label: 'Selecione...',value: ''},
            {label: 'Despesa...',value: 'DESPESA'},
            {label: 'Receita...',value: 'RECEITA'},
            
        ]

        const lancamentos = [
            { id:2,descricao: 'Salario',valor:5000,mes:2,tipo:'Receita',situacao:'efetivado'}
        ]

        return(
            <Card title="Consulta Lançamentos">
                <div className="row">
                    <div className="col-md-6">
                        <div className="bs-component">
                            <FormGroup label="Ano: *" htmlFor="inputAno">
                            <input type="text" 
                            className="form-control" 
                            id="InputAno" 
                            value={this.state.ano}
                            onChange={e => this.setState({ano:e.target.value})}
                            placeholder="Digite o Ano" />
                            </FormGroup>

                            <FormGroup label="Mês: " htmlFor="inputMes">
                            <SelectMenu id="inputMes" 
                            value={this.state.mes}
                            onChange={e => this.setState({mes: e.target.value})}
                            className="form-control" 
                            lista={meses} />
                            </FormGroup>

                            <FormGroup label="Tipo de Lançamento: " htmlFor="InputTipo">
                            <SelectMenu id= "inputTipo"
                            value={this.state.tipo}
                            onChange={e => this.setState({tipo: e.target.value})} 
                            className="form-control" 
                            lista={tipos} />
                            </FormGroup>

                            <button onClick={this.buscar} type="button" className="btn btn-success">Buscar</button>
                            <button type="button" className="btn btn-danger">Cadastrar</button>
                        </div>
                    </div>
                </div>
                <br/>
                <div className="row">
                    <div className="col-md-12">
                        <div className="bs-component">
                            <LancamentosTable lancamentos={lancamentos}/>
                        </div>
                    </div>
                </div>
            </Card>
        )
    }
}

export default withRouter(ConsultaLancamentos)