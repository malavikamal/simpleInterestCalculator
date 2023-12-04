import logo from './logo.svg';
import './App.css';
import TextField from '@mui/material/TextField';
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';
import { useState } from 'react';


function App() {
  // js code
  const [Principle, setPrinciple] = useState(0);
  const [Interest, setInterest] = useState(0);
  const [Rate, setRate] = useState(0);
  const [Year, setYear] = useState(0);
  const [isPrinciple, setIsPrinciple] = useState(true);
  const [isRate, setIsRate] = useState(true);
  const [isYear, setIsYear] = useState(true);


  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('==========princ amt=========');
    console.log(Principle);
    console.log('==========rate of int=========');
    console.log(Rate);
    console.log('==========year=========');
    console.log(Year);
    let result = (Principle * Rate * Year) / 100;
    console.log(result);
    setInterest(result)
  }

  function clearData() {
    setPrinciple(0);
    setInterest(0);
    setRate(0);
    setYear(0);
  }

  const validate = (e) => {
    const { value, name } = e.target;

    // regular expression to check whether a given string has particular pattern
    // should have forward slash at the beginning and end
    // starting of expression is indicated by ^ (raised)
    // ending of expression is indicated by $
    // if it match, we get array as return or else null
    // !! is used to convert result of regular xprsn to boolean value

    if (!!value.match(/^[0-9]+$/)) {
      if (name === 'principle') {
        setPrinciple(value);
        setIsPrinciple(true);
      }
      else if (name === 'rate') {
        setRate(value);
        setIsRate(true);
      }
      else {
        setYear(value);
        setIsYear(true);
      }
    }
    else {
      if (name === 'principle') {
        setPrinciple(value);
        setIsPrinciple(false);
      }
      else if (name === 'rate') {
        setRate(value);
        setIsRate(false);
      }
      else {
        setYear(value);
        setIsYear(false);
      }
    }

  }

  return (

    <div className='d-flex justify-content-center align-items-center w-100 mt-5' style={{ height: "90vh" }}>

      <div style={{ width: "500px" }} className="bg-light p-5 mt-5 rounded">

        <h3>Simple Interest</h3>
        <p>Calculate your simple interest easily</p>
        <div className='mt-5 bg-warning d-flex flex-column justify-content-center align-items-center w-100 rounded' style={{ height: "150px" }}>
          <h1>{'\u20B9'} {Interest}</h1>
          <p>Total Simple Interest</p>
        </div>

        <form action="" className='mt-5' onSubmit={(e) => handleSubmit(e)} >
          <div className='mb-3' >
            <TextField name='principle' id="outlined-basic" label="&#x20B9; Principle Amount" variant="outlined" className='w-100' value={Principle}
              onChange={(e) => validate(e)} />
          </div>


          {
            ! isPrinciple &&
            <div>
              <p className='text-danger'>Invalid Input</p>
            </div>
          }


          <div className='mb-3' >
            <TextField name='rate' id="outlined-basic" label="Rate of Interest (p.a)%" variant="outlined" className='w-100' value={Rate}
              onChange={(e) => validate(e)} />
          </div>


          {
            ! isRate &&
            <div>
              <p className='text-danger'>Invalid Input</p>
            </div>
          }


          <div className='mt-3' >
            <TextField id="outlined-basic" label="Year (yr)" variant="outlined" className='w-100' value={Year}
              onChange={(e) => validate(e)} />
          </div>


          {
            ! isYear &&
            <div>
              <p className='text-danger'>Invalid Input</p>
            </div>
          }


          <div className='mt-5' >
            <Stack direction="row" spacing={2}>
              <Button disabled={!isPrinciple || !isRate || !isYear} type='submit' variant="contained" className='bg-success w-50'>Calculate</Button>
              <Button variant="contained" className='bg-light w-50' style={{ color: "blue" }} onClick={clearData} >Reset</Button>
              {/* <Button variant="outlined" className='w-50' style={{border:"1px solid black"}} >Reset</Button> */}
            </Stack>
          </div>
        </form>

      </div>


    </div>
  );
}

export default App;
