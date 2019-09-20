import React, { FC } from 'react'
import { Switch, Route, Link } from 'react-router-dom'
import { Button, Divider } from 'semantic-ui-react'

import Hajimete from 'containers/Hajimete'
import CreationOperators from 'containers/CreationOperators'
import CombinedOperators from 'containers/CombinedOperators'

const Layouts: FC = () => {
  return (
    <section className='layouts'>
      <nav>
        <Button primary>
          <Link to='/Hajimete'>Hajimete</Link>
        </Button>
        <Button primary>
          <Link to='/CreationOperators'>CreationOperators</Link>
        </Button>
        <Button primary>
          <Link to='/CombinedOperators'>CombinedOperators</Link>
        </Button>
      </nav>

      <main className='mainContent'>
        <Divider />
        <Switch>
          <Route path='/Hajimete' render={() => <Hajimete />} />
          <Route
            path='/CreationOperators'
            render={() => <CreationOperators />}
          />
          <Route
            path='/CombinedOperators'
            render={() => <CombinedOperators />}
          />
        </Switch>
      </main>
    </section>
  )
}

export default Layouts
