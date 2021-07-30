import { useEffect } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import getServicosRevisao from "../actions/ServicoRevisaoAction";
import Table from 'react-bootstrap/Table';

const ServicoRevisao = (props) => {
    const getServicosRevisao = props.getServicosRevisao;
    
    useEffect(() => {
        getServicosRevisao();
    }, [getServicosRevisao]);
    
    const { servicosRevisao } = props.servicoRevisaoReducer;
    console.log(props);

    return (
        <div>
            <Table striped bordered hover>
                <thead>
                    <tr>
                        <th>Cód.</th>
                        <th>Serviço</th>
                        <th>Descrição</th>
                    </tr>
                </thead>
                <tbody>
                    {servicosRevisao.map((product, idx) => {
                        return (
                            <tr key={idx}>
                                <td>{product.id}</td>
                                <td>{product.descricao}</td>
                                <td>{product.caracteristicas}</td>
                            </tr>
                        )
                    })}
                </tbody>
            </Table>
        </div>
    );
};

ServicoRevisao.propTypes = {
    servicoRevisaoReducer: PropTypes.object.isRequired,
    getServicosRevisao: PropTypes.func.isRequired
}

const mapStateToProps = state => ({
    servicoRevisaoReducer: state.servicoRevisaoReducer
});


export default connect(mapStateToProps, { getServicosRevisao })(ServicoRevisao);;
