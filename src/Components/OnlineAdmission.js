import React from 'react'
import Online_style from './Online_admission_style.module.css'

export default function OnlineAdmission() {
  return (
   <>
     <form>
     <h4 className={Online_style.title}>Online Admission</h4>
      <div className={Online_style.Instructions}>
           <div className={Online_style.div1_heading}>Instructions</div>
           
           <p>Please enter your institution online admission instructions here.</p>
        </div>     
      <div className={Online_style.Basic_Details}>
      <div className={Online_style.div1_heading}>Basic Details</div>
           <div className={Online_style.container}>
               <div className={Online_style.input_box}>
               <label >Class<sup>*</sup></label>
                    <select placeholder="select">
                        <option >Select</option>
                        <option >Class 1</option>
                        <option >Class 2</option>
                        <option >Class 3</option>
                        <option >Class 4</option>
                        <option >Class 5</option>
                    </select>
               </div>
               <div className={Online_style.input_box}>
               <label>First Name<sup>*</sup></label>
                    <input type='text'/>
               </div>
               <div className={Online_style.input_box}>
               <label>Last Name</label>
                    <input type='text'/>
               </div>
               <div className={Online_style.input_box}>
               <label>Gender<sup>*</sup></label>
                    <select>
                      <option>Select</option>
                      <option>Male</option>
                      <option>Female</option>
                    </select>
               </div>
               <div className={Online_style.input_box}>
               <label>Dat of Birth</label>
                    <input type='date' />
               </div>
               <div className={Online_style.input_box}>
               <label>Mobile Number</label>
                    <input type='number' />
               </div>
               <div className={Online_style.input_box}>
               <label>Email</label>
                    <input type='email'/>
               </div>
               <div className={Online_style.input_box}>
               <label>Studnet Photo</label>
                    <input type='file' />
               </div>
              
               
             </div>

       
        </div>     
      <div className={Online_style.Parent_Detail}>
      <div className={Online_style.div1_heading}>Parent Detail</div> 
        <div className={Online_style.container}>
        <div className={Online_style.input_box}>
               <label>Father Name</label>
                    <input type='text'/>
               </div>
               <div className={Online_style.input_box}>
               <label>Mother Name</label>
                    <input type='text'/>
               </div>  
        </div> 
     </div>     
      <div className={Online_style.Guardian_Details}>
      <div className={Online_style.div1_heading}>Guardian Details</div> 
        <div className={Online_style.container}>
        <div className={Online_style.input_g}>
              <nav className={Online_style.Nav_bar}>
              <span className={Online_style.Guardian_heading}>If Guardian Is<sup>*</sup><br/></span>
              <span><input className={Online_style.input_type} type='radio' name='one' />Father</span>
              <span><input className={Online_style.input_type} type='radio' name='one'/>Mother</span>
              <span><input className={Online_style.input_type} type='radio' name='one'/>Other</span>
              </nav> <br/>
             
              
               
           </div>  {/** input type='radio' end */}
                <div className={Online_style.input_box}>
                   <label>Guardian Name<sup>*</sup></label>
                      <input type='text'/>
               </div>  
               <div className={Online_style.input_box}>
                   <label>Guardian Relation<sup>*</sup></label>
                      <input type='text'/>
               </div>  
               <div className={Online_style.input_box}>
                   <label>Guardian Email</label>
                      <input type='text'/>
               </div>  
               <div className={Online_style.input_box}>
                   <label>Guardian Photo</label>
                      <input type='file'/>
               </div>  
               <div className={Online_style.input_box}>
                   <label>Guardian Phone</label>
                      <input type='number'/>
               </div>  
               <div className={Online_style.input_box}>
                   <label>Guardian Occupation</label>
                      <input type='text'/>
               </div> 
               <div className={Online_style.input_box}>
                    <label>Guardian Address</label>
                     <textarea rows='5' cols='10'/>
               </div> 
        </div> 
      </div>     
      <div className={Online_style.Student_Address_Details}>
      <div className={Online_style.div1_heading}>Student Address Details</div> 
      <div className={Online_style.container}>
      <div className={Online_style.input_box}>
                   <label>If Guardian Address Is Current Address<br/>
                          Current Address</label>
                          <textarea rows='5' cols='10'/>
               </div>  
               <div className={Online_style.input_box}>
                   <label>If Permanent Address Is Current Address<br/>
                          Permanent Address</label>
                          <textarea rows='5' cols='10'/>
               </div>  
      </div>
      
      
      </div>     
      <div className={Online_style.Miscellaneous_Details}>
      <div className={Online_style.div1_heading}>Miscellaneous Details</div> 
         <div className={Online_style.container}>
               <div className={Online_style.input_box}>
                   <label>National Identification Number</label>
                      <input type='text'/>
               </div> 
               <div className={Online_style.input_box}>
                   <label>Local Identification Number</label>
                      <input type='text'/>
               </div>
               <div className={Online_style.input_box}>
                   <label>Previous School Details</label>
                   <textarea rows='5' cols='10'/>
               </div>

         </div>  
     
     </div>     
      <div className={Online_style.Upload_Documents}>
        <div className={Online_style.div1_heading}>Upload Documents</div> 
         <div className={Online_style.container}>

         <div className={Online_style.input_box}>
                   <label>Documents (To Upload Multiple Document Compress It In A Single File Then Upload It)</label>
                      <input type='file' />
               </div> 
          </div>  
     
     </div> 
        
    </form> 
    <button className={Online_style.submit_button} type='submit'>Submit</button>      
   </>
  )
}
