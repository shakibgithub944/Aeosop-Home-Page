import React from 'react';

const Footer = () => {
    return (
        <>
            <div className='md:flex bg-black text-white w-full'>
                <div className='md:w-2/5'>
                    <div className='m-5 my-10 h-96'>
                        <input type="text" placeholder="Email" className="input bg-black border-1 border-white input-bordered input-md w-full m-5 md:ml-16" />
                        <div className='flex items-center justify-center'>
                            <input type="checkbox" className="checkbox border-1 border-white  md:ml-16" />
                            <p className='m-4'>Subscribe to receive communications from Aesop about our products and services. By subscribing, you confirm you have read and accept our privacy policy </p>
                        </div>
                    </div>
                    <div className=' ml-5 md:ml-16 h-96'>
                        <h1 className='font-bold'>Sustainability</h1>
                        <hr className='my-8' />
                        <p>All Aesop products are vegan, and we do not test our formulations or ingredients on animals. We are Leaping Bunny approved and a Certified B Corporation. Learn more</p>
                    </div>
                </div>

                <div className='w-full ml-20'>
                    <footer className="footer grid-rows-2 p-10">
                        <div>
                            <span className="font-bold text-2xl">Orders and support</span>
                            <p className="link link-hover my-1 text-xl">Contact us</p>
                            <p className="link link-hover my-1 text-xl">Faq</p>
                            <p className="link link-hover my-1 text-xl">Shipping</p>
                            <p className="link link-hover my-1 text-xl">Return</p>
                            <p className="link link-hover my-1 text-xl">Order history</p>
                            <p className="link link-hover my-1 text-xl">Terms and conditions</p>
                        </div>
                        <div>
                            <span className="font-bold text-2xl">About</span>
                            <p className="link link-hover my-1 text-xl">Our story</p>
                            <p className="link link-hover my-1 text-xl">Foundation</p>
                            <p className="link link-hover my-1 text-xl">Careers</p>
                            <p className="link link-hover my-1 text-xl">Privacy policy</p>
                            <p className="link link-hover my-1 text-xl">Accessibility</p>
                            <p className="link link-hover my-1 text-xl">Cookie Policy</p>
                        </div>
                        <div>
                            <span className="font-bold text-2xl">Services</span>
                            <p className="link link-hover my-1 text-xl">Live assistance</p>
                            <p className="link link-hover my-1 text-xl">Corporate gifts</p>
                            <p className="link link-hover my-1 text-xl">Facial appointments</p>
                            <p className="link link-hover my-1 text-xl">Click and Collect</p>
                            <p className="link link-hover my-1 text-xl">Video consultation</p>
                        </div>
                        <div>
                            <span className="font-bold text-2xl">Social</span>
                            <p className="link link-hover my-1 text-xl">Twitter</p>
                            <p className="link link-hover my-1 text-xl">Instagram</p>
                            <p className="link link-hover my-1 text-xl">Facebook</p>
                            <p className="link link-hover my-1 text-xl">Github</p>
                        </div>
                        <div>
                            <span className="font-bold text-2xl">Location preferences</span>
                            <p className="link link-hover my-1 text-xl">Shipping: <br /> Hong Kong SAR, China</p>
                            <p className="link link-hover my-1 text-xl">Language: <br />
                                繁體中文
                                English
                                简体中文</p>
                        </div>
                    </footer>
                </div>
            </div>
            <hr />
            <p className='bg-black text-white p-16'>© Aesop</p>
        </>
    );
};

export default Footer;