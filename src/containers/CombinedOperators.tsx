import React, { FC } from 'react'
import { Switch, Route, Link } from 'react-router-dom'
import { Divider, Button } from 'semantic-ui-react'
import Concat from 'components/CombinedOperators/Concat'
import ConcatAll from 'components/CombinedOperators/ConcatAll'
import Merge from 'components/CombinedOperators/Merge'
import Zip from 'components/CombinedOperators/Zip'
import CombineLatest from 'components/CombinedOperators/CombineLatest'
import WithLatestFrom from 'components/CombinedOperators/WithLatestFrom'
import Race from 'components/CombinedOperators/Race'
import StartWith from 'components/CombinedOperators/StartWith'
import ForkJoin from 'components/CombinedOperators/ForkJoin'

const CombinedOperators: FC = () => {
  return (
    <section>
      <h1>合并操作符</h1>

      <Link to='/CombinedOperators/Concat'>
        <Button basic color='red'>
          Concat
        </Button>
      </Link>

      <Link to='/CombinedOperators/ConcatAll'>
        <Button basic color='orange'>
          ConcatAll
        </Button>
      </Link>

      <Link to='/CombinedOperators/Merge'>
        <Button basic color='yellow'>
          Merge
        </Button>
      </Link>

      <Link to='/CombinedOperators/Zip'>
        <Button basic color='olive'>
          Zip
        </Button>
      </Link>

      <Link to='/CombinedOperators/CombineLatest'>
        <Button basic color='green'>
          CombineLatest
        </Button>
      </Link>

      <Link to='/CombinedOperators/WithLatestFrom'>
        <Button basic color='teal'>
          WithLatestFrom
        </Button>
      </Link>

      <Link to='/CombinedOperators/Race'>
        <Button basic color='blue'>
          Race
        </Button>
      </Link>

      <Link to='/CombinedOperators/StartWith'>
        <Button basic color='violet'>
          StartWith
        </Button>
      </Link>

      <Link to='/CombinedOperators/ForkJoin'>
        <Button basic color='purple'>
          ForkJoin
        </Button>
      </Link>

      {/* pink brown grey black */}

      <Divider />

      <Switch>
        <Route path='/CombinedOperators/Concat' render={() => <Concat />} />
        <Route
          path='/CombinedOperators/ConcatAll'
          render={() => <ConcatAll />}
        />
        <Route path='/CombinedOperators/Merge' render={() => <Merge />} />
        <Route path='/CombinedOperators/Zip' render={() => <Zip />} />
        <Route
          path='/CombinedOperators/CombineLatest'
          render={() => <CombineLatest />}
        />
        <Route
          path='/CombinedOperators/WithLatestFrom'
          render={() => <WithLatestFrom />}
        />
        <Route path='/CombinedOperators/Race' render={() => <Race />} />
        <Route
          path='/CombinedOperators/StartWith'
          render={() => <StartWith />}
        />
        <Route path='/CombinedOperators/ForkJoin' render={() => <ForkJoin />} />
      </Switch>
    </section>
  )
}

export default CombinedOperators
