import React from 'react'
import logo from '../images/new.png'
import Button from '../pages/Button'


const Data = ({message, index, user, copyText}) => {
  return (
    <div style={{ width: "850px", display: 'flex', flexDirection: 'column', alignItems: 'center', marginBottom: '15px', paddingBottom: '15px', borderBottom: '1px solid #ffffff96' }}>
                                        <div className="navbar-styled" style={{ position: 'relative', padding: '0', marginBottom: '20px', alignItems: 'flex-start', flexDirection: 'column' }}>
                                            <div className='user'>
                                                {user ? <img src={user.picture} alt='user' /> : null}
                                                <p>You :</p>
                                            </div>
                                            <p style={{ fontFamily: 'monospace', width: '750px', margin: '0 auto' }}>{message.messages}</p>

                                        </div>

                                        <>
                                            <div className="logo">
                                                {user ? <img src={logo} alt='user' /> : null}
                                                <p>CodeGeni :</p>
                                            </div>

                                            <div className='has-scrollbar' style={{ whiteSpace: "pre-wrap", width: '750px', border: '2px solid #ffffff2b', borderRadius: '10px', padding: '10px', backgroundColor: '#1e1f20' }}>

                                                <Button copyText={copyText} index={index} key={index} />

                                                <p className='output'>{message.datas}</p>
                                            </div>
                                        </>

                                    </div>
  )
}

export default Data
