import { useState } from 'react'
import '../../App.css'

import { useContext } from 'react'
import { CartContext } from './cartcontext'

function Watches() {

  
    const { addToCart } = useContext(CartContext)

    const [watchType, setWatchType] = useState('')


    return (
        <div className='Big'>


            <div className="inform">
                <div className="img">
                    <h2 className='en'>Welcome to Sultan Big Watch Store</h2>
                    <h2 >به فروشگاه بزرگ ساعت سلطانی خوش آمدید</h2>
                    <h2 >د سلطاني لوی ساعتونو پلورنځي ته ښه راغلاست</h2>
                </div>
                <div className="buttons">
                    <button className=' btn1 ' onClick={() => setWatchType('Single_Watch')}>Single Watch</button>
                    <button className=' btn2' onClick={() => setWatchType('Couple_Watch')}>couple Watch</button>
                </div>
            </div>
            {/* show singel Watch */}
            {watchType === 'Single_Watch' && (

                <div className="row row-cols-1  ">

                
                    <div className="text-center mb-5 p-5 rounded-4 shadow-lg border border-opacity-25 border-light"
                        style={{
                            background: 'linear-gradient(135deg, #1e0b36 0%, #0b0221 50%, #000000 100%)',
                            boxShadow: '0 15px 35px rgba(0, 0, 0, 0.5)'
                        }}>
                        <h2 className="fw-bold mb-4"
                            style={{
                                color: '#ffd700',
                                fontFamily: "'Cinzel', 'Playfair Display', 'Times New Roman', serif",
                                letterSpacing: '2px',
                                fontSize: '32px',
                                textShadow: '0 2px 4px rgba(0,0,0,0.6)'
                            }}>
                            Welcome to the Great Single Watch Collection
                        </h2>
                        <h3 className="my-3 fw-bold"
                            style={{
                                color: '#ffffff',
                                fontFamily: "ui-serif",
                                fontSize: '28px',
                                textShadow: '0 2px 4px rgba(0,0,0,0.6)',
                                direction: 'rtl'
                            }}>
                            به کلکسیون بزرگ ساعت‌های طاقه‌ای خوش آمدید
                        </h3>
                        <h3 className="fw-normal"
                            style={{
                                color: 'rgba(255, 255, 255, 0.8)',
                                fontFamily: "serif",
                                fontSize: '24px',
                                textShadow: '0 2px 4px rgba(0,0,0,0.6)',
                                direction: 'rtl'
                            }}>
                            د طاقې ساعتونو لوی مجموعې ته ښه راغلاست
                        </h3>
                    </div>

                    {/* clock 1 */}
                    <div className="col-3 ">
                        <div className="card">
                            <img src="/Clock/Single/1.jpg" alt="..." />
                            <div className="card-body images">
                                <p className="card-title" style={{ color: "white" }}>Name_Company :<b>Xill</b></p>
                                <p style={{ color: "white" }}>Quality: <b>So Good</b></p>
                                <p className="card-title" style={{ color: "white" }}>Price:<b> 2000 AF</b></p>
                                <p className='text-warning'>Premium waterproof watches, crafted just for you!</p>
                                <button className='btn btn-primary' onClick={() => addToCart({
                                    id: 1,
                                    name: "Xill",
                                    price: 2000,
                                    img: "/Clock/Single/1.jpg"

                                })
                                }>Bye</button>
                            </div>
                        </div>
                    </div>
                    {/* clock 2 */}
                    <div className="col-3 ">
                        <div className="card ">
                            <img src="/Clock/Single/2.jpg" alt="..." />
                            <div className="card-body images">
                                <p className="card-title" style={{ color: "white" }}>Name_Company :<b>Naviforce</b></p>
                                <p style={{ color: "white" }}>Quality: <b>So Good</b></p>
                                <p className="card-title" style={{ color: "white" }}>Price:<b> 2500 AF</b></p>
                                <p className='text-warning'>Premium waterproof watches, crafted just for you!</p>
                                <button className='btn btn-primary' onClick={() => addToCart({
                                    id: 2,
                                    name: 'Naviforce', price: 2500, img: '/Clock/Single/2.jpg'
                                })}>Bye</button>
                            </div>
                        </div>
                    </div>
                    {/* clock 3 */}
                    <div className="col-3 ">
                        <div className="card ">
                            <img src="/Clock/Single/3.jpg" alt="..." />
                            <div className="card-body images">
                                <p className="card-title" style={{ color: "white" }}>Name_Company :<b>Naviforce</b></p>
                                <p style={{ color: "white" }}>Quality: <b>So Good</b></p>
                                <p className="card-title" style={{ color: "white" }}>Price:<b> 2500 AF</b></p>
                                <p className='text-warning'>Premium waterproof watches, crafted just for you!</p>
                                <button className='btn btn-primary' onClick={() => addToCart({
                                    id: 3, name: 'Naviforce', price: 2500, img: '/Clock/Single/3.jpg'
                                })}>Bye</button>
                            </div>
                        </div>
                    </div>
                    {/* clock 4 */}
                    <div className="col-3 ">
                        <div className="card ">
                            <img src="/Clock/Single/4.jpg" alt="..." />
                            <div className="card-body images">
                                <p className="card-title" style={{ color: "white" }}>Name_Company :<b>Seiko </b></p>
                                <p style={{ color: "white" }}>Quality: <b>So Good</b></p>
                                <p className="card-title" style={{ color: "white" }}>Price:<b> 2500 AF</b></p>
                                <p className='text-warning'>Premium waterproof watches, crafted just for you!</p>
                                <button className='btn btn-primary' onClick={() => addToCart({
                                    id: 4, name: 'Seiko', price: 2500, img: '/Clock/Single/4.jpg'
                                })}>Bye</button>
                            </div>
                        </div>
                    </div>
                    {/* clock 5 */}
                    <div className="col-3 ">
                        <div className="card ">
                            <img src="/Clock/Single/5.jpg" alt="..." />
                            <div className="card-body images">
                                <p className="card-title" style={{ color: "white" }}>Name_Company :<b>Seiko </b></p>
                                <p style={{ color: "white" }}>Quality: <b>So Good</b></p>
                                <p className="card-title" style={{ color: "white" }}>Price:<b> 4500 AF</b></p>
                                <p className='text-warning'>Premium waterproof watches, crafted just for you!</p>
                                <button className='btn btn-primary' onClick={() => addToCart({
                                    id: 5, name: 'Seiko', price: 4500, img: '/Clock/Single/5.jpg'
                                })}>Bye</button>
                            </div>
                        </div>
                    </div>

                    {/* clock 6 */}

                    <div className="col-3 ">
                        <div className="card ">
                            <img src="/Clock/Single/6.jpg" alt="..." />
                            <div className="card-body images">
                                <p className="card-title" style={{ color: "white" }}>Name_Company :<b>Seiko </b></p>
                                <p style={{ color: "white" }}>Quality: <b>So Good</b></p>
                                <p className="card-title" style={{ color: "white" }}>Price:<b> 4500 AF</b></p>
                                <p className='text-warning'>Premium waterproof watches, crafted just for you!</p>
                                <button className='btn btn-primary' onClick={() => addToCart({
                                    id: 6, name: 'Seiko', price: 4500, img: '/Clock/Single/6.jpg'
                                })}>Bye</button>
                            </div>
                        </div>
                    </div>

                    <div className="col-3 ">
                        <div className="card ">
                            <img src="/Clock/Single/7.jpg" alt="..." />
                            <div className="card-body images">
                                <p className="card-title" style={{ color: "white" }}>Name_Company :<b>Seiko </b></p>
                                <p style={{ color: "white" }}>Quality: <b>So Good</b></p>
                                <p className="card-title" style={{ color: "white" }}>Price:<b> 2500 AF</b></p>
                                <p className='text-warning'>Premium waterproof watches, crafted just for you!</p>
                                <button className='btn btn-primary' onClick={() => addToCart({
                                    id: 7, name: 'Seiko', price: 2500, img: '/Clock/Single/7.jpg'
                                })}>Bye</button>
                            </div>
                        </div>
                    </div>

                    <div className="col-3 ">
                        <div className="card ">
                            <img src="/Clock/Single/8.jpg" alt="..." />
                            <div className="card-body images">
                                <p className="card-title" style={{ color: "white" }}>Name_Company :<b>Seiko </b></p>
                                <p style={{ color: "white" }}>Quality: <b>So Good</b></p>
                                <p className="card-title" style={{ color: "white" }}>Price:<b> 2500 AF</b></p>
                                <p className='text-warning'>Premium waterproof watches, crafted just for you!</p>
                                <button className='btn btn-primary' onClick={() => addToCart({
                                    id: 8, name: 'Seiko', price: 2500, img: '/Clock/Single/8.jpg'
                                })}>Bye</button>
                            </div>
                        </div>
                    </div>

                    <div className="col-3 ">
                        <div className="card ">
                            <img src="/Clock/Single/9.jpg" alt="..." />
                            <div className="card-body images">
                                <p className="card-title" style={{ color: "white" }}>Name_Company :<b>Seiko </b></p>
                                <p style={{ color: "white" }}>Quality: <b>So Good</b></p>
                                <p className="card-title" style={{ color: "white" }}>Price:<b> 2500 AF</b></p>
                                <p className='text-warning'>Premium waterproof watches, crafted just for you!</p>
                                <button className='btn btn-primary' onClick={() => addToCart({
                                    id: 9, name: 'Seiko', price: 2500, img: '/Clock/Single/9.jpg'
                                })}>Bye</button>
                            </div>
                        </div>
                    </div>

                    <div className="col-3 ">
                        <div className="card ">
                            <img src="/Clock/Single/10.jpg" alt="..." />
                            <div className="card-body images">
                                <p className="card-title" style={{ color: "white" }}>Name_Company :<b>Seiko </b></p>
                                <p style={{ color: "white" }}>Quality: <b>So Good</b></p>
                                <p className="card-title" style={{ color: "white" }}>Price:<b> 2500 AF</b></p>
                                <p className='text-warning'>Premium waterproof watches, crafted just for you!</p>
                                <button className='btn btn-primary' onClick={() => addToCart({
                                    id: 10, name: 'Seiko', price: 2500, img: '/Clock/Single/10.jpg'
                                })}>Bye</button>
                            </div>
                        </div>
                    </div>


                    <div className="col-3 ">
                        <div className="card ">
                            <img src="/Clock/Single/12.jpg" alt="..." />
                            <div className="card-body images">
                                <p className="card-title" style={{ color: "white" }}>Name_Company :<b>Seiko </b></p>
                                <p style={{ color: "white" }}>Quality: <b>So Good</b></p>
                                <p className="card-title" style={{ color: "white" }}>Price:<b> 2500 AF</b></p>
                                <p className='text-warning'>Premium waterproof watches, crafted just for you!</p>
                                <button className='btn btn-primary' onClick={() => addToCart({
                                    id: 11, name: 'Seiko', price: 2500, img: '/Clock/Single/12.jpg'
                                })}>Bye</button>
                            </div>
                        </div>
                    </div>

                    <div className="col-3 ">
                        <div className="card ">
                            <img src="/Clock/Single/13.jpg" alt="..." />
                            <div className="card-body images">
                                <p className="card-title" style={{ color: "white" }}>Name_Company :<b>Seiko </b></p>
                                <p style={{ color: "white" }}>Quality: <b>So Good</b></p>
                                <p className="card-title" style={{ color: "white" }}>Price:<b> 2500 AF</b></p>
                                <p className='text-warning'>Premium waterproof watches, crafted just for you!</p>
                                <button className='btn btn-primary' onClick={() => addToCart({
                                    id: 12, name: 'Seiko', price: 2500, img: '/Clock/Single/13.jpg'
                                })}>Bye</button>
                            </div>
                        </div>
                    </div>

                    <div className="col-3 ">
                        <div className="card ">
                            <img src="/Clock/Single/14.jpg" alt="..." />
                            <div className="card-body images">
                                <p className="card-title" style={{ color: "white" }}>Name_Company :<b>Seiko </b></p>
                                <p style={{ color: "white" }}>Quality: <b>So Good</b></p>
                                <p className="card-title" style={{ color: "white" }}>Price:<b> 2500 AF</b></p>
                                <p className='text-warning'>Premium waterproof watches, crafted just for you!</p>
                                <button className='btn btn-primary' onClick={() => addToCart({
                                    id: 13, name: 'Seiko', price: 2500, img: '/Clock/Single/13.jpg'
                                })}>Bye</button>
                            </div>
                        </div>
                    </div>

                    <div className="col-3 ">
                        <div className="card ">
                            <img src="/Clock/Single/15.jpg" alt="..." />
                            <div className="card-body images">
                                <p className="card-title" style={{ color: "white" }}>Name_Company :<b>Seiko </b></p>
                                <p style={{ color: "white" }}>Quality: <b>So Good</b></p>
                                <p className="card-title" style={{ color: "white" }}>Price:<b> 2500 AF</b></p>
                                <p className='text-warning'>Premium waterproof watches, crafted just for you!</p>
                                <button className='btn btn-primary'
                                    onClick={() => addToCart({
                                        id: 14, name: 'Seiko', price: 2500, img: '/Clock/Single/15.jpg'
                                    })}>Bye</button>
                            </div>
                        </div>
                    </div>

                    <div className="col-3 ">
                        <div className="card ">
                            <img src="/Clock/Single/16.jpg" alt="..." />
                            <div className="card-body images">
                                <p className="card-title" style={{ color: "white" }}>Name_Company :<b>Seiko </b></p>
                                <p style={{ color: "white" }}>Quality: <b>So Good</b></p>
                                <p className="card-title" style={{ color: "white" }}>Price:<b> 2500 AF</b></p>
                                <p className='text-warning'>Premium waterproof watches, crafted just for you!</p>
                                <button className='btn btn-primary' onClick={() => addToCart({
                                    id: 15, name: 'Seiko', price: 2500, img: '/Clock/Single/16.jpg'
                                })}>Bye</button>
                            </div>
                        </div>
                    </div>

                    <div className="col-3 ">
                        <div className="card ">
                            <img src="/Clock/Single/17.jpg" alt="..." />
                            <div className="card-body images">
                                <p className="card-title" style={{ color: "white" }}>Name_Company :<b>Seiko </b></p>
                                <p style={{ color: "white" }}>Quality: <b>So Good</b></p>
                                <p className="card-title" style={{ color: "white" }}>Price:<b> 2500 AF</b></p>
                                <p className='text-warning'>Premium waterproof watches, crafted just for you!</p>
                                <button className='btn btn-primary' onClick={() => addToCart({
                                    id: 16, name: 'Seiko', price: 2500, img: '/Clock/Single/17.jpg'
                                })}>Bye</button>
                            </div>
                        </div>
                    </div>

                    <div className="col-3 ">
                        <div className="card ">
                            <img src="/Clock/Single/18.jpg" alt="..." />
                            <div className="card-body images">
                                <p className="card-title" style={{ color: "white" }}>Name_Company :<b>Seiko </b></p>
                                <p style={{ color: "white" }}>Quality: <b>So Good</b></p>
                                <p className="card-title" style={{ color: "white" }}>Price:<b> 2500 AF</b></p>
                                <p className='text-warning'>Premium waterproof watches, crafted just for you!</p>
                                <button className='btn btn-primary' onClick={() => addToCart({
                                    id: 17, name: 'Seiko', price: 2500, img: '/Clock/Single/18.jpg'
                                })}>Bye</button>
                            </div>
                        </div>
                    </div>

                    <div className="col-3 ">
                        <div className="card ">
                            <img src="/Clock/Single/19.jpg" alt="..." />
                            <div className="card-body images">
                                <p className="card-title" style={{ color: "white" }}>Name_Company :<b>Seiko </b></p>
                                <p style={{ color: "white" }}>Quality: <b>So Good</b></p>
                                <p className="card-title" style={{ color: "white" }}>Price:<b> 2500 AF</b></p>
                                <p className='text-warning'>Premium waterproof watches, crafted just for you!</p>
                                <button className='btn btn-primary' onClick={() => addToCart({
                                    id: 18, name: 'Seiko', price: 2500, img: '/Clock/Single/19.jpg'
                                })}>Bye</button>
                            </div>
                        </div>
                    </div>

                    <div className="col-3 ">
                        <div className="card ">
                            <img src="/Clock/Single/20.jpg" alt="..." />
                            <div className="card-body images">
                                <p className="card-title" style={{ color: "white" }}>Name_Company :<b>Seiko </b></p>
                                <p style={{ color: "white" }}>Quality: <b>So Good</b></p>
                                <p className="card-title" style={{ color: "white" }}>Price:<b> 2500 AF</b></p>
                                <p className='text-warning'>Premium waterproof watches, crafted just for you!</p>
                                <button className='btn btn-primary' onClick={() => addToCart({
                                    id: 19, name: 'Seiko', price: 2500, img: '/Clock/Single/20.jpg'
                                })}>Bye</button>
                            </div>
                        </div>
                    </div>

                    <div className="col-3 ">
                        <div className="card ">
                            <img src="/Clock/Single/33.jpg" alt="..." />
                            <div className="card-body images">
                                <p className="card-title" style={{ color: "white" }}>Name_Company :<b>Seiko </b></p>
                                <p style={{ color: "white" }}>Quality: <b>So Good</b></p>
                                <p className="card-title" style={{ color: "white" }}>Price:<b> 2500 AF</b></p>
                                <p className='text-warning'>Premium waterproof watches, crafted just for you!</p>
                                <button className='btn btn-primary' onClick={() => addToCart({
                                    id: 20, name: 'Seiko', price: 2500, img: '/Clock/Single/33.jpg'
                                })}>Bye</button>
                            </div>
                        </div>
                    </div>

                    <div className="col-3 ">
                        <div className="card ">
                            <img src="/Clock/Single/22.jpg" alt="..." />
                            <div className="card-body images">
                                <p className="card-title" style={{ color: "white" }}>Name_Company :<b>Seiko </b></p>
                                <p style={{ color: "white" }}>Quality: <b>So Good</b></p>
                                <p className="card-title" style={{ color: "white" }}>Price:<b> 2500 AF</b></p>
                                <p className='text-warning'>Premium waterproof watches, crafted just for you!</p>
                                <button className='btn btn-primary' onClick={() => addToCart({
                                    id: 21, name: 'Seiko', price: 2500, img: '/Clock/Single/22.jpg'
                                })}>Bye</button>
                            </div>
                        </div>
                    </div>

                    <div className="col-3 ">
                        <div className="card ">
                            <img src="/Clock/Single/23.jpg" alt="..." />
                            <div className="card-body images">
                                <p className="card-title" style={{ color: "white" }}>Name_Company :<b>Seiko </b></p>
                                <p style={{ color: "white" }}>Quality: <b>So Good</b></p>
                                <p className="card-title" style={{ color: "white" }}>Price:<b> 2500 AF</b></p>
                                <p className='text-warning'>Premium waterproof watches, crafted just for you!</p>
                                <button className='btn btn-primary' onClick={() => addToCart({
                                    id: 22, name: 'Seiko', price: 2500, img: '/Clock/Single/23.jpg'
                                })}>Bye</button>
                            </div>
                        </div>
                    </div>

                    <div className="col-3 ">
                        <div className="card ">
                            <img src="/Clock/Single/31.jpg" alt="..." />
                            <div className="card-body images">
                                <p className="card-title" style={{ color: "white" }}>Name_Company :<b>Seiko </b></p>
                                <p style={{ color: "white" }}>Quality: <b>So Good</b></p>
                                <p className="card-title" style={{ color: "white" }}>Price:<b> 2500 AF</b></p>
                                <p className='text-warning'>Premium waterproof watches, crafted just for you!</p>
                                <button className='btn btn-primary' onClick={() => addToCart({
                                    id: 23, name: 'Seiko', price: 2500, img: '/Clock/Single/31.jpg'
                                })}>Bye</button>
                            </div>
                        </div>
                    </div>

                    <div className="col-3 ">
                        <div className="card ">
                            <img src="/Clock/Single/25.jpg" alt="..." />
                            <div className="card-body images">
                                <p className="card-title" style={{ color: "white" }}>Name_Company :<b>Seiko </b></p>
                                <p style={{ color: "white" }}>Quality: <b>So Good</b></p>
                                <p className="card-title" style={{ color: "white" }}>Price:<b> 2500 AF</b></p>
                                <p className='text-warning'>Premium waterproof watches, crafted just for you!</p>
                                <button className='btn btn-primary' onClick={() => addToCart({
                                    id: 24, name: 'Seiko', price: 2500, img: '/Clock/Single/25.jpg'
                                })}>Bye</button>
                            </div>
                        </div>
                    </div>

                    <div className="col-3 ">
                        <div className="card ">
                            <img src="/Clock/Single/26.jpg" alt="..." />
                            <div className="card-body images">
                                <p className="card-title" style={{ color: "white" }}>Name_Company :<b>Seiko </b></p>
                                <p style={{ color: "white" }}>Quality: <b>So Good</b></p>
                                <p className="card-title" style={{ color: "white" }}>Price:<b> 2500 AF</b></p>
                                <p className='text-warning'>Premium waterproof watches, crafted just for you!</p>
                                <button className='btn btn-primary' onClick={() => addToCart({
                                    id: 25, name: 'Seiko', price: 2500, img: '/Clock/Single/26.jpg'
                                })}>Bye</button>
                            </div>
                        </div>
                    </div>

                    <div className="col-3 ">
                        <div className="card ">
                            <img src="/Clock/Single/27.jpg" alt="..." />
                            <div className="card-body images">
                                <p className="card-title" style={{ color: "white" }}>Name_Company :<b>Seiko </b></p>
                                <p style={{ color: "white" }}>Quality: <b>So Good</b></p>
                                <p className="card-title" style={{ color: "white" }}>Price:<b> 2500 AF</b></p>
                                <p className='text-warning'>Premium waterproof watches, crafted just for you!</p>
                                <button className='btn btn-primary' onClick={() => addToCart({
                                    id: 26, name: 'Seiko', price: 2500, img: '/Clock/Single/27.jpg'
                                })}>Bye</button>
                            </div>
                        </div>
                    </div>

                    <div className="col-3 ">
                        <div className="card ">
                            <img src="/Clock/Single/28.jpg" alt="..." />
                            <div className="card-body images">
                                <p className="card-title" style={{ color: "white" }}>Name_Company :<b>Seiko </b></p>
                                <p style={{ color: "white" }}>Quality: <b>So Good</b></p>
                                <p className="card-title" style={{ color: "white" }}>Price:<b> 2500 AF</b></p>
                                <p className='text-warning'>Premium waterproof watches, crafted just for you!</p>
                                <button className='btn btn-primary' onClick={() => addToCart({
                                    id: 27, name: 'Seiko', price: 2500, img: '/Clock/Single/28.jpg'
                                })}>Bye</button>
                            </div>
                        </div>
                    </div>

                    <div className="col-3 ">
                        <div className="card ">
                            <img src="/Clock/Single/34.jpg" alt="..." />
                            <div className="card-body images">
                                <p className="card-title" style={{ color: "white" }}>Name_Company :<b>Seiko </b></p>
                                <p style={{ color: "white" }}>Quality: <b>So Good</b></p>
                                <p className="card-title" style={{ color: "white" }}>Price:<b> 2500 AF</b></p>
                                <p className='text-warning'>Premium waterproof watches, crafted just for you!</p>
                                <button className='btn btn-primary' onClick={() => addToCart({
                                    id: 28, name: 'Seiko', price: 2500, img: '/Clock/Single/34.jpg'
                                })}>Bye</button>
                            </div>
                        </div>
                    </div>

                    <div className="col-3 ">
                        <div className="card ">
                            <img src="/Clock/Single/30.jpg" alt="..." />
                            <div className="card-body images">
                                <p className="card-title" style={{ color: "white" }}>Name_Company :<b>Seiko </b></p>
                                <p style={{ color: "white" }}>Quality: <b>So Good</b></p>
                                <p className="card-title" style={{ color: "white" }}>Price:<b> 2500 AF</b></p>
                                <p className='text-warning'>Premium waterproof watches, crafted just for you!</p>
                                <button className='btn btn-primary' onClick={() => addToCart({
                                    id: 29, name: 'Seiko', price: 2500, img: '/Clock/Single/30.jpg'
                                })}>Bye</button>
                            </div>
                        </div>
                    </div>

                    <div className="col-3 ">
                        <div className="card ">
                            <img src="/Clock/Single/38.jpg" alt="..." />
                            <div className="card-body images">
                                <p className="card-title" style={{ color: "white" }}>Name_Company :<b>Seiko </b></p>
                                <p style={{ color: "white" }}>Quality: <b>So Good</b></p>
                                <p className="card-title" style={{ color: "white" }}>Price:<b> 2500 AF</b></p>
                                <p className='text-warning'>Premium waterproof watches, crafted just for you!</p>
                                <button className='btn btn-primary' onClick={() => addToCart({
                                    id: 30, name: 'Seiko', price: 2500, img: '/Clock/Single/38.jpg'
                                })}>Bye</button>
                            </div>
                        </div>
                    </div>

                    <div className="col-3 ">
                        <div className="card ">
                            <img src="/Clock/Single/36.jpg" alt="..." />
                            <div className="card-body images">
                                <p className="card-title" style={{ color: "white" }}>Name_Company :<b>Seiko </b></p>
                                <p style={{ color: "white" }}>Quality: <b>So Good</b></p>
                                <p className="card-title" style={{ color: "white" }}>Price:<b> 2500 AF</b></p>
                                <p className='text-warning'>Premium waterproof watches, crafted just for you!</p>
                                <button className='btn btn-primary' onClick={() => addToCart({
                                    id: 31, name: 'Seiko', price: 2500, img: '/Clock/Single/36.jpg'
                                })}>Bye</button>
                            </div>
                        </div>
                    </div>

                    <div className="col-3 ">
                        <div className="card ">
                            <img src="/Clock/Single/37.jpg" alt="..." />
                            <div className="card-body images">
                                <p className="card-title" style={{ color: "white" }}>Name_Company :<b>Seiko </b></p>
                                <p style={{ color: "white" }}>Quality: <b>So Good</b></p>
                                <p className="card-title" style={{ color: "white" }}>Price:<b> 2500 AF</b></p>
                                <p className='text-warning'>Premium waterproof watches, crafted just for you!</p>
                                <button className='btn btn-primary'>Bye</button>
                            </div>
                        </div>
                    </div>







                </div>
            )}

            {/* Couple Watch */}

            {watchType === 'Couple_Watch' && (

                <div className="row row-cols-1  ">
                    <div className="text-center mb-5 p-5 rounded-4 shadow-lg border border-opacity-25 border-light"
                        style={{
                            background: 'linear-gradient(135deg, #2d0b1e 0%, #12020b 50%, #000000 100%)',
                            boxShadow: '0 15px 35px rgba(0, 0, 0, 0.5)'
                        }}>
                        <h2 className="fw-bold mb-4"
                            style={{
                                color: '#ffd700',
                                fontFamily: "'Cinzel', 'Playfair Display', 'Times New Roman', serif",
                                letterSpacing: '2px',
                                fontSize: '32px',
                                textShadow: '0 2px 4px rgba(0,0,0,0.6)'
                            }}>
                            Welcome to the Great Couple Watch Collection
                        </h2>
                        <h3 className="my-3 fw-bold"
                            style={{
                                color: '#ffffff',
                                fontFamily: "ui-serif",
                                fontSize: '28px',
                                textShadow: '0 2px 4px rgba(0,0,0,0.6)',
                                direction: 'rtl'
                            }}>
                            به کلکسیون بزرگ ساعت‌های جوره ای خوش آمدید
                        </h3>
                        <h3 className="fw-normal"
                            style={{
                                color: 'rgba(255, 255, 255, 0.8)',
                                fontFamily: "serif",
                                fontSize: '24px',
                                textShadow: '0 2px 4px rgba(0,0,0,0.6)',
                                direction: 'rtl'
                            }}>
                            د جوړه ساعتونو لوې مجموعې ته ښه راغلاست
                        </h3>
                    </div>



                    {/* clock 1 */}
                    <div className="col-3 ">
                        <div className="card">
                            <img src="/Clock/Couple/1.jpg" alt="..." />
                            <div className="card-body images">
                                <p className="card-title" style={{ color: "white" }}>Name_Company :<b>Rolex</b></p>
                                <p style={{ color: "white" }}>Quality: <b>So Good</b></p>
                                <p className="card-title" style={{ color: "white" }}>Price:<b> 3500 AF</b></p>
                                <p className='text-warning'>Premium waterproof watches, crafted just for you!</p>
                                <button className='btn btn-primary' onClick={() => addToCart({
                                    id: 32, name: 'Seiko', price: 2500, img: '/Clock/Single/1.jpg'
                                })}>Bye</button>
                            </div>
                        </div>
                    </div>
                    {/* clock 2 */}
                    <div className="col-3 ">
                        <div className="card ">
                            <img src="/Clock/Couple/2.jpg" alt="..." />
                            <div className="card-body images">
                                <p className="card-title" style={{ color: "white" }}>Name_Company :<b>Rolex</b></p>
                                <p style={{ color: "white" }}>Quality: <b>So Good</b></p>
                                <p className="card-title" style={{ color: "white" }}>Price:<b> 3500 AF</b></p>
                                <p className='text-warning'>Premium waterproof watches, crafted just for you!</p>
                                <button className='btn btn-primary' onClick={() => addToCart({
                                    id: 33, name: 'Seiko', price: 2500, img: '/Clock/Single/2.jpg'
                                })}>Bye</button>
                            </div>
                        </div>
                    </div>
                    {/* clock 3 */}
                    <div className="col-3 ">
                        <div className="card ">
                            <img src="/Clock/Couple/3.jpg" alt="..." />
                            <div className="card-body images">
                                <p className="card-title" style={{ color: "white" }}>Name_Company :<b>Rolex</b></p>
                                <p style={{ color: "white" }}>Quality: <b>So Good</b></p>
                                <p className="card-title" style={{ color: "white" }}>Price:<b> 2500 AF</b></p>
                                <p className='text-warning'>Premium waterproof watches, crafted just for you!</p>
                                <button className='btn btn-primary' onClick={() => addToCart({
                                    id: 34, name: 'Seiko', price: 2500, img: '/Clock/Single/3.jpg'
                                })}>Bye</button>
                            </div>
                        </div>
                    </div>
                    {/* clock 4 */}
                    <div className="col-3 ">
                        <div className="card ">
                            <img src="/Clock/Couple/9.jpg" alt="..." />
                            <div className="card-body images">
                                <p className="card-title" style={{ color: "white" }}>Name_Company :<b>Seiko </b></p>
                                <p style={{ color: "white" }}>Quality: <b>So Good</b></p>
                                <p className="card-title" style={{ color: "white" }}>Price:<b> 2500 AF</b></p>
                                <p className='text-warning'>Premium waterproof watches, crafted just for you!</p>
                                <button className='btn btn-primary' onClick={() => addToCart({
                                    id: 35, name: 'Seiko', price: 2500, img: '/Clock/Single/9.jpg'
                                })}>Bye</button>
                            </div>
                        </div>
                    </div>
                    {/* clock 5 */}
                    <div className="col-3 ">
                        <div className="card ">
                            <img src="/Clock/Couple/5.jpg" alt="..." />
                            <div className="card-body images">
                                <p className="card-title" style={{ color: "white" }}>Name_Company :<b>Seiko </b></p>
                                <p style={{ color: "white" }}>Quality: <b>So Good</b></p>
                                <p className="card-title" style={{ color: "white" }}>Price:<b> 4500 AF</b></p>
                                <p className='text-warning'>Premium waterproof watches, crafted just for you!</p>
                                <button className='btn btn-primary' onClick={() => addToCart({
                                    id: 36, name: 'Seiko', price: 2500, img: '/Clock/Single/5.jpg'
                                })}>Bye</button>
                            </div>
                        </div>
                    </div>

                    {/* clock 6 */}

                    <div className="col-3 ">
                        <div className="card ">
                            <img src="/Clock/Couple/6.jpg" alt="..." />
                            <div className="card-body images">
                                <p className="card-title" style={{ color: "white" }}>Name_Company :<b>Seiko </b></p>
                                <p style={{ color: "white" }}>Quality: <b>So Good</b></p>
                                <p className="card-title" style={{ color: "white" }}>Price:<b> 4500 AF</b></p>
                                <p className='text-warning'>Premium waterproof watches, crafted just for you!</p>
                                <button className='btn btn-primary' onClick={() => addToCart({
                                    id: 37, name: 'Seiko', price: 2500, img: '/Clock/Single/6.jpg'
                                })}>Bye</button>
                            </div>
                        </div>
                    </div>

                    <div className="col-3 ">
                        <div className="card ">
                            <img src="/Clock/Couple/7.jpg" alt="..." />
                            <div className="card-body images">
                                <p className="card-title" style={{ color: "white" }}>Name_Company :<b>Seiko </b></p>
                                <p style={{ color: "white" }}>Quality: <b>So Good</b></p>
                                <p className="card-title" style={{ color: "white" }}>Price:<b> 2500 AF</b></p>
                                <p className='text-warning'>Premium waterproof watches, crafted just for you!</p>
                                <button className='btn btn-primary' onClick={() => addToCart({
                                    id: 38, name: 'Seiko', price: 2500, img: '/Clock/Single/7.jpg'
                                })}>Bye</button>
                            </div>
                        </div>
                    </div>

                    <div className="col-3 ">
                        <div className="card ">
                            <img src="/Clock/Couple/8.jpg" alt="..." />
                            <div className="card-body images">
                                <p className="card-title" style={{ color: "white" }}>Name_Company :<b>Seiko </b></p>
                                <p style={{ color: "white" }}>Quality: <b>So Good</b></p>
                                <p className="card-title" style={{ color: "white" }}>Price:<b> 2500 AF</b></p>
                                <p className='text-warning'>Premium waterproof watches, crafted just for you!</p>
                                <button className='btn btn-primary' onClick={() => addToCart({
                                    id: 39, name: 'Seiko', price: 2500, img: '/Clock/Single/8.jpg'
                                })}>Bye</button>
                            </div>
                        </div>
                    </div>

                    <div className="col-3 ">
                        <div className="card ">
                            <img src="/Clock/Couple/9.jpg" alt="..." />
                            <div className="card-body images">
                                <p className="card-title" style={{ color: "white" }}>Name_Company :<b>Seiko </b></p>
                                <p style={{ color: "white" }}>Quality: <b>So Good</b></p>
                                <p className="card-title" style={{ color: "white" }}>Price:<b> 2500 AF</b></p>
                                <p className='text-warning'>Premium waterproof watches, crafted just for you!</p>
                                <button className='btn btn-primary' onClick={() => addToCart({
                                    id: 40, name: 'Seiko', price: 2500, img: '/Clock/Single/9.jpg'
                                })}>Bye</button>
                            </div>
                        </div>
                    </div>

                    <div className="col-3 ">
                        <div className="card ">
                            <img src="/Clock/Couple/10.jpg" alt="..." />
                            <div className="card-body images">
                                <p className="card-title" style={{ color: "white" }}>Name_Company :<b>Seiko </b></p>
                                <p style={{ color: "white" }}>Quality: <b>So Good</b></p>
                                <p className="card-title" style={{ color: "white" }}>Price:<b> 2500 AF</b></p>
                                <p className='text-warning'>Premium waterproof watches, crafted just for you!</p>
                                <button className='btn btn-primary' onClick={() => addToCart({
                                    id: 41, name: 'Seiko', price: 2500, img: '/Clock/Single/10.jpg'
                                })}>Bye</button>
                            </div>
                        </div>
                    </div>


                    <div className="col-3 ">
                        <div className="card ">
                            <img src="/Clock/Couple/12.jpg" alt="..." />
                            <div className="card-body images">
                                <p className="card-title" style={{ color: "white" }}>Name_Company :<b>Seiko </b></p>
                                <p style={{ color: "white" }}>Quality: <b>So Good</b></p>
                                <p className="card-title" style={{ color: "white" }}>Price:<b> 2500 AF</b></p>
                                <p className='text-warning'>Premium waterproof watches, crafted just for you!</p>
                                <button className='btn btn-primary' onClick={() => addToCart({
                                    id: 42, name: 'Seiko', price: 2500, img: '/Clock/Single/12.jpg'
                                })}>Bye</button>
                            </div>
                        </div>
                    </div>

                    <div className="col-3 ">
                        <div className="card ">
                            <img src="/Clock/Couple/17.jpg" alt="..." />
                            <div className="card-body images">
                                <p className="card-title" style={{ color: "white" }}>Name_Company :<b>Seiko </b></p>
                                <p style={{ color: "white" }}>Quality: <b>So Good</b></p>
                                <p className="card-title" style={{ color: "white" }}>Price:<b> 2500 AF</b></p>
                                <p className='text-warning'>Premium waterproof watches, crafted just for you!</p>
                                <button className='btn btn-primary' onClick={() => addToCart({
                                    id: 43, name: 'Seiko', price: 2500, img: '/Clock/Single/17.jpg'
                                })}>Bye</button>
                            </div>
                        </div>
                    </div>

                    <div className="col-3 ">
                        <div className="card ">
                            <img src="/Clock/Couple/14.jpg" alt="..." />
                            <div className="card-body images">
                                <p className="card-title" style={{ color: "white" }}>Name_Company :<b>Seiko </b></p>
                                <p style={{ color: "white" }}>Quality: <b>So Good</b></p>
                                <p className="card-title" style={{ color: "white" }}>Price:<b> 2500 AF</b></p>
                                <p className='text-warning'>Premium waterproof watches, crafted just for you!</p>
                                <button className='btn btn-primary' onClick={() => addToCart({
                                    id: 44, name: 'Seiko', price: 2500, img: '/Clock/Single/14.jpg'
                                })}>Bye</button>
                            </div>
                        </div>
                    </div>

                    <div className="col-3 ">
                        <div className="card ">
                            <img src="/Clock/Couple/15.jpg" alt="..." />
                            <div className="card-body images">
                                <p className="card-title" style={{ color: "white" }}>Name_Company :<b>Seiko </b></p>
                                <p style={{ color: "white" }}>Quality: <b>So Good</b></p>
                                <p className="card-title" style={{ color: "white" }}>Price:<b> 2500 AF</b></p>
                                <p className='text-warning'>Premium waterproof watches, crafted just for you!</p>
                                <button className='btn btn-primary' onClick={() => addToCart({
                                    id: 45, name: 'Seiko', price: 2500, img: '/Clock/Single/15.jpg'
                                })}>Bye</button>
                            </div>
                        </div>
                    </div>

                    <div className="col-3 ">
                        <div className="card ">
                            <img src="/Clock/Couple/17.jpg" alt="..." />
                            <div className="card-body images">
                                <p className="card-title" style={{ color: "white" }}>Name_Company :<b>Seiko </b></p>
                                <p style={{ color: "white" }}>Quality: <b>So Good</b></p>
                                <p className="card-title" style={{ color: "white" }}>Price:<b> 2500 AF</b></p>
                                <p className='text-warning'>Premium waterproof watches, crafted just for you!</p>
                                <button className='btn btn-primary' onClick={() => addToCart({
                                    id: 46, name: 'Seiko', price: 2500, img: '/Clock/Single/17.jpg'
                                })}>Bye</button>
                            </div>
                        </div>
                    </div>

                    <div className="col-3 ">
                        <div className="card ">
                            <img src="/Clock/Couple/18.jpg" alt="..." />
                            <div className="card-body images">
                                <p className="card-title" style={{ color: "white" }}>Name_Company :<b>Seiko </b></p>
                                <p style={{ color: "white" }}>Quality: <b>So Good</b></p>
                                <p className="card-title" style={{ color: "white" }}>Price:<b> 2500 AF</b></p>
                                <p className='text-warning'>Premium waterproof watches, crafted just for you!</p>
                                <button className='btn btn-primary' onClick={() => addToCart({
                                    id: 47, name: 'Seiko', price: 2500, img: '/Clock/Single/18.jpg'
                                })}>Bye</button>
                            </div>
                        </div>
                    </div>

                    <div className="col-3 ">
                        <div className="card ">
                            <img src="/Clock/Couple/18.jpg" alt="..." />
                            <div className="card-body images">
                                <p className="card-title" style={{ color: "white" }}>Name_Company :<b>Seiko </b></p>
                                <p style={{ color: "white" }}>Quality: <b>So Good</b></p>
                                <p className="card-title" style={{ color: "white" }}>Price:<b> 2500 AF</b></p>
                                <p className='text-warning'>Premium waterproof watches, crafted just for you!</p>
                                <button className='btn btn-primary' onClick={() => addToCart({
                                    id: 48, name: 'Seiko', price: 2500, img: '/Clock/Single/19.jpg'
                                })}>Bye</button>
                            </div>
                        </div>
                    </div>

                    <div className="col-3 ">
                        <div className="card ">
                            <img src="/Clock/Couple/24.jpg" alt="..." />
                            <div className="card-body images">
                                <p className="card-title" style={{ color: "white" }}>Name_Company :<b>Seiko </b></p>
                                <p style={{ color: "white" }}>Quality: <b>So Good</b></p>
                                <p className="card-title" style={{ color: "white" }}>Price:<b> 2500 AF</b></p>
                                <p className='text-warning'>Premium waterproof watches, crafted just for you!</p>
                                <button className='btn btn-primary' onClick={() => addToCart({
                                    id: 49, name: 'Seiko', price: 2500, img: '/Clock/Single/24.jpg'
                                })}>Bye</button>
                            </div>
                        </div>
                    </div>

                    <div className="col-3 ">
                        <div className="card ">
                            <img src="/Clock/Couple/22.jpg" alt="..." />
                            <div className="card-body images">
                                <p className="card-title" style={{ color: "white" }}>Name_Company :<b>Seiko </b></p>
                                <p style={{ color: "white" }}>Quality: <b>So Good</b></p>
                                <p className="card-title" style={{ color: "white" }}>Price:<b> 2500 AF</b></p>
                                <p className='text-warning'>Premium waterproof watches, crafted just for you!</p>
                                <button className='btn btn-primary' onClick={() => addToCart({
                                    id: 50, name: 'Seiko', price: 2500, img: '/Clock/Single/22.jpg'
                                })}>Bye</button>
                            </div>
                        </div>
                    </div>

                    <div className="col-3 ">
                        <div className="card ">
                            <img src="/Clock/Couple/23.jpg" alt="..." />
                            <div className="card-body images">
                                <p className="card-title" style={{ color: "white" }}>Name_Company :<b>Seiko </b></p>
                                <p style={{ color: "white" }}>Quality: <b>So Good</b></p>
                                <p className="card-title" style={{ color: "white" }}>Price:<b> 2500 AF</b></p>
                                <p className='text-warning'>Premium waterproof watches, crafted just for you!</p>
                                <button className='btn btn-primary' onClick={() => addToCart({
                                    id: 51, name: 'Seiko', price: 2500, img: '/Clock/Single/23.jpg'
                                })}>Bye</button>
                            </div>
                        </div>
                    </div>



                </div>

            )}

        </div>
    )

} export default Watches


