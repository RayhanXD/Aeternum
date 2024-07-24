import {BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import { FAQ } from './pages/FAQ'

export const Routes = () => {
return(
    <Router>
        <Switch>
            <Route path='/FAQ'>
                <FAQ />
            </Route>


        </Switch>
    </Router>

)

}