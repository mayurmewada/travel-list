import logo from './logo.svg';
import './App.css';

export const App = () => {
  return (
    <div className="app">
      <Logo />
      <Form />
      <PackingList />
      <Stats />
    </div>
  );
}

const Logo = () => {
  return <h1>Far Away</h1>
}
const Form = () => {
  return (
    <div className='add-form'>
      <h3>What do you need for your trip</h3>
    </div>
  )
}
const PackingList = () => {
return (

)
}
const Stats = () => {
  return <h4>footer</h4>
}