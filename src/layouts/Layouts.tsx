import React, { FC } from 'react'
import { Switch, Route, Link } from 'react-router-dom'
import { Button } from 'semantic-ui-react'

import CreationOperators from 'containers/CreationOperators'
import CombinedOperators from 'containers/CombinedOperators'

const Layouts: FC = () => {
  return (
    <main className='layouts'>
      <Button primary>
        <Link to='/creationOperators'>creationOperators</Link>
      </Button>
      <Button primary>
        <Link to='/combinedOperators'>combinedOperators</Link>
      </Button>
      <Switch>
        <Route path='/creationOperators' render={() => <CreationOperators />} />
        <Route path='/combinedOperators' render={() => <CombinedOperators />} />
      </Switch>
    </main>
  )
}

export default Layouts
