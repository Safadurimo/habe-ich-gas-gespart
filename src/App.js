
import './App.css';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';

import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';
const data = [
  {
    name: 'Page A',
    uv: 4000,
    pv: 2400,
    amt: 2400,
  },
  {
    name: 'Page B',
    uv: 3000,
    pv: 1398,
    amt: 2210,
  },
  {
    name: 'Page C',
    uv: 2000,
    pv: 9800,
    amt: 2290,
  },
  {
    name: 'Page D',
    uv: 2780,
    pv: 3908,
    amt: 2000,
  },
  {
    name: 'Page E',
    uv: 1890,
    pv: 4800,
    amt: 2181,
  },
  {
    name: 'Page F',
    uv: 2390,
    pv: 3800,
    amt: 2500,
  },
  {
    name: 'Page G',
    uv: 3490,
    pv: 4300,
    amt: 2100,
  },
];



function App() {
  return (
    <div className="App">
      <div>
        Allgemeine Einstellung
        <Box
          component="form"
          sx={{
            '& > :not(style)': { m: 1, width: '25ch' },
          }}
          noValidate
          autoComplete="off"
        >
          <TextField id="outlined-basic" label="Wetterstation" variant="outlined" />
        </Box>
      </div>

      <div>
        Referenzverbrauch
        <Box
          component="form"
          sx={{
            '& > :not(style)': { m: 1, width: '25ch' },
          }}
          noValidate
          autoComplete="off"
        >
          <TextField id="outlined-basic" label="Abrechnungsbeginn" variant="outlined" type="date" />
          <TextField id="outlined-basic" label="Abrechnungsende" variant="outlined" type="date" />
          <TextField id="outlined-basic" label="Energiemenge" variant="outlined" />
        </Box>
      </div>

      <div>
        Vergleichsverbrauch
        <Box
          component="form"
          sx={{
            '& > :not(style)': { m: 1, width: '25ch' },
          }}
          noValidate
          autoComplete="off"
        >
          <TextField id="outlined-basic" label="Beginndatum" variant="outlined" type="date" />
          <TextField id="outlined-basic" label="Zählerstand" variant="outlined" type="number" />

          <TextField id="outlined-basic" label="Endedatum" variant="outlined" type="date" />
          <TextField id="outlined-basic" label="Zählerstand" variant="outlined" type="number"/>
        </Box>
      </div>

      Hier kommt ein Chart
      <LineChart
        width={500}
        height={300}
        data={data}
        margin={{
          top: 5,
          right: 30,
          left: 20,
          bottom: 5,
        }}
      >
        <CartesianGrid strokeDasharray="3 3" />
        <XAxis dataKey="name" />
        <YAxis />
        <Tooltip />
        <Legend />
        <Line type="monotone" dataKey="pv" stroke="#8884d8" activeDot={{ r: 8 }} />
        <Line type="monotone" dataKey="uv" stroke="#82ca9d" />
      </LineChart>

    </div>
  );
}

export default App;
