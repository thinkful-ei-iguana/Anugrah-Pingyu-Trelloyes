import React from 'react';
import Card from './Card';

export default function List(props){

  let cardList = props.cards.map(card =>  {
    return <Card title={card.title} content={card.content} key={card.id} />
  })
  return(
   <section className="List">
     <header>{props.header}</header>
     <div className='List-cards'>
       {cardList}
     </div>
   </section>
  )
}