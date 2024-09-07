
function Home() {
  return (
    <div className="bg-cover bg-center h-[70vh] flex flex-col items-center justify-center text-center"
         style={{ backgroundImage: 'url("https://plus.unsplash.com/premium_photo-1679591002405-13fec066bd53?q=80&w=1932&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D")' }}>
      <div className="mt-5">
        <input 
          type="text" 
          placeholder="Search for food" 
          className="mr-3 p-3 w-[310px] border-none text-lg outline-none rounded-md focus:ring-2 focus:ring-teal-400"
        />
        <button 
          className="p-3 px-5 bg-pink-500 text-white rounded-md hover:bg-pink-400 transition-colors duration-300"
        >
          Search
        </button>
      </div>
    </div>

  );
}

export default Home;
