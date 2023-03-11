import React from 'react'
import '../assets/styles/footer.css'

function Footer() {
    return (
        <>
            <div className='footer'>
                <div className='main-footer'>
                    <div className='footer-content'>
                        <div className='sleeep'>
                            <strong className='sleeep-title'>Sleeep.</strong>
                            <p>Jl.Lebak Bulus I Kav.29 Cilandak</p>
                            <p>Jakarta Selatan, DKI Jakarta, Indonesia, 12340</p>
                        </div>
                        <div className='compnay-info'>
                            <h4>Company Info</h4>
                            <ul className='list'>
                                <li className='list-items'>Tentang Kami</li>
                                <li className='list-items'>Karir</li>
                                <li className='list-items'>Blog</li>
                                <li className='list-items'>Info Layanan</li>
                            </ul>
                        </div>

                        <div className='compnay-info'>
                            <h4>Other Pages</h4>
                            <ul className='list'>
                                <li className='list-items'>Tangerang</li>
                                <li className='list-items'>Jakarta</li>
                                <li className='list-items'>Surabaya</li>
                                <li className='list-items'>Bekasi</li>
                            </ul>
                        </div>

                        <div className='compnay-info'>
                            <h4>Contact</h4>
                            <ul className='list'>
                                <li className='list-items'>+626564465455</li>
                                <li className='list-items'>info@sleeep.com</li>
                                <li className='list-items'>Telp: +5646544654</li>
                            </ul>
                        </div>
                        

                    </div>
                    <div className='copyright'>Copyright &copy; sleeep 2022</div>
                </div>




            </div>

        </>
    )
}

export default Footer