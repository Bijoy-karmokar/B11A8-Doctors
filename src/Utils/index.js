export const getDoctors = ()=>{
    const saveDoctors = localStorage.getItem("doctors");
    if(saveDoctors){
        return JSON.parse(saveDoctors);
    }
    return [];
}

export const addDoctors = (doctor) =>{
    // console.log(doctors);
    const doctors =getDoctors();
    const isExist = doctors.find(doct=>doct.id === doctor.id);
    if(isExist) return console.log("Doctor already Exist");
    doctors.push(doctor)
    localStorage.setItem("doctors",JSON.stringify(doctors));
    
}