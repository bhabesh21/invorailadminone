import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import Card from '@mui/material/Card';
import RemoveRedEyeIcon from '@mui/icons-material/RemoveRedEye';
import DeleteIcon from '@mui/icons-material/Delete';
import SimCardDownloadIcon from '@mui/icons-material/SimCardDownload';
import { useNavigate } from 'react-router-dom';
import { HiFilter } from "react-icons/hi";


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


export default function SupportPage() {

    const navigate = useNavigate()

    return (
        <>
            <div className="container px-4">
                <div>
                    <div className="d-flex justify-content-between align-items-center mt-4">
                        <div><h5 style={{ fontWeight: "bold", fontFamily: "sans-serif" }}>Tickets</h5></div>
                        <div>
                            <button type="button" className="btn text-white " style={{ background: "#19c3e6" }} onClick={() => navigate(`/add-client`)}
                            > ADD NEW TICKET</button>
                        </div> 




                    </div>
                </div>
                <div>

                    <Card className='mt-4' style={{ border: "2px solid #01ACFF" }}>
                        {/* <div className='d-flex flex-wrap align-items-center mt-2 ' style={{ gap: "63%" }}>
                            <div><h6 style={{ fontWeight: "bold", fontFamily: "sans-serif", marginTop: "10px", marginLeft: "10px" }}>Invoices</h6></div>
                            <div >
                                <button type="button" className="btn border text-white" style={{ background: "#8BBDC7" }}>Paid</button>
                                <button type="button" className="btn   ml-4" style={{ color: "#01ACFF" }} >Unpaid</button>

                                <HiFilter className='ml-4' />
                            </div>
                        </div> */}

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
                                                <span ><RemoveRedEyeIcon /></span>
                                                <span><DeleteIcon /></span>
                                                <span><SimCardDownloadIcon /></span>


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
    )
}