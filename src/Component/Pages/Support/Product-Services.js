import { TextField, Button, Box } from '@mui/material';
import "../../Style/Invorail.css"
import React from 'react';
import { FormControl, InputLabel, Select, MenuItem } from '@mui/material';






export default function ProductPage() {

    const [itemType, setItemType] = React.useState('');

    const handleChange = (event) => {
        setItemType(event.target.value);
    };



    return (
        <>

            <div className="container px-4">
                <div>
                    <div className="d-flex justify-content-between align-items-center mt-4">
                        <div><h5 style={{ fontWeight: "bold", fontFamily: "sans-serif" }}>Products/Services</h5></div>

                        <div >
                            <span>
                                <button type="button" className="btn text-white" style={{background:"#19c3e6"}}
                                >Add/update catalog</button>
                            </span>



                        </div>
                    </div>


                    <div className='row mt-4'>

                        <div className='col-md-6'>

                            <div>
                                <label for="clientName1" className="form-label">Item Type</label>

                                <TextField
                                    select
                                    size="small"
                                    style={{ background: "#D0F0FF", width: "100%",borderRadius:"5px" }}
                                    className='border border-primary'
                                >
                                    <MenuItem value="inr">INR</MenuItem>
                                    <MenuItem value="usd">USD</MenuItem>
                                    <MenuItem value="usdt">USDT</MenuItem>
                                </TextField>

                            </div>


                            <div className='mt-2'>
                                <label for="clientName1" className="form-label">Unit Price</label>

                                <TextField
                                    select
                                    size="small"
                                    style={{ background: "#D0F0FF", width: "100%",borderRadius:"5px" }}
                                    className='border border-primary'
                                >
                                    <MenuItem value="inr">unit 1</MenuItem>
                                    <MenuItem value="usd">unit2</MenuItem>
                                    <MenuItem value="usdt">unit 3</MenuItem>
                                </TextField>

                            </div>

                            <div className='form-group  mt-2'>
                                <label for="clientName3" className="form-label">Discount</label>
                                <input class=" border border-primary  form-control form-control-small" type="text" style={{ background: "#D0F0FF", width: "100%",borderRadius:"5px" }}
                                />
                            </div>

                        </div>

                        <div className='col-md-6'>

                            <div>
                                <label for="clientName1" className="form-label">Quantity</label>

                                <TextField
                                    select
                                    size="small"
                                    style={{ background: "#D0F0FF", width: "100%",borderRadius:"5px" }}
                                    className='border border-primary'
                                >
                                    <MenuItem value="inr">INR</MenuItem>
                                    <MenuItem value="usd">USD</MenuItem>
                                    <MenuItem value="usdt">USDT</MenuItem>
                                </TextField>

                            </div>

                            <div className='form-group mt-2 ' >
                                <label for="type2" className="form-label">Total Amount</label>
                                <input className=" border border-primary  form-control form-control-small" type="text" style={{ background: "#D0F0FF", width: "100%", }}/>

                            </div>
                            

                        </div>

                        <div className='col-md-12 mt-2' >
                            <div class="form-group ">
                                <label for="exampleFormControlTextarea1">Description</label>
                                <textarea className="form-control mt-2  border border-primary" style={{ background: "#D0F0FF",borderRadius:"5px" }} id="exampleFormControlTextarea1" rows="3"></textarea>
                            </div>

                            <div className='d-flex justify-content-end mt-4'>
                                <span>
                                    <button type="button" className="btn border border-primary"
                                    >Discard</button>
                                </span>


                                <span style={{ marginLeft: "30px" }}>
                                    <button type="button" className="btn  ml-2 text-white" style={{background:"#19c3e6"}} >Save</button>
                                </span>
                            </div>
                        </div>



                    </div>


                </div>







            </div>
        </>






    )
}