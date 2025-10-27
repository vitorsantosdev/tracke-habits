import { Info, Plus, X } from "lucide-react"
import { useState } from "react"

function Habits() {

    const [day, setDay] = useState(0)

    const habitsList = [
        {
            id: 1,
            title: '🧑🏽‍💻 Study Programing',
            days: 1,
            goal: 365,
            isComplete: false
        },
        {
            id: 2,
            title: '🇺🇸 English',
            days: 1,
            goal: 365,
            isComplete: true
        },
        {
            id: 3,
            title: '💪🏽 Training',
            days: 1,
            goal: 365,
            isComplete: false
        },
    ]

    return (
        <div className="bg-slate-100 mt-2 p-4">
            <h1 className="text-lg uppercase font-black">Habits</h1>
            <div>
                <div className="flex justify-between items-center border border-slate-300 p-4 rounded-sm">
                    <span className="w-full text-sm">{habitsList[0].title}</span>
                    <span className="text-gray-400 w-full text-right pr-4">
                        {day}/{habitsList[0].goal}
                    </span>
                    <div className="flex gap-2">
                        <Plus
                        className="bg-slate-600 rounded-sm text-white p-1"
                        onClick={() => {
                            setDay(day +1)
                        }}
                        />                        
                        <Info className="bg-slate-600 rounded-sm text-white p-1" />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Habits