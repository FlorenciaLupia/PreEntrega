import "./ItemListContainer.css"

const ItemListContainer = ({titulo}) => {
    return(
        <div className="item">
            <h1 id="titulo">{titulo}</h1>
            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Tempore maiores quia sed voluptas, nulla, enim itaque ad illo ipsum vel illum cupiditate dolorum deserunt quae ex molestiae, non consequuntur vitae?</p>
        </div>
    )
}

export default ItemListContainer 