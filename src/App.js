import React from 'react';
import store from './store';
import List from './list';

function App(prop) {

  let lists = store.lists.map( list => {
    let id = list.cardIds.map( id => store.allCards[ id ] );
    return <List key={list.id} header={list.header} cards={id}/>
  } );

  return (
    <main>
      <header>
        <h1>Trelloyes</h1>
        <div className="App-list">{lists}</div>
      </header>
    </main>
  );
}

export default App;
