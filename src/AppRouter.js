
import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import { createBrowserHistory } from 'history';
import App from './App';
import Music from './components/music/Music';
import PageNotFound from './components/PageNotFound';
import Header from './components/Header';
import Footer from './components/Footer';
import AddExpense from './components/expensify/AddExpense';
import EditExpensePage from './components/expensify/EditExpensePage';
import ExpenseDashboard from './components/expensify/ExpenseDashboard';
import WeatherSearch from './components/weather/WeatherSearch';
import ImageSearch from './components/ImageSearch';
import Game from './components/tictaktoc/Game';


const AppRouter = () => {
    
    return <React.StrictMode>
        <Router history={createBrowserHistory()}>
            <Header />
            <Switch>
                <Route exact path='/' component={App}></Route>
                <Route exact path='/images' component={ImageSearch}></Route>
                <Route exact path='/games' component={Game}></Route>
                <Route path='/music' component={Music}></Route>
                <Route exact path='/expense' component={ExpenseDashboard}></Route>
                <Route path="/add-expense" component={AddExpense}></Route>
                <Route exact path='/weather' component={WeatherSearch}></Route>
                <Route path="/edit/:id" component={EditExpensePage}></Route>
                <Route> <PageNotFound /> </Route>
            </Switch>
            <Footer />
        </Router>
    </React.StrictMode>
};


export default AppRouter;