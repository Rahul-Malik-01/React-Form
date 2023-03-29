import { useState } from 'react';
import './App.css'

function App() {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    country: "India",
    streetAddress: "",
    city: "",
    state: "",
    postalCode: "",
    comments: false,
    candidates: false,
    offers: false
  })
  console.log(formData);

  function changeHandler(event) {
    const { name, type, checked, value } = event.target;
    setFormData((prevState) => ({
      ...prevState,
      [name]: type === "checkbox" ? checked : value
    }));
  }

  function submitHandler(event) {
    event.preventDefault();

    console.log("Finally printing the value of Form Data:");
    console.log(formData)
  }

  return (
    <div className="w-full md:max-w-[50%] mx-auto shadow p-8">
      <form className="space-y-2">
        <label htmlFor="firstName" className='text-sm font-medium leading-6 text-gray-900'>First name</label>
        <br />
        <input
          className="mt-2 w-full rounded-md p-2 text-gray-900 shadow-sm ring-1 placeholder:text-gray-400"
          type="text"
          placeholder="John"
          name="firstName"
          id='firstName'
          onChange={changeHandler}
          value={formData.firstName}
        />

        <br />
        <label htmlFor="lastName" className='text-sm font-medium leading-6 text-gray-900'>Last name</label>
        <br />
        <input
          className="mt-2 w-full rounded-md p-2 text-gray-900 shadow-sm ring-1 placeholder:text-gray-400"
          type="text"
          placeholder="Doe"
          name="lastName"
          id='lastName'
          onChange={changeHandler}
          value={formData.lastName}
        />

        <br />
        <label htmlFor="email" className='text-sm font-medium leading-6 text-gray-900'>Email address</label>
        <br />
        <input
          className="mt-2 w-full rounded-md p-2 text-gray-900 shadow-sm ring-1 placeholder:text-gray-400"
          type="email"
          placeholder="johndoe@gmail.com"
          name="email"
          id='email'
          onChange={changeHandler}
          value={formData.email}
        />

        <br />
        <label htmlFor="country" className='text-sm font-medium leading-6 text-gray-900'>Country</label>
        <br />
        <select
          id="country"
          name="country"
          value={formData.country}
          onChange={changeHandler}
          className="mt-2 w-full rounded-md p-2 text-gray-900 shadow-sm ring-1 placeholder:text-gray-400"
        >

          <option>India</option>
          <option>United States</option>
          <option>Canada</option>
          <option>Mexico</option>
        </select>

        <br />
        <label htmlFor="streetAddress" className='text-sm font-medium leading-6 text-gray-900'>Street address</label>
        <br />
        <input
          className="mt-2 w-full rounded-md p-2 text-gray-900 shadow-sm ring-1 placeholder:text-gray-400"
          type="text"
          placeholder="1234 Main St"
          name="streetAddress"
          id='streetAddress'
          onChange={changeHandler}
          value={formData.streetAddress}
        />

        <br />
        <label htmlFor="city" className='text-sm font-medium leading-6 text-gray-900'>City</label>
        <br />
        <input
          className="mt-2 w-full rounded-md p-2 text-gray-900 shadow-sm ring-1 placeholder:text-gray-400"
          type="text"
          placeholder="Asansol"
          name="city"
          id='city'
          onChange={changeHandler}
          value={formData.city}
        />

        <br />
        <label htmlFor="state" className='text-sm font-medium leading-6 text-gray-900'>State / Province</label>
        <br />
        <input
          className="mt-2 w-full rounded-md p-2 text-gray-900 shadow-sm ring-1 placeholder:text-gray-400"
          type="text"
          placeholder="Maharashtra"
          name="state"
          id='state'
          onChange={changeHandler}
          value={formData.state}
        />

        <br />
        <label htmlFor="postalCode" className='text-sm font-medium leading-6 text-gray-900'>ZIP / Postal code</label>
        <br />
        <input
          className="mt-2 w-full rounded-md p-2 text-gray-900 shadow-sm ring-1 placeholder:text-gray-400"
          type="text"
          placeholder="423603"
          name="postalCode"
          id='postalCode'
          onChange={changeHandler}
          value={formData.postalCode}
        />

        <br />
        <br />
        <fieldset>
          <legend className='text-sm font-semibold leading-6 text-gray-900'>By Email</legend>

          <div className='mt-4 space-y-2'>
            <div className="flex">
              <input
                className='flex items-center h-6 w-4 rounded'
                id="comments"
                name="comments"
                type="checkbox"
                checked={formData.comments}
                onChange={changeHandler}
              />
              <div className='ml-3 text-sm leading-6'>
                <label htmlFor="comments" className='font-medium text-gray-900'>Comments</label>
                <p className='text-gray-500'>Get notified when someones posts a comment on a posting.</p>
              </div>
            </div>

            <div className="flex">
              <input
                className='flex items-center h-6 w-4 rounded'
                id="candidates"
                name="candidates"
                type="checkbox"
                checked={formData.candidates}
                onChange={changeHandler}
              />
              <div className='ml-3 text-sm leading-6'>
                <label htmlFor="candidates" className='font-medium text-gray-900'>Candidates</label>
                <p className='text-gray-500'>Get notified when a candidate applies for a job.</p>
              </div>
            </div>

            <div className="flex">
              <input
                className='flex items-center h-6 w-4 rounded'
                id="offers"
                name="offers"
                type="checkbox"
                checked={formData.offers}
                onChange={changeHandler}
              />
              <div className='ml-3 text-sm leading-6'>
                <label htmlFor="offers" className='font-medium text-gray-900'>Offers</label>
                <p className='text-gray-500'>Get notified when a candidate accepts or rejects an offer.</p>
              </div>
            </div>
          </div>
        </fieldset>

        <br />
        <fieldset>
          <legend className='contents text-sm font-semibold leading-6 text-gray-900'>Push Notifications</legend>
          <p className='text-sm text-gray-500'>These are delivered via SMS to your mobile phone.</p>

          <div className='mt-4 space-y-2'>
            <input
              type="radio"
              id="pushEverything"
              name="pushNotifications"
              value="Everything"
              onChange={changeHandler}
            />

            <label htmlFor="pushEverything" className='ml-3 text-sm font-medium leading-6 text-gray-900'>Everything</label>

            <br />
            <input
              type="radio"
              id="pushEmail"
              name="pushNotifications"
              value="Same as email"
              onChange={changeHandler}
            />

            <label htmlFor="pushEmail" className='ml-3 text-sm font-medium leading-6 text-gray-900'>Same as email</label>

            <br />
            <input
              type="radio"
              id="pushNothing"
              name="pushNotifications"
              value="No Push Notifications"
              onChange={changeHandler}
            />

            <label htmlFor="pushNothing" className='ml-3 text-sm font-medium leading-6 text-gray-900'>No Push Notifications</label>
          </div>
        </fieldset>

        <button onClick={submitHandler} className="bg-blue-500 text-white font-bold rounded py-2 px-4">
          Save
        </button>
      </form>
    </div>
  );
}

export default App
