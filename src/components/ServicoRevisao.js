import { useEffect } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import getServicosRevisao from "../actions/ServicoRevisaoAction";
import '../components/style.css';
import css from '../components/card.module.css';

const ServicoRevisao = (props) => {
    const getServicosRevisao = props.getServicosRevisao;

    useEffect(() => {
        getServicosRevisao();
    }, [getServicosRevisao]);

    const { servicosRevisao } = props.servicoRevisaoReducer;
    console.log(servicosRevisao);

    return (
        <div className={css.body}>
            <main className="cards">
                {
                    servicosRevisao.map((servico, idx) => {
                        return (
                            <section className="card contact" key={idx}>
                                <h3>{servico.descricao}</h3>
                                <span>{servico.caracteristicas}</span>
                                <div>
                                    {
                                        servico.servicoValores.map((servicoValor, idx) => {
                                            if (servicoValor.formaPagamento == 'POR_PAGINA') {
                                                servicoValor.formaPagamento = 'Por página';
                                            } if (servicoValor.formaPagamento == 'POR_LAUDA') {
                                                servicoValor.formaPagamento = 'Por lauda';
                                            } if (servicoValor.formaPagamento == 'POR_PALAVRA') {
                                                servicoValor.formaPagamento = 'Por palavra';
                                            }
                                            return (
                                                <p key={idx}>
                                                    {servicoValor.formaPagamento} : R$ {servicoValor.valor}
                                                </p>
                                            )
                                        })
                                    }
                                </div>
                                <button>Realizar Orçamento</button>
                            </section>
                        )
                    })
                }
            </main>
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
