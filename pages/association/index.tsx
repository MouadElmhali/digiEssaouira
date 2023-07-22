import { gql, useMutation } from '@apollo/client'
import { InferGetServerSidePropsType } from 'next'
import { type } from 'os'
import React, { useEffect, useReducer, useRef, useState } from 'react'
import { initializeApollo } from '../../apolloClient'
import { CREATE_ASSOCIATION } from '../../graphql/association/queries'
import { GET_REGION } from '../../graphql/region/queries'


const TextArea = ({name, label, placeholder, id, handleChange, required}:any) => {
    return (
        <div className='flex flex-col my-5'>
            <p className='text-md text-blue w-64 md:w-80 mb-2 mx-px' >{label}</p>
            <textarea className='border border-gray-400 rounded-xl h-[8.5rem] px-4 py-2 w-64 md:w-80' name={id} id={id} placeholder={placeholder} onChange={handleChange} required = {required}/>
        </div>
    )
}

const TextInput = ({name, label, placeholder, id, handleChange, required, type}:any) => {
    return (
        <div className='flex flex-col my-5'>
            <p className='text-md text-blue w-64 md:w-80 mb-2 mx-px' >{label}</p>
            <input className='border border-gray-400 rounded-xl px-4 py-2  w-64 md:w-80' type={type} name={id} id={id} placeholder={placeholder} onChange={handleChange} required = {required}/>
        </div>
    )
}

const SelectInput = ({name, label, placeholder, id, handleChange, required, values}:any) => {
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
        </>
    )
}

// Requires inputRef : useReference object
const FileInput = ({id, name, label, placeholder,  handleChange, required, uploadText, inputRef}:any) => {
    const handleUploadClick = (e: any) => {
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
                    className='h-[15px] w-[15px] object-contain' 
                /> 

                {uploadText ? uploadText : "إختر ملف"} 
            
            </button>
            {fileName}
        </div>
    )
}





const reducer = ({state, event}: any) => {
    return {
        ...state,
        [event.name] : event.value
    }
}

export async function getServerSideProps() {
    const client = initializeApollo();
    const {
        data: { regions
        },
    } = await client.query({
        query: GET_REGION,
    });

    

    return {
        props: {
            regions
        },
    };
}

export async function postServerSideProps(input: any) {
    const client = initializeApollo();
    const message = await client.mutate({
        mutation: CREATE_ASSOCIATION,
        variables: {input}
    })
    console.log(" Input : " + JSON.stringify(input));
    console.log(" Message : " + JSON.stringify(message));

    return message;
}

const addAssociationMutation = gql`
    mutation($input: AssociationInput!){
        createAssociation(input: $input){
                id
                region
                name
                fieldOfWork
                prisident
                pictureUrl
                email
                phone
                facebook
                twitter
                instagram
                pictureGallery
            
        }
    }
`

export default function AddAssociation({
    regions
    }: InferGetServerSidePropsType<typeof getServerSideProps>): JSX.Element {

    console.log(JSON.stringify(regions))
    const inputRef = useRef();
    const submit = useRef();
    const [formData, setFormData] = useReducer(reducer, {})
    const [labels, setLabels] = useState([
        {
            name: "اسم الجمعية",
            required: true,
            inputType: "textInput",
            id : "name",
            type: "text"
        },
        {
            name: "تارخ تأسيس الجمعية",
            required: true,
            inputType: "textInput",
            id : "date",
            type: "text"
            
        },
        {
            name: "الممثل القانوني للجمعية",
            required: true,
            inputType: "textInput",
            id : "prisident",
            type: "text"
        },
        {
            name: "البريد الالكتروني",
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
            name: "مجال اشتغال الجمعية (الأهداف، المشاريع...) ",
            required: true,
            inputType: "textArea",
            id : "fieldOfWork",
            type: "text"
        },
        {
            name: "مكان عمل الجمعية (الجماعة / الإقليم)",
            required: true,
            inputType: "textInput",
            id : "region",
            type: "text"
        },
        {
            name: "الهاتف",
            required: true,
            inputType: "textInput",
            id : "phone",
            type: "tel"
        },
        {
            name: "الهوية البصرية الخاصة بالجمعية (Logo)",
            required: true,
            inputType: "fileInput",
            id : "pictureUrl"
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
            value: e.target.files[0]
        });
    }

    const [addAssociation, {data, loading, error}] = useMutation(addAssociationMutation);

    const handleSubmit = (event: any) => {
        event.preventDefault();
        try {
            addAssociation(
                { variables: 
                    
                        JSON.parse('{ "input": { "id" : "22", "region": "6427106088708af9522db3a8", "name": "test25", "fieldOfWork": "test", "prisident": "test", "pictureUrl": "test", "email": "test", "phone": "test", "facebook": "test", "twitter": "test", "instagram": "test", "pictureGallery": "test" }}')
                    
                });
        }catch (error: any) {
            alert(error.message())
        }
    }


    return (
        <>
            <div className='mt-40 relative'>
                <div className={"bg-[url('/images/thumb1.jpg')]  w-full h-64 bg-cover bg-center  "}></div>
                <div className="absolute top-0 left-0 w-full h-64 bg-black/40 opacity-75 "></div> 
                <p className='font-black text-4xl text-white relative -top-40 text-center shadow-2xl'>إضافة جمعية</p>
            </div>
            
            <form className='flex flex-col items-center' onSubmit={handleSubmit}>
                <div className='flex flex-row w-auto md:w-[50rem] flex-wrap justify-center gap-x-10 mb-5'>
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
            </form>
        </>
    )
}