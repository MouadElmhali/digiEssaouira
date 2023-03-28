import React from 'react'


function TextInput ({name, label, placeholder, id, handleChange, required}:any) {
    return (
        <div className='flex flex-col my-5'>
            <p className='text-md text-blue mb-2 mx-px' >{label}</p>
            <input className='border border-gray-400 rounded-xl px-4 py-2 w-64' type="text" name={name} id={id} placeholder={placeholder} onChange={handleChange} required = {required}/>
        </div>
    )
}

export default function AddAssociation() {
    return (
        <>
            <div className='mt-40'>
                <img className='object-cover w-full h-64' src="/images/thumb1.jpg" alt="" />
                <p className='font-black text-4xl text-white relative -top-40 text-center shadow-2xl'>إظافة جمعية</p>
            </div>
            <form action="" method="post">
                <div className='flex  justify-center gap-10 mb-5'>
                    <div
                        className=''
                    >
                        <TextInput label="test" name="test" id="test" placeholder="test" handleChange={(event) => console.log(event.target.name)} />
                        <TextInput label="test" name="test" id="test" placeholder="test" handleChange={(event) => console.log(event.target.name)} />
                        <TextInput label="test" name="test" id="test" placeholder="test" handleChange={(event) => console.log(event.target.name)} />
                        <TextInput label="test" name="test" id="test" placeholder="test" handleChange={(event) => console.log(event.target.name)} />
                        <TextInput label="test" name="test" id="test" placeholder="test" handleChange={(event) => console.log(event.target.name)} />
                    </div>
                    <div
                        className=''
                    >
                        <TextInput label="test" name="test" id="test" placeholder="test" handleChange={(event) => console.log(event.target.name)} />
                        <TextInput label="test" name="test" id="test" placeholder="test" handleChange={(event) => console.log(event.target.name)} />
                        <TextInput label="test" name="test" id="test" placeholder="test" handleChange={(event) => console.log(event.target.name)} />
                        <TextInput label="test" name="test" id="test" placeholder="test" handleChange={(event) => console.log(event.target.name)} />

                    </div>
                    
                </div>
                <div className='flex justify-center gap-10 mb-5'>
                    <input type="submit" value="Enregistrer" />
                </div>
            </form>
        </>
    )
}