import './ListaPersonais.css';

function ListaPersonais(props) {

    const personais = props.personais;

    return ( 
        <div className="listagem">

            {
                personais.map((p) => (
                    <div className="lista" key={p.cref}>
                        <h3>Nome do Personal: {p.nome}</h3>
                        <p>Especialidade: {p.especialidade}</p> 
                        <p>Cref: {p.cref}</p>
                    </div>
                ))
            }

        </div>
     );
}

export default ListaPersonais;
