function EmailField({holder}) {
  return (
    <div className="relative z-0">
    <input
      type="email"
      id={holder}
      className="block py-2.5 px-4 rounded-md w-full text-sm text-black bg-robin-s-egg-blue/10 border-0 border-b-2 border-medium-purple appearance-none dark:text-white dark:border-robin-s-egg-blue-700 dark:focus:border-robin-s-egg-blue-600 focus:outline-none focus:ring-0 focus:border-robin-s-egg-blue-300 peer"
      placeholder=" "
    />
    <label
      htmlFor={holder}
      className="absolute text-sm text-medium-purple dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 z-10 origin-[0] peer-focus:left-0 peer-focus:text-robin-s-egg-blue-300 peer-focus:dark:text-robin-s-egg-blue-600 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
    >
      {holder}
    </label>
  </div>
  )
}

export default EmailField