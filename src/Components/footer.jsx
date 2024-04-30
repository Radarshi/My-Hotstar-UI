import React from 'react';
import GI from './../assets/Images/github.png';
import LI from './../assets/Images/linkedin.png';

function footer() {
  return (
    <div>
        <div className="footer pt-12 border-[6px] border-[solid] border-[#303030] text-rose-50">
            <div className="row flex items-start pt-3 pb-0">
                <div className="col flex flex-col p-20 pt-3 pb-3">
            <h2 className='font-bold mb-8 flex flex-col'>Company</h2>
                <a href="https://www.hotstar.com/about-us/in" className='no-underline text-gray-600 hover:font-extrabold hover ' target='_blank'>About us</a>
                <a href="https://careers.hotstar.com/" className='no-underline text-gray-600 pt-4 hover:font-extrabold hover' target='_blank'>Careers</a>
            </div>
            <div className="col flex flex-col p-20 pt-3 pb-3"> 
                <h2 className='font-bold mb-8'>Visit Website in</h2>
                <a href="https://www.youtube.com/shorts/DnGWQGn2dC8" className='no-underline text-gray-600 font-medium mb-3 hover:font-extrabold hover' target='_blank'>English</a>
            </div>
            <div className="col flex flex-col p-20 pt-3 pb-3">
                <h2 className='font-bold mb-8'>Need Help?</h2>
                <a href="https://help.hotstar.com/in/en/support/home" className='no-underline text-gray-600 font-medium mb-3 hover:font-extrabold hover' target='_blank'>Visit Help Center</a>
                <a href="https://www.hotstar.com/in/onboarding/profile?ref=%2Fin%2Ffeedback%2F%3Fpopup%3Dtrue" className='no-underline text-gray-600 font-medium mb-3 pt-2 hover:font-extrabold hover' target='_blank'>Share Feedback</a>
            </div>
            <div className="col flex flex-col p-20 pt-3 pb-3">
                <h2 className='font-bold mb-8'>Connect</h2>
                    <a href="https://www.linkedin.com/in/radarshi-mukherjee" className='no-underline text-gray-600 font-medium mb-3 hover:font-extrabold hover' target='_blank'><img src={LI} alt="" className='w-[30px]'/></a>
                    <a href="https://github.com/Radarshi" className='no-underline text-gray-600 font-medium mb-3 hover:font-extrabold hover' target='_blank'><img src={GI} alt="" className='w-[30px] flex' /></a>
            </div>
            </div>
            <div className='flex flex-row'>
            <p className='font-normal mt-0 mb-0 text-gray-600 p-5'>2024 STAR. All RightsReserved.</p>
           <a href="https://help.hotstar.com/in/en/support/solutions/articles/68000001251-our-terms-of-use" target='_blank'><p className='font-normal mt-0 mb-0 text-gray-600 p-5 hover:font-extrabold hover'>Terms Of Use</p></a>
            <a href="https://www.hotstar.com/privacy-policy/in"><p className='font-normal mt-0 mb-0 text-gray-600 p-5 hover:font-extrabold hover' target='_blank'>Privacy Policy</p></a>
            <a href="https://secure-media.hotstar.com/static-pages/android/US_faq.html#:~:text=Hotstar%20Membership%201%20What%20is%20Hotstar%3F%202%20What,What%20are%20the%20system%20requirements%20necessary%20for%20Hotstar%3F" target='_blank'><p className='font-normal mt-0 mb-0< text-gray-600 p-5 hover:font-extrabold hover'>FAQ</p>
            </a></div>
        </div>
    </div>
  )
}

export default footer;