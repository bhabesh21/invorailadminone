import React, { useState } from 'react';
import Card from '@mui/material/Card';
import dayjs from 'dayjs';
import { FaCircle } from "react-icons/fa6";
import RemoveRedEyeIcon from '@mui/icons-material/RemoveRedEye';
import DeleteIcon from '@mui/icons-material/Delete';
import SimCardDownloadIcon from '@mui/icons-material/SimCardDownload';
import { DemoContainer, DemoItem } from '@mui/x-date-pickers/internals/demo';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { DesktopDatePicker } from '@mui/x-date-pickers/DesktopDatePicker';
import ReactApexChart from 'react-apexcharts';
import { PieChart } from '@mui/x-charts/PieChart';
import { useDrawingArea } from '@mui/x-charts/hooks';
import { styled } from '@mui/material/styles';
import { orange } from '@mui/material/colors';
import { colors } from '@mui/material';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';            
import { useNavigate } from 'react-router-dom';




const data = [
    { value: 5, color: "orange" },
    { value: 10, color: 'blue' },

];

const size = {
    width: 200,
    height: 200,
};

const StyledText = styled('text')(({ theme }) => ({
    fill: theme.palette.text.primary,
    textAnchor: 'middle',
    dominantBaseline: 'central',
    fontSize: 20,
}));

function PieCenterLabel({ children }) {
    const { width, height, left, top } = useDrawingArea();
    return (
        <StyledText x={left + width / 2} y={top + height / 2}>
            {children}
        </StyledText>
    );
}


function createData(name, calories, fat, carbs, protein) {
    return { name, calories, fat, carbs, protein };
}

const rows = [
    createData('1', 159, "reaceive", 24, 4.0),
    createData('1', 237, "reaceive", 37, 4.3),
    createData('1', 262, "reaceive", 24, 6.0),
    createData('1', 305, "reaceive", 67, 4.3),
    createData('1', 356, "reaceive", 49, 3.9),
];



