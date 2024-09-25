import { useState } from 'react';

import { CORE_CONCEPTS, EXAMPLES } from './data';
import Header from './components/Header.jsx';
import CoreConcepts from './components/CoreConcepts.jsx';
import TabButton from './components/TabButton.jsx';

function App() {
  const [topic, setTopic] = useState('components');

  function handleSelect(selectedButton){
    setTopic(selectedButton)
  }

  return (
    <div>
      <Header/>
      <main>
        <section id="core-concepts">
          <h2>Core Concepts</h2>
          <ul>
            {CORE_CONCEPTS.map((conceptItem) => (<CoreConcepts key={conceptItem.title} {...conceptItem} />))}
            {/*<CoreConcepts title={CORE_CONCEPTS[0].title} description={CORE_CONCEPTS[0].description} image={CORE_CONCEPTS[0].image} />
            <CoreConcepts {...CORE_CONCEPTS[0]} />*/}
          </ul>
        </section>
        <section id="examples">
          <h2>Examples</h2>
          <menu>
            <TabButton isSelected={topic === 'components'} onSelect={() => handleSelect('components')}>Components</TabButton>
            <TabButton isSelected={topic === 'jsx'} onSelect={() => handleSelect('jsx')}>JSX</TabButton>
            <TabButton isSelected={topic === 'props'} onSelect={() => handleSelect('props')}>Props</TabButton>
            <TabButton isSelected={topic === 'state'} onSelect={() => handleSelect('state')}>State</TabButton>
          </menu>
          <div id="tab-content">
            <h3>{EXAMPLES[topic].title}</h3>
            <p>{EXAMPLES[topic].description}</p>
            <pre>
              <code>{EXAMPLES[topic].code}</code>
            </pre>
          </div>
        </section>
      </main>
    </div>
  )
}

export default App
