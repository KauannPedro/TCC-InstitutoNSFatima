import './index.scss';

export default function CadastroProdutos() {
    

    return (
        <div className="pagina-cadastroProdutos">

            <div className="part-left">
                <div className="cabecalho-left">
                    <div>
                        <img src="/assets/images/logo.png" alt="" />
                    </div>

                        <div className="divisor"></div>

                    <div>
                        <h1>Ecowoods</h1>

                        <p>ADMIN PAINEL</p>
                    </div>
                </div>

                <div className="menu-left">
                    <button>Gestão de Produtos</button>

                    <button>Pedidos e Gestão de Vendas</button>

                    <button>Gestão de Clientes</button>

                    <button>Visão Geral do Painel</button>
                </div>
            </div>

            <div className="linha"></div>

            <div className="part-right">
                <div className="cabecalho-right">

                </div>

                <div className="menu-right">

                    <button className="button-blue">Adicionar imagem</button>  
                    <button className="button-blue">Editar imagem</button>

                    <h1>Adicionar Produto</h1>

                    <div className="inputs-add">
                        <p>Nome do produto</p>
                        <input placeholder='..' type="text" />
                    </div>

                    <div className="inputs-add">
                        <p>Descrição do produto</p>
                        <input placeholder='..' type="text" />
                    </div>

                    <div className="inputs-add">
                        <p>Preço</p>
                        <input placeholder='..' type="text" />
                    </div>

                    <div className="inputs-add">
                        <p>Quantidade para estoque</p>
                        <input placeholder='..' type="text" />
                    </div>

                    <div className="inputs-add">
                        <p>Categoria</p>
                        <input placeholder='..' type="text" />
                    </div>

                    <div className="inputs-add">
                        <p>Tamanhos</p>
                        <input placeholder='..' type="text" />
                    </div>

                    <button className="button-2a"> Cadastrar </button>
                </div>
            </div>

        </div>
    )
}