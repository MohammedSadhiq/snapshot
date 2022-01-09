import React, { Component } from 'react'
import { HashRouter, Route, Switch,Redirect } from 'react-router-dom'
import Header from './components/Header'
import Item from './components/Item'
import NotFound from './components/NotFound'
import Search from './components/Search'
import PhotoContextProvider from './context/PhotoContext'

export default class App extends Component {


   handleSubmit=(e,history,searchInput)=>{
    e.preventDefault();
    let url = `/search/${searchInput}`;
    history.push(url);
  }

  render() {
    return (
      <PhotoContextProvider>
        <HashRouter basename='/SnapScout'>
          <div className ='container'>
            <Route 
            render={props=><Header history={props.history} handleSubmit={this.handleSubmit}/>}
            />
            <Switch>
              <Route path='/' exact render={props=><Redirect to='/mountain'/>}/>
              <Route path='/mountain' render={props=>(<Item searchTerm='mountain'/>)}/>
              <Route path='/beach' render={props=>(<Item searchTerm='beach'/>)}/>
              <Route path='/bird' render={props=>(<Item searchTerm='bird'/>)}/>
              <Route path='/food' render={props=>(<Item searchTerm='food'/>)}/>
              <Route path='/search/:searchInput' render={props=>(<Search searchTerm={props.match.params.searchInput}/>)}/>
              <Route render={()=><NotFound/>}/>
            </Switch>
          </div>
        </HashRouter>
      </PhotoContextProvider>
    )
  }
}



// import React,{useState,useEffect,} from 'react'
// // import Header from './components/Header'
// import {BrowserRouter,Switch,Route,HashRouter, Redirect,useSearchParams, useHistory} from 'react-router-dom'
// import Header from './components/Header'
// import Item from './components/Item'
// import NotFound from './components/NotFound'
// import Search from './components/Search'
// import PhotoContextProvider from './context/PhotoContext'

// function App(props) {
//   const history = useHistory();
// console.log('props history in app', history)
//   // const [currentParams, setCurentParams] = useState('');
//   // const [searchParams] = useSearchParams();

//   // useEffect(()=>{
//   //   setCurentParams(Object.fromEntries([...searchParams]));
//   // },[searchParams])

//   return (
//     <PhotoContextProvider>
//       <HashRouter >
        
// <div>

// <Switch>
// <Route component={Header}/>
// </Switch>
//         <Switch>
        
//           <Route path='/' exact component={<Redirect to='/mountain'/>}/>
//           <Route path='/mountain' component={<Item searchTerm="mountains"/>}/>
//           <Route path='/beach' component={<Item searchTerm="beach"/>}/>
//           <Route path='/bird' component={<Item searchTerm="bird"/>}/>
//           <Route path='/food' component={<Item searchTerm="food"/>}/>
//           <Route path='/search/:searchInput' component={<Search searchTerm='searchParams'/>}/>
//           <Route component={<NotFound/>}/>

//         </Switch>
//         </div>
//       </HashRouter>
//     </PhotoContextProvider>
//   )
// }

// export default App
