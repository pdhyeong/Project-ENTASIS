import { useState } from 'react'
import Modal from 'react-modal'

const Welcome =({})=>{
    const [isLoading, setIsLoading] = useState(true)
    const [welcomeClose, setWelcomeClose] = useState(false)
    const [wallet, setWallet] = useState(true)
    const [chart, setChart] = useState(true)
    const [limitOrderBook, setLimitOrderBook] = useState(true)
    const [order, setOrder] = useState(true)
    const [history, setHistory] = useState(true)
    const [assets, setAssets] = useState(true)
    const [publicDisclosure, setPublicDisclosure] = useState(true)
    const [account, setAccount] = useState(true)
    const [faucet, setFaucet] = useState(true)
    const [transaction, setTransaction] = useState(true)
    const ModalOpen =()=>{
        document.body.style.overflow = 'hidden';
        }
    const ModalClose =()=>{
        document.body.style.overflow = 'unset';
        }
    const modalStyle = {
        overlay: {
            position: "fixed",
            // top: 0,
            // left: 0,
            // right: 0,
            // bottom: 0,
            backgroundColor: "rgba(0, 0, 0, 0.5)",
            overflow: "hidden",
            zIndex: 10,
        },
        content: {
            display: "block",
            justifyContent: "center",
            background: "#2B2B2B",
            overflow: "hidden",
            // top: "0",
            // left: "0",
            // right: "0",
            // bottom: "0",
            border:"0",
            borderRadius: "10px",
            WebkitOverflowScrolling: "touch",
            outline: "none",
            zIndex: 20,
            
        },
    };


    if(isLoading)return (
        <div
            onClick={() => setIsLoading(false)}
            className="welcome logo"  onFocus={document.body.style.overflow='hidden'}>
            <img className="logo" src={require('../assets/images/ENTASIS.png')} alt="loading"/>
            <img src={require('../assets/images/Infinity.gif')} alt="loading"/>
        </div>
    )
    if(!isLoading && !welcomeClose)return (
        <div className="welcome" onClick={()=>setWelcomeClose(!welcomeClose)}  onFocus={document.body.style.overflow='hidden'}>
            <img src={require('../assets/images/welcome.png')} alt="welcome"/>
        </div>
    )
    if(wallet){
    return (
        <Modal
        appElement={document.getElementById('root') || undefined}
        onRequestClose={()=>setWallet()}
        isOpen={wallet}
        style={modalStyle}
        className="welcome_tutorial_wallet" onClick={() => setWallet()} onFocus={document.body.style.overflow='hidden'}>
        <div className='welcome_tutorial_wallet_top'>
        <h5>Register your wallet</h5> <br/>
        <i className='fas fa-arrow-up'></i>
        </div>
        </Modal>
    )}
    if(chart){return (
        <Modal
        appElement={document.getElementById('root') || undefined}
        onRequestClose={()=>setChart()}
        isOpen={chart}
        style={modalStyle}
        className="welcome_tutorial_chart" onClick={()=>setChart()} onFocus={document.body.style.overflow='hidden'}>
        <h5>Chart</h5>
        <i className='fas fa-arrow-left'></i>
        </Modal>
    )}
    if(limitOrderBook){return(
        <Modal
        appElement={document.getElementById('root') || undefined}
        onRequestClose={()=>setLimitOrderBook()}
        isOpen={limitOrderBook}
        style={modalStyle}
        className="welcome_tutorial_limit_order_book" onClick={() => setLimitOrderBook()} onFocus={document.body.style.overflow='hidden'}>
        <h5>Limit Order Book</h5>
        <i className='fas fa-arrow-left'></i>
        </Modal>
    )}
    if(order){return(
        <Modal
        appElement={document.getElementById('root') || undefined}
        onRequestClose={()=>setOrder()}
        isOpen={order}
        style={modalStyle}
        className="welcome_tutorial_order" onClick={() => setOrder()} onFocus={document.body.style.overflow='hidden'}>
        <h5>Order</h5>
        <i className='fas fa-arrow-left'></i>
        </Modal>
    )}
    if(publicDisclosure){return(
        <Modal
        appElement={document.getElementById('root') || undefined}
        onRequestClose={()=>setPublicDisclosure()}
        isOpen={publicDisclosure}
        style={modalStyle}
        className="welcome_tutorial_public_disclosure" onClick={() => setPublicDisclosure()} onFocus={document.body.style.overflow='hidden'}>
        <h5>Public Disclosure</h5>
        <i className='fas fa-arrow-left'></i>
        </Modal>
    )}
    if(assets){return(
        <Modal
        appElement={document.getElementById('root') || undefined}
        onRequestClose={()=>setAssets()}
        isOpen={assets}
        style={modalStyle}
        className="welcome_tutorial_assets" onClick={() => setAssets()} onFocus={document.body.style.overflow='hidden'}>
        <h5>Assets</h5>
        <i className='fas fa-arrow-left'></i>
        </Modal>
    )}
    if(history){return(
        <Modal
        appElement={document.getElementById('root') || undefined}
        onRequestClose={()=>setHistory()}
        isOpen={history}
        style={modalStyle}
        className="welcome_tutorial_history" onClick={() => setHistory()} onFocus={document.body.style.overflow='hidden'}>
        <h5>History</h5>
        <i className='fas fa-arrow-left'></i>
        </Modal>
    )}
    if(account){return(
        <Modal
        appElement={document.getElementById('root') || undefined}
        onRequestClose={()=>setAccount()}
        isOpen={account}
        style={modalStyle}
        className="welcome_tutorial_account" onClick={() => setAccount()} onFocus={document.body.style.overflow='hidden'}>
        <h5>Account</h5>
        <i className='fas fa-arrow-left'></i>
        </Modal>
    )}

    if(faucet){return(
        <Modal
        appElement={document.getElementById('root') || undefined}
        onRequestClose={()=>setFaucet()}
        isOpen={faucet}
        style={modalStyle}
        className="welcome_tutorial_faucet" onClick={() => setFaucet()} onFocus={document.body.style.overflow='hidden'}>
        <h5>Faucet</h5>
        <i className='fas fa-arrow-left'></i>
        </Modal>
    )}
    if(transaction){return(
        <Modal
        appElement={document.getElementById('root') || undefined}
        onRequestClose={()=>setTransaction()}
        isOpen={transaction}
        style={modalStyle}
        className="welcome_tutorial_transaction" onClick={() => setTransaction()} onFocus={document.body.style.overflow='hidden'}>
        <h5>Transaction</h5>
        <i className='fas fa-arrow-left'></i>
        </Modal>
    )}
    else{return(
        <Modal
        appElement={document.getElementById('root') || undefined}
        onRequestClose={()=>setTransaction()}
        isOpen={transaction}
        style={modalStyle}
        className="welcome_tutorial_transaction" onClick={() => setTransaction()} >
        <h5>Trading Start!</h5>
        <i className='fas fa-arrow-left'></i>
        </Modal>
    )}
}
export default Welcome