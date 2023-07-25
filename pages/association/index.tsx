import { InferGetServerSidePropsType } from 'next'
import { useReducer, useRef, useState } from 'react'
import { toast } from 'react-toastify'
import { addAssociation } from '../../lib/api'


const TextArea = ({name, label, placeholder, id, handleChange, required}:any) => {
    const [touched, setTouched] = useState(false);
    const inputRef = useRef();
    return (
        <>
            <div className='flex flex-col my-5'>
                <p className='text-md text-blue w-64 md:w-80 mb-2 mx-px' >{label}</p>
                <textarea className='border border-gray-400 rounded-xl h-[8.5rem] px-4 py-2 w-64 md:w-80' name={id} id={id} onBlur={() => setTouched(true)} ref={inputRef} placeholder={placeholder} onChange={handleChange} required = {required}/>
            </div>
            {touched && required && inputRef.current.value === '' ? (
                <div className="text-red-600 ">{"هذه الخانة مطلوبه"}</div>
            ) : null}
        </>
    )
}

const TextInput = ({name, label, placeholder, id, handleChange, required, type}:any) => {

    const [touched, setTouched] = useState(false);
    const inputRef = useRef();

    return (
        <>
            <div className='flex flex-col my-5'>
                <p className='text-md text-blue w-64 md:w-80 mb-2 mx-px' >{label}</p>
                <input className='border border-gray-400 rounded-xl px-4 py-2  w-64 md:w-80' type={type} name={id} id={id} placeholder={placeholder} onChange={handleChange} required = {required} onBlur={() => setTouched(true)} ref={inputRef}/>
            </div>
            {touched && required && inputRef.current.value === '' ? (
                <div className="text-red-600 ">{"هذه الخانة مطلوبه"}</div>
            ) : null}
        </>
    )
}

const SelectInput = ({name, label, placeholder, id, handleChange, required, values}:any) => {
    const [touched, setTouched] = useState(false);
    const inputRef = useRef();
    return (
        <>
            <p className='text-md text-blue w-64 md:w-80 mb-2 mx-px' >{label}</p>
            <select name={name} onChange={handleChange} required = {required} id={id} className=" border border-gray-400 rounded-xl px-4 py-2  w-64 md:w-80 ">
                <option selected>{placeholder}</option>
                {
                    values?.map(({id, name} : any, index: any) => {
                        return (
                            <option key={index} value={id}>{name}</option>
                        )

                    })
                }
            </select>
            {touched && required && inputRef.current.value === '' ? (
                <div className="text-red-600 ">{"هذه الخانة مطلوبه"}</div>
            ) : null}
        </>
    )
}

// Requires inputRef : useReference object
const FileInput = ({id, name, label, placeholder,  handleChange, required, uploadText, inputRef}:any) => {

    const [touched, setTouched] = useState(false);
    
    return (
    <>
        <div className='flex flex-col my-5'>
            <p className='text-md text-blue w-40 mb-2 mx-px' >{label}</p>
            <input 
                type = "file" 
                className='border border-gray-400 rounded-xl px-4 py-2  w-64 md:w-80' 
                // style={{display: 'none'}} 
                name={id} 
                id={id} 
                ref={inputRef} 
                accept=".png, .jpg, .jpeg"
                onChange={(e) => {
                    handleChange(e)
                }} 
                required = {required} onBlur={() => setTouched(true)} />
            
        </div>
        {touched && required && !inputRef.current?.files[0] ? (
                <div className="text-red-600 ">{"هذه الخانة مطلوبه"}</div>
            ) : null}
        </>
    )
}


