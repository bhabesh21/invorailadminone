import HomePage from "../Component/Pages/Dashboard/HomePage";
import CompanyPage from "../Component/Pages/Company/Company";
import TeamPage from "../Component/Pages/Team/TeamPage";
import SupportPage from "../Component/Pages/Support/Supportpage";
import LayoutDesign from "../Component/Layout/LayoutDesign";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Header from "../Component/Navbar";
import BalancePage from "../Component/Pages/Balance/BalancePage";
import BalancePayment from "../Component/Pages/Balance/BalancePayment";
import CreateClient from "../Component/Pages/Team/CreateClient";
// import ProductPage from "../Component/Pages/Support/Product-Services";
import Setting from "../Component/Setting/Setting";
import Logmodule from "../Component/Setting/LogModule";
import ProductSale from "../Component/Pages/Support/Supportpage";
import PlanPage from "../Component/Pages/Plan/plan";

export default function InvorailROute() {


    return (

        <>
            <BrowserRouter>
                 
                <div className="d-flex">  
                    <LayoutDesign />
                    <div  style={{width:"100%"}}>
                        <Header />
                        <Routes>
                            <Route path="/" element={<HomePage/>} />
                            <Route path="company" element={<CompanyPage/>} />
                            <Route path="team" element={<TeamPage/>} />
                            <Route path="add-client" element={<CreateClient/>}/>
                            <Route path="support" element={<SupportPage/>} />
                            <Route path="plan" element={<PlanPage/>} />
                            <Route path="products-sale" element={<ProductSale/>} />
                            <Route path="balance-info" element={<BalancePage/>} />
                            <Route path="balance-payment" element={<BalancePayment/>} />
                            <Route path="setting" element={<Setting/>} />
                            <Route path="logmodule" element={<Logmodule/>} />

                        </Routes>
                    </div>
                </div>


            </BrowserRouter>

        </>
    )
}