export default function BalancePage() {


    const [chartState, setChartState] = useState({
        series: [
            {
                data: [44, 55, 57, 56, 61, 58, 63, 60, 66]
            },
            {
                data: [76, 85, 101, 98, 87, 105, 91, 114, 94]
            },
            {
                data: [35, 41, 36, 26, 45, 48, 52, 53, 41]
            }
        ],
        options: {
            chart: {
                // type: 'bar',
                height: 50
            },
            plotOptions: {
                bar: {
                    // horizontal: false,
                    columnWidth: '50%',
                    // endingShape: 'rounded'
                }
            },
            dataLabels: {
                enabled: false
            },
            stroke: {
                show: true,
                width: 4,
                colors: ['transparent']
            },
            xaxis: {
                categories: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Oct']
            },


            
        }
    });



     const options = {
    chart: {
      height: 300,
      type: 'area',
      toolbar: {
        show: false // This hides the toolbar including the dropdown icon
      }
    },
    dataLabels: {
      enabled: false
    },
    stroke: {
      curve: 'smooth'
    },
    xaxis: {
      categories: [
        "Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"
      ]
    },
    tooltip: {
      x: {
        format: 'dd/MM/yy HH:mm'
      },
    },
    yaxis: {
      min: 0,
      max: 500,
      tickAmount: 5,
      labels: {
        formatter: (value) => {
          return Math.round(value);
        }
      }
    },
    legend: {
      show: false // This hides the legend
    }  
  };

  const series = [{
    name: '',
    data: [500,200 , 350, 160, 500,140, 300],
  }, {
    name: '',
    data: [530, 120,400, 40,600, 70,120],
    
    
  }];


    return (
        <>
            <div className="container px-4">

                <div className="d-flex justify-content-between align-items-center mt-4">
                    <div><h5 style={{ fontWeight: "bold", fontFamily: "sans-serif" }}>Balance Info</h5></div>
                    <div>
                        <button type="button" className="btn text-white" style={{background:"#19c3e6"}}>Payment Method</button>
                    </div> 
                </div>

                <div>
                    <label>Outstanding Balance</label> 
                    <h1 className="outstanding">$123456783.00</h1>
                </div>

            

                <div className="row mt-4">
                    <div className="col-lg-6 col-md-12 mb-3">
                    
                    <Card style={{ borderRadius: "15px", height: "280px",border:" 1px solid #01ACFF"}} >
                            <div className='d-flex justify-content-between align-items-center p-4'>
                                <div>
                                    <h5 className='fw-normal'>Balance due overall</h5>
                                    <div className='d-flex justify-content-between align-items-center'>
                                        <div> <span><FaCircle className='text-primary' /></span> <span>Paid</span></div>
                                        <div> <span><FaCircle className='text-warning' /></span> <span>Overdue</span></div>
                                    </div>
                                </div>
                                <div>
                                    <LocalizationProvider dateAdapter={AdapterDayjs}>
                                        <DesktopDatePicker defaultValue={dayjs('2022-04-17')} />
                                    </LocalizationProvider>
                                </div>
                            </div>

                            <div>
                                <div id="chart">
                                    <ReactApexChart
                                        options={chartState.options}
                                        series={chartState.series}
                                        type="bar"
                                        height={200}
                                    />
                                </div>
                                <div id="html-dist"></div>
                            </div>
                        </Card>
                    </div>

                    <div className="col-lg-6 col-md-12 mb-3">
                     
                        <Card style={{ borderRadius: "15px", height: "280px",border:" 1px solid #01ACFF" }}>
                            <div className='d-flex justify-content-between align-items-center p-4'>
                                <div>
                                    <h5 className='fw-normal'>Balance due by client</h5>
                                    <div className='d-flex justify-content-between align-items-center'>
                                        <div>
                                            <p className='dolarone'>$12345.00</p>
                                        </div>
                                    </div>
                                </div>
                                <div>
                                    <LocalizationProvider dateAdapter={AdapterDayjs}>
                                        <DesktopDatePicker defaultValue={dayjs('2022-04-17')} />
                                    </LocalizationProvider>
                                </div>
                            </div>

                            <div>
                                <div id="chart">
                                    <ReactApexChart
                                        options={chartState.options}
                                        series={chartState.series}
                                        type="bar"
                                        height={200}
                                    />
                                </div>
                                <div id="html-dist"></div>
                            </div>
                        </Card>

                    </div>


                </div>

                <div className='mt-4'>
                    <label>Payments History</label>
                    <Card style={{marginBottom:"40px",border:" 1px solid #01ACFF"}}>
                       <div className='maintable'>

                        <Table sx={{ minWidth: 650 }} aria-label="simple table">
                            <TableHead>
                                <TableRow>
                                    <TableCell align='left'>ID</TableCell>
                                    <TableCell align="left">Invoice No.</TableCell>
                                    <TableCell align="left">Recipient</TableCell>
                                    <TableCell align="left">Amount</TableCell>
                                    <TableCell align="left">Create Data</TableCell>
                                    <TableCell align="left">During Date</TableCell>
                                    <TableCell align="left">Actions</TableCell>

                                </TableRow>
                            </TableHead>
                            <TableBody>
                                {rows.map((row) => (
                                    <TableRow
                                        key={row.name}
                                        sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                                    >
                                        <TableCell component="th" scope="row">
                                            {row.name}
                                        </TableCell>
                                        <TableCell align="left">{row.calories}</TableCell>
                                        <TableCell align="left">{row.fat}</TableCell>
                                        <TableCell align="left">{row.carbs}</TableCell>
                                        <TableCell align="left">{row.protein}</TableCell>
                                        <TableCell align="left">{row.carbs}</TableCell>
                                        <TableCell align="left" >
                                          
                                            <span><SimCardDownloadIcon/></span>


                                        </TableCell>

                                    </TableRow>
                                ))}
                            </TableBody>
                        </Table>
                       </div>
                    </Card>
                </div>

            </div>
        </>
    );
}