export default function AddAssociation(): JSX.Element {


    const reducer = (state, event) => {
        return {
            ...state,
            [event.name] : event.value
        }
    }
    
    const inputRef = useRef();
    const resetRef = useRef();
    const submit = useRef();
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [formData, setFormData] = useReducer(reducer, {})
    const [labels, setLabels] = useState([
        {
            name: "اسم الجمعية : (*)",
            required: true,
            inputType: "textInput",
            id : "name",
            type: "text"
        },
        {
            name: "تارخ تأسيس الجمعية : (*)",
            required: true,
            inputType: "textInput",
            id : "date",
            type: "text"
            
        },
        {
            name: "الممثل القانوني للجمعية : (*)",
            required: true,
            inputType: "textInput",
            id : "prisident",
            type: "text"
        },
        {
            name: "البريد الالكتروني : (*)",
            required: true,
            inputType: "textInput",
            id : "email",
            type: "email"
        },
        {
            name: "روابط مواقع التواصل الإجتماعي الخاصة بالجمعية (فايسبوك، تويتر, يوتوب...)",
            required: false,
            inputType: "textInput",
            id : "facebook",
            type: "text"
        },
        {
            name: "مجال اشتغال الجمعية (الأهداف، المشاريع...)  : (*)",
            required: true,
            inputType: "textArea",
            id : "fieldOfWork",
            type: "text"
        },
        {
            name: "مكان عمل الجمعية (الجماعة / الإقليم) : (*)",
            required: true,
            inputType: "textInput",
            id : "region",
            type: "text"
        },
        {
            name: "الهاتف : (*)",
            required: true,
            inputType: "textInput",
            id : "phone",
            type: "tel"
        },
        {
            name: "الهوية البصرية الخاصة بالجمعية (Logo) : (*)",
            required: true,
            inputType: "fileInput",
            id : "file"
        }
    ])

    const handleChangeText = (e: any) => {
        setFormData({
            name: e.target.name,
            value: e.target.value
        });
    }

    const handleChangeFile = (e) => {
        setFormData({
            name: e.target.name,
            value: e.currentTarget.files[0]
        });
    }

    const resetForm = () => {
        resetRef.current.click()
    }

    const handleSubmit = async (event: any) => {
        event.preventDefault();

        try {
            setIsSubmitting(true);

            const data = new FormData();

            Object.entries(formData).forEach(([key, value]) => {
                data.set(key, value);
            });

            await addAssociation(formData);
            // stop loading effect
            resetForm();

            setIsSubmitting(!true);
            
            toast('تم إرسال بنجاح', { hideProgressBar: false, autoClose: 2000, type: 'success' })

          } catch (error: any) {
            // stop loading effect
            setIsSubmitting(!true);
            toast('فشل الارسال', { hideProgressBar: false, autoClose: 2000, type: 'error' })
            console.log(error.message)
          }
    }


    return (
        <>
            <div className='mt-40 relative'>
                <div className={"bg-[url('/images/thumb1.jpg')]  w-full h-64 bg-cover bg-center  "}></div>
                <div className="absolute top-0 left-0 w-full h-64 bg-black/40 opacity-75 "></div> 
                <p className='font-black text-4xl text-white relative -top-40 text-center shadow-2xl'>إضافة جمعية</p>
            </div>
            
            <form className='flex flex-col items-center' onSubmit={handleSubmit} >
                <div className='flex flex-row w-auto md:w-[50rem] flex-wrap justify-center gap-x-10 mb-5'>
                    <input type="reset" value="" hidden ref={resetRef}/>
                    <div>
                        {
                            labels.slice(0, 5).map(({id, name, inputType, required, type}, index) => {
                                if(inputType === "textArea") 
                                    return (
                                        <TextArea key={index} label={name} name={id} id={id} placeholder={name} required = {required} onChange={handleChangeText}/>
                                    )
                                return (    
                                    <TextInput type={type} key={index} label={name} name={id} id={id} placeholder={name} required = {required} handleChange={handleChangeText} />
                            )})
                        }
                    </div>

                    <div>
                        {
                            labels.slice(5, labels.length).map(({id, name, inputType, required, type}, index) => {
                                if(inputType === "textArea") 
                                    return (
                                        <TextArea key={index} label={name} name={id} id={id} placeholder={name} required = {required} handleChange={handleChangeText}/>
                                    )
                                if(inputType === "fileInput") 
                                    return (
                                        <FileInput key={index} label={name} name={id} id={id} placeholder={name} required = {required} inputRef = {inputRef} handleChange = {handleChangeFile}/>
                                    )

                                if(inputType === "selectInput") 
                                    return (
                                        <SelectInput key={index} values={regions} label={name} name={id} id={id} placeholder={name} required = {required} inputRef = {inputRef} handleChange = {handleChangeText}/>
                                    )


                                return (    
                                    <TextInput type={type} key={index} label={name} name={id} id={id} placeholder={name} required = {required} handleChange={handleChangeText} />
                            )})
                        }
                    </div>
                        

                    
                    
                </div>

                {
                    isSubmitting ?
                    <div
                            className="
                            h-10 w-64
                            flex self-center  gap-10 mb-5
                            bg-white px-10 py-2 rounded-xl self-start
                            bg-[url('/images/Ellipsis-2.1s-200px.gif')] bg-no-repeat bg-center"
                        >
                            
                    </div>
                    :
                    <div 
                        className='flex self-center  gap-10 mb-5'>
                            <input 
                                type="submit" 
                                style={{display: 'none'}} 
                                value="Enregistrer" 
                                ref={submit} 
                                />

                            <button 
                                className='bg-red px-10 py-2 rounded-xl text-white self-start' 
                                onClick={() => {submit.current?.click()}}>
                                    تسجيل الجمعية
                            </button>
                    </div>
                }

            </form>
        </>
    )
}