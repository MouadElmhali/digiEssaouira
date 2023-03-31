import React, { useEffect, useReducer, useRef, useState } from 'react'


const TextArea = ({name, label, placeholder, id, handleChange, required}:any) => {
    return (
        <div className='flex flex-col my-5'>
            <p className='text-md text-blue w-64 md:w-80 mb-2 mx-px' >{label}</p>
            <textarea className='border border-gray-400 rounded-xl h-[8.5rem] px-4 py-2 w-64 md:w-80' name={id} id={id} placeholder={placeholder} onChange={handleChange} required = {required}/>
        </div>
    )
}

const TextInput = ({name, label, placeholder, id, handleChange, required}:any) => {
    return (
        <div className='flex flex-col my-5'>
            <p className='text-md text-blue w-64 md:w-80 mb-2 mx-px' >{label}</p>
            <input className='border border-gray-400 rounded-xl px-4 py-2  w-64 md:w-80' type="text" name={id} id={id} placeholder={placeholder} onChange={handleChange} required = {required}/>
        </div>
    )
}

// Requires inputRef : useReference object
const FileInput = ({id, name, label, placeholder,  handleChange, required, uploadText, inputRef}:any) => {
    const handleUploadClick = (e) => {
        e.preventDefault();
        // 👇 We redirect the click event onto the hidden input element
        inputRef.current?.click();
    };

    const [fileName, setFileName] = useState("");
    
    return (
        <div className='flex flex-col my-5'>
            <p className='text-md text-blue w-40 mb-2 mx-px' >{label}</p>
            <input 
                type = "file" 
                className='border border-gray-400 rounded-xl px-4 py-2  w-64 md:w-80' 
                style={{display: 'none'}} 
                name={id} 
                id={id} 
                ref={inputRef} 
                onChange={(e) => {
                    setFileName(e.target.files[0].name); 
                    handleChange(e)
                }} 
                required = {required}/>
            <button 
                className='border border-gray-400 rounded-xl px-4 py-2  w-64 md:w-40 flex items-center justify-center gap-x-5' 
                onClick={handleUploadClick}>

                <img 
                    src='/icons/upload.png' 
                    className='h-[15px] w-[15px] object-contain' /> 

                {uploadText ? uploadText : "إختر ملف"} 
            
            </button>
            {fileName}
        </div>
    )
}



const reducer = (state, event) => {
    return {
        ...state,
        [event.name] : event.value
    }
}

export default function AddAssociation() {

    const inputRef = useRef();
    const submit = useRef();
    const [formData, setFormData] = useReducer(reducer, {})
    const [labels, setLabels] = useState([
        {
            name: "اسم الجمعية",
            required: true,
            type: "textInput",
            id : "name"
        },
        {
            name: "تارخ تأسيس الجمعية",
            required: true,
            type: "textInput",
            id : "date"
            
        },
        {
            name: "الممثل القانوني للجمعية",
            required: true,
            type: "textInput",
            id : "representing"
        },
        {
            name: "البريد الالكتروني",
            required: true,
            type: "textInput",
            id : "email"
        },
        {
            name: "روابط مواقع التواصل الإجتماعي الخاصة بالجمعية (فايسبوك، تويتر, يوتوب...)",
            required: false,
            type: "textInput",
            id : "links"
        },
        {
            name: "مجال اشتغال الجمعية (الأهداف، المشاريع...) ",
            required: true,
            type: "textArea",
            id : "domain"
        },
        {
            name: "مكان عمل الجمعية (الجماعة / الإقليم)",
            required: true,
            type: "textInput",
            id : "location"
        },
        {
            name: "الهاتف",
            required: true,
            type: "textInput",
            id : "phone"
        },
        {
            name: "الهوية البصرية الخاصة بالجمعية (Logo)",
            required: true,
            type: "fileInput",
            id : "logo"
        }
    ])

    const handleChangeText = (e) => {
        setFormData({
            name: e.target.name,
            value: e.target.value
        });
    }

    const handleChangeFile = (e) => {
        setFormData({
            name: e.target.name,
            value: e.target.files[0]
        });
    }

    return (
        <>
            <div className='mt-40'>
                <img className='object-cover w-full h-64' src="/images/thumb1.jpg" alt="" />
                <p className='font-black text-4xl text-white relative -top-40 text-center shadow-2xl'>إظافة جمعية</p>
            </div>
            <form className='flex flex-col items-center ' action="" method="post">
                <div className='flex flex-row w-auto md:w-[50rem] flex-wrap justify-center gap-x-10 mb-5'>
                    <div>
                        {
                            labels.slice(0, 5).map(({id, name, type, required}, index) => {
                                if(type === "textArea") 
                                    return (
                                        <TextArea key={index} label={name} name={id} id={id} placeholder={name} required = {required} onChange={handleChangeText}/>
                                    )
                                return (    
                                    <TextInput key={index} label={name} name={id} id={id} placeholder={name} required = {required} handleChange={handleChangeText} />
                            )})
                        }
                    </div>

                    <div>
                        {
                            labels.slice(5, labels.length).map(({id, name, type, required}, index) => {
                                if(type === "textArea") 
                                    return (
                                        <TextArea key={index} label={name} name={id} id={id} placeholder={name} required = {required} handleChange={handleChangeText}/>
                                    )
                                if(type === "fileInput") 
                                return (
                                    <FileInput key={index} label={name} name={id} id={id} placeholder={name} required = {required} inputRef = {inputRef} handleChange = {handleChangeFile}/>
                                )
                                return (    
                                    <TextInput key={index} label={name} name={id} id={id} placeholder={name} required = {required} handleChange={handleChangeText} />
                            )})
                        }
                    </div>
                        

                    
                    
                </div>

                <div 
                    className='flex self-center  gap-10 mb-5'>
                        <input 
                            type="submit" 
                            style={{display: 'none'}} 
                            value="Enregistrer" 
                            ref={submit} 
                            onSubmit={(e) => {e.preventDefault(); alert("submit")}}/>

                        <button 
                            className='bg-red px-10 py-2 rounded-xl text-white self-start' 
                            onClick={() => {submit.current?.click()}}>
                                تسجبل الجمعية
                        </button>
                </div>
            </form>
        </>
    )
}