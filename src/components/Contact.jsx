// import React from 'react'

import "../styles/contact.scss"
// const Contact = () => {
//   return (
//     <div className="contact">
//       <main>
//         <h1>Contact Us</h1>

//         <form>
//           <div>
//             <label>Name</label>
//             <input type="text" required placeholder="Abc" />
//           </div>

//           <div>
//             <label>Email</label>
//             <input type="email" required placeholder="Abc@xyz.com" />
//           </div>
//           <div>
//             <label>Message</label>
//             <input
//               type="text"
//               required
//               placeholder="Tell us about your query..."
//             />
//           </div>

//           <button type="submit">Send</button>
//         </form>
//       </main>
//     </div>
//   );
// }

// export default Contact
import React from 'react'

const Contact = () => {
  return (
    <div className='contact'>
      <main>
        <h1>contact us</h1>
        <form>
          <div>
          <label>Name</label>
          <input type="text" placeholder='enter your name'/>
          </div>
          <div>
          <label>Email</label>
          <input type="email" placeholder='abc@xyz.com' required/>

          </div>
          <div>
          <label>Message</label>
          <input type="text" placeholder='tell us about your query' required/>
          
          </div>
         

         <button type ="submit">Send</button>


        </form>
      </main>
    </div>
  )
}

export default Contact
