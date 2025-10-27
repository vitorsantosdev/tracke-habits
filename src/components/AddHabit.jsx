function AddHabit(){
    return (
        <div className="bg-slate-100 rounded-sm border border-slate-300 flex flex-col p-4 gap-2">
            <label className="font-black uppercase text-lg ">Add New Habit</label>
            <input
            className="bg-white p-4 rounded-sm"
            type="text" placeholder="Habit descroption" />
            <button className="bg-slate-600 text-white font-bold uppercase p-2 rounded-sm">Add</button>
        </div>
    )
}

export default AddHabit