import React, { useState } from 'react'
import Card from '../Card/Card';
import style from './MainContent.module.css'

function MainContent() {

    const [products, setProducts] = useState(null)

    React.useEffect(() => {
        async function getItem() {
            const response = await fetch(`https://ranekapi.origamid.dev/json/api/produto`);
            const data = await response.json();
            setProducts(data);
        }
        getItem()
    }, [])
 
  if(products == null) return <h2>Loading...</h2>
  return (
    <main className={style.MainContent}>
        {products.map((p) => (
            <Card key={p.id} json={p} className={style.cardSize}/>
        ))}
    </main>
  )
}

export default MainContent
