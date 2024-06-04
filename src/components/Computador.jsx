    function Computador(props){
 
    return(
        <>
 
        <br />
        <h2>Nome: {props.nome}</h2>
        <h2>Preço: {props.preco}</h2>
        <h2>Processador: {props.processador}</h2>
        <h2>Memoria: {props.memoria}</h2>
        <h2>Placa de vídeo: {props.placa}</h2>
        </>
    )
}
 
export default Computador;
