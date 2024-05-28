// import logo from './logo.svg';
// import './App.css';
// import Grid from '@mui/system/Unstable_Grid';
// import styled from '@mui/system/styled';
// // import { Box, ThemeProvider } from '@mui/system';
// import Button from '@mui/material/Button';
// import { useState } from 'react';

// function App() {

//   const onGirdClick = ()=>{
//     alert("Et voilà, tous marche comme il faut");
//   }
//   var [showItem, setshowItem] = useState(true);
//   const showOrHideItemc=()=>{
//     setshowItem(showItem = !showItem);
//   }

//   const Item = styled('div')(({ theme }) => ({
//     backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
//     border: '1px solid',
//     borderColor: theme.palette.mode === 'dark' ? '#444d58' : '#ced7e0',
//     padding: theme.spacing(1),
//     borderRadius: '4px',
//     textAlign: 'center',
//   }));

//   const toDoList = [
//     "Acheter",
//     'Vendre',
//     "Initialiser",
//     'Conteneuriser',
//     "Evaluer",
//   ];

//   return (
//     <div className="App">
//       <Grid container spacing={2} justifyContent={"center"}>
//         <Grid xs={11.5} md={4} onClick={onGirdClick}>
//           <Item >xs=8 md=8</Item>
//         </Grid>
//         <Grid xs={11.5} md={4}>
//           <Item>xs=6 md=4</Item>
//         </Grid>
//         <Grid xs={11.5} md={4}>
//           <Item>xs=6 md=4</Item>
//         </Grid>
//         <Grid xs={11.5} md={8}>
//           {showItem && <Item>xs=6 md=8</Item>}
//           <Button size='large' type='button' color='primary' onClick={showOrHideItemc}>Afficher</Button>
//         </Grid>
//           <ul>
//             {toDoList.map(todo => (<li key={todo}>{todo}</li>))}
//           </ul>
//       </Grid>
//     </div>
//   );
// }

// export default App;
