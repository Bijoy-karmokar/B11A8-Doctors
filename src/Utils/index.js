import toast from "react-hot-toast";

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
    if(isExist) return toast.error("Doctor already Exist");
    doctors.push(doctor)
    localStorage.setItem("doctors",JSON.stringify(doctors));
    toast.success("Doctor added successfully");
    
}
export const deletedDoctors = (id) =>{
    // console.log(doctors);
    const doctors =getDoctors();
    const remaining = doctors.filter(doct=>doct.id !== id);
    localStorage.setItem("doctors",JSON.stringify(remaining));
    toast.success("Doctor deleted Successfully");
}