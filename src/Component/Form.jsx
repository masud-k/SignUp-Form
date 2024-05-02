import { useState } from "react";


const Form = () => {

    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [submit, setSubmit] = useState(false);
    const [isChecked, setIsChecked] = useState(false);

    const handleSubmit = (e) => {
        e.preventDefault();
        if(!isChecked){
            return
        }
        const user = {
            name: name,
            email: email,
            password: password,
        }
        console.log(user)
        setSubmit(true)
    }


    return (
        <div className="h-screen w-full flex justify-center items-center bg-slate-800">
            <form
                onSubmit={(e) => handleSubmit(e)}
                className="text-center w-2/3 lg:w-2/5 bg-gray-400 rounded shadow-lg p-8">
                <h1 className="text-3xl text-center text-red-600 font-semibold mb-5">Sign Up Form</h1>
                <label htmlFor="name">Name</label><br />
                <input
                    onChange={(e) => setName(e.target.value)}
                    type="text" name="name" id="name"
                    placeholder="Your Name" className="rounded-md py-1 px-2 bg-gray-600 mb-2 " required /><br />

                <label htmlFor="email">Email</label><br />
                <input
                    onChange={(e) => setEmail(e.target.value)}
                    type="email" name="email" id="email"
                    placeholder="Your Email" className="rounded-md py-1 px-2 bg-gray-600 mb-2" required /><br />

                <label htmlFor="password">Password</label><br />
                <input
                    onChange={(e) => setPassword(e.target.value)}
                    type="password" name="password" id="password"
                    placeholder="Password" className="rounded-md py-1 px-2 bg-gray-600 mb-2" required />

                <div className="flex justify-between">
                    <div>
                        <input
                         onChange={(e) => setIsChecked(e.target.checked)}
                         type="checkbox" id="vehicle1" name="vehicle1" value="Bike"/>
                            <label htmlFor="vehicle1" > I have read <a href="">Terms & Conditions</a></label>
                    </div>
                    <div className="flex justify-end ">
                        <button className="bg-red-600 hover:bg-red-700 text-white font-bold py-2 px-4 rounded">Sign Up</button>
                    </div>
                </div>
            </form>
            {
                submit && (<div className="fixed top-0 w-full h-screen flex justify-center items-center bg-purple-400">
                    <div className="w-1/2 h-1/2 rounded bg-purple-600 text-center shadow-md p-4">
                        <h1 className="text-3xl text-white font-semibold mb-5">Thank You</h1>
                        <p className="text-white font-semibold mb-5">You have successfully signed up</p>
                        <button className="bg-red-600 hover:bg-red-700 text-white font-bold py-2 px-4 rounded">Go Back</button>
                    </div>
                </div>
                )
            }
        </div>
    );
};

export default Form;