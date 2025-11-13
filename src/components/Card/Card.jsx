import React from 'react'
import './Card.module.css'
import 'bootstrap/dist/css/bootstrap.min.css';

function Card({json}) {
  const [product, setProduct] = React.useState(json)

  if (!product) return <p>Carregando</p>
  return (
    <div className="card border-0" style={{maxwidth: '26rem'}}>
      <img className="card-img-top rounded-4" src={product.fotos[0].src} alt={product.fotos[0].titulo} />
      <h4 className="card-title fs-1 ms-2 text-uppercase fw-bold" style={{fontFamily: 'sanserif'}}>{product.nome}</h4>
    </div>
  )
}

export default Card
