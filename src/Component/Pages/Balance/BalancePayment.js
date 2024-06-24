import Card from '@mui/material/Card';
import paypal from "../../../Images/PayPal.svg"
import Qiwi from "../../../Images/Qiwi.svg"
import Mastercard from "../../../Images/Mastercard.svg"
import Yandex from "../../../Images/Yandex.svg"
import FacebookPay from "../../../Images/FacebookPay.svg"

export default function BalancePayment() {

    return (
        <>

            <div className="container px-4 mt-4">

                <div><h5 style={{ fontWeight: "bold", fontFamily: "sans-serif" }}>Balance / Payment Method</h5></div>

                <div className="row mt-4" >
                    <div>
                        <p>Payment Methods</p>
                    </div>
                    <div className='d-flex flex-wrap' style={{gap:"43px"}}>


                        <Card style={{ border: " 1px solid #01ACFF",borderRadius: "10px", width: "185px", height: "140px" }} >

                            <div className='d-flex justify-content-between p-2'>
                                <div>
                                    <p style={{color:"#626467",fontWeight: "700",}}>PayPal</p>
                                </div>
                                <div>
                                    <p style={{color:"#CCC",fontWeight:"700"}}>0.02%</p>
                                </div>
                            </div>

                            <div className='d-flex justify-content-center pb-4'>
                                <div>
                                    <img src={paypal} alt='paypal' />
                                </div>
                            </div>
                        </Card>

                        <Card style={{ border: " 1px solid #01ACFF",borderRadius: "10px", width: "185px", height: "140px" }} >

                            <div className='d-flex justify-content-between p-2'>
                                <div>
                                <p style={{color:"#626467",fontWeight: "700",}}>PayPal</p>
                                </div>
                                <div>
                                <p style={{color:"#CCC",fontWeight:"700"}}>0.02%</p>
                                </div>
                            </div>

                            <div className='d-flex justify-content-center pb-4'>
                                <div>
                                    <img src={Qiwi} alt='paypal' />
                                </div>
                            </div>
                        </Card>

                        <Card style={{ border: " 1px solid #01ACFF",borderRadius: "10px", width: "185px", height: "140px" }} >

                            <div className='d-flex justify-content-between p-2'>
                                <div>
                                <p style={{color:"#626467",fontWeight: "700",}}>PayPal</p>
                                </div>
                                <div>
                                <p style={{color:"#CCC",fontWeight:"700"}}>0.02%</p>
                                </div>
                            </div>

                            <div className='d-flex justify-content-center pb-4'>
                                <div>
                                    <img src={Mastercard} alt='paypal' />
                                </div>
                            </div>
                        </Card>


                        <Card style={{ border: " 1px solid #01ACFF",borderRadius: "10px", width: "185px", height: "140px" }} >

                            <div className='d-flex justify-content-between p-2'>
                                <div>
                                <p style={{color:"#626467",fontWeight: "700",}}>PayPal</p>
                                </div>
                                <div>
                                <p style={{color:"#CCC",fontWeight:"700"}}>0.02%</p>
                                </div>
                            </div>

                            <div className='d-flex justify-content-center pb-4'>
                                <div>
                                    <img src={Yandex} alt='paypal' />
                                </div>
                            </div>
                        </Card>

                        <Card style={{ border: " 1px solid #01ACFF",borderRadius: "10px", width: "185px", height: "140px" }} >

                            <div className='d-flex justify-content-between p-2'>
                                <div>
                                <p style={{color:"#626467",fontWeight: "700",}}>PayPal</p>
                                </div>
                                <div>
                                <p style={{color:"#CCC",fontWeight:"700"}}>0.02%</p>
                                </div>
                            </div>

                            <div className='d-flex justify-content-center pb-4'>
                                <div>
                                    <img src={FacebookPay} alt='paypal' />
                                </div>
                            </div>
                        </Card>


                    </div>

                </div>
            </div>

        </>
    )
}