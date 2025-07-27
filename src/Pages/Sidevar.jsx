import "../css/Sidevar.css"
const Sidevar=({activeCheck})=>{
    return(
        <>  
        
            <div id={activeCheck ? "SideNavMainDivActive":"SideNavMainDiv"}>
                <div id="SideLogoDiv">
                    <div id="SideLogoInnerDiv">
                        <img src="/new logo.png" alt="" />
                    </div>
                    
                </div>
                <hr style={{marginBottom:"0px",marginTop:"12px"}} />
                <div id="sideDivMenu">
                    <div className="sideMenuDIV">
                        <div>
                            <img src="/home.png" className="sideDivMenuImg" alt="" />Dashboard
                        </div>
                    </div>

                    <div className="sideMenuDIV">
                        <div>
                            <img src="/task-square.png" className="sideDivMenuImg" alt="" />Tasks
                        </div>
                    </div>

                    <div className="sideMenuDIV">
                        <div>
                            <img src="buyerMeeting.png" className="sideDivMenuImg" alt="" />Buyer Meeting
                        </div>
                    </div>

                    <div className="sideMenuDIV">
                        <div>
                            <img src="QuickCostng.png" className="sideDivMenuImg" alt="" />Quick Costing
                        </div>
                    </div>

                    <div className="sideMenuDIV">
                        <div>
                            <img src="QuickCostng.png" className="sideDivMenuImg" alt="" />Pre Order Costing
                        </div>
                    </div>

                    <div className="sideMenuDIV">
                        <div>
                            <img src="StyleLibrary.png" className="sideDivMenuImg" alt="" />Style Library
                        </div>
                    </div>

                    <div className="sideMenuDIV">
                        <div>
                            <img src="Requisition.png" className="sideDivMenuImg" alt="" />Requisitions
                        </div>
                    </div>

                    <div className="sideMenuDIV">
                        <div>
                            <img src="BuyerPurchase.png" className="sideDivMenuImg" alt="" />Buyer Purchase
                        </div>
                    </div>

                    <div className="sideMenuDIV">
                        <div>
                            <img src="Inventory.png" className="sideDivMenuImg" alt="" />Inventory
                        </div>
                    </div>

                    <div className="sideMenuDIV">
                        <div>
                            <img src="SampleDevelopment.png" className="sideDivMenuImg" alt="" />Sample Development
                        </div>
                    </div>

                    <div className="sideMenuDIV">
                        <div>
                            <img src="Production.png" className="sideDivMenuImg" alt="" />Production
                        </div>
                    </div>

                    <div className="sideMenuDIV">
                        <div>
                            <img src="MasterAdmin.png" className="sideDivMenuImg" alt="" />Master Admin
                        </div>
                    </div>

                    <div className="sideMenuDIV">
                        <div>
                            <img src="User.png" className="sideDivMenuImg" alt="" />Users
                        </div>
                    </div>

                    <div className="sideMenuDIV">
                        <div>
                            <img src="Supplier.png" className="sideDivMenuImg" alt="" />Suppliers
                        </div>
                    </div>

                    <div className="sideMenuDIV">
                        <div>
                            <img src="Showroom.png" className="sideDivMenuImg" alt="" />Showroom
                        </div>
                    </div>

                    <div className="sideMenuDIV">
                        <div>
                            <img src="Shipment.png" className="sideDivMenuImg" alt="" />Shipment
                        </div>
                    </div>

                    <div className="sideMenuDIV">
                        <div>
                            <img src="KPII.png" className="sideDivMenuImg" alt="" />KPI's
                        </div>
                    </div>

                    <div className="sideMenuDIV">
                        <div>
                            <img src="EInvoice.png" className="sideDivMenuImg" alt="" />E-Invoice / E-Way Bill
                        </div>
                    </div>

                    <div className="sideMenuDIV">
                        <div>
                            <img src="Reports.png" className="sideDivMenuImg" alt="" />Reports
                        </div>
                    </div>

                    <div className="sideMenuDIV">
                        <div>
                            <img src="MasterData.png" className="sideDivMenuImg" alt="" />Master Data
                        </div>
                    </div>

                    <div className="sideMenuDIV">
                        <div>
                            <img src="Settings.png" className="sideDivMenuImg" alt="" />Settings
                        </div>
                    </div>
                    
                </div>
            </div>
        </>
    )
}
export default Sidevar