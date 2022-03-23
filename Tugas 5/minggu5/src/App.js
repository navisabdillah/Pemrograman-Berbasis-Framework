import React, { Children } from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  Redirect,
  useHistory,
  useParams,
  useRouteMatch
} from "react-router-dom";

// export default function BasicExample() {
//       return (
//         <Router>
//           <div>
//             <ul>
//               <li>
//                 <Link to="/">Home</Link>
//               </li>
//               <li>
//                 <Link to="/about">About</Link>
//               </li>
//               <li>
//                 <Link to="/dashboard">Dashboard</Link>
//               </li>
//             </ul>
//             <hr />
    
//             <Switch>
//               <Route exact path="/">
//                 <Home />
//               </Route>
//               <Route path="/about">
//                 <About />
//                 </Route> 
//               <Route path="/dashboard">
//                 <Dashboard /> 
//               </Route>
//             </Switch>
//           </div>
//         </Router>
//       );
//     }
    
//     // Anda dapat menganggap komponen ini sebagai "halaman (konten)" di situs Anda.
    
//     function Home() {
//       return (
//         <div>
//           <h2>Home</h2>
//         </div>
//       );
//     }
    
//     function About() {
//       return (
//         <div>
//           <h2>About</h2>
//         </div>
//       );
//     }
    
//     function Dashboard() {
//        return (
//          <div>
//            <h2>Dashboard</h2>
//          </div>
//        );
//     }

   // Praktikum 2
// export default function BasicExample() {
//   return (
//     <Router>
//       <div>
//         <h2>Accounts</h2>
//         <ul>
//           <li>
//             <Link to="/netflix">Netflix</Link>
//           </li>
//           <li>
//             <Link to="/gmail">Gmail</Link>
//           </li>
//           <li>
//             <Link to="/yahoo">Yahoo</Link>
//           </li>
//           <li>
//             <Link to="/amazon">Amazon</Link>
//           </li>
//         </ul>

//         <Switch>
//           <Route path="/:id" children={<Child />} />
//           </Switch>
//         </div>
//         </Router>
//   );
// }

// function Child(){
//   let {id} = useParams();

//   return(
//     <div>
//       <h3>ID : {id}</h3>
//     </div>
//   );
// }

//Prak 3
export default function NestingExample() {
  return (
    <Router>
      <div>
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/topics">Topics</Link>
          </li>
          </ul>
          <hr />

          <Switch>
            <Route exact path="/">
              <Home />
            </Route>
            <Route path="/topics">
              <Topics/>
            </Route>
          </Switch>
          </div>
          </Router>
  );
}

function Home (){
  return(
    <div>
      <h2>Home</h2>
    </div>
  );
}

function Topics(){
//   //'path' untuk membuat jalur <Route> yang terhadap rute induk,
//   //sedangkan 'url' untuk membuat link

  let {path, url} = useRouteMatch();
  return(
    <div>
      <h2>Topics</h2>
      <ul>
        <li>
          <Link to={'${url}/Sate, Nasi goreng'}>Kuliner</Link>
        </li>
        <li>
          <Link to={'${url}/Wisata alam, Museum'}>Travelling</Link>
        </li>
        <li>
          <Link to={'${url}/Iblis, JW Marriot'}>Review Hotel</Link>
        </li>
      </ul>

      <Switch>
        <Route exact path={path}>
          <h3>Please select a topic.</h3>
        </Route>
        <Route path={'${path}/:topicId'}>
          <Topic />
        </Route>
      </Switch>
    </div>
  );
}

function Topic(){
  let { topicId } = useParams();

  return(
    <div>
      <h3>{topicId}</h3>
    </div>
  );
}
  