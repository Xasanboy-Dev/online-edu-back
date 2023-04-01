import { useRef, useState } from "react"
import '../styles/datagrid.css'

export default function AddStudent() {
    const data = [
        { id: 1, dataTitle: "№" },
        { id: 2, dataTitle: "Guruh Nomi" },
        { id: 3, dataTitle: "O'qtuvchi" },
        { id: 4, dataTitle: "Kurs Boshlanish Sanasi" },
        { id: 5, dataTitle: "Kurs Tugash Sanasi" },
        { id: 7, dataTitle: "Xona Raqami" },
        { id: 6, dataTitle: "Narxi" }
    ]   

    const [id, setId] = useState(0);

    const [studentData, setStudentData] = useState([
        {
            id: id + 1,
            teamName: "Frontend",
            teacherName: "Jalol Imamadinov",
            startTimeData: "05/03/23",
            closeTimeData: "03/03/24",
            zonaNumber: 9,
            price: '750,000'
        },
        {
            id: id + 2 ,
            teamName: "Beckend",
            teacherName: "Jalol Imamadinov",
            startTimeData: "05/03/23",
            closeTimeData: "03/03/24",
            zonaNumber: 4,
            price: '750,000'
        }
    ])

    const idRef = useRef()
    const teamNameRef = useRef()
    const teacherNameRef = useRef()
    const startTimeDataRef = useRef()
    const closeTimeDataRef = useRef()
    const zonaNumberRef = useRef()
    const priceRef = useRef()

    function addData() {
        if (teamNameRef.current.value != '' && teacherNameRef.current.value != '' && startTimeDataRef.current.value != '' && closeTimeDataRef.current.value != '' && zonaNumberRef.current.value != '' && priceRef.current.value != '') {
            const currentHighestId = studentData.reduce((acc, curr) => curr.id > acc ? curr.id : acc, 0);
            const newId = currentHighestId + 1;    
            setStudentData(prevData => [
                ...prevData,
                {
                    id: newId,
                    teamName: teamNameRef.current.value,
                    teacherName: teacherNameRef.current.value,
                    startTimeData: startTimeDataRef.current.value,
                    closeTimeData: closeTimeDataRef.current.value,
                    zonaNumber: zonaNumberRef.current.value,
                    price: priceRef.current.value
                }
            ]);
            setId(newId);

            setAlert(<span className="alert green">Muaffaqiyatli!</span>)
            setTimeout(() => {
                setAlert()
            }, 1000);
            setIsOpen('addData none')
        } else {
            setAlert(<span className="alert">to'liq kiriting!</span>)
            setTimeout(() => {
                setAlert()
            }, 1000);
        }
    }

    const [isOpen , setIsOpen] = useState('addData none')
    const [alert , setAlert] = useState()

    return (
        <>
            <div class="container" style={{ position: 'relative' }}>
                <div className="dataGrid">
                    <table className="dataTr">
                        <tr className="headerTitle">
                            {
                                data.map((item) => (
                                    <td>{item.dataTitle}</td>
                                ))
                            }
                        </tr>
                        {
                            studentData.map((item) => (
                                <tr>
                                    <td>{item.id}</td>
                                    <td>{item.teamName}</td>
                                    <td>{item.teacherName}</td>
                                    <td>{item.startTimeData}</td>
                                    <td>{item.closeTimeData}</td>
                                    <td>{item.zonaNumber}</td>
                                    <td>{item.price}</td>
                                </tr>
                            ))
                        }
                    </table>
                </div>
                <button className="plusData" onClick={() => setIsOpen('addData')}>+</button>
                <div className={isOpen}>    
                    <div className="closeAddData" onClick={() => setIsOpen('addData none')}></div>
                    <div className="adddataChiled">
                        {
                            data.map((item) => (
                                <>
                                    <label className={item.id === 1 ? 'none' : null} htmlFor="">{item.dataTitle}</label>
                                    <input 
                                        className={item.id === 1 ? 'none' : null}
                                        type={item.id === 1 ? 'number' : item.id === 6 ? 'number' : 'text'} 
                                        ref={item.id === 1 ? idRef : item.id === 2 ? teamNameRef : item.id === 3 ? teacherNameRef : item.id === 4 ? startTimeDataRef : item.id === 5 ? closeTimeDataRef : item.id === 6 ? priceRef : zonaNumberRef} placeholder={item.dataTitle} key={item.id} 
                                    />
                                </>
                            ))
                        }
                        <button className="saveData" onClick={addData}>QO'SHISH</button>
                    </div>
                </div>
                <div className="alerts">
                    {alert}
                </div>
            </div>
        </>
    )
}