import React from 'react';
import { TypeAnimation } from 'react-type-animation';
import { motion } from "framer-motion";

const Home = () => {
    return (
        <div>
          <div>
          </div>
          <div className="hero min-h-screen bg-base-200">
  <div className="hero-content flex-col lg:flex-row-reverse">
    <img className='w-80 h-80 rounded-lg' src="https://i.ibb.co/sV1xWSy/cute-gamer-girl-playing-computer-cartoon-vector-icon-illustration-people-technology-icon-concept-iso.jpg" />
    <div>
      <motion.h1 animate={{opacity: 1, scale: 1 }}
                transition={{
                    duration: 5,
                    delay: 0.3,
                    ease: [0.5, 0.71, 1, 1.5],
                    
                }}
                initial={{ opacity: 1, scale: 0.5 }}
                className="text-5xl font-bold mb-3">Nusrath Jahan Jinat</motion.h1>
      <TypeAnimation
      sequence={[
        
        'Iam a Student',
        1000, 
        'Iam a Web developer',
        1000,
        'I also expert in office work',
        1000
        
      ]}
      wrapper="span"
      speed={50}
      style={{ fontSize: '2em', display: 'flex' }}
      repeat={Infinity}
    />

      {/* Open the modal using document.getElementById('ID').showModal() method */}
      <button className="btn  btn-active bg-pink-300" onClick={()=>document.getElementById('my_modal_1').showModal()}>This iS MY CV</button>
      <dialog id="my_modal_1" className="modal">
      <div className="modal-box">
    <p className="py-4">
    <h3 className="font-bold text-lg">Personal Details</h3>
    <h3 className="font-bold text-lg">Name : Nusrath Jahan Jinat</h3>
    <h3 className="font-bold text-lg">Father’s Name : MD. Riaz Uddin </h3>


    <h3 className="font-bold text-lg">Mother’s Name : Khadija Akter </h3>
    <h3 className="font-bold text-lg">Present Address : Sylhet,Mirabazar,Jherjeripara,Evergreen 7</h3>
    <h3 className="font-bold text-lg">Permanent Address : Jamalganj , Bhimkhali ,Nowagown ,Jamalganj ,Bhimkhali-3020 ,Sunamganj</h3>
    <h3 className="font-bold text-lg">Nationality : Bangladeshi</h3>
    <h3 className="font-bold text-lg">Date Of Birth : 16 December 2002</h3>
    <h3 className="font-bold text-lg">Sex : Female </h3>
    <h3 className="font-bold text-lg">Marital Status : Single  </h3>
    <h3 className="font-bold text-lg">Religion : Islam </h3>
    <h3 className="font-bold text-lg">Contact : 01309180432 </h3>
    <h3 className="font-bold text-lg">Religion : Islam </h3>
    <h3 className="font-bold text-lg">Email : nusrathjahanjinat2002@gmail.com</h3>
    <h3 className="font-bold text-lg">I completed my S.S.C exam from : Sunamganj Girl's High School, Sunamganj</h3>
    <h3 className="font-bold text-lg">I complated my H.S.C exam from: Sunamganj Govt Women College, Sunamganj</h3>
    
</p>
    <div className="modal-action">
      <form method="dialog">
        {/* if there is a button in form, it will close the modal */}
        <button className="btn">Go Home </button>
      </form>
    </div>
  </div>
</dialog>
    </div>
  </div>
</div>
        </div>
    );
};

export default Home;