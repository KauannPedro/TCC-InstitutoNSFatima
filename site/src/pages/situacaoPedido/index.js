import "./index.scss";
import { Link } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';
import { useEffect, useState, useParams } from 'react';
import axios from 'axios';
import InputMask from "react-input-mask"
import Cabecalho from "../../components/cabecalhoPrincipal";
import RodapeBranco from "../../components/rodapeBranco";

export default function Situacao() {

    return (
        <main className="SituacaoPedido">
            <section className="container">
                <Cabecalho />
                <div className="sub-container">
                    <h1>
                        DETALHES DO PEDIDO #213127R3ASB
                    </h1>

                    <div className="sub">
                        <div className="nav-esquerda">
                            <div className="cabecalho">
                                <img src="/assets/images/verificar.png" alt="" />
                                <div>
                                    <p className="status">
                                        PEDIDO SENDO PREPARADO <br />
                                    </p>

                                    <p className="aguarde">
                                        AQUARDE NOVA MENSAGEM
                                    </p>
                                </div>
                            </div>

                            <hr />

                            <div className="Destino">
                                <img src="/assets/images/entrega-rapida.png" alt="" />
                                <div>
                                    <p className="dest">Destino:</p>
                                    <p className="endereco">Av. Coronel Octaviano de Freitas Costa, 463 <br /> São Paulo - SP 04773-000</p>
                                </div>
                            </div>
                        </div>
                        <div className="nav-direita">
                            <div className="container-giga">
                                <div className="pedido-info">
                                    <div className="fundo-img">
                                        <img src="/assets/images/details-produtos.png" alt="" />
                                    </div>
                                    <div className="info-produtos">
                                        <span>
                                            Escrivaninha de Carvalho <br/>
                                            {/* Aqui vai ficar o nome do produto*/}
                                            <span className="unidade">1x Unidade {/* Aqui vai ficar a Quantidade */}</span>
                                        </span>
                                    </div>
                                </div>
                                <hr />
                                <div className="total-pedido">
                                    <span className="valores-info">
                                        <p>Subtotal</p>
                                        <span>R$325,99{/*Valor do Subtotal*/}</span>
                                    </span>

                                    <span className="valores-info">
                                        <p>Frete</p>
                                        <span>R$9,90{/*Valor do Frete*/}</span>
                                    </span>

                                    <span className="valores-info">
                                        <p>Total</p>
                                        <span className="total-valor">R$335,89{/*Total do Item*/}</span>
                                    </span>
                                </div>

                                <hr />

                                <div className="informacoes-pedido">
                                    <h2>informações do Pedido</h2>

                                    <span className="span-info">
                                        <p>Endereço de Entrega</p>
                                        <span>Av. Coronel Octaviano de Freitas Costa, 463 - São Paulo - SP, 04773-000 {/*Endereço de Entrega do Cliente*/}</span>
                                    </span>
                                    <span className="span-info">
                                        <p>Contato</p>
                                        <span>E-mail: kauanpedropedrocauan@gmail.com{/*Email do Cliente*/}</span>
                                    </span>
                                    <span className="span-info">
                                        <p>Telefone</p>
                                        <span>(11) 98760-4376{/*Numero do Cliente*/}</span>
                                    </span>
                                    <span className="span-info">
                                        <p>Transportadora</p>
                                        <span>SEDEX{/*Transportadora Escolhida*/}</span>
                                    </span>
                                </div>
                            </div>

                            <hr/>

                            <div className="agradecimento">
                                <div className="img-pica">
                                    <img src="/assets/images/group-name.png" alt="" />
                                </div>
                                <div className="agradecimentos-frase">
                                    <p>Obrigado por comprar conosco, cuidaremos <br/> de sua compra até a chegada de sua casa!</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            
                <RodapeBranco/>
            </section>
        </main>
    );
